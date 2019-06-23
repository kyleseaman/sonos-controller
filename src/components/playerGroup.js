import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Box, Grommet } from 'grommet';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { getUser } from '../utils/auth';
import GroupControl from './groupControl';
import GroupVolume from './groupVolume';
import GroupMetadata from './groupMetadata';

const PlayerComponent = (playerId, index) => {
  console.log(playerId, index);
  return (
    <Draggable
      key={index}
      draggableId={index}
      index={index}
    >
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {playerId.playerId}
        </div>
      )}
    </Draggable>
  );
};

class PlayerGroup extends Component {
  state = {
    playbackStatus: {},
    playbackMetadata: {},
    testStuff: [Math.random(), Math.random(), Math.random()],
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

  onDragEnd = (result) => {
    console.log(result);
  };

  render() {
    const { group } = this.props;
    const { testStuff } = this.state;

    return (
      <Grommet style={{ margin: 20 }}>
        <Box
          width='300'
          background='light-2'
          elevation='small'
          justify='center'
          round='small'
          pad='small'
        >
          <div>{group.name}</div>
          <GroupMetadata groupId={group.id} />
          <GroupVolume groupId={group.id} />
          <GroupControl group={group} />
          <button onClick={() => { this.modifyPlayerGroup(['RINCON_000E5878023001400'], []); }}>TEST ADD ANNEX</button>
          <button onClick={() => { this.modifyPlayerGroup([], ['RINCON_000E5878023001400']); }}>TEST REMOVE ANNEX</button>
          {/* {group.playerIds.map((playerId, i) => <PlayerComponent key={i} playerId={playerId}/>)} */}
          {/* <div>{JSON.stringify(group.playerIds)}</div> */}
            <Droppable droppableId={group.id}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                >
                  {testStuff.map((playerId, i) => (
                    <Draggable
                      key={i}
                      draggableId={playerId}
                      index={i}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {`ITEM ${playerId}`}
                        </div>
                      )}
                    </Draggable>

                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          <br />
        </Box>
      </Grommet>
    );
  }
}

PlayerGroup.propTypes = {
  group: PropTypes.object,
  players: PropTypes.array,
  getGroups: PropTypes.func,
};

export default PlayerGroup;
