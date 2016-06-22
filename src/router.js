import app from 'ampersand-app';
import Router from 'ampersand-router';
import React from 'react';
import LocalLinks from 'local-links';
import qs from 'qs';
import xhr from 'xhr';
// Components
import Layout from './layout';
import NavHelper from './components/navHelper';
import Login from './pages/login';
import Repos from './pages/repos';

export default Router.extend({

    routes: {
        '': 'login',
        'repos': 'repos',
        'user': 'user',
        'auth/callback?:query': 'authCallback'
    },


    renderPage(page, opts = {layout: true}) {

        if(opts.layout) {
            page = (
                <Layout>
                    {page}
                </Layout>
            )
        }

        let navHelper = (
            <NavHelper>
                {page}
            </NavHelper>
        )

        React.render(navHelper, document.body);
    },

    login() {

        this.renderPage(<Login name='ROSCOVAN IS THE BEST'/>, {layout: false});

    },

    repos() {

        this.renderPage(<Repos/>);

    },

    user() {

        window.location = 'https://github.com/login/oauth/authorize?' + qs.stringify({
            client_id: '6147d0e9f59196aed457',
            redirect_uri: window.location.origin + '/auth/callback',
            scope: 'user, repo'
        })

    },

    authCallback(query) {
        query = qs.parse(query);
        console.log( query );

        xhr({
            url: 'https://wladhubtags.herokuapp.com/authenticate/' + query.code,
            json: true
        }, (err, req, body) => {

            app.me.token = body.token;
        });
    }
})
