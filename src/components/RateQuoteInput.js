import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DropdownButton, Button, Dropdown, Form } from 'react-bootstrap';
import { getRateQuotes } from '../actions';

import '../css/RateQuoteInput.css';

class RateQuoteInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loanSize: '',
      creditScore:'',
      propertyType:'',
      occupancy:'',
      showErrors: false,
      errors: '',
    };
  }

  /* On change methods */
  handleChange = (event) => {
    if (event.target.id === 'loanSize') {
      this.setState({
        [event.target.id]: "$" + event.target.value,
      });
    }
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handlePropertyTypeChange = (event) => {
    this.setState({propertyType: event.target.id});
  }

  handleOccupancyChange = (event) => {
    this.setState({occupancy: event.target.id});
  }

  /* Verifies inputs are in correct form before sending to API */
  verifyInputs = () => {
    // make sure all inputs have been entered
    if (this.state.propertyType === '' || this.state.occupancy === '' ||
        this.state.loanSize === '' || this.state.creditScore === '') {
      this.setState({errors: 'emptyField'});
      return false;
    }
    // check credit score integer between 300 and 800
    if (300 > this.state.creditScore || this.state.creditScore > 800 || !Number.isInteger(Number(this.state.creditScore))) {
      this.setState({ errors: 'credit' });
      return false;
    }
    return true;
  }

  /* if inputs are verfied, sends inputs to API or it shows errors */
  handleClick = (event) => {
    if (this.verifyInputs()) {
      this.props.getRateQuotes(this.state.loanSize, this.state.creditScore,
        this.state.propertyType.replace(/\s/g, ''), this.state.occupancy.replace(" Residence", ''));
      this.setState({ showErrors: false });
    } else {
      this.setState({ showErrors: true });
    }
  }

  /* error messages if user tries to submit incorrect loan information */
  renderErrorMessage = () => {
    if (this.state.showErrors) {
      if ('credit' === this.state.errors) {
        return(
          <div className="error">*Credit Score must be an integer between 300 and 800</div>
        );
      }
      if ('emptyField' === this.state.errors) {
        return(
          <div className="error">*Please fill out all fields</div>
        );
      }

    }
    return(<div className="error"/>);

  }

  render() {
    return(
      <Form className="form">
        <div className="input_section">
          <div className="input_column">

            <Form.Group className="input">
              <Form.Label>Loan Size</Form.Label>
              <p id="dollarSign">$</p>
              <Form.Control id="loanSize" type="number" onChange={this.handleChange}/>
            </Form.Group>

            <Form.Group className="input">
              <Form.Label>Credit Score</Form.Label>
              <Form.Control id="creditScore" type="number" min="300" max="800" onChange={this.handleChange}/>
            </Form.Group>

          </div>
          <div className="input_column">
            <div className="input">
              <p>Property Type</p>
              <DropdownButton id="dropbutton" variant="secondary" title={this.state.propertyType}>
                <Dropdown.Item onClick={this.handlePropertyTypeChange} className="dropitem" id="Single Family">Single Family</Dropdown.Item>
                <Dropdown.Item onClick={this.handlePropertyTypeChange} className="dropitem" id="Condo">Condo</Dropdown.Item>
                <Dropdown.Item onClick={this.handlePropertyTypeChange} className="dropitem" id="Townhouse">Townhouse</Dropdown.Item>
                <Dropdown.Item onClick={this.handlePropertyTypeChange} className="dropitem" id="Multi Family">Multi Family</Dropdown.Item>
              </DropdownButton>
            </div>

            <div className="input">
              <p>Occupancy</p>
              <DropdownButton id="dropbutton" variant="secondary" title={this.state.occupancy} onChange={this.handleChange}>
                <Dropdown.Item onClick={this.handleOccupancyChange} className="dropitem" id="Primary Residence">Primary Residence</Dropdown.Item>
                <Dropdown.Item onClick={this.handleOccupancyChange} className="dropitem" id="Secondary Residence">Secondary Residence</Dropdown.Item>
                <Dropdown.Item onClick={this.handleOccupancyChange} className="dropitem" id="Investment">Investment</Dropdown.Item>
              </DropdownButton>
            </div>
            <div id="button">
               <Button id="rateQuoteButton" onClick={this.handleClick}>Quote Rates</Button>
            </div>
          </div>
        </div>
        {this.renderErrorMessage()}


      </Form>


    )

  }
}
export default connect(null, { getRateQuotes })(RateQuoteInput);
