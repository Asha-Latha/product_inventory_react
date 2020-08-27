import React from 'react';
import { Link } from 'react-router-dom';
import '../userControl/login.css';
import axios from 'axios';
import Header from '../header/header';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: []

    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  validate = (email, password) => {
    const errors = [];
    if (email.length < 5) {
      errors.push("Email should be at least 5 charcters long");
    }
    if (email.split("").filter(x => x === "@").length !== 1) {
      errors.push("Email should contain a @");
    }
    if (email.indexOf(".") === -1) {
      errors.push("Email should contain at least one dot");
    }

    if (password.length < 2) {
      errors.push("Password should be at least 6 characters long");
    }

    return errors;
  }

  handleSubmit(e) {
    console.log("Inside handle submit functin")
    e.preventDefault();
    const { email, password } = this.state;
    const errors = this.validate(email, password);
    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }
    this.userLogin()
  }

  userLogin = async () => {

    console.log('user login')
    const data = await axios.get('http://localhost:3000/addregistration?email=' + this.state.email);
    console.log(data);
    if (data.data.length !== 0) {
      if (this.state.password === data.data[0].password) {
        this.props.history.push("/side-menu")
      }
      else {
        alert("invalid user")
        console.log("invalid user")
        this.props.history.push("/login")
      }
    }
  }

  getEmail = (e) => {
    console.log(e.target.value);
    this.setState({ email: e.target.value })
  }

  getPassword = (e) => {
    console.log(e.target.value);
    this.setState({ password: e.target.value })
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <Header></Header>
        <div id="errormsg">  {errors.map(error => (
          <p data-testid='p' key={error}>Error: {error}</p>
        ))}</div>
        <div id="loginpage">
          <form id="flogin" onSubmit={this.handleSubmit}>

            <div className="border-box" >

              <h2 data-testid='h2'>Login Form</h2>

              <label  >Email:</label>
              <input type="text" name="username" placeholder="Enter Email" id="uname" onChange={this.getEmail}
                value={this.state.email}
              ></input> <br></br>
              <label  >Password:</label>
              <input type="password" name="password" placeholder="Enter Password" id="upass" value={this.state.password} onChange={this.getPassword}></input>

            </div>

            <button type="submit" value="Login" id="submit" > Login</button> &nbsp;<Link to="/register">New Member</Link>
          </form>
        </div>
      </div>
    );
  }

}

export default Login;