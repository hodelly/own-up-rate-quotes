import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import RateQuoteTable from '../components/Table';
import { create } from "react-test-renderer";
import reducers from '../reducers';




describe("Table component", () => {
  const store = createStore(reducers, {}, compose(
    applyMiddleware(thunk),
  ));
  // test("Matches the snapshot", () => {
  //   const component = create(<Provider store = {store}><RateQuoteInput /></Provider>);
  //   expect(input.toJSON()).toMatchSnapshot();
  // });
  test("when loading", () => {

  });
});
