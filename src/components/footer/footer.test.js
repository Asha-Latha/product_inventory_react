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
import Footer from './footer'

it('Footer component renders without crashing', () => {
    shallow(<Footer />);
})