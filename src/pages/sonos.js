import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box } from 'grommet';

import { getUser } from '../utils/auth';
import Layout from '../components/layout';
import HouseHold from '../components/household';

const SonosAPI = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [households, setHouseholds] = useState([]);

  const getHouseHolds = () => {
    const sonosUser = getUser();
    setLoading(true);
    axios
      .post('/.netlify/functions/sonos-households', {
        accessToken: sonosUser.token.access_token,
      })
      .then(res => {
        setLoading(false);
        setHouseholds(res.data.households);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
        setError(err.message);
      });
  };

  useEffect(() => {
    getHouseHolds();
  }, []);

  return (
    // <Layout>
      // <br />
      <Box background="background-back">
        {loading ? <div>Loading Household</div> : <div></div>}
        {error ? <div>{error}</div> : <div></div>}
        {households.map((hh, i) => (
          <HouseHold key={i} householdId={hh.id} />
        ))}
      </Box>
    // </Layout>
  );
};

export default SonosAPI;
