"use strict";

var _oauth = _interopRequireWildcard(require("./utils/oauth"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// import getUserData from './utils/getUserData';
exports.handler = (event, context, callback) => {
  const {
    code
  } = event.queryStringParameters;

  _oauth.default.authorizationCode.getToken({
    code,
    redirect_uri: _oauth.config.redirect_uri,
    client_id: _oauth.config.clientId,
    client_secret: _oauth.config.clientSecret
  }).then(result => {
    const token = _oauth.default.accessToken.create(result); // console.log(token);


    return token;
  }) // .then(getUserData)
  .then(result => {
    // console.log('auth token', result.token);
    // console.log('state', state);
    // Buffer.from(foo).toString('base64')
    const result64 = Buffer.from(JSON.stringify(result)).toString('base64'); // return callback(null, {
    //   statusCode: 200,
    //   body: JSON.stringify(result),
    // });

    return callback(null, {
      statusCode: 302,
      headers: {
        Location: `/page-2?data=${result64}`,
        'Cache-Control': 'no-cache'
      },
      body: ''
    }); // const response = {
    //   statusCode: 302,
    //   headers: {
    //     Location: '/page-2',
    //     'Cache-Control': 'no-cache',
    //   },
    //   body: 'hello',
    // };
  }).catch(error => {
    console.log('Access Token Error', error.message);
    console.log(error);
    return callback(null, {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({
        error: error.message
      })
    });
  });
};