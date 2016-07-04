import React from 'react';
import ampersandMixin from 'ampersand-react-mixin';
import LabelItem from '../components/labelItem';

export default React.createClass({
    mixins: [ampersandMixin],
    displayName: 'RepoDetails',
    onAddClick() {
        this.props.labels.add({
            'name':'',
            'color': '',
            'editing': true,
            'saved': false,
        },{
            'at': 0,
        });
    },
    render() {
        const {repo, labels} = this.props;

        return (
            <div>
                <h1>{repo.full_name}</h1>
                <p>
                    <button onClick={this.onAddClick} className="button">
                        Add new label <span className="octicon octicon-plus"></span>
                    </button>
                </p>
                <ul>
                {labels.map((label) => {
                    return <LabelItem key={label.name} label={label}/>
                })}
                </ul>
            </div>
        )
    }
})
