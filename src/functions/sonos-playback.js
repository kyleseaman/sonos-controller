import axios from 'axios';

exports.handler = async (event) => {
  const { accessToken, groupId, playback } = JSON.parse(event.body);
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
  };

  try {
    await axios.post(`https://api.ws.sonos.com/control/api/v1/groups/${groupId}/playback/${playback}`, {}, { headers });
    return {
      statusCode: 200,
      body: JSON.stringify({}),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: err.response.data,
    };
  }
};
