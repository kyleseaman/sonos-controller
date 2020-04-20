// import * as React from 'react';
// import { Box } from 'grommet';
// import {
//     SkipBack,
//     SkipForward,
//     Play,
//     Pause,
//     Shuffle,
//     Repeat,
// } from '../../../../../assets/assets/icons';

// // interface PlaybackControlProps {
// //     selectedGroup: Group;
// //     slim: boolean;
// //     playback: FormattedPlayback;
// // }

// const PlaybackControl = ({
//     selectedGroup,
//     playback,
//     slim,
// }) => {
//     const { playActions } = playback;

//     const commandCallBack = (msg: string) => {
//         console.log('COMMAND CALLBACK ', msg);
//     };

//     const isPaused =
//         playback && playback.playbackState === 'PLAYBACK_STATE_PAUSED';

//     const skipTrack = (direction: string) => {
//         let change = 'skipToPreviousTrack';
//         // if (direction === 'previous' && selectedGroup.groupCoordinator) {
//         //     selectedGroup.groupCoordinator.playback.skipToPreviousTrack(commandCallBack);
//         // }
//         if (direction === 'next' && selectedGroup.groupCoordinator) {
//             // selectedGroup.groupCoordinator.playback.skipToNextTrack(commandCallBack);
//             change = 'skipToNextTrack';
//         }

//         if (selectedGroup.groupCoordinator) {
//             const cmd: Command = [
//                 {
//                     namespace: 'playback',
//                     command: change,
//                     householdId: selectedGroup.groupCoordinator.hhid,
//                     groupId: selectedGroup.groupCoordinator.gid,
//                 },
//                 {},
//             ];
//             selectedGroup.groupCoordinator.sendCommand(cmd, (msg: string) => {
//                 console.log(msg);
//             });
//         }
//     };

//     const togglePlayPause = () => {
//         if (selectedGroup.groupCoordinator) {
//             const cmd: Command = [
//                 {
//                     namespace: 'playback',
//                     command: 'togglePlayPause',
//                     householdId: selectedGroup.groupCoordinator.hhid,
//                     groupId: selectedGroup.groupCoordinator.gid,
//                 },
//                 {},
//             ];
//             selectedGroup.groupCoordinator.sendCommand(cmd, (msg: string) => {
//                 console.log(msg);
//             });
//         }
//         // if (selectedGroup.groupCoordinator)
//         //     selectedGroup.groupCoordinator.playback.togglePlayPause(commandCallBack);
//     };

//     return (
//         <Box
//             direction="row"
//             justify="between"
//             // fill='horizontal'
//             width="medium"
//             margin={slim ? 'small' : { top: 'large', bottom: 'large' }}
//             align="center"
//         >
//             <Shuffle
//                 size={slim ? 'small' : 'medium'}
//                 color={playActions.canShuffle ? '' : 'disabled'}
//                 onClick={() => console.log('shuffule')}
//             />
//             <SkipBack
//                 size={slim ? 'small' : 'medium'}
//                 color={playActions.canSkipBack ? '' : 'disabled'}
//                 onClick={() => skipTrack('previous')}
//             />
//             {isPaused ? (
//                 <Play
//                     size={slim ? 'medium' : 'large'}
//                     onClick={() => togglePlayPause()}
//                 />
//             ) : (
//                 <Pause
//                     color={playActions.canPause ? '' : 'disabled'}
//                     size={slim ? 'medium' : 'large'}
//                     onClick={() => togglePlayPause()}
//                 />
//             )}
//             <SkipForward
//                 size={slim ? 'small' : 'medium'}
//                 color={playActions.canSkip ? '' : 'disabled'}
//                 onClick={() => skipTrack('next')}
//             />
//             <Repeat
//                 size={slim ? 'small' : 'medium'}
//                 color={playActions.canRepeat ? '' : 'disabled'}
//                 onClick={() => console.log('repeat')}
//             />
//         </Box>
//     );
// };

// export default PlaybackControl;
