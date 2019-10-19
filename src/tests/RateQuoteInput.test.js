import React from 'react';
import ReactDOM from 'react-dom';
import RateQuoteInput from '../components/RateQuoteInput';

describe('<RateQuoteInput />', function() {
  it('should return false', function() {
      testing(0).should.equal(false);
  })
  // it('renders without crashing', function() {
  //   const div = document.createElement('div');
  //   ReactDOM.render(
  //     <RateQuoteInput />, div
  //   );
  //   // ReactDOM.render(<App />, div);
  //   // ReactDOM.unmountComponentAtNode(div);
  // });
})


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
