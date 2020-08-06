import React from 'react';
import '../userControl/register.css';

class Register extends React.Component {
    state = {  }
    render() { 
        return ( 
            
            <div id="registerpage">                
<form action="">
<h2>Registration Form</h2>
 
<label for="r1" id="fn">First Name :</label>
<input type="text" name="fname" id="r1"></input><br></br>
 
<label  for="r2" id="ln">Last Name :</label>
<input type="text" name="lname" id="r2"></input><br></br>
  
<label  for="r4" id="pwd">Password :</label>
<input type="password" name="pass" id="r4"></input><br></br>
 
<label  for="r5" id="em">Email :</label>
<input type="text" name="email" id="r5"></input><br></br>
 
<label  for="r6" id="mn">Mobile No :</label>
<input type="text" name="mno" id="r6"></input>
 


<button type="submit" value="Submit" id="button">Register</button>
<a href=" ">Back to Home</a>
</form>
            </div>
         );
    }
}
 
export default Register;