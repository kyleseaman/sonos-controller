import React from 'react';
import Auth from '../utils/auth';

class Callback extends React.Component {
    render () {
        const auth = new Auth();
        // auth.handleAuthentication();
        return (
            <div>Loading...</div>
        )
    }
}

export default Callback;