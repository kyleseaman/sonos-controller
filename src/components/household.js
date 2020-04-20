import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Box } from 'grommet';
import { DragDropContext } from 'react-beautiful-dnd';

import { getUser } from '../utils/auth';
import PlayerGroup from './playerGroup';
import PlaybackBar from './playbackBar';

const HouseHold = props => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [players, setPlayers] = useState([]);
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [metadataForGroup, setMetadataForGroup] = useState({});

  useEffect(() => {
    getGroups();
    find();
  }, []);

  const modifyPlayerGroup = (groupId, playerIdsToAdd, playerIdsToRemove) => {
    const sonosUser = getUser();
    axios
      .post('/.netlify/functions/sonos-modifyGroupMembers', {
        accessToken: sonosUser.token.access_token,
        groupId,
        playerIdsToAdd,
        playerIdsToRemove,
      })
      .then(res => {
        console.log(res);
        getGroups();
      })
      .catch(err => {
        console.log(err);
      });
  };

  const find = () => {
    const { householdId } = props;
    const sonosUser = getUser();
    axios
      .post('/.netlify/functions/find', {
        accessToken: sonosUser.token.access_token,
        householdId,
      })
      .then(res => {
        const services = res.data;
        console.log('SERVICES', services);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
        console.log(err);
      });
  };

  const selectGroup = groupId => {
    setSelectedGroup(groupId);
  };

  const updateMetadataForGroup = (groupId, metadata) => {
    setMetadataForGroup({ ...metadataForGroup, [groupId]: metadata });
  };

  const getGroups = () => {
    const { householdId } = props;
    const sonosUser = getUser();
    setLoading(true);
    axios
      .post('/.netlify/functions/sonos-groups', {
        accessToken: sonosUser.token.access_token,
        householdId,
      })
      .then(res => {
        console.log('RES for groups', res);
        setLoading(false);
        setPlayers(res.data.players);
        setGroups(res.data.groups);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
        console.log(err);
      });
  };

  const onDragEnd = result => {
    const { source, destination, draggableId } = result;

    if (!destination) {
      // we can use this to break up a group
      // check to see if player is grouped first
      groups.forEach(group => {
        if (group.id === source.droppableId) {
          const { playerIds } = group;
          if (playerIds.length > 1 && playerIds.includes(draggableId)) {
            modifyPlayerGroup(source.droppableId, [], [draggableId]);
          }
        }
      });
      return;
    }

    if (source.droppableId === destination.droppableId) {
      console.log('IGNORE, We are in the same list');
    } else {
      console.log(`MOVING TO THE NEW LIST! ${result.draggableId}`);
      // this assumes one player at a time
      modifyPlayerGroup(destination.droppableId, [draggableId], []);
    }
  };

  console.log('selected meta', metadataForGroup[selectedGroup]);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>{props.householdId}</div>
      <Box direction="column">
        {error ? <div>{error}</div> : <div></div>}
        {groups.map((group, i) => (
          <PlayerGroup
            key={i}
            group={group}
            players={players}
            select={selectGroup}
            selected={group.id === selectedGroup}
            updateMetadataForGroup={updateMetadataForGroup}
          />
        ))}
        {selectedGroup ?? (
          <PlaybackBar metadata={metadataForGroup[selectedGroup]} />
        )}
      </Box>
    </DragDropContext>
  );
};

HouseHold.propTypes = {
  householdId: PropTypes.string,
};

export default HouseHold;
