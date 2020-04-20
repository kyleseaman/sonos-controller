import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Box, Text } from 'grommet';
import { AddCircle, SubtractCircle } from 'grommet-icons';

import { Mute, Volume } from '../assets/assets/icons';

import { getUser } from '../utils/auth';

class GroupVolume extends Component {
  state = {
    volume: null,
    muted: null,
    fixed: null,
  };

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
      .catch(err => {
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
      .then(res => {
        this.setState({
          volume: res.data.volume,
          muted: res.data.muted,
          fixed: res.data.fixed,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <Box direction="column" align="center" justify="center">
          <Text>{`Volume: ${this.state.volume}`}</Text>
          <Box
            alignSelf="center"
            direction="row"
            gap="medium"
            justify="center"
            margin="small"
          >
            <SubtractCircle
              size="medium"
              onClick={() => {
                this.adjustVolume('relative', {
                  volumeDelta: -5,
                });
              }}
            />
            {this.state.muted ? (
              <Mute
                size="medium"
                onClick={() => {
                  this.adjustVolume('mute', {
                    muted: !this.state.muted,
                  });
                }}
              />
            ) : (
              <Volume
                size="medium"
                onClick={() => {
                  this.adjustVolume('mute', {
                    muted: !this.state.muted,
                  });
                }}
              />
            )}
            <AddCircle
              size="medium"
              onClick={() => {
                this.adjustVolume('relative', {
                  volumeDelta: 5,
                });
              }}
            />
          </Box>
        </Box>
      </div>
    );
  }
}

GroupVolume.propTypes = {
  groupId: PropTypes.string,
};

export default GroupVolume;
