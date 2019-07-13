const { authInstance } = require('./helper/oauth');

exports.handler = async (event) => {
  const tokenObject = JSON.parse(event.body);
  let accessToken = authInstance.accessToken.create(tokenObject);
  if (accessToken.expired()) {
    try {
      accessToken = await accessToken.refresh();
      return {
        statusCode: 200,
        body: JSON.stringify({ accessToken }),
      };
    } catch (error) {
      console.log('ERROR REFRESHING TOKEN', error.message);
      return {
        statusCode: 500,
        body: error.message,
      };
    }
  } else {
    return {
      statusCode: 200,
      body: JSON.stringify({ accessToken }),
    };
  }
};
