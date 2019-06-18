import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { getUser } from '../utils/auth';

class GroupControl extends Component {
  constructor(props) {
    super(props);
    const { group } = props;
    this.state = {
      paused: group.playbackState === 'PLAYBACK_STATE_PAUSED' || group.playbackState === 'PLAYBACK_STATE_IDLE',
    };
  }

  handlePlayback(playback) {
    const sonosUser = getUser();
    const { id } = this.props.group;
    axios
      .post('/.netlify/functions/sonos-playback', {
        accessToken: sonosUser.token.access_token,
        groupId: id,
        playback,
      })
      .then(() => {
        if (playback === 'play' || playback === 'pause') {
          this.setState(prevState => ({
            paused: !prevState.paused,
          }));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <button onClick={() => { this.handlePlayback('skipToPreviousTrack'); }}>PREVIOUS</button>
        <button onClick={() => { this.handlePlayback(this.state.paused ? 'play' : 'pause'); }}>{this.state.paused ? 'PLAY' : 'PAUSE'}</button>
        <button onClick={() => { this.handlePlayback('skipToNextTrack'); }}>NEXT</button>
      </div>
    );
  }
}

GroupControl.propTypes = {
  group: PropTypes.object,
};

export default GroupControl;
