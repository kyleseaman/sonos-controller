import React, { Component } from 'react';
import axios from 'axios';
import { Button, Box, Grid, Grommet, Heading } from 'grommet';
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
    response: [],
    households: [],
  }

  getHouseHolds = () => {
    const sonosUser = getUser();
    this.setState({ 
      loading: true,
      body: {
        accessToken: '<USER_ACCESS_TOKEN>',
      },
      heading: 'GET /control/api/v1/households'
    });
    axios
      .post('/.netlify/functions/sonos-households', { accessToken: sonosUser.token.access_token })
      .then((res) => {
        this.setState({
          loading: false,
          households: res.data.households,
          response: res.data,
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

  getGroups = (householdId) => {
    console.log(householdId);
    const sonosUser = getUser();
    this.setState({
      loading: true,
      body: {
        accessToken: '<USER_ACCESS_TOKEN>',
        householdId,
      },
      heading: 'GET /households/{householdId}/groups',
    });
    axios
      .post('/.netlify/functions/sonos-groups', { accessToken: sonosUser.token.access_token, householdId })
      .then((res) => {
        this.setState({
          loading: false,
          response: res.data,
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
    const sonosUser = getUser();
    axios
    .post('/.netlify/functions/sonos-audioClip', { 
        accessToken: sonosUser.token.access_token,
        playerId: 'RINCON_5CAAFDD0162601400',
        params: {
            streamUrl: 'https://audio-clip-doorbell.s3.us-east-2.amazonaws.com/doorbell-1.mp3',
            name: 'Sonos AudioClip Demo',
            appId: 'com.me.sonosdemo',
        },
    })
    .then((res) => {
        console.log(res)
    });
  }

  render() {
    return (
      <Layout>
        <Grommet theme={theme}>
          <div>
            <Grid
              rows={['xsmall', 'large']}
              columns={['small', 'large']}
              gap='small'
              areas={[
                { name: 'header', start: [0,0], end: [1,0]},
                { name: 'left', start: [0,1], end: [0,1]},
                { name: 'right', start: [1,1], end: [1,1]},
              ]}
            >
              <Box margin='xsmall' justify='center' justifyContent='center' gridArea='header' background='dark-2' >
                <Heading>{this.state.heading}</Heading>
              </Box>
              <Box gridArea='left' background='light-2' >
                <Button margin='xsmall' alignSelf='stretch' label='getHouseHolds' onClick={() => {this.getHouseHolds()}} />
                <Button margin='xsmall' alignSelf='stretch' label='getGroups' onClick={() => {this.getGroups(this.state.households[0].id)}} />
                <Button margin='xsmall' alignSelf='stretch' label='getHouseHolds' onClick={() => {this.getHouseHolds()}} />
                <Button margin='xsmall'  alignSelf='stretch' label='audioClip Demo' onClick={() => {this.testAudioClip()}} />
              </Box>
              <Box gridArea='right'>
              <div style={{fontSize: '1.3em', margin: '20px'}}>
                  <ReactJSON src={this.state.body} enableClipboard={false} name='body' displayDataTypes={false} displayObjectSize={false} />
              </div>
              <hr />
              <div style={{fontSize: '1.3em', margin: '20px'}}>
                  <ReactJSON src={this.state.response} enableClipboard={false} name='response' displayDataTypes={false} displayObjectSize={false} />
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
