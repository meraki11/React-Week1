import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';

export default class Navigationbar extends React.Component {
    render() {
        return ( 
            <div className="NavContainer">
                <Navbar bg="dark" variant="dark" expand="medium">
                    <div id="nav_bar">
                        <ul>
                            <li className="menuItems"><a href="">Home</a></li>
                            <li className="menuItems"><a href="">Today</a></li>
                            <li className="menuItems"><a href="">Tomorrow</a></li>
                            <li className="menuItems"><a href="">Year</a></li>
                        </ul>
                    </div>
                </Navbar>
            </div>
        );   
    }
}

