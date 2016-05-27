import Router from './router';
import stylus from './stylus/main.styl';

window.app = {
    init() {
        this.router = new Router();
        this.router.history.start();
    }
};

window.app.init();
