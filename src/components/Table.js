import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import '../css/Table.css';

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
            <td>{quote.interestRate.toFixed(3)}%</td>
            <td>${quote.closingCosts.toFixed(2)}</td>
            <td>${quote.monthlyPayment.toFixed(2)}</td>
            <td>{quote.apr.toFixed(3)}%</td>
          </tr>
        )
      })
    }
    return (<div/>)

  }

  renderNoResults = () => {
    if (this.props.quotes.rateQuotes !== undefined &&
      this.props.quotes.rateQuotes.length === 0) {
      return(
        <div>Sorry there are no rates that matched your inputs</div>
      )
    }
    return(<div />);
  }

  render() {
    return(
      <div id="rateQuoteTable">
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
        {this.renderNoResults()}
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
