// import oauth2, { config } from './utils/oauth';
// const { config } = oauth2;
import simpleOauth from 'simple-oauth2';
import test from './utils/oauth';

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
  // console.log(JSON.stringify(oauth2));
  // console.log(oauth2);
  // console.log(JSON.stringify(oauth2));
  // console.log(oauth2.authorizationCode);
  console.log(test('kyle'));
  // try {
  //   const authorizatoinURI = oauth2.authorizationCode.authorizeURL({
  //     redirect_uri: config.redirect_uri,
  //     // redirect_uri: 'http://localhost:8000/redirect',
  //     scope: 'playback-control-all',
  //     state: 'none',
  //   });
  // }
  const authorizatoinURI = oauth2.authorizationCode.authorizeURL({
    redirect_uri: config.redirect_uri,
    // redirect_uri: 'http://localhost:8000/redirect',
    scope: 'playback-control-all',
    state: 'none',
  });

  const response = {
    statusCode: 302,
    headers: {
      Location: authorizatoinURI,
      'Cache-Control': 'no-cache',
    },
    body: '',
  };

  callback(null, response);
};
