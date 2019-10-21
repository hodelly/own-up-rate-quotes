import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import RateQuoteTable from '../components/Table';
import { create } from "react-test-renderer";
import { ActionTypes } from '../actions';


const mockStore = configureStore([]);


describe("Table component", () => {
  let store;
  let component;

  store = mockStore({
    quotes:[],
    loading: false,
    error: false,
  });
  component = renderer.create(
    <Provider store={store}>
      <RateQuoteTable />
    </Provider>
  );

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  store = mockStore({
    quotes:[],
    loading: true,
    error: false,
  });

  it('should render loading spinner', () => {
    // expect(store.dispatch).toHaveBeenCalledWith(
    //   dispatch({ type: ActionTypes.LOADING, payload: true })
    // );
    expect(component.toJSON()).toMatchSnapshot();

  });

  store = mockStore({
    quotes:[],
    loading: false,
    error: true,
  });

  it('should render error', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  store = mockStore({
    quotes:[{
      apr: 13.499999999999998,
      closingCosts: 1000.04,
      interestRate: 4.5,
      lenderName: "TFB Federal Credit Union",
      loanType: "7/1 ARM",
      monthlyPayment: 0.020267,
    }],
    loading: false,
    error: false,
  });

  it('should render table', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });


});
