import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h2 id="header">Header Component</h2>
                <Link to='/login' id="login">Login</Link> &nbsp;
                <Link to='/register' id="register">register</Link>
            </div>
         );
    }
}
 
export default Header;