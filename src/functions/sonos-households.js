import axios from 'axios';

exports.handler = async (event) => {
  const { accessToken } = JSON.parse(event.body);
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
  };

  try {
    const res = await axios.get('https://api.ws.sonos.com/control/api/v1/households', { headers });
    const { data } = res;
    console.log(data);
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    console.log(err.response.data);
    return {
      statusCode: 500,
      body: err.response.data,
    };
  }
};
