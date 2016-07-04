import Router from './router';
import app from 'ampersand-app';
import Me from './models/me';
import stylus from './stylus/main.styl';
import octicons from 'octicons/build/font/octicons.min.css';

window.app = app;

app.extend({
    init() {
        this.me = new Me();
        this.me.fetchInitialData();
        this.router = new Router({pushState: true});
        this.router.history.start();
    }
})

app.init();
