import app from 'ampersand-app';
import Router from 'ampersand-router';
import React from 'react';
import LocalLinks from 'local-links';
import qs from 'qs';
import xhr from 'xhr';
import config from './config';

// Components
import Layout from './layout';
import NavHelper from './components/navHelper';
import Public from './pages/public';
import Repos from './pages/repos';
import RepoDetails from './pages/repoDetails';
import MessagePage from './pages/messagePage';

function requiresAuth(func) {
    return function () {
        if (app.me.token) {
            return this[func].apply(this, arguments);
        } else {
            return this.redirectTo('/');
        }
    }
}

export default Router.extend({

    routes: {
        '': 'public',
        'repos': requiresAuth('repos'),
        'login': 'login',
        'logout': 'logout',
        'repo/:owner/:name': requiresAuth('repoDetails'),
        'auth/callback?:query': 'authCallback',
        '*fourOhFour': 'fourOhFour',
    },

    renderPage(page, opts = {layout: true}) {

        if(opts.layout) {
            page = (
                <Layout me={app.me}>
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

    repoDetails(owner, name) {

        const model = app.me.repos.getByFullName(owner + '/' + name);
        console.log(model);
        this.renderPage(<RepoDetails repo={model} labels={model.labels}/>);

    },

    public() {

        this.renderPage(<Public name='ROSCOVAN APP'/>, {layout: false});

    },

    repos() {

        this.renderPage(<Repos repos={app.me.repos}/>);

    },

    login() {

        window.location = 'https://github.com/login/oauth/authorize?' + qs.stringify({
            client_id: config.client_id,
            redirect_uri: window.location.origin + '/auth/callback',
            scope: 'user, repo'
        })

    },

    logout() {
        window.localStorage.clear();
        window.location = '/';
    },

    authCallback(query) {
        query = qs.parse(query);

        xhr({
            url: config.authUrl + '/' + query.code,
            json: true
        }, (err, req, body) => {

            app.me.token = body.token;
            this.redirectTo('/repos');
        });

        this.renderPage(<MessagePage message='Fetching data'/>)
    },

    fourOhFour() {
        this.renderPage(<MessagePage message='Not Found 404'/>)
    }
})
