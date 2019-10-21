import axios from 'axios';

const ROOTURL = 'https://ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod/quotes';
const APIKEY = 'RG-AUTH 91b87baf-8bec-403b-bca4-de1bb66d5e12';

export const ActionTypes = {
  GET_RATEQUOTES: 'GET_RATEQUOTES',
  LOADING: 'LOADING',
}

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
        dispatch({ type: ActionTypes.GET_RATEQUOTES, payload: response.data });
        dispatch({ type: ActionTypes.LOADING, payload: false});
        console.log(response.data);
    }).catch((err) => {
      console.log(err.message);
    })
  }

}
