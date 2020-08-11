import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/logo.jpg';


class Logout extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>  
            <img src={logo} alt="logo" id="logo"></img>
              <h4>Product Inventory Management</h4>
                <Link to='/login' id="login">Logout</Link> &nbsp;     
            </div>
         );
    }
}
 
export default Logout;