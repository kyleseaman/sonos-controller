const express = require('express');
const bodyParser = require('body-parser');
const simpleOauthModule = require('simple-oauth2');
const storage = require('node-persist');

const sonosApi = 'https://api.sonos.com';
const siteUrl = process.env.URL || 'http://localhost:3001';
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

storage.init({ dir: './' });

const config = {
  clientId: process.env.SONOS_CLIENT_ID,
  clientSecret: process.env.SONOS_CLIENT_SECRET,
  redirectUri: `${siteUrl}/redirect`,
  tokenHost: sonosApi,
  authorizePath: `${sonosApi}/login/v3/oauth`,
  tokenPath: `${sonosApi}/login/v3/oauth/access`,
};

const oauth2 = simpleOauthModule.create({
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

const authorizationUri = oauth2.authorizationCode.authorizeURL({
  redirect_uri: config.redirectUri,
  scope: 'playback-control-all',
  state: 'none',
});

let token;
let authRequired = false;

const getToken = async () => {
  const currentToken = await storage.getItem('token');
  if (currentToken === undefined) {
    authRequired = true;
    return;
  }
  token = oauth2.accessToken.create(currentToken.token);

  if (token.expired()) {
    try {
      token = await token.refresh();
      await storage.setItem('token', token);
    } catch (error) {
      authRequired = true;
      console.log('Error refershing access token: ', error.message);
    }
  }
};

getToken();

app.get('/auth', async (req, res) => {
  res.redirect(authorizationUri);
});

app.get('/redirect', async (req, res) => {
  const { code } = req.query;
  const { redirectUri } = config;

  const options = {
    code, redirectUri,
  };

  try {
    const result = await oauth2.authorizationCode.getToken(options);
    console.log('The resulting token:', result);
    token = oauth2.accessToken.create(result);

    await storage.setItem('token', token);
    authRequired = false;
    res.redirect('http://localhost:3001');
  } catch (error) {
    console.error('Access Token Error', error.message);
    res.status(500).json('Authentication failed');
  }
});

app.get('/', (req, res) => {
  res.send(JSON.stringify({ hello: 'world' }));
});

app.listen(3001, () => console.log('Express server is running on localhost:3001'));
