import axios from 'axios'

export function getToken() {
  return function(dispatch) {
    dispatch({type: 'GET_TOKEN'})
    axios({
      method: 'post',
      url: 'https://stage-api.welltory.com/api2/api-token-auth/'
    })
    .then(response => {
      dispatch({type: 'GET_TOKEN_FULFILLED', payload: response.data})
    })
    .catch(error => {
      dispatch({type: 'GET_TOKEN_REJECTED', payload: error})
    })
  }
}
