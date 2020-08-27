import React from 'react';
import ReactDOM from 'react-dom'
import { render, getByLabelText } from '@testing-library/react';
import { mount, configure } from "enzyme";
import Login from '../src/components/userControl/login'
import Register from '../src/components/userControl/register'
import { MemoryRouter as Router } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })
import { shallow } from 'enzyme';

it('login component renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Router><Login></Login></Router>, div)
})

it('check if h1 renders in correct way', () => {
    const { getByTestId } = render(<Router><Login></Login></Router>)
    expect(getByTestId('h2')).toHaveTextContent('Login Form')
})

it(" check email address", () => {
    const wrapper = mount(<input type="text" placeholder="Enter Email" />);
    const input = wrapper.find("input");
    expect(input.prop("type")).toEqual("text");
    expect(input.prop("placeholder")).toEqual("Enter Email");
});

it('register component renders without crashing', () => {
    shallow(<Register />);
})
it(" check first name", () => {
    const wrapper = mount(<input type="text" placeholder="firstName" />);
    const input = wrapper.find("input");
    expect(input.prop("type")).toEqual("text");
    expect(input.prop("placeholder")).toEqual("firstName");
});
it(" check last name", () => {
    const wrapper = mount(<input type="text" placeholder="lastName"/>);
    const input = wrapper.find("input");
    expect(input.prop("type")).toEqual("text");
    expect(input.prop("placeholder")).toEqual("lastName");
});
it(" check password name", () => {
    const wrapper = mount(<input type="password" placeholder="password"/>);
    const input = wrapper.find("input");
    expect(input.prop("type")).toEqual("password");
    expect(input.prop("placeholder")).toEqual("password");
});






// it('check if error renders in correct way', ()=>{
//     const {getByTestId} = render(<Router><Login></Login></Router>)
//     expect(getByTestId('p')).toHaveTextContent('Error:')
//     })




