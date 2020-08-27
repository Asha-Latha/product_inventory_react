import React from 'react';
import ReactDOM from 'react-dom'
import { render, getByLabelText } from '@testing-library/react';
import { mount, configure } from "enzyme";
import { MemoryRouter as Router } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })
import { shallow } from 'enzyme';
import Logout from './logout'

it('Logout component renders without crashing', () => {
    shallow(<Logout />);
})

it('check if h4 renders in correct way', () => {
    const { getByTestId } = render(<Router><Logout></Logout></Router>)
    expect(getByTestId('h4')).toHaveTextContent('Product Inventory Management')
})
