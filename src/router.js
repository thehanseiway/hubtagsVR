import Router from 'ampersand-router';
import React from 'react';

// Components
import Login from './pages/login';
import Repos from './pages/repos';

export default Router.extend({
    routes: {
        '': 'login',
        'repos': 'repos'
    },

    login() {

        React.render(<Login name='ROSCOVAN IS THE BEST'/>, document.body);

    },

    repos() {

        React.render(<Repos/>, document.body);

    }
})
