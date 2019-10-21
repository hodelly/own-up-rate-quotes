import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Spinner } from 'react-bootstrap';
import '../css/Table.css';

class RateQuoteTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderInfo = () => {
    if (this.props.quotes !== undefined) {
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
    }

    return (<tr/>);

  }

  renderNoResults = () => {
    // shows a spinner while we are waiting for API results
    if(this.props.loading) {
      return (
        <Spinner animation="border" variant="secondary" />
      );
    }

    // shows message when no matches
    if (this.props.quotes !== undefined && this.props.quotes.rateQuotes !== undefined &&
      this.props.quotes.rateQuotes.length === 0) {
      return(
        <div>Sorry there are no rates that match your inputs</div>
      );
    }

    // if the API response was an error
    if(this.props.error) {
      return(
        <div>Sorry an error occured while we were trying to fetch your results</div>
      );
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
    loading: state.loading.status,
    error: state.error.status,
  }
);

export default connect(mapStateToProps, null)(RateQuoteTable);
