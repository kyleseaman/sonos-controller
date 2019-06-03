"use strict";

const payload = {
  token: {
    access_token: 'f427c613-06ae-45ab-8688-841467222ee1',
    token_type: 'Bearer',
    expires_in: 86400,
    refresh_token: 'ee5b96dc-e3d8-41a7-9bcf-76b9e426ce5a',
    scope: 'playback-control-all',
    expires_at: '2019-05-30T00:19:50.706Z'
  }
};

exports.handler = (event, context, callback) => {
  console.log('TRYING TO CALL THIS???');
  const response = {
    statusCode: 302,
    headers: {
      Location: `/page-2?access=${payload.token.access_token}&refresh=${payload.token.refresh_token}`,
      'Cache-Control': 'no-cache'
    },
    body: 'hello'
  };
  return callback(null, response);
};