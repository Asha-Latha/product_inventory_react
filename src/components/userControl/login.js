import React from 'react';
import {Link} from 'react-router-dom';
import '../userControl/login.css';
import axios from 'axios';
import qs from "qs";
import {withRouter} from 'react-router-dom';
import Header from '../header/header';


class Login extends React.Component {
    constructor(props){
        super(props);
 this.state={
    email : "",
    password: "",
    emailError:"",
    passwordError:"",
    buttonStatus:true  
 }
}


getEmail=(e)=>{
      console.log(e.target.value);
      this.setState({email: e.target.value})

    }

    getPassword=(e)=>{
       console.log(e.target.value);
       this.setState({password: e.target.value})
    }

    // valid=()=>{

    //     if(!this.state.email.includes("@") && this.state.password.length<5){
    //         this.setState({emailError:"Enter valid email",passwordError:"Password length should be more than 5",buttonStatus:true})
    //      return false;
    //     }
    //     this.setState({
    //         emailError:'',
    //         buttonStatus:false
    //     })
    //     return true
    // }
    userLogin= async() =>{
        console.log('user login')
         const data= await axios.get('http://localhost:3000/addregistration?email='+ this.state.email);
         console.log(data);
          if(data.data.length !== 0){         
             if(this.state.password === data.data[0].password){
                this.props.history.push("/side-menu")
             }
             else{
                 alert("invalid user")
                 console.log("invalid user")
                 this.props.history.push("/login")
             }
         }
        }   
    
    render() { 
        return (
            <div>
            <Header></Header>
            <div id="loginpage">

                
                <form id="flogin" >
<div className="border-box">

<h2>Login Form</h2>

<label  >Email:</label>&nbsp;&nbsp;&nbsp;&nbsp;
<input type="text" name="username" placeholder="Enter Email" id="uname" onChange={this.getEmail}></input><br></br>
        {/* <p style={{color:"red",fontSize:12,fontFamily:"italic"}}>{this.state.emailError}</p> */}
<label  >Password:</label>
<input type="password" name="password" placeholder="Enter Password" id="upass" onChange={this.getPassword}></input>
{/* <p>{this.state.passwordError}</p> */}
</div> 
</form> 
 <button type="submit" value="Login" id="submit" onClick={this.userLogin}>Login</button> &nbsp;
 
<Link to="/register">New Member</Link>
 
 
</div> 
            </div>
         );
    }

}
 
export default Login;