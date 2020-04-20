import axios from 'axios';

exports.handler = async event => {
  const { accessToken, householdId } = JSON.parse(event.body);
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
    'X-Sonos-Api-Key': 'cda28295-e095-4932-943c-9063fd722693',
    'X-Sonos-User-Id': '112014048',
  };

  const params = {
    allowExplicitContent: true,
    preferredServices: ['Spotify'],
    preferredServicesOnly: false,
    itemTypes: ['track'],
    metadata: {
      track: 'Toosie Slide',
    },
  };

  try {
    const res = await axios.post(
      `https://api.ws.sonos.com/control/api/v1/households/${householdId}/find`,
      params,
      { headers },
    );
    const { data } = res;
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: err.message,
    };
  }
};
