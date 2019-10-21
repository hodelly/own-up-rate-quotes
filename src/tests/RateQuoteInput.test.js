import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { create } from "react-test-renderer";
import { verifyInputs } from '../components/RateQuoteInput';
import {RateQuoteInput} from '../components/RateQuoteInput';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

const mockStore = configureStore([]);


describe("RateQuoteInput component", () => {

  // snapshot
  let store;
  let component;

  store = mockStore({
    quotes:[],
    loading: false,
    error: false,
  });
  component = renderer.create(
    <Provider store={store}>
      <RateQuoteInput />
    </Provider>
  );

  it('should match initial snapshot', () => {
      expect(component.toJSON()).toMatchSnapshot();
  });

  // testing verifyInputs() to make sure it checks inputs correctly before sending to API
  let wrapper;
  let instance;
  const mockLoginfn = jest.fn();

   beforeEach(() => {
     // pass the mock function as the login prop
     wrapper = shallow(<RateQuoteInput store={mockLoginfn}/>)
     instance = wrapper.instance();
   })

  it('should return false because empty state', () => {
    const state = {
      loanSize: '',
      creditScore:'',
      propertyType:'',
      occupancy:'',
    };
    expect(instance.verifyInputs(state)).toBe(false);
  })

  it('should return false because empty credit score', () => {
    const state = {
      loanSize: 3000,
      creditScore:'',
      propertyType:'Condo',
      occupancy:'Investment',
    };
    expect(instance.verifyInputs(state)).toBe(false);
  })

  it('should return false because creditScore incorrect', () => {
    const state = {
      loanSize: 10000,
      creditScore: 280,
      propertyType:'SingleFamily',
      occupancy:'Primary',
    };
    expect(instance.verifyInputs(state)).toBe(false);
  })

  it('should return false because creditScore not an integer', () => {
    const state = {
      loanSize: 10000,
      creditScore: 700.54,
      propertyType:'SingleFamily',
      occupancy:'Primary',
    };
    expect(instance.verifyInputs(state)).toBe(false);
  })

  it('should return true', () => {
    const state = {
      loanSize: 10000,
      creditScore: 700,
      propertyType:'SingleFamily',
      occupancy:'Secondary',
    };
    expect(instance.verifyInputs(state)).toBe(true);
  })

});
