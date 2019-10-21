import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { create } from "react-test-renderer";
import { ActionTypes } from '../actions';
import RateQuoteInput from '../components/RateQuoteInput';
// import reducers from '../reducers';

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
  // const store = createStore(reducers, {}, compose(
  //   applyMiddleware(thunk),
  // ));
  // test("Matches the snapshot", () => {
  //   const component = create(<Provider store = {store}><RateQuoteInput /></Provider>);
  //   expect(input.toJSON()).toMatchSnapshot();
  // });
  test("Inputs are correctly checked", () => {
    // const component = create(<Provider store = {store}><RateQuoteInput /></Provider>);
    const instance = component.root;
    instance.setState({
      loanSize: '',
      creditScore:'',
      propertyType:'',
      occupancy:'',
    });
    instance.verifyInputs();
    expect(instance.state.errors).toBe("emptyField");
  });
});

// describe('<RateQuoteInput />', function() {
//   it('should return false', function() {
//       testing(0).should.equal(false);
//   })
//   // it('renders without crashing', function() {
//   //   const div = document.createElement('div');
//   //   ReactDOM.render(
//   //     <RateQuoteInput />, div
//   //   );
//   //   // ReactDOM.render(<App />, div);
//   //   // ReactDOM.unmountComponentAtNode(div);
//   // });
// })


// describe('#testing', function() {

// })
// describe('#verifyInputs', () => {
//   context('when invalid arguments', () => {
//     it('should return false', () => {
//       () => {
//         let state = {
//           loanSize: '',
//           creditScore:'',
//           propertyType:'Property Type',
//           occupancy:'Occupancy',
//         }
//         verifyInputs();
//       }.should.equal(false);
//     })
//   })
// })
