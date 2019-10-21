import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DropdownButton, Button, Dropdown, Form } from 'react-bootstrap';
import { getRateQuotes } from '../actions';

import '../css/RateQuoteInput.css';

export class RateQuoteInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loanSize: '',
      creditScore:'',
      propertyType:'',
      occupancy:'',
      showErrors: false,
      errors: '',
      isEditing: false,
    };
  }

  /* On change methods */
  handleChange = (event) => {
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

  /* Formats the loan size number to have commas every 3 digits */
  toCurrency(number) {
    const formatter = new Intl.NumberFormat();
    if (formatter.format(number) === '0') return '';
    return formatter.format(number);
  }

  toggleEditing = () => {
    this.setState({ isEditing: !this.state.isEditing });
  }

  /* Verifies inputs are in correct form before sending to API */
  verifyInputs = (state) => {
    // make sure all inputs have been entered
    if (state.propertyType === '' || state.occupancy === '' ||
        state.loanSize === '' || state.creditScore === '') {
      this.setState({errors: 'emptyField'});
      return false;
    }
    // check credit score integer between 300 and 800
    if (300 > state.creditScore || state.creditScore > 800 || !Number.isInteger(Number(state.creditScore))) {
      this.setState({ errors: 'credit' });
      return false;
    }
    return true;
  }

  /* if inputs are verfied, sends inputs to API or it shows errors */
  handleClick = (event) => {
    if (this.verifyInputs(this.state)) {
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
              {this.state.isEditing ? (
                <Form.Control
                  type="number"
                  id="loanSize"
                  onChange={this.handleChange}
                  onBlur={this.toggleEditing}
                />
              ) : (
                <Form.Control
                  type="text"
                  id="loanSize"
                  value={this.toCurrency(this.state.loanSize)}
                  onFocus={this.toggleEditing}
                  readOnly
                />
              )}
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
