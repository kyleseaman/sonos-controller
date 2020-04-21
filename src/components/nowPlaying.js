import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, Text } from 'grommet';
import { More } from 'grommet-icons';

import { formatAlbumArtImageUrl} from '../utils/helper';
import GroupMetadata from './groupMetadata';

const NowPlaying = ({
  group,
  metadata,
}) => {
  return (
    <Box>
        <div>
            {metadata ? (
                <Box
                    direction="column"
                    align="start"
                    justify="start"
                    width="400px"
                    pad={{ left: 'small', right: 'small', vertical: 'small' }}
                >
                    <Box
                        width="400px"
                        height="400px"
                        background={formatAlbumArtImageUrl(metadata)}
                    />
                    <Box align="start" fill="horizontal">
                        <Box
                            direction="row"
                            fill="horizontal"
                            justify="between"
                            margin={{ bottom: '20px' }}
                            align="center"
                        >
                            <Text weight="bold">{metadata.track}</Text>
                            <More />
                        </Box>
                        <Box direction="row" fill="horizontal" justify="start">
                            <Text>{metadata.artist}</Text>
                        </Box>
                        <Box direction="row" fill="horizontal" justify="start">
                            <Text>{metadata.album}</Text>
                        </Box>
                        {/* <Box
                            direction="row"
                            fill="horizontal"
                            justify="between"
                        >
                            <Text>{metadata.container}</Text>
                            <Text>{metadata.containerService}</Text>
                        </Box> */}
                    </Box>
                </Box>
            ) : (
                <Box>NO CURRENT PLAYER</Box>
            )}
        </div>
    </Box>
  );
};

NowPlaying.propTypes = {
  group: PropTypes.object,
  metadata: PropTypes.object,
};

export default NowPlaying;
