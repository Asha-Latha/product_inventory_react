import React from 'react';
import ReactDOM from 'react-dom'
import { render, getByLabelText } from '@testing-library/react';
import { mount, configure } from "enzyme";
import renderer from 'react-test-renderer'
import { MemoryRouter as Router } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })
import { shallow } from 'enzyme';
import AllProducts from './allproducts'
import AddProduct from './addProduct'
import Category from './addCategory'
import DisplayAllProducts from './displayAllProducts'


it('Product component renders without crashing', () => {
    shallow(<AllProducts />);
})
it('Add Product component renders without crashing', () => {
    shallow(<AddProduct />);
})
it('Category component renders without crashing', () => {
    shallow(<Category />);
})

it(" check product name", () => {
    const wrapper = mount(<input type="text" placeholder="productName" />);
    const input = wrapper.find("input");
    expect(input.prop("type")).toEqual("text");
    expect(input.prop("placeholder")).toEqual("productName");
});

it('display component renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Router><DisplayAllProducts></DisplayAllProducts></Router>, div)
})



