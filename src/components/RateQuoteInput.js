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
      propertyType:'Property Type',
      occupancy:'Occupancy',

    };
  }

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

  verifyInputs = () => {
    console.log("hereee")
  }

  handleClick = (event) => {
    this.verifyInputs();
    this.props.getRateQuotes(this.state.loanSize, this.state.creditScore, this.state.propertyType, this.state.occupancy);
  }

  render() {
    return(
      <div className="input_section">
        <div id="inputs">
        <p>Loan Size</p>
        <input id="loanSize" type="number" onChange={this.handleChange}/>

        <p>Property Type</p>
        <DropdownButton id="dropdown-basic-button" title={this.state.propertyType}>
          <Dropdown.Item onClick={this.handlePropertyTypeChange} id="SingleFamily">Single Family</Dropdown.Item>
          <Dropdown.Item onClick={this.handlePropertyTypeChange} id="Condo">Condo</Dropdown.Item>
          <Dropdown.Item onClick={this.handlePropertyTypeChange} id="Townhouse">Townhouse</Dropdown.Item>
          <Dropdown.Item onClick={this.handlePropertyTypeChange} id="MultiFamily">Multi Family</Dropdown.Item>

        </DropdownButton>

        <p>Credit Score</p>
        <input id="creditScore" type="number" onChange={this.handleChange}/>

        <p>Occupancy</p>
        <DropdownButton id="dropdown-basic-button" title={this.state.occupancy} onChange={this.handleChange}>
          <Dropdown.Item onClick={this.handleOccupancyChange} id="Primary">Primary Residence</Dropdown.Item>
          <Dropdown.Item onClick={this.handleOccupancyChange} id="Secondary">Secondary Residence</Dropdown.Item>
          <Dropdown.Item onClick={this.handleOccupancyChange} id="Investment">Investment</Dropdown.Item>
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
