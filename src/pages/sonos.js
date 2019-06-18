import React, { Component } from 'react';
import { Link } from 'gatsby';
import axios from 'axios';
import { Grommet } from 'grommet';

import { getUser } from '../utils/auth';
import Layout from '../components/layout';
import HouseHold from '../components/household';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

class SonosAPI extends Component {
  state = {
    loading: false,
    error: null,
    households: [],
  }

  componentDidMount() {
    this.getHouseHolds();
  }

  render() {
    return (
      <Layout>
        <Grommet theme={theme}>
          <Link to="/">Go home</Link><br/>
          {this.state.loading ? <div>Loading Household</div> : <div></div>}
          {this.state.error ? <div>{this.state.error}</div> : <div></div>}
          {this.state.households.map((hh, i) => <HouseHold key={i} householdId={hh.id}/>)}
        </Grommet>
      </Layout>
    );
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
}

export default SonosAPI;
