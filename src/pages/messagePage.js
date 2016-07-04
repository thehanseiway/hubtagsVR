import React from 'react';

export default React.createClass({
    displayName: 'MessagePage',
    render() {
        return (
            <div className='container'>
                <header role="banner">
                    <h2>{this.props.message}</h2>
                </header>
            </div>
        );
    }
})
