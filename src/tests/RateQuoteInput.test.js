import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { create } from "react-test-renderer";
import { verifyInputs } from '../components/RateQuoteInput';
import RateQuoteInput from '../components/RateQuoteInput';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

const mockStore = configureStore([]);


describe("RateQuoteInput component", () => {
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

  // it('should return false', () => {
  //   const wrapper = shallow(
  //     <Provider store={store}>
  //       <RateQuoteInput />
  //     </Provider>
  //   );
  //   const instance = wrapper.instance();
  //   expect(wrapper.state('loanSize')).toBe('');
  //   expect(instance.verifyInputs()).toBe(false);

    // const state = {
    //   loanSize: '',
    //   creditScore:'',
    //   propertyType:'',
    //   occupancy:'',
    // };
    // expect(state.verifyInputs).to.equal(false);
  })

});
