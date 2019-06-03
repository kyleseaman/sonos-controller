// import getUserData from './utils/getUserData';
// import oauth2, { config } from './utils/oauth';
// const oauth2 = require('./utils/oauth');

// const { config } = oauth2;
import simpleOauth from 'simple-oauth2';

// const oauth2 = require('./utils/oauth');

const sonosApi = 'https://api.sonos.com';
const siteUrl = process.env.URL || 'http://localhost:8000';

const config = {
  clientId: process.env.SONOS_CLIENT_ID,
  clientSecret: process.env.SONOS_CLIENT_SECRET,
  tokenHost: sonosApi,
  tokenPath: `${sonosApi}/login/v3/oauth/access`,
  authorizePath: `${sonosApi}/login/v3/oauth`,
  redirect_uri: `${siteUrl}/.netlify/functions/auth-callback`,
};

function authInstance(credentials) {
  if (!credentials.client.id) {
    throw new Error('MISSING REQUIRED ENV VARS. Please set SONOS_CLIENT_ID');
  }
  if (!credentials.client.secret) {
    throw new Error('MISSING REQUIRED ENV VARS. Please set SONOS_CLIENT_SECRET');
  }

  return simpleOauth.create(credentials);
}

const oauth2 = authInstance({
  client: {
    id: config.clientId,
    secret: config.clientSecret,
  },
  auth: {
    tokenHost: config.tokenHost,
    tokenPath: config.tokenPath,
    authorizePath: config.authorizePath,
  },
});

exports.handler = (event, context, callback) => {
  const { code } = event.queryStringParameters;

  oauth2.authorizationCode.getToken({
    code,
    redirect_uri: config.redirect_uri,
    client_id: config.clientId,
    client_secret: config.clientSecret,
  })
    .then((result) => {
      const token = oauth2.accessToken.create(result);
      // console.log(token);
      return token;
    })
    // .then(getUserData)
    .then((result) => {
      // console.log('auth token', result.token);
      // console.log('state', state);
      // Buffer.from(foo).toString('base64')
      const result64 = Buffer.from(JSON.stringify(result)).toString('base64');

      // return callback(null, {
      //   statusCode: 200,
      //   body: JSON.stringify(result),
      // });
      return callback(null, {
        statusCode: 302,
        headers: {
          Location: `/page-2?data=${result64}`,
          'Cache-Control': 'no-cache',
        },
        body: '',
      });

      // const response = {
      //   statusCode: 302,
      //   headers: {
      //     Location: '/page-2',
      //     'Cache-Control': 'no-cache',
      //   },
      //   body: 'hello',
      // };
    })
    .catch((error) => {
      console.log('Access Token Error', error.message);
      console.log(error);
      return callback(null, {
        statusCode: error.statusCode || 500,
        body: JSON.stringify({
          error: error.message,
        }),
      });
    });
};
