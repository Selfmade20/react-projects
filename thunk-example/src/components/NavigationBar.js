import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.navbar {
    background-color: purple;
}

.navbar-brand, navbar-nav .nav-link {
    color: orange;

    &:hover {
        color: orange;
    }
}

`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">@The Reducer$</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Users</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/books">Books</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/computers">Computers</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>

)