import app from 'ampersand-app';
import React from 'react';
import localLinks from 'local-links';

export default React.createClass({
    displayName: 'NavHelper',

    onClick(event) {
        const pathname = localLinks.getLocalPathname(event);

        if(pathname) {
            event.preventDefault();
            app.router.history.navigate(pathname);
        }
    },
    render() {
        return (
            <div onClick={this.onClick}  {...this.props}>
                {this.props.children}
            </div>
        )
    }
})
