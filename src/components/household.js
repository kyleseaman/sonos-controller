import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

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

  render() {
    const { householdId } = this.props;
    return (
      <div>
        <div>{householdId}</div>
        <div>Groups</div>
        {this.state.error ? <div>{this.state.error}</div> : <div></div>}
        {this.state.groups.map((group, i) => <PlayerGroup key={i} group={group} />)}
      </div>
    );
  }

  getGroups = () => {
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
}

HouseHold.propTypes = {
  householdId: PropTypes.string,
};

export default HouseHold;
