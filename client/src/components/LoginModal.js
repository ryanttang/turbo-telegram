import React from 'react';
import { observer } from 'mobx-react';
import { Dialog, Classes, Tooltip, Button, InputGroup } from '@blueprintjs/core';


const LoginModal = observer(props =>
  <Dialog
    isOpen={props.store.showLoginModal}
    className="bp3-dark"
    icon="info-sign"
    onClose={props.store.toggleModal}
    title="Turbo-Telegram"
  >

    <div className={Classes.DIALOG_BODY}>
      <form onSubmit={props.store.checkCredentials}>
        <h2>Login</h2>
        <h4>Username:<InputGroup
          leftIcon="tag"
          placeholder="Please enter your username..."
          value={props.store.loginForm.username}
          onChange={props.store.updateValue}
          name="username"
        /></h4>
        <h4>Password:<InputGroup
          leftIcon="lock"
          placeholder="Please enter your password..."
          value={props.store.loginForm.password}
          onChange={props.store.updateValue}
          type='password'
          name="password" /></h4>
        <Button type='submit' onClick={props.store.checkCredentials}>Sign In</Button>
      </form>
    </div>
    <div className={Classes.DIALOG_FOOTER}>
      <div className={Classes.DIALOG_FOOTER_ACTIONS}>
        <Button onClick={props.store.toggleModal}>Close</Button>


      </div>
    </div>
  </Dialog>
)

export default LoginModal;