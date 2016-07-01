import React from 'react';

export default React.createClass({
    displayName: 'RepoDetails',
    render() {
        const {repo, labels} = this.props.model;
        console.log( labels );
        return (
            <div>
                <h1>{repo.full_name}</h1>
                <ul>
                    {labels.models.map((label) => {

                        return (
                            <li key={label.name}>
                                <span className='octicon octicon-star'></span>
                                <a href={label.url}>{label.name}</a>
                            </li>
                        )

                    })}
                </ul>
            </div>
        )
    }
})
