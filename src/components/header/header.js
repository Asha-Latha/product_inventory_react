import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.jpg';
import '../header/header.css';

class Header extends React.Component {
    state = {}
    render() {
        return (
            <div>
                <img src={logo} alt="logo" id="logo"></img>
                <h4>Product Inventory Management</h4>
            </div>
        );
    }
}

export default Header;