import React from 'react';
import '../userControl/register.css';
import Axios from 'axios';
import Login from './login';
import Header from '../header/header';
class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            mobile: '',
            errors: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validate = (firstName, lastName, email, password, mobile) => {
        const errors = [];
        if (firstName.length < 5) {
            errors.push("FirstName should contain min 5 characters")
        }
        if (lastName.length < 5) {
            errors.push("LastName should contain min 5 characters")
        }
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
        if (mobile.length < 9) {
            errors.push("Enter valid mobile number")
        }
        return errors;
    }

    getFirstName = (e) => {

        this.setState({ firstName: e.target.value })
        console.log(e.target.value);

    }

    getLastName = (e) => {

        this.setState({ lastName: e.target.value })

        console.log(e.target.value);

    }

    getEmail = (e) => {

        this.setState({ email: e.target.value })
        console.log(e.target.value);

    }

    getPassword = (e) => {

        this.setState({ password: e.target.value })
        console.log(e.target.value);

    }
    getMobile = (e) => {

        this.setState({ mobile: e.target.value })
        console.log(e.target.value);

    }

    handleSubmit(e) {
        console.log("Inside register handle submit function")
        e.preventDefault();
        const { firstName, lastName, email, password, mobile } = this.state;
        const errors = this.validate(firstName, lastName, email, password, mobile);
        if (errors.length > 0) {
            this.setState({ errors });
            return;
        }
        this.register()
    }


    register = () => {
        console.log('user registration')
        let registerRequestBody = {
            "firstName": this.state.firstName,
            "lastName": this.state.lastName,
            "email": this.state.email,
            "password": this.state.password,
            "mobile": this.state.mobile
        }
        Axios.post('http://localhost:3000/addregistration', registerRequestBody)
            .then(response => {
                console.log("registration done");
                console.log(response);
                this.props.history.push('/login')
            }, error => {
                console.error(error);
            })

    }
    render() {

        const { errors } = this.state;
        return (
            <div><Header></Header>
                <div id="registerpage">
                    <form onSubmit={this.handleSubmit}>
                        {errors.map(error => (
                            <p key={error}>{error}</p>
                        ))}
                        <h2>Registration Form</h2>
                        <label>First Name :</label>
                        <input type="text" name="fname" id="firstName" placeholder="firstName" onChange={this.getFirstName}></input><br></br>
                        <label>Last Name :</label>
                        <input type="text" name="lname" id="lastName" placeholder="lastName" onChange={this.getLastName}></input><br></br>
                        <label>Email :</label>
                        <input type="text" name="email" id="email" placeholder="email" onChange={this.getEmail}></input><br></br>
                        <label>Password :</label>
                        <input type="password" name="pass" id="password" placeholder="password" onChange={this.getPassword}></input><br></br>
                        <label>Mobile No :</label>
                        <input type="text" name="mno" id="mobile" placeholder="mobile no" onChange={this.getMobile}></input>
                        <button type="submit" value="Submit" id="button">Register</button></form>
                </div>
            </div>
        );
    }
}

export default Register;