import React, { Component } from 'react';
import { connect } from 'react-redux';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { getRateQuotes } from '../actions';


class RateQuoteInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loanSize: '',
      creditScore:'',
      propertyType:'',
      occupancy:'',

    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  verifyInputs = () => {

  }

  handleClick = (event) => {
    let parameters = {
      loanSize: this.state.loanSize,
      creditScore: this.state.creditScore,
      propertyType: this.state.propertyType, //take out spaces and upper case
      occupancy: this.state.occupancy, //take out spaces and upper case
    }
    this.props.getRateQuotes(parameters);
  }

  render() {
    return(
      <div className="input_section">
        <div id="inputs">
        <p>Loan Size</p>
        <input id="loanSize" type="number" onChange={this.handleChange}/>

        <p>Property Type</p>
        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
          <Dropdown.Item href="#/action-1">Single Family</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Condo</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Town House</Dropdown.Item>
          <Dropdown.Item href="#/action-4">Multi Family</Dropdown.Item>

        </DropdownButton>

        <p>Credit Score</p>
        <input id="creditScore" type="number" onChange={this.handleChange}/>

        <p>Occupancy</p>
        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
          <Dropdown.Item href="#/action-1">Primary Residence</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Secondary Residence</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Investment</Dropdown.Item>
        </DropdownButton>
        </div>
        <div id="button">
           <Button variant="outline-info" onClick={this.handleClick}>Quote Rates</Button>
        </div>
      </div>

    )

  }
}
export default connect(null, { getRateQuotes })(RateQuoteInput);
