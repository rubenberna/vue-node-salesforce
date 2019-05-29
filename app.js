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

    //AWS stuff
    AWS.config.region = process.env.REGION

    // Start express server
    const app = express();

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

    // Handle production
    if(process.env.NODE_ENV === 'production') {
      // Static folder
      app.use(express.static(__dirname + '/server/public/' ))  
      // app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))    
      // Handle SPA
      app.get(/.*/, (req, res) => res.sendFile(__dirname + '/server/public/index.html'))
      // reads: any route at all, send the file index.html located in the public folder
      // Use .env variables
      require('dotenv').load();
    }

    // Start server
    const port = process.env.PORT || 5000;

    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
      salesforce.login();
    });
}
