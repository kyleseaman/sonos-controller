import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Box, Grommet } from 'grommet';

import { getUser } from '../utils/auth';
import PlayerGroup from './playerGroup';

class HouseHold extends Component {
  state = {
    loading: false,
    error: null,
    players: [],
    groups: [],
  }

  componentDidMount() {
    this.getGroups();
  }

  getGroups = () => {
    console.log('getGroups!!');
    const { householdId } = this.props;
    const sonosUser = getUser();
    this.setState({ loading: true });
    axios
      .post('/.netlify/functions/sonos-groups', { accessToken: sonosUser.token.access_token, householdId })
      .then((res) => {
        this.setState({
          loading: false,
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

  render() {
    const { householdId } = this.props;
    return (
      <Grommet>
        <div>{householdId}</div>
        <div>Groups</div>
        <Box
          direction='row'
          wrap='true'
        >
          {this.state.error ? <div>{this.state.error}</div> : <div></div>}
          {
            this.state.groups.map((group, i) => <PlayerGroup key={i} group={group} getGroups={this.getGroups} />)
          }
        </Box>
      </Grommet>
    );
  }
}

HouseHold.propTypes = {
  householdId: PropTypes.string,
};

export default HouseHold;
