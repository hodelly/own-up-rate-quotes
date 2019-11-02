import axios from 'axios';

const ROOTURL = 'https://ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod/quotepages';
const APIKEY = 'RG-AUTH 91b87baf-8bec-403b-bca4-de1bb66d5e12';

export const ActionTypes = {
  GET_RATEQUOTES: 'GET_RATEQUOTES',
  LOADING: 'LOADING',
  ERROR: 'ERROR',
  CLEAR_RATEQUOTES: 'CLEAR_RATEQUOTES',
}

/**
sends inputs to API as query parameters
while waiting for API response, dispatches loading state as true
dispatches API results
**/
export function getRateQuotes(loan, credit, type, occupancy) {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.LOADING, payload: true});
    dispatch({ type: ActionTypes.CLEAR_RATEQUOTES });
    try {
      let response = await axios.get(`${ROOTURL}/`, { headers: { Authorization: `${APIKEY}`},
        params: {
          loanSize: loan,
          creditScore: credit,
          propertyType: type,
          occupancy: occupancy,
        }})
      dispatch({ type: ActionTypes.LOADING, payload: false});
      dispatch({ type: ActionTypes.GET_RATEQUOTES, payload: response.data });
      while(response.data.next) {
        response = await axios.get(`${ROOTURL}/`, { headers: { Authorization: `${APIKEY}`},
          params: {
            page: response.data.next.page,
            requestId: response.data.next.requestId,
          }})
        dispatch({ type: ActionTypes.GET_RATEQUOTES, payload: response.data });
      }
    }
    catch (error) {
      dispatch({ type: ActionTypes.LOADING, payload: false});
      dispatch({ type: ActionTypes.ERROR, payload: true });
    }
  }
}
