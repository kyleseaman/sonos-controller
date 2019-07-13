import React, { Component } from 'react';
import { Link } from 'gatsby';
import axios from 'axios';
import { Button, Grommet } from 'grommet';
import ReactJSON from 'react-json-view';

import { getUser } from '../utils/auth';
import Layout from '../components/layout';
import HouseHold from '../components/household';
import JSONView from '../components/JSONView';

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
    households: [],
  }

  componentDidMount() {
    this.getHouseHolds();
  }

  getHouseHolds = () => {
    const sonosUser = getUser();
    this.setState({ loading: true });
    axios
      .post('/.netlify/functions/sonos-households', { accessToken: sonosUser.token.access_token })
      .then((res) => {
        this.setState({
          loading: false,
          households: res.data.households,
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
          <Link to="/">Go home</Link><br/>
          <Button onClick={() => {this.testAudioClip()}}>DEMO!</Button><br/>
          {JSON.stringify(this.state.households)}
          <div style={{fontSize: '1.5em'}}>
            <ReactJSON src={this.state.households} enableClipboard={false} name='HouseHolds' displayDataTypes={false} displayObjectSize={false} />
          </div>
          <JSONView content={this.state.households} />
          {/* <ReactJSON
            enableClipboard='false'
            src={this.state.households}/> */}
        
          {/* {this.state.loading ? <div>Loading Household</div> : <div></div>}
          {this.state.error ? <div>{this.state.error}</div> : <div></div>}
          {this.state.households.map((hh, i) => <HouseHold key={i} householdId={hh.id}/>)} */}
        </Grommet>
      </Layout>
    );
  }
}

export default Demo;
