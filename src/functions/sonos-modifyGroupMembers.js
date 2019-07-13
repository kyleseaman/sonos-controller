import axios from 'axios';

exports.handler = async (event) => {
  const {
    accessToken,
    groupId,
    playerIdsToAdd,
    playerIdsToRemove,
  } = JSON.parse(event.body);

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
  };

  const body = {
    playerIdsToAdd,
    playerIdsToRemove,
  };

  console.log(headers);

  try {
    const res = await axios.post(`https://api.ws.sonos.com/control/api/v1/groups/${groupId}/groups/modifyGroupMembers`, body, { headers });
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
      body: err.message,
    };
  }
};
