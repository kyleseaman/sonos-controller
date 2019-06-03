import oauth2, { config } from '../utils/oauth';

exports.handler = (event, context, callback) => {
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

  return callback(null, response);
};
