import React from 'react'

const LoginForm = props => {

  return (
    <form class="new_user" id="new_user">
      <div class="form-group">
        <label for="user_email">Email</label>
        <input class="form-control" id="user_email" name="user-n" type="email" />
      </div>
      <div class="form-group">
        <label for="user_password">Password</label>
        <input class="form-control" id="user_password" name="user-p" type="password" />
      </div>
      <div class="checkbox">
        <label for="user_remember_me">
          <input name="user-r" type="hidden" value="0" />
          <input id="user_remember_me" name="user" type="checkbox" value="1" />  Remember me
        </label>
      </div>
      <button className="btn btn-primary">click</button>
    </form>
  )

}

export default LoginForm
