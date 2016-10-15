import React from 'react'
import { connect } from 'react-redux'

import { getToken } from '../actions/authActions'

import '../../assets/scss/test.scss'

@connect(store => {
  return {
    token: store.token
  }
})
export default class Layout extends React.Component{

  componentWillMount() {
    this.props.dispatch(getToken())
  }

  render() {
    return <h1 className="test-n">Hello</h1>;
  }
}
