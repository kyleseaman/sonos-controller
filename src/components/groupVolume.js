import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { getUser } from '../utils/auth';

class GroupVolume extends Component {
  state = {
    volume: null,
    muted: null,
    fixed: null,
  }

  componentDidMount() {
    this.getPlaybackMetadataStatus();
  }

  muteGroup() {
    const sonosUser = getUser();
    const { groupId } = this.props;

    console.log(sonosUser.token.access_token);
    axios
      .post('/.netlify/functions/sonos-groupVolume', {
        accessToken: sonosUser.token.access_token,
        groupId,
        params: {
          muted: !this.state.muted,
        },
        command: 'mute',
      })
      .then((res) => {
        console.log(res);
        this.getPlaybackMetadataStatus();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getPlaybackMetadataStatus() {
    const sonosUser = getUser();
    const { groupId } = this.props;
    axios
      .post('/.netlify/functions/sonos-playbackStatus', {
        accessToken: sonosUser.token.access_token,
        groupId,
        command: 'groupVolume',
      })
      .then((res) => {
        this.setState({
          volume: res.data.volume,
          muted: res.data.muted,
          fixed: res.data.fixed,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        {/* <button onClick={}>Mute</button> */}
        <div>{`Volume: ${this.state.volume}`}</div>
        <button>-</button>
        <button onClick={() => { this.muteGroup(); }}>{this.state.muted ? 'UNMUTE' : 'MUTE'}</button>
        <button>+</button>
      </div>
    );
  }
}

GroupVolume.propTypes = {
  groupId: PropTypes.string,
};

export default GroupVolume;
