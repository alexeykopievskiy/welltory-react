import React from 'react'

import LoginPage from './login/LoginPage'

import '../../assets/scss/test.scss'

export default class Layout extends React.Component{

  constructor(props) {
    super(props);

  }

  render() {

    return <div>

      <LoginPage />

    </div>
  }
}
