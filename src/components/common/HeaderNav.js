import React from 'react';
// import {Alignment, Navbar, Button, NavbarGroup} from '@blueprintjs/core';
import {Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export default ({isAuthed, handleLogout}) => (
    <Menu>
        <Menu.Item name="home">
            <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Menu position="right">
            {isAuthed ? (
                <Menu.Item name="logout">
                    <button onClick={handleLogout}>Log out</button>
                </Menu.Item>
            ) : (
                <>
                    <Menu.Item name="signup">
                        <Link to="/signup">Sign Up</Link>
                    </Menu.Item>
                    <Menu.Item name="signin">
                        <Link to="/signup">Sign In</Link>
                    </Menu.Item>
                </>
            )}
        </Menu.Menu>
    </Menu>
);
