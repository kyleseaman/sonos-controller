const simpleOauth = require('simple-oauth2');

const sonosApi = 'https://api.sonos.com';
const siteUrl = process.env.URL || 'http://localhost:8000';

const config = {
    clientId: 'cda28295-e095-4932-943c-9063fd722693',
    clientSecret: 'da2a22c5-daa4-43e0-9230-7aaa257cfb1e',
    tokenHost: sonosApi,
    tokenPath: `/login/v3/oauth/access`,
    // tokenPath: `${sonosApi}/login/v3/oauth/access`,
    authorizePath: `/login/v3/oauth`,
    // authorizePath: `${sonosApi}/login/v3/oauth`,
    redirect_uri: `${siteUrl}/.netlify/functions/auth-callback`,
};

const createAuthInstance = credentials => {
    return simpleOauth.create(credentials);
};

const authInstance = createAuthInstance({
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

console.log('AUTH INSTANCE ', authInstance);

// const token = {
//     access_token: '5f8eabd3-4c39-4190-91d6-708a58f4f42e',
//     expires_in: 86400,
//     refresh_token: 'dfe921b9-e390-4f63-a42c-b1c72d8e7e3f',
// };

const token = {
    access_token: '5f8eabd3-4c39-4190-91d6-708a58f4f42e',
    token_type: 'Bearer',
    expires_in: 86400,
    refresh_token: 'dfe921b9-e390-4f63-a42c-b1c72d8e7e3f',
    scope: 'playback-control-all',
};

const accessToken = authInstance.accessToken.create(token);
console.log(accessToken);
