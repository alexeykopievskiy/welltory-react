import React from 'react'
import { connect } from 'react-redux'

import { getToken } from '../../actions/authActions'
import LoginForm from './LoginForm'

@connect(store => {
  return {
    token: store.auth.token
  }
})
export default class LoginPage extends React.Component{

  constructor(props) {
    super(props)
  }

  handleSubmit = values => {
    this.props.dispatch(getToken(values))
  }

  render() {
    return <LoginForm onSubmit={this.handleSubmit} />
  }
}
