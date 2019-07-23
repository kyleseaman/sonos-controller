import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Box, Button } from 'grommet';
import {
  Pause,
  FastForward,
  Rewind,
  Play,
} from 'grommet-icons';

import { getUser } from '../utils/auth';

class GroupControl extends Component {
  constructor(props) {
    super(props);
    const { group } = props;
    this.state = {
      paused: group.playbackState === 'PLAYBACK_STATE_PAUSED' || group.playbackState === 'PLAYBACK_STATE_IDLE',
    };
  }

  handlePlayback(playback, params) {
    const sonosUser = getUser();
    const { id } = this.props.group;
    const { refreshPlaybackStatus } = this.props;
    axios
      .post('/.netlify/functions/sonos-playback', {
        accessToken: sonosUser.token.access_token,
        groupId: id,
        playback,
        params,
      })
      .then(() => {
        refreshPlaybackStatus();
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
        <Button
            size='medium'
            label='Play Chill Hits'
            onClick={() => {
              this.handlePlayback('loadContainer',
                {
                  containerId: { objectId: 'spotify:user:spotify:playlist:37i9dQZF1DX4WYpdgoIcn6', serviceId: '12' },
                  containerMetadata: { name: 'Chill Hits', type: 'playlist', id: { objectId: 'playlist:37i9dQZF1DX4WYpdgoIcn6', serviceId: '12' } },
                  playOnCompletion: false,
                });
            }}
          />
        <Box
          alignSelf='center'
          direction='row'
          gap='medium'
          justify='center'
          margin='small'
        >
          <Rewind size='large' onClick={() => { this.handlePlayback('skipToPreviousTrack'); }} />
          {this.state.paused
            ? <Play size='large' onClick={() => { this.handlePlayback('play'); }} />
            : <Pause size='large' onClick={() => { this.handlePlayback('pause'); }}/>
          }
          <FastForward size='large' onClick={() => { this.handlePlayback('skipToNextTrack'); }} />
        </Box>
      </div>
    );
  }
}

GroupControl.propTypes = {
  group: PropTypes.object,
  refreshPlaybackStatus: PropTypes.func,
};

export default GroupControl;
