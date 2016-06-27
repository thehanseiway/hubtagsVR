import React from 'react';
import ampersandMixin from 'ampersand-react-mixin';

export default React.createClass({
    mixins: [ampersandMixin],
    displayName: 'RepositoryPage',
    render() {
        const {repos} = this.props;
        return (
            <div>
                <h1>My repos</h1>
                <ul>
                    {repos.map((repo) => {

                        return (
                            <li key={repo.id}>
                            <span className='octicon octicon-repo'></span>
                            <a href={repo.appUrl}>{repo.full_name}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
})
