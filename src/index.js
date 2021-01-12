/*
* index.js
*/
// 引包
import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom'

// 引入路由组件
import Demo from './container/demo/demo'
import Login from './container/login/login'
import Register from './container/register/register'
import Main from './container/main/main'

ReactDOM.render((
    <HashRouter>
      <Switch>
        <Route path='/demo' component={Demo}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/register' component={Register}></Route>
        <Route path='/main' component={Main}></Route>
        <Redirect from="/*" to="/login" />
      </Switch>
    </HashRouter>
), document.getElementById('root'))
