import React from 'react'

import LoginForm from './LoginForm'

export default class LoginPage extends React.Component{

  handleSubmit = values => {
    console.log(values);
  }

  render() {
    return <LoginForm onSubmit={this.handleSubmit} />
  }
}
