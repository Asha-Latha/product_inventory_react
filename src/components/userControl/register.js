import React from 'react';
import '../userControl/register.css';
import Axios from 'axios';
class Register extends React.Component {
    constructor(props){
        super(props)
        this.state={
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            mobile:'',
            buttonStatus: true,
            firstNameError:'',
            lastNameError:'',
            emailError:'',
            passwordError:'',
            mobileError:''
    };
}

checkFirstNameValidation=()=>{
if(this.state.firstName.length<3){
    this.setState({
        firstNameError:'Name must contain min 3 characters',
        buttonStatus:true
    })}
    else{
    this.setState({
        firstNameError:'',
        buttonStatus:false
    }     
    )
}

}
checkLastNameValidation=()=>{
    if(this.state.lastName.length<3){
        this.setState({
            lastNameError:'Name must contain min 3 characters',
            buttonStatus:true
        })}
        else{
        this.setState({
            lastNameError:'',
            buttonStatus:false
        }     
        )
    }

}
checkEmailValidation=()=>{
    if(!this.state.email.includes("@"&&"com")){
      this.setState({
          emailError:'Enter valid email',
          buttonStatus:true
      })}
      else{

      this.setState({
          emailError:'',
          buttonStatus:false
      })
    }

}
checkPasswordValidation=()=>{

    if(this.state.password.length<5){
      this.setState({
          passwordError:'Password should contain minimum 5 characters',
          buttonStatus:true
      })}
      else{
        this.setState({
            passwordError:'',
            buttonStatus:false
        })
    }

}
checkMobileValidation=()=>{

    if(this.state.mobile.length<9){
        this.setState({
            mobileError:'Enter 10 digits mobile no',
            buttonStatus:true
        })
    }
   else{
    this.setState({
        mobileError:'',
        buttonStatus:false
    })
   }
}
    getFirstName=(e)=>{
        this.checkFirstNameValidation()
        this.setState({firstName:e.target.value})   
        console.log(e.target.value);
        this.checkFirstNameValidation();
    }

    getLastName=(e)=>{
        this.checkLastNameValidation()
        this.setState({lastName:e.target.value})

        console.log(e.target.value);
        this.checkLastNameValidation();
    }

    getEmail=(e)=>{
        this.checkEmailValidation()
        this.setState({email:e.target.value})
        console.log(e.target.value);
        this.checkEmailValidation()
    }

    getPassword=(e)=>{
        this.checkPasswordValidation()
        this.setState({password:e.target.value})
        console.log(e.target.value);
        this.checkPasswordValidation()
    }
    getMobile=(e)=>{
        this.checkMobileValidation()
        this.setState({mobile:e.target.value})
        console.log(e.target.value);
        this.checkMobileValidation()
    }

    register=()=>{
        console.log('user registration')
        let registerRequestBody = {
            "firstName": this.state.firstName,
            "lastName": this.state.lastName,
            "email":this.state.email,
            "password":this.state.password,
            "mobile":this.state.mobile
        }
     //   console.log(registerRequestBody)
  if(this.state.firstNameError===''&&this.state.lastNameError===''&&this.state.emailError===''&&this.state.passwordError==='' && this.state.mobileError===''){
        Axios.post('http://localhost:3000/addregistration', registerRequestBody)
        .then(response=>{
            console.log("registration done");
            console.log(response);
            this.props.history.push('/login')
        }, error=>{
            console.error(error);
        })
    }else{
        alert('Enter valid details')
    }

    }
    render() { 
        return (        
            <div id="registerpage">                
<form action="" noValidate>
<h2>Registration Form</h2>
 
<label  id="fn">First Name :</label>
<input type="text" name="fname" id="firstName" onChange={this.getFirstName}></input><br></br>
  <p style={{color:"red",fontSize:12,fontFamily:"italic"}}>{this.state.firstNameError}</p> 
 
<label   id="ln">Last Name :</label>
<input type="text" name="lname" id="lastName" onChange={this.getLastName}></input><br></br>
   <p style={{color:"red",fontSize:12,fontFamily:"italic"}}>{this.state.lastNameError}</p> 

<label  id="em">Email :</label>
<input type="text" name="email" id="email" onChange={this.getEmail}></input><br></br>
   <p style={{color:"red",fontSize:12,fontFamily:"italic"}}>{this.state.emailError}</p> 
  
<label  id="pwd">Password :</label>
<input type="password" name="pass" id="password" onChange={this.getPassword}></input><br></br>
   <p style={{color:"red",fontSize:12,fontFamily:"italic"}}>{this.state.passwordError}</p> 

<label  id="mn">Mobile No :</label>
<input type="text" name="mno" id="mobile" onChange={this.getMobile}></input>
  <p style={{color:"red",fontSize:12,fontFamily:"italic"}}>{this.state.mobileError}</p> 


</form>

<button type="submit" value="Submit" id="button" onClick={this.register} disabled={this.state.buttonStatus}>Register</button>
            </div>
         );
    }
}
 
export default Register;