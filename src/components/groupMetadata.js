import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Box, Text } from 'grommet';

import { getUser } from '../utils/auth';

class GroupMetadata extends Component {
  state = {
    playbackMetadata: {},
    testData: {},
  };

  componentDidMount() {
    this.getPlaybackMetadataStatus();
  }

  handleMetadata = metadata => {
    // console.log(metadata);
    const updatedMetadata = {
      name: '',
      track: '',
      artist: '',
      service: '',
      album: '',
    };

    if (metadata) {
      const { container } = metadata;
      if (Object.prototype.hasOwnProperty.call(container, 'name')) {
        updatedMetadata.name = container.name;
      }

      if (Object.prototype.hasOwnProperty.call(metadata, 'currentShow')) {
        updatedMetadata.track = metadata.currentShow.name;
      }

      if (Object.prototype.hasOwnProperty.call(container, 'service')) {
        updatedMetadata.service = container.service.name;
      }

      if (Object.prototype.hasOwnProperty.call(metadata, 'currentItem')) {
        if (
          Object.prototype.hasOwnProperty.call(
            metadata.currentItem.track,
            'name',
          )
        ) {
          updatedMetadata.track = metadata.currentItem.track.name;
          updatedMetadata.album = metadata.currentItem.track.album.name;
          updatedMetadata.artist = metadata.currentItem.track.artist.name;
        }
      }
    }

    // this.props.updateMetadataForGroup(this.props.groupId, updatedMetadata);

    this.setState({
      playbackMetadata: updatedMetadata,
    });

    this.props.updateMetadataForGroup(this.props.groupId, updatedMetadata);
  };

  getPlaybackMetadataStatus() {
    const sonosUser = getUser();
    const { groupId } = this.props;
    axios
      .post('/.netlify/functions/sonos-playbackStatus', {
        accessToken: sonosUser.token.access_token,
        groupId,
        command: 'playbackMetadata',
      })
      .then(res => {
        // console.log(res);
        this.setState({
          testData: res.data,
        });
        this.handleMetadata(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { playbackMetadata } = this.state;
    return (
      <Box>
        {/* <div>{JSON.stringify(this.state.testData)}</div> */}
        <Text weight="bold">{playbackMetadata.name}</Text>
        <Text wordBreak="break-word">{playbackMetadata.track}</Text>
        <Text>{playbackMetadata.artist}</Text>
        <Text>{playbackMetadata.service}</Text>
        <Text>{playbackMetadata.album}</Text>
      </Box>
    );
  }
}

GroupMetadata.propTypes = {
  groupId: PropTypes.string,
  updateMetadataForGroup: PropTypes.func,
};

export default GroupMetadata;
