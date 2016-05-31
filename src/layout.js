import React from 'react';

export default React.createClass({
    displayName: 'Layout',

    render() {
        return (
            <div>
                <nav className='top-nav top-nav-light cf' role='navigation'>
                    <input type='checkbox' id='menu-toggle' className='menu-toggle'/>
                    <label htmlFor='menu-toggle'>Menu</label>
                    <ul className='list-unstyled list-inline cf'>
                        <li>Labelr</li>
                        <li><a href='/repos'>Repos</a></li>
                        <li className='pull-right'><a href='/'>Logout</a></li>
                    </ul>
                </nav>
                <div className='container'>
                    {this.props.children}
                </div>
            </div>
        )
    }
})
