import app from 'ampersand-app';
import Router from './router';
import stylus from './stylus/main.styl';
import octicons from 'octicons/build/font/octicons.min.css';
import Me from './models/me';

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
