import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

export default class Navigationbar extends React.Component {
    render() {
        return ( 
            <div className="container">
                <Navbar bg="dark" variant="dark" expand="medium">
                    <Nav variant="pills" defaultActiveKey="/home">
                        <Nav.Link href="/home">Active</Nav.Link>
                        <Nav.Link eventKey="link-1">Option 1</Nav.Link>
                        <Nav.Link eventKey="link-2">Option 2</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        );   
    }
}

