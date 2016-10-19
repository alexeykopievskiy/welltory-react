import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import configureStore from './store'
import Layout from './containers/Layout'

const store = configureStore()
const app = document.getElementById('app')

ReactDOM.render(
<Provider store={store} >
  <Router history={browserHistory}>
    <Route path="/" component={Layout} />
  </Router>
</Provider>, app)
