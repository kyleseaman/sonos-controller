import axios from 'axios';

exports.handler = async (event) => {
  const {
    accessToken,
    groupId,
    command,
    params,
  } = JSON.parse(event.body);

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
  };

  try {
    const res = await axios.post(`https://api.ws.sonos.com/control/api/v1/groups/${groupId}/groupVolume/${command}`, params, { headers });
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
