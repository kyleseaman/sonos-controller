import oauth2, { config } from './utils/oauth';

exports.handler = (event, context, callback) => {
  const authorizatoinURI = oauth2.authorizationCode.authorizatoinURL({
    redirect_uri: config.redirect_uri,
    scope: 'playback-control-all',
    state: 'none',
  });

  console.log(authorizatoinURI);

  const response = {
    statusCode: 302,
    headers: {
      Location: authorizatoinURI,
      'Cache-Control': 'no-cache',
    },
    body: '',
  };

  return callback(null, response);
};
