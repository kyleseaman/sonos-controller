const { config, authInstance } = require('./helper/oauth');

exports.handler = (event, context, callback) => {
  const authorizationURI = authInstance.authorizationCode.authorizeURL({
    redirect_uri: config.redirect_uri,
    scope: 'playback-control-all',
    state: 'none',
  });

  const response = {
    statusCode: 302,
    headers: {
      Location: authorizationURI,
      'Cache-Control': 'no-cache',
    },
    body: '',
  };

  callback(null, response);
};
