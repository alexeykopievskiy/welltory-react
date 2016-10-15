import axios from 'axios'

const EMAIL = 'smirnoffmg@gmail.com'
const PASSWORD = 123456

export function getToken() {
  return function(dispatch) {
    dispatch({type: 'GET_TOKEN'})
    axios({
      method: 'post',
      url: 'https://stage-api.welltory.com/api2/api-token-auth/',
      data: {
        email: EMAIL,
        password: PASSWORD
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
