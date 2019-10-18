import axios from 'axios';

const ROOTURL = 'https://ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod/ratequotes';
const APIKEY = 'RG-AUTH 91b87baf-8bec-403b-bca4-de1bb66d5e12';

export const ActionTypes = {
  GET_RATEQUOTES: 'GET_RATEQUOTES',
}

export function getRateQuotes(inputs) {
  console.log(inputs);
  return (dispatch) => {
    axios.get(`${ROOTURL}`, inputs, { headers: { Authorization: `${APIKEY}`}}).then((response) => {
      console.log(response.data);
    }).catch((err) => {
      console.log(err.message);
    })
  }
}
