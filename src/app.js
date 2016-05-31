import app from 'ampersand-app';
import Router from './router';
import stylus from './stylus/main.styl';

window.app = app;

app.extend({
    init() {
        this.router = new Router({pushState: true});
        this.router.history.start();
    }
})

app.init();
