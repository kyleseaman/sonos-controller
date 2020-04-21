import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Box, Button } from 'grommet';
import { Play, Pause, SkipBack, SkipForward } from '../assets/assets/icons';
import { getUser } from '../utils/auth';

const GroupControl = ({ group, playbackState }) => {
  const [paused] = useState(
    group.playbackState === 'PLAYBACK_STATE_PAUSED' ||
    group.playbackState === 'PLAYBACK_STATE_IDLE'
  )
  const handlePlaybackCommand = (playback, params) => {
    const sonosUser = getUser();
    // const { refreshPlaybackStatus } = this.props;
    axios
      .post('/.netlify/functions/sonos-playback', {
        accessToken: sonosUser.token.access_token,
        groupId: group.id,
        playback,
        params,
      })
      .then(() => {
        refreshPlaybackStatus();
        if (playback === 'play' || playback === 'pause') {
          // this.setState(prevState => ({
          //   paused: !prevState.paused,
          // }));
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div>
      {/* <Button
        size="medium"
        label="Play Chill Hits"
        onClick={() => {
          this.handlePlayback('loadContainer', {
            containerId: {
              objectId:
                'spotify:user:spotify:playlist:37i9dQZF1DX4WYpdgoIcn6',
              serviceId: '12',
            },
            containerMetadata: {
              name: 'Chill Hits',
              type: 'playlist',
              id: {
                objectId: 'playlist:37i9dQZF1DX4WYpdgoIcn6',
                serviceId: '12',
              },
            },
            playOnCompletion: false,
          });
        }}
      /> */}
      <Box
        direction="row"
        gap="medium"
        align="center"
        justify="center"
        margin="small"
      >
        <SkipBack
          size="medium"
          onClick={() => {
            handlePlayback('skipToPreviousTrack');
          }}
        />
        {paused ? (
          <Play
            size="large"
            onClick={() => {
              handlePlayback('play');
            }}
          />
        ) : (
          <Pause
            size="large"
            onClick={() => {
              handlePlayback('pause');
            }}
          />
        )}
        <SkipForward
          size="medium"
          onClick={() => {
            handlePlayback('skipToNextTrack');
          }}
        />
      </Box>
    </div>
  );

}

// class GroupControl extends Component {
//   constructor(props) {
//     super(props);
//     const { group } = props;
//     this.state = {
//       paused:
        // group.playbackState === 'PLAYBACK_STATE_PAUSED' ||
        // group.playbackState === 'PLAYBACK_STATE_IDLE',
//     };
//   }

//   handlePlayback(playback, params) {
//     const sonosUser = getUser();
//     const { id } = this.props.group;
//     const { refreshPlaybackStatus } = this.props;
//     axios
//       .post('/.netlify/functions/sonos-playback', {
//         accessToken: sonosUser.token.access_token,
//         groupId: id,
//         playback,
//         params,
//       })
//       .then(() => {
//         refreshPlaybackStatus();
//         if (playback === 'play' || playback === 'pause') {
//           this.setState(prevState => ({
//             paused: !prevState.paused,
//           }));
//         }
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }

//   render() {
//     return (
//       <div>
//         {/* <Button
//           size="medium"
//           label="Play Chill Hits"
//           onClick={() => {
//             this.handlePlayback('loadContainer', {
//               containerId: {
//                 objectId:
//                   'spotify:user:spotify:playlist:37i9dQZF1DX4WYpdgoIcn6',
//                 serviceId: '12',
//               },
//               containerMetadata: {
//                 name: 'Chill Hits',
//                 type: 'playlist',
//                 id: {
//                   objectId: 'playlist:37i9dQZF1DX4WYpdgoIcn6',
//                   serviceId: '12',
//                 },
//               },
//               playOnCompletion: false,
//             });
//           }}
//         /> */}
//         <Box
//           direction="row"
//           gap="medium"
//           align="center"
//           justify="center"
//           margin="small"
//         >
//           <SkipBack
//             size="medium"
//             onClick={() => {
//               this.handlePlayback('skipToPreviousTrack');
//             }}
//           />
//           {this.state.paused ? (
//             <Play
//               size="large"
//               onClick={() => {
//                 this.handlePlayback('play');
//               }}
//             />
//           ) : (
//             <Pause
//               size="large"
//               onClick={() => {
//                 this.handlePlayback('pause');
//               }}
//             />
//           )}
//           <SkipForward
//             size="medium"
//             onClick={() => {
//               this.handlePlayback('skipToNextTrack');
//             }}
//           />
//         </Box>
//       </div>
//     );
//   }
// }

GroupControl.propTypes = {
  group: PropTypes.object,
  refreshPlaybackStatus: PropTypes.func,
};

export default GroupControl;
