// import getUserData from './utils/getUserData';
import oauth2, { config } from './utils/oauth';

exports.handler = (event, context, callback) => {
  const { code, state } = event.queryStringParameters;

  oauth2.authorizationCode.getToken({
    code,
    redirect_uri: config.redirect_uri,
    client_id: config.clientId,
    client_secret: config.clientSecret,
  })
    .then((result) => {
      const token = oauth2.accessToken.create(result);
      console.log(token);
      return token;
    })
    // .then(getUserData)
    .then((result) => {
      console.log('auth token', result.token);
      console.log('user data', JSON.stringify(result));
      console.log('state', state);

      return callback(null, {
        statusCode: 200,
        body: JSON.stringify(result),
      });
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
