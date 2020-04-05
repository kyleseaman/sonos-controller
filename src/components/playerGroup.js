import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Box, Grommet, Heading } from 'grommet';
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
                width='300px'
                background='light-1'
                elevation='small'
                justify='center'
                round='small'
                pad='small'
              >
                <Heading size='small'>{group.name}</Heading>
                <GroupMetadata groupId={group.id} />
                <GroupVolume groupId={group.id} />
                <GroupControl group={group} refreshPlaybackStatus={() => { this.getPlaybackStatus(); }} />
                Players:
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
                          {playerId}
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
};

export default PlayerGroup;
