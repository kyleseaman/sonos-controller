import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Box, Grommet } from 'grommet';
import { Droppable, Draggable } from 'react-beautiful-dnd';

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
        this.props.getGroups();
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
      <Droppable droppableId={group.id}>
        {provided => (
          <div
            ref={provided.innerRef}
          >
            <Grommet style={{ margin: 20 }}>
              <Box
                width='300'
                background='light-1'
                elevation='small'
                justify='center'
                round='small'
                pad='small'
              >
                <div>{group.name}</div>
                <GroupMetadata groupId={group.id} />
                <GroupVolume groupId={group.id} />
                <GroupControl group={group} />
                <button onClick={() => { this.modifyPlayerGroup([], ['RINCON_000E5878023001400']); }}>TEST REMOVE ANNEX</button>
                  {group.playerIds.map((playerId, i) => (
                    <Draggable
                      key={playerId}
                      draggableId={playerId}
                      index={i}
                    >
                      {draggableProvided => (
                        <div
                          ref={draggableProvided.innerRef}
                          {...draggableProvided.draggableProps}
                          {...draggableProvided.dragHandleProps}
                        >
                          {`ITEM ${playerId}`}
                        </div>
                      )}
                    </Draggable>

                  ))}
                  {provided.placeholder}
                <br />
              </Box>
            </Grommet>
        </div>)}
      </Droppable>
    );
  }
}

PlayerGroup.propTypes = {
  group: PropTypes.object,
  players: PropTypes.array,
  getGroups: PropTypes.func,
};

export default PlayerGroup;
