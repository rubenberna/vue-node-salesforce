// Include the cluster module
const cluster = require('cluster');

// Code to run if we're in the master process
if (cluster.isMaster) {

    // Count the machine's CPUs
    const cpuCount = require('os').cpus().length;

    // Create a worker for each CPU
    for (let i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }

    // Listen for terminating workers
    cluster.on('exit', function (worker) {

        // Replace the terminated workers
        console.log('Worker ' + worker.id + ' died :(');
        cluster.fork();

    });

// Code to run if we're in a worker process
} else {
    //Packages
    const AWS = require('aws-sdk');
    const express = require('express');
    const bodyParser = require('body-parser');
    const cors = require('cors');
    const session = require('express-session');
    const salesforce = require('./config/salesforce');
    const dotenv = require('dotenv');
    dotenv.config();

    // Load Routes
    const contracts = require('./routes/contracts');
    const query = require('./routes/query');
    const update = require('./routes/update');
    const emailservice = require('./routes/emailservice');

    //AWS stuff
    AWS.config.region = process.env.REGION
    const sns = new AWS.SNS();
    const ddb = new AWS.DynamoDB();
    const ddbTable =  process.env.STARTUP_SIGNUP_TABLE;
    const snsTopic =  process.env.NEW_SIGNUP_TOPIC;

    // Start express server
    const app = express();

    // app.set('view engine', 'ejs');
    // app.set('views', __dirname + '/views');

    //Middleware
    app.use(bodyParser.json({limit: '50mb', extended: true}))
    app.use(bodyParser.urlencoded({limit: '50mb', extended: true})) // allow images
    app.use(cors());

    // Set up session
    app.use(session({
      secret: 's3cret', // it can be anything we want
      resave: true, // changed to true
      saveUninitialized: true,
      org: {}, // salesforce
      token: null // salesforce
    }));

    // Use Routes
    app.use('/contracts', contracts);
    app.use('/query', query);
    app.use('/update', update);
    app.use('/emailservice', emailservice);

    // Handle production
    if(process.env.NODE_ENV === 'production') {
      // Static folder
      app.use(express.static(__dirname + '/public/' ))
      // Handle SPA
      app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
      // reads: any route at all, send the file index.html located in the public folder
      // Use .env variables
      require('dotenv').load();
    }

    // app.get('/', function(req, res) {
    //     res.render('index', {
    //         static_path: 'static',
    //         theme: process.env.THEME || 'flatly',
    //         flask_debug: process.env.FLASK_DEBUG || 'false'
    //     });
    // });

    // app.post('/signup', function(req, res) {
    //     const item = {
    //         'email': {'S': req.body.email},
    //         'name': {'S': req.body.name},
    //         'preview': {'S': req.body.previewAccess},
    //         'theme': {'S': req.body.theme}
    //     };
    //
    //     ddb.putItem({
    //         'TableName': ddbTable,
    //         'Item': item,
    //         'Expected': { email: { Exists: false } }
    //     }, function(err, data) {
    //         if (err) {
    //             const returnStatus = 500;
    //
    //             if (err.code === 'ConditionalCheckFailedException') {
    //                 returnStatus = 409;
    //             }
    //
    //             res.status(returnStatus).end();
    //             console.log('DDB Error: ' + err);
    //         } else {
    //             sns.publish({
    //                 'Message': 'Name: ' + req.body.name + "\r\nEmail: " + req.body.email
    //                                     + "\r\nPreviewAccess: " + req.body.previewAccess
    //                                     + "\r\nTheme: " + req.body.theme,
    //                 'Subject': 'New user sign up!!!',
    //                 'TopicArn': snsTopic
    //             }, function(err, data) {
    //                 if (err) {
    //                     res.status(500).end();
    //                     console.log('SNS Error: ' + err);
    //                 } else {
    //                     res.status(201).end();
    //                 }
    //             });
    //         }
    //     });
    // });

    // Start server
    const port = process.env.PORT || 5000;

    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
      salesforce.login();
    });


    // const port = process.env.PORT || 3000;
    //
    // const server = app.listen(port, function () {
    //     console.log('Server running at http://127.0.0.1:' + port + '/');
    // });
}
