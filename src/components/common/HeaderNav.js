import React from 'react';
// import {Alignment, Navbar, Button, NavbarGroup} from '@blueprintjs/core';
import {Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export default ({isAuthed, activeItem, handleLogout}) => (
    <Menu>
        <Menu.Item name="home" active={activeItem === 'home'}>
            <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Menu position="right">
            {isAuthed ? (
                <Menu.Item name="logout" active={activeItem === 'logout'}>
                    <a onClick={handleLogout}>Log out</a>
                </Menu.Item>
            ) : (
                <>
                    <Menu.Item name="signup" active={activeItem === 'signup'}>
                        <Link to="/signup">Sign Up</Link>
                    </Menu.Item>
                    <Menu.Item name="signin" active={activeItem === 'signin'}>
                        <Link to="/signup">Sign In</Link>
                    </Menu.Item>
                </>
            )}
        </Menu.Menu>
    </Menu>
);
