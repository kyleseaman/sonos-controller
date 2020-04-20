import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading } from 'grommet';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import GroupControl from './groupControl';
import GroupVolume from './groupVolume';
import GroupMetadata from './groupMetadata';

const PlayerGroup = ({
  group,
  select,
  selected,
  players,
  updateMetadataForGroup,
}) => {
  const getPlayerNameForId = playerId => {
    let name = '';
    players.forEach(p => {
      if (p.id === playerId) {
        name = p.name;
      }
    });
    return name;
  };

  const handleMetadataUpdate = (groupId, updatedMetadata) => {
    console.log('handle in playerGroup -- ', groupId);
    updateMetadataForGroup(groupId, updatedMetadata);
  };

  return (
    <Box>
      <Droppable droppableId={group.id}>
        {provided => (
          <div ref={provided.innerRef}>
            <Box
              width="300px"
              margin="20px"
              background={
                selected ? 'background-front-selected' : 'background-front'
              }
              // elevation="small"
              justify="center"
              round="small"
              pad="small"
              onClick={() => {
                select(group.id);
              }}
            >
              <Heading size="small">{group.name}</Heading>
              <GroupMetadata
                groupId={group.id}
                updateMetadataForGroup={handleMetadataUpdate}
              />
              {/* <GroupControl
                group={props.group}
                refreshPlaybackStatus={() => {
                  getPlaybackStatus();
                }}
              />
              <GroupVolume groupId={props.group.id} /> */}
              Devices:
              {group.playerIds.map((playerId, i) => (
                <Draggable key={playerId} draggableId={playerId} index={i}>
                  {draggableProvided => (
                    <div
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.draggableProps}
                      {...draggableProvided.dragHandleProps}
                    >
                      {getPlayerNameForId(playerId)}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
              <br />
            </Box>
          </div>
        )}
      </Droppable>
    </Box>
  );
};

PlayerGroup.propTypes = {
  group: PropTypes.object,
  players: PropTypes.array,
  select: PropTypes.func,
  selected: PropTypes.bool,
  updateMetadataForGroup: PropTypes.func,
};

export default PlayerGroup;
