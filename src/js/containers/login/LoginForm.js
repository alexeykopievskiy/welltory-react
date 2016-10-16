import React from 'react'
import { Field, reduxForm } from 'redux-form'

let LoginForm = props => {

  const { handleSubmit } = props

  return (
    <form class="new_user" id="new_user" onSubmit={handleSubmit}>
      <div class="form-group">
        <label htmlFor="email">E-mail</label>
        <Field name="email" component="input" type="email" className="form-control"/>
      </div>
      <div class="form-group">
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="password" className="form-control"/>
      </div>
      <button className="btn btn-primary">Login</button>
    </form>
  )

}

LoginForm = reduxForm({
  form: 'loginForm'
})(LoginForm);

export default LoginForm
