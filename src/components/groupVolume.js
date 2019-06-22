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

  adjustVolume(command, params) {
    const sonosUser = getUser();
    const { groupId } = this.props;

    axios
      .post('/.netlify/functions/sonos-groupVolume', {
        accessToken: sonosUser.token.access_token,
        groupId,
        params,
        command,
      })
      .then(() => {
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
        <div>{`Volume: ${this.state.volume}`}</div>
        <button onClick={() => {
          this.adjustVolume('relative', {
            volumeDelta: -5,
          });
        }}>-</button>
        <button onClick={() => {
          this.adjustVolume('mute', {
            muted: !this.state.muted,
          });
        }}>{this.state.muted ? 'UNMUTE' : 'MUTE'}</button>
        <button onClick={() => {
          this.adjustVolume('relative', {
            volumeDelta: 5,
          });
        }}>+</button>
      </div>
    );
  }
}

GroupVolume.propTypes = {
  groupId: PropTypes.string,
};

export default GroupVolume;
