import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Box } from 'grommet';
import {
  AddCircle,
  SubtractCircle,
  VolumeMute,
  Volume,
} from 'grommet-icons';

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
        <Box
          alignSelf='center'
          direction='row'
          gap='medium'
          justify='center'
          margin='small'
        >
          <SubtractCircle size='large' onClick={() => {
            this.adjustVolume('relative', {
              volumeDelta: -5,
            });
          }} />
          {
            this.state.muted
              ? <Volume size='large' onClick={() => {
                this.adjustVolume('mute', {
                  muted: !this.state.muted,
                });
              }} />
              : <VolumeMute size='large' onClick={() => {
                this.adjustVolume('mute', {
                  muted: !this.state.muted,
                });
              }} />
          }
          <AddCircle size='large' onClick={() => {
            this.adjustVolume('relative', {
              volumeDelta: 5,
            });
          }} />
        </Box>
      </div>
    );
  }
}

GroupVolume.propTypes = {
  groupId: PropTypes.string,
};

export default GroupVolume;
