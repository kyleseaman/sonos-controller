import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactJSON from 'react-json-view';
import { Box, Grid } from 'grommet';

class JSONView extends Component {
    componentDidMount() {
      console.log(this.state);
    }

    render() {
      const content = this.props;
      console.log(content);
      return (
        <div>
          json view
          <Grid
            rows={['xxsmall', 'large']}
            columns={['fill', 'fill']}
            gap='small'
            areas={[
              { name: 'header', start: [0,0], end: [1,0]},
              { name: 'left', start: [0,1], end: [0,1]},
              { name: 'right', start: [1,1], end: [1,1]},
            ]}
          >
            <Box gridArea='header' background='dark-2' ></Box>
            <Box gridArea='left' background='light-2' >LEFT?</Box>
            <Box gridArea='right' background='light-2' >
              <div style={{fontSize: '1.5em'}}>
                <ReactJSON src={content} enableClipboard={false} name='HouseHolds' displayDataTypes={false} displayObjectSize={false} />
              </div>
            </Box>
          </Grid>
        </div>
      )
    }
}

JSONView.propTypes = {
  content: PropTypes.object,
}

export default JSONView;