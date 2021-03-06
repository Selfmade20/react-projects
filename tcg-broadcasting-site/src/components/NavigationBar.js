import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
.navbar {
   background-color: #222;
}

.navbar-brand, .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
        color: orange;
    }
}

`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">The Coding Ground</Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/posts">Posts</Nav.Link></Nav.Item>
            </Nav>
        </Navbar>
    </Styles>
)
