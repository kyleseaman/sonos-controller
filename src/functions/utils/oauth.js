import simpleOauth from 'simple-oauth2';

const sonosApi = 'https://api.sonos.com';
const siteUrl = process.env.URL || 'http://localhost:8000';

export const config = {
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

export default authInstance({
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
