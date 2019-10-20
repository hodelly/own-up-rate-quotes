import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';


class RateQuoteTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderInfo = () => {
    if (this.props.quotes.rateQuotes !== undefined) {
      return this.props.quotes.rateQuotes.map((quote, id) => {
        return(
          <tr>
            <td>{quote.lenderName}</td>
            <td>{quote.loanType}</td>
            <td>{quote.interestRate}</td>
            <td>{quote.closingCosts}</td>
            <td>{quote.monthlyPayment}</td>
            <td>{quote.apr}</td>
          </tr>
        )
      })
    }
    return (<div/>)

  }

  render() {
    // console.log(this.props.quotes.rateQuotes[0]);
    return(
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Lender</th>
              <th>Product</th>
              <th>Rate</th>
              <th>Closing Costs</th>
              <th>Monthly Payment</th>
              <th>APR</th>
            </tr>
          </thead>
          <tbody>
            {this.renderInfo()}
          </tbody>
        </Table>
      </div>
    )
  }


}

const mapStateToProps = state => (
  {
    quotes: state.quotes.all,
  }
);

export default connect(mapStateToProps, null)(RateQuoteTable);
