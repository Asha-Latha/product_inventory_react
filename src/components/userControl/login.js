import React from 'react';
import {Link} from 'react-router-dom';

class Login extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div id="login">
                <h2 >Login Component</h2>
                <button type="button"><Link to="/side-menu">Login</Link></button>
                
            </div>
         );
    }
}
 
export default Login;