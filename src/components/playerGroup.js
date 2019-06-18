import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { getUser } from '../utils/auth';
import GroupControl from './groupControl';
import GroupVolume from './groupVolume';
import GroupMetadata from './groupMetadata';

class PlayerGroup extends Component {
  state = {
    playbackStatus: {},
    playbackMetadata: {},
  }

  // componentDidMount() {
  // this.getPlaybackStatus();
  // }
  modifyPlayerGroup(playerIdsToAdd, playerIdsToRemove) {
    const sonosUser = getUser();
    const { id } = this.props.group;

    axios
      .post('/.netlify/functions/sonos-modifyGroupMembers', {
        accessToken: sonosUser.token.access_token,
        groupId: id,
        playerIdsToAdd,
        playerIdsToRemove,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getPlaybackStatus() {
    const sonosUser = getUser();
    const { id } = this.props.group;
    axios
      .post('/.netlify/functions/sonos-playbackStatus', {
        accessToken: sonosUser.token.access_token,
        groupId: id,
        command: 'playback',
      })
      .then((res) => {
        this.setState({
          playbackStatus: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { group } = this.props;
    return (
      <div>
        <hr />
        <div>{group.name}</div>
        <GroupMetadata groupId={group.id} />
        <GroupVolume groupId={group.id} />
        {/* {group.playbackState !== 'PLAYBACK_STATE_IDLE'
          ? <GroupControl group={group} />
          : <div>IDLE</div>
        } */}
        <GroupControl group={group} />
        <button onClick={() => { this.modifyPlayerGroup(['RINCON_000E5878023001400'], []); }}>TEST ADD ANNEX</button>
        <button onClick={() => { this.modifyPlayerGroup([], ['RINCON_000E5878023001400']); }}>TEST REMOVE ANNEX</button>
        <div>{JSON.stringify(group.playerIds)}</div>
        <br />
        <hr />
      </div>
    );
  }
}

PlayerGroup.propTypes = {
  group: PropTypes.object,
  players: PropTypes.array,
};

export default PlayerGroup;
