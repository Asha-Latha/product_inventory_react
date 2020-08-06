import React from 'react';
import {Link} from 'react-router-dom';
import '../userControl/login.css';
import axios from 'axios';

class Login extends React.Component {
    constructor(props){
        super(props);
 this.state={
    uname : "",
    upass: ""
   
 }
}
    getUsername=(e)=>{
      console.log(e.target.value);
      this.setState({uname: e.target.value})
    }

    getPassword=(e)=>{
       console.log(e.target.value);
       this.setState({upass: e.target.value})
    }

    userLogin=(e)=>{
        console.log('user login')
        let loginRequestBody = {
            "userName": this.state.uname,
            "password": this.state.upass
        }

        axios.post('http://localhost:3000/logindetails', loginRequestBody)
        .then(response=>{
            console.log(response);
            // this.props.history.push('/')
        }, error=>{
            console.error(error);
        })
}
    
    
    render() { 
        return ( 
            <div id="loginpage">
                <form id="flogin">
 
<div class="border-box">
<h2>Login Form</h2>

<label for="uname" id="un">Username:</label>
<input type="text" name="username" placeholder="Enter Username" id="uname" onChange={this.getUsername}></input><br></br>
 
<label for="upass" id="ps">Password:</label>
<input type="password" name="password" placeholder="Enter Password" id="upass" onChange={this.getPassword}></input>
 
{/* <button type="submit" value="Login" onClick={this.userLogin} id="submit"><Link to="/side-menu">Login</Link></button> */}
<button type="submit" value="Login" onClick={this.userLogin} id="submit"><Link to="/side-menu">Login</Link></button>
 
<a href="register.html">New Member</a>
 </div> 
 
</form>               
            </div>
         );
    }

}
 
export default Login;