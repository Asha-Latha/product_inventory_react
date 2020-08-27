import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/logo.jpg';
import leftarrow from '../../images/leftarrow.png'


class Logout extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>  
            <img src={logo} alt="logo" id="logo"></img>
              <h4 data-testid='h4'>Product Inventory Management</h4>
                <Link to='/displayAllProducts' > <img src={leftarrow} alt="logo" width="70" id="leftarrow"></img></Link> &nbsp;     
            </div>
         );
    }
}
 
export default Logout;