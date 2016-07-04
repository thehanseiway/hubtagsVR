import app from 'ampersand-app';
import React from 'react';
import ampersandMixin from 'ampersand-react-mixin';

export default React.createClass({
    mixins: [ampersandMixin],

    getInitialState() {
        const {name, color} = this.props.label;
        return {name, color};
    },

    onEditClick(event) {
        event.preventDefault();
        this.props.label.editing = true;
    },

    onCloseClick(event) {
        event.preventDefault();
        const {label} = this.props;
        if (label.saved) {
            label.editing = false;
            this.setState(this.getInitialState());
        } else {
            label.destroy();
        }
    },

    onNameChange(event) {
        this.setState({
            name: event.target.value,
        });
    },

    onColorChange(event) {
        this.setState({
            color: event.target.value.slice(1),
        });
    },

    deleteLabel() {
        let confirmDelete = confirm('Are you sure?');

        if ( confirmDelete ) {
            this.props.label.destroy(function () {
                alert('Label is deleted!');
            });
        }

        return false;
    },

    saveChanges(event) {
        event.preventDefault();
        const {label} = this.props;
        if (label.saved) {
            label.update(this.state);
        } else {
            label.save(this.state);
        }
        label.editing = false;
    },

    render() {
        const {label} = this.props;
        const {color} = this.state;
        const cssColor = '#' + color;
        let content;

        if(label.editing) {
            content = (
                <form onSubmit={this.saveChanges} className="label">
                    <span className="label-color avatar avatar-small avatar-rounded" style={{backgroundColor: cssColor}}>&nbsp;</span>
                    <input type="text" name="name" onChange={this.onNameChange} value={this.state.name}/>
                    <input type="text" name="color" onChange={this.onColorChange} value={cssColor}/>
                    <button type="submit" className="button button-small">Save</button>
                    <button onClick={this.onCloseClick} type="button" className="button button-small button-unstyled">Cancel</button>
                </form>
            )
        } else {
            content = (
                <div className='label'>
                    <span className="label-color" style={{backgroundColor: cssColor}}>&nbsp;</span>
                    <span>{this.state.name}</span>
                    <span className="octicon octicon-pencil" onClick={this.onEditClick}></span>
                    <span className="octicon octicon-x" onClick={this.deleteLabel}></span>
                </div>
            )
        }

        return (
            <li>
                {content}
            </li>
        )

    }
})
