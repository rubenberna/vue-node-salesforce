const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  salesforceUsername: process.env.SF_USERNAME,
  salesforcePassword: process.env.SF_PASSWORD,
  salesforceClientId: process.env.SF_CLIENT_ID,
  salesforceClientSecret: process.env.SF_CLIENT_SECRET,
  salesforceSecurityToken: process.env.SF_SECURITY_TOKEN,
  salesforceRedirectUri: process.env.SF_REDIRECT_URI,
}
