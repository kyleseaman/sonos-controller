import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'
import { Box, RangeInput, Text, ThemeContext } from 'grommet';

import { getUser } from '../utils/auth'
import * as Icons from '../assets/assets/icons';
import { formatAlbumArtImageUrl } from '../utils/helper';

import GroupControl from './groupControl';

const PlaybackBar = ({ groupId, group, metadata }) => {
  const [playbackState, setPlaybackState] = useState(null)
  const [muted, setMuted] = useState();
  const [volume, setVolume] = useState(5);
  // const [progress, setProgress] = useState(5);

  useEffect(() => {
    getPlaybackStatus()
  }, [])

  const getPlaybackStatus = () => {
    const sonosUser = getUser();
    axios
      .post('/.netlify/functions/sonos-playbackStatus', {
        accessToken: sonosUser.token.access_token,
        groupId,
        command: 'playback',
      })
      .then((res) => {
        console.log('PLAYBACK STATUS ****', res.data)
        setPlaybackState(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const adjustVolume = volumeValue => {};
  const toggleMute = () => {};
  
  console.log('METADATA >>>>> ', metadata);

  return (
    <div>
      {metadata ? (
        <Box
          direction="row"
          height="110px"
          margin='20px'
          justify="between"
          round="small"
          gap="small"
          elevation="small"
          background="playback-bar"
          pad={{ left: '35px', right: '25px', vertical: 'small' }}
          // {...props}
        >
          <Box align="center" justify="between" alignSelf="center">
            <Box
              direction="row"
              align="start"
              justify="between"
              width={{ min: '150px', max: '190px' }}
            >
              {metadata.imageUrl && <Box
                width="70px"
                height="70px"
                background={formatAlbumArtImageUrl(metadata)}
              />}
              <Box
                direction="column"
                margin={{ left: '10px' }}
                width={{ min: '70px', max: '110px' }}
                height={{ min: '70px', max: '70px' }}
              >
                <Text weight="bold" truncate size="small">
                  {metadata.track}
                </Text>
                <Text size="small">{metadata.artist}</Text>
              </Box>
            </Box>
          </Box>
          <Box direction="column" align="center" width="large" justify="center">
            {/* {playback && (
              <PlaybackControl
                selectedGroup={selectedGroup}
                playback={playback}
                slim={true}
              />
            )} */}
            <GroupControl
                group={group}
                // refreshPlaybackStatus={() => {
                //   getPlaybackStatus();
                // }}
              />
            <Box width="medium">
              <Box justify="between" direction="row" fill="horizontal">
                <Text size="small">
                  {playbackState ? playbackState.positionMillis : ''}
                </Text>
                <Text size="small">{metadata.durationMillis}</Text>
              </Box>
              <ThemeContext.Extend
                value={{
                  global: {
                    spacing: '5px',
                  },
                  rangeInput: {
                    track: {
                      height: '4px',
                      // extend: () => `border-radius: 10px`
                    },
                    thumb: {
                      extend: () => `
                    height: 5px;
                    width: 5px;
                    border: 1px solid '#fff';
                  `,
                    },
                  },
                }}
              >
                {playbackState && (
                  <RangeInput
                    value={playbackState.positionMillis}
                    height="5px"
                    max={metadata.durationMillis}
                    min={0}
                  />
                )}
              </ThemeContext.Extend>
            </Box>
          </Box>
          <Box
            direction="column"
            width="small"
            justify="between"
            align="start"
            margin={{ top: 'medium', bottom: 'small' }}
          >
            <Box direction="row" align="start" justify="between" width="small">
              <Icons.Queue size="small" />
              <Icons.Group size="small" />
            </Box>
            <Box
              direction="row"
              width="small"
              align="center"
              justify="between"
              gap="small"
              margin={{ top: '20px' }}
            >
              <Box width="20px">
                {muted ? (
                  <Icons.Mute
                    size="small"
                    onClick={() => {
                      toggleMute();
                    }}
                  />
                ) : (
                  <Icons.Volume
                    size="small"
                    onClick={() => {
                      toggleMute();
                    }}
                  />
                )}
              </Box>
              <ThemeContext.Extend
                value={{
                  global: {
                    spacing: '10px',
                  },
                  rangeInput: {
                    track: {
                      height: '5px',
                      // extend: () => `border-radius: 10px`
                    },
                    thumb: {
                      extend: () => `
                  height: 10px;
                  width: 10px;
                `,
                    },
                  },
                }}
              >
                <RangeInput
                  value={volume}
                  // onChange={(
                  //     event: React.ChangeEvent
                  // ): void => {
                  //     const target = event.target as HTMLInputElement;
                  //     adjustVolume(Number(target.value));
                  // }}
                  max={100}
                  min={0}
                  height="10px"
                />
              </ThemeContext.Extend>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box>NO CURRENT PLAYER</Box>
      )}
    </div>
  );
};

PlaybackBar.propTypes = {
  metadata: PropTypes.object,
  groupId: PropTypes.string,
  group: PropTypes.object,
};

export default PlaybackBar;
