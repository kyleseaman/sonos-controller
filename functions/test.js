exports.handler = (event, context, callback) => {
  const response = {
    statusCode: 302,
    headers: {
      Location: 'authorizatoinURI',
      'Cache-Control': 'no-cache',
    },
    body: '',
  };

  return callback(null, response);
};
