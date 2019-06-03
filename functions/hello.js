"use strict";

exports.handler = (event, context, callback) => {
  console.log('querySTringParameters', event.queryStringParameters);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      msg: `Hello, world! ${Math.round(Math.random() * 10)}`
    })
  });
};