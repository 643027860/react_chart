import React, {Component} from 'react'

import { Button} from 'antd-mobile'

import './login.less'

export default class Login extends Component {
  render() {
    return (
      <div className='demo'>
        Login
        <Button type="primary">primary</Button>
      </div>
    )
  }
}
