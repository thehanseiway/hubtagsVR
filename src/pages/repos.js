import React from 'react';

export default React.createClass({
    edit() {
        alert('Im using fucking react man!');
    },
    render() {
        return (
            <div>
                <h1>My repos</h1>
                <hr/>
                <button onClick={this.edit}>Tell us</button>
            </div>
        );
    }
})
