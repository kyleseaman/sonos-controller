"use strict";

var _oauth = _interopRequireWildcard(require("./utils/oauth"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

exports.handler = (event, context, callback) => {
  const authorizatoinURI = _oauth.default.authorizationCode.authorizeURL({
    redirect_uri: _oauth.config.redirect_uri,
    // redirect_uri: 'http://localhost:8000/redirect',
    scope: 'playback-control-all',
    state: 'none'
  });

  const response = {
    statusCode: 302,
    headers: {
      Location: authorizatoinURI,
      'Cache-Control': 'no-cache'
    },
    body: ''
  };
  return callback(null, response);
};