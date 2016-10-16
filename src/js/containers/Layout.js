import React from 'react'
import { connect } from 'react-redux'

import { getToken } from '../actions/authActions'
import LoginPage from './login/LoginPage'

import '../../assets/scss/test.scss'

@connect(store => {
  return {
    token: store.token
  }
})
export default class Layout extends React.Component{

  constructor(props) {
    super(props);

  }

  componentWillMount() {
    this.props.dispatch(getToken())
  }

  render() {

    return <div>

      <LoginPage />

    </div>
  }
}
