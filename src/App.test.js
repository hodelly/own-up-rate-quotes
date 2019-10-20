import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import reducers from './reducers';



it('renders without crashing', () => {
  const div = document.createElement('div');

  const store = createStore(reducers, {}, compose(
    applyMiddleware(thunk),
  ));


  ReactDOM.render(
    <Provider store = {store}>
      <App />
    </Provider>,
    div);
  // ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
