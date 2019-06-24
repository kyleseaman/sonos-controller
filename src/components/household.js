import React, { Component } from 'react';
import PropTypes, { array } from 'prop-types';
import axios from 'axios';
import { Box, Grommet } from 'grommet';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { getUser } from '../utils/auth';
import PlayerGroup from './playerGroup';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

class HouseHold extends Component {
  state = {
    loading: false,
    error: null,
    players: [],
    groups: [],
  }

  componentDidMount() {
    this.getGroups();
  }

  onDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    if (!destination) {
      // we can use this to break up a group
      // check to see if player is grouped first
      this.state.groups.forEach((group) => {
        if (group.id === source.droppableId) {
          const { playerIds } = group;
          if (playerIds.length > 1 && playerIds.includes(draggableId)) {
            this.modifyPlayerGroup(
              source.droppableId,
              [],
              [draggableId],
            );
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
      this.modifyPlayerGroup(
        destination.droppableId,
        [draggableId],
        [],
      );
    }
  }

  modifyPlayerGroup(groupId, playerIdsToAdd, playerIdsToRemove) {
    const sonosUser = getUser();
    axios
      .post('/.netlify/functions/sonos-modifyGroupMembers', {
        accessToken: sonosUser.token.access_token,
        groupId,
        playerIdsToAdd,
        playerIdsToRemove,
      })
      .then((res) => {
        console.log(res);
        this.getGroups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getGroups = () => {
    const { householdId } = this.props;
    const sonosUser = getUser();
    this.setState({ loading: true });
    axios
      .post('/.netlify/functions/sonos-groups', { accessToken: sonosUser.token.access_token, householdId })
      .then((res) => {
        this.setState({
          loading: false,
          players: res.data.players,
          groups: res.data.groups,
        });
      })
      .catch((err) => {
        console.log('ERROR HERE????');
        this.setState({
          error: err,
          loading: false,
        });
        console.log(err);
      });
  }

  render() {
    const { householdId } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Grommet>
          <div>{householdId}</div>
          <Box
            direction='row'
            wrap='true'
          >
            {this.state.error ? <div>{this.state.error}</div> : <div></div>}
            {
              this.state.groups.map((group, i) => <PlayerGroup key={i} group={group} />)
            }
          </Box>
        </Grommet>
      </DragDropContext>
    );
  }
}

HouseHold.propTypes = {
  householdId: PropTypes.string,
};

export default HouseHold;
