import axios from 'axios';

exports.handler = async (event) => {
  const {
    accessToken, groupId, playback, params,
  } = JSON.parse(event.body);
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
  };

  try {
    console.log(params);
    await axios.post(`https://api.ws.sonos.com/control/api/v1/groups/${groupId}/playback/${playback}`, params, { headers });
    return {
      statusCode: 200,
      body: JSON.stringify({}),
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: err.response.status,
      body: err.response.data,
    };
  }
};
