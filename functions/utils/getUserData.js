import request from 'request';
import queryString from 'querystring';
import { config } from './oauth';

export default function getUserData(token) {
  const postData = queryString.stringify({
    client_id: config.clientId,
    client_secret: config.clientSecret,
    app_id: config.appId,
  });

  const requestOptions = {

  };

  function requestWrapper(requestOptions, token) {
    return new Promise((resolve, reject) => {
      request(requestOptions, (err, response, body) => {
        if (err) {
          return reject(err);
        }

        return resolve({
          token,
          data: body,
        });
      });
    });
  }
}
