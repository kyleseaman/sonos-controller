import React, { Component } from 'react';
import axios from 'axios';
import {
  Button, Box, Grid, Grommet, Heading, Select, Text,
} from 'grommet';
import ReactJSON from 'react-json-view';

import { getUser } from '../utils/auth';
import Layout from '../components/layout';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

class Demo extends Component {
  state = {
    loading: false,
    error: null,
    heading: '',
    body: [],
    params: [],
    response: [],
    headers: [],
    households: [],
    players: [],
    groups: [],
    clipCapablePlayers: [],
    clipCapablePlayerNames: [],
    householdNames: [],
    selectedHouseHold: '',
    selectedPlayer: '',
  }

  getHouseHolds = () => {
    this.resetState();
    const sonosUser = getUser();
    this.setState({
      loading: true,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer <USER_ACCESS_TOKEN>',
      },
      heading: 'GET /households',
    });
    axios
      .post('/.netlify/functions/sonos-households', { accessToken: sonosUser.token.access_token })
      .then((res) => {
        this.setState({
          loading: false,
          households: res.data.households,
          response: res.data,
          householdNames: res.data.households.map(household => household.id),
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          error: err.message,
          loading: false,
        });
      });
  }

  resetState = () => {
    this.setState({
      headers: [],
      body: [],
      response: [],
      heading: '',
    });
  }

  getClipCapablePlayers = () => {
    this.resetState();
    const { players } = this.state;
    const clipCapablePlayers = [];
    const clipCapablePlayerNames = [];
    players.forEach((player) => {
      if (player.capabilities.includes('AUDIO_CLIP')) {
        clipCapablePlayers.push({
          id: player.id,
          name: player.name,
        });
        clipCapablePlayerNames.push(player.name);
      }
    });

    this.setState({
      clipCapablePlayerNames,
      clipCapablePlayers,
      response: clipCapablePlayers,
      heading: 'Filter for \'AUDIO_CLIP\'',
    });
  }

  getGroups = () => {
    this.resetState();
    const { selectedHouseHold } = this.state;
    const sonosUser = getUser();
    this.setState({
      loading: true,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer <USER_ACCESS_TOKEN>',
      },
      params: {
        householdId: 'Sonos_....',
      },
      heading: 'GET /households/{householdId}/groups',
    });
    axios
      .post('/.netlify/functions/sonos-groups', { accessToken: sonosUser.token.access_token, householdId: selectedHouseHold })
      .then((res) => {
        this.setState({
          loading: false,
          response: res.data,
          players: res.data.players,
          groups: res.data.groups,
        });
      })
      .catch((err) => {
        console.log('ERROR HERE????');
        this.setState({
          error: err,
          loading: false,
        });
        console.log(err);
      });
  }

  testAudioClip = () => {
    this.resetState();
    const sonosUser = getUser();
    const { clipCapablePlayers, selectedPlayer } = this.state;
    const selectedPlayerObject = clipCapablePlayers.find(player => player.name === selectedPlayer);

    this.setState({
      body: {
        streamUrl: 'https://audio-clip-doorbell.s3.us-east-2.amazonaws.com/doorbell-1.mp3',
        name: 'Sonos AudioClip Demo',
        appId: 'com.me.sonosdemo',
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer <USER_ACCESS_TOKEN>',
      },
      params: {
        playerId: selectedPlayerObject.id,
      },
      heading: 'POST /players/{playerId}/audioClip',
    });
    axios
      .post('/.netlify/functions/sonos-audioClip', {
        accessToken: sonosUser.token.access_token,
        playerId: selectedPlayerObject.id,
        params: {
          streamUrl: 'https://audio-clip-doorbell.s3.us-east-2.amazonaws.com/doorbell-1.mp3',
          name: 'Sonos AudioClip Demo',
          appId: 'com.me.sonosdemo',
        },
      })
      .then((res) => {
        this.setState({
          response: res.data,
        });
        console.log(res);
      });
  }

  render() {
    const {
      body,
      clipCapablePlayerNames,
      headers,
      heading,
      response,
      selectedPlayer,
      householdNames,
      selectedHouseHold,
      params,
    } = this.state;
    return (
      <Layout>
        <Grommet theme={theme}>
          <div>
            <Grid
              rows={['xsmall', 'large']}
              columns={['small', 'large']}
              gap='small'
              areas={[
                { name: 'header', start: [0, 0], end: [1, 0] },
                { name: 'left', start: [0, 1], end: [0, 1] },
                { name: 'right', start: [1, 1], end: [1, 1] },
              ]}
            >
              <Box margin='xsmall' justify='center' justifyContent='center' gridArea='header' background='dark-2' >
                <Heading>{heading}</Heading>
              </Box>
              <Box gridArea='left' background='light-2' >
                <Button margin='xsmall' alignSelf='stretch' label='getHouseHolds' onClick={() => { this.getHouseHolds(); }} />
                <Text margin='small' textAlign='center' weight='bold' size='large'>choose household</Text>
                  <Select
                    margin='small'
                    multiple={false}
                    options={householdNames}
                    onChange={event => this.setState({
                      selectedHouseHold: event.value,
                    })}
                    value={selectedHouseHold}
                  ></Select>
                <Button margin='xsmall' alignSelf='stretch' label='getGroups' onClick={() => { this.getGroups(); }} />
                <Button margin='xsmall' alignSelf='stretch' label='getClipCapablePlayers' onClick={() => { this.getClipCapablePlayers(); }} />
                <div style={{ marginTop: '40px' }}>
                  <Text margin='small' textAlign='center' weight='bold' size='large'>audioClip Demo</Text>
                  <Select
                    margin='small'
                    multiple={false}
                    options={clipCapablePlayerNames}
                    onChange={event => this.setState({
                      selectedPlayer: event.value,
                    })}
                    value={selectedPlayer}
                  ></Select>
                  <Button margin='xsmall' alignSelf='stretch' label='Send audioClip' onClick={() => { this.testAudioClip(); }} />
                </div>
              </Box>
              <Box gridArea='right'>
              <div style={{ fontSize: '1.3em', margin: '20px' }}>
                {typeof window !== 'undefined'
                  ? <ReactJSON src={headers} enableClipboard={false} name='headers' displayDataTypes={false} displayObjectSize={false} />
                  : <div></div>
                }
              </div>
              <div style={{ fontSize: '1.3em', margin: '20px' }}>
                {typeof window !== 'undefined'
                  ? <ReactJSON src={params} enableClipboard={false} name='params'npm displayDataTypes={false} displayObjectSize={false} />
                  : <div></div>
                }
              </div>
              <div style={{ fontSize: '1.3em', margin: '20px' }}>
                {typeof window !== 'undefined'
                  ? <ReactJSON src={body} enableClipboard={false} name='body' displayDataTypes={false} displayObjectSize={false} />
                  : <div></div>
                }
              </div>
              <hr />
              <div style={{ fontSize: '1.3em', margin: '20px' }}>
                {typeof window !== 'undefined'
                  ? <ReactJSON src={response} enableClipboard={false} name='response' displayDataTypes={false} displayObjectSize={false} />
                  : <div></div>
                }
              </div>
              </Box>
            </Grid>
          </div>
        </Grommet>
      </Layout>
    );
  }
}

export default Demo;
