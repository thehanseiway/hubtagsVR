import React from 'react';

export default React.createClass({
    displayName: 'PublicPage',
    edit() {
        alert('Im using fucking react man!');
    },
    render() {
        return (
            <div className='container'>
                <header role="banner">
                    <h1>{this.props.name}</h1>
                </header>
                <div>
                    <p>We label stuff for your, because, we can&trade;</p>
                    <a href="/login" className="button button-large">
                        <span className='mega-octicon octicon-mark-github'></span>
                        Login with Github
                    </a>
                </div>
            </div>
        );
    }
})
