import axios from 'axios'


export function getToken(values) {


  return function(dispatch) {
    dispatch({type: 'GET_TOKEN'})
    axios({
      method: 'post',
      url: 'https://stage-api.welltory.com/api2/api-token-auth/',
      data: {
        email: values.email,
        password: values.password
      }
    })
    .then(response => {
      dispatch({type: 'GET_TOKEN_FULFILLED', payload: response.data})
    })
    .catch(error => {
      dispatch({type: 'GET_TOKEN_REJECTED', payload: error})
    })
  }
}
