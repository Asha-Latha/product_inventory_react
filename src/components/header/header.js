import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/logo.jpg';
import '../header/header.css';

class Header extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
             
            <img src={logo} alt="logo" id="logo"></img>
              <h4>Product Inventory Management</h4>
                 
                {/* <h2 id="header">Header Component</h2> */}
                <Link to='/login' id="login">Login</Link> &nbsp;
                <Link to='/register' id="register">Register</Link>
                
            </div>
         );
    }
}
 
export default Header;