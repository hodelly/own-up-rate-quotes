import axios from 'axios';

const ROOTURL = 'https://ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod/quotes';
const APIKEY = 'RG-AUTH 91b87baf-8bec-403b-bca4-de1bb66d5e12';

export const ActionTypes = {
  GET_RATEQUOTES: 'GET_RATEQUOTES',
  LOADING: 'LOADING',
  ERROR: 'ERROR',
}

/**
sends inputs to API as query parameters
while waiting for API response, dispatches loading state as true
dispatches API results
**/
export function getRateQuotes(loan, credit, type, occupancy) {
  return (dispatch) => {
    dispatch({ type: ActionTypes.LOADING, payload: true});
    axios.get(`${ROOTURL}/`, { headers: { Authorization: `${APIKEY}`},
      params: {
        loanSize: loan,
        creditScore: credit,
        propertyType: type,
        occupancy: occupancy,
      }}).then((response) => {
        dispatch({ type: ActionTypes.LOADING, payload: false});
        dispatch({ type: ActionTypes.GET_RATEQUOTES, payload: response.data });
    }).catch((err) => {
      dispatch({ type: ActionTypes.LOADING, payload: false});
      dispatch({ type: ActionTypes.ERROR, payload: true });
    })
  }

}
