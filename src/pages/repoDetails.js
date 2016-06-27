import React from 'react';

export default React.createClass({
    displayName: 'RepoDetails',
    render() {
        const {repo} = this.props;

        return (
            <div>
                <h1>{repo.full_name}</h1>
                <p></p>
                <ul></ul>
            </div>
        )
    }
})
