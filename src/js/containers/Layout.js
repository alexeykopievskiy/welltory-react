import React from 'react'
import { connect } from 'react-redux'
import { Button, Form, FormGroup, Col, FormControl, ControlLabel } from 'react-bootstrap'

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

    return <div>

      <Form horizontal>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={10}>
            <FormControl type="email" placeholder="Email" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <FormControl type="password" placeholder="Password" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit">
              Sign in
            </Button>
          </Col>
        </FormGroup>
      </Form>
      
    </div>
  }
}
