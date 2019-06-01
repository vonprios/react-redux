import React from 'react';
import {Alignment, Navbar, Button, NavbarGroup} from '@blueprintjs/core';

export default () => (
    <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>Blueprint</Navbar.Heading>
            <Navbar.Divider />
        </Navbar.Group>
        <NavbarGroup align={Alignment.RIGHT}>
            <Button className="bp3-minimal" text="Sign Up" />
            <Button className="bp3-minimal" text="Sign In" />
        </NavbarGroup>
    </Navbar>
);
