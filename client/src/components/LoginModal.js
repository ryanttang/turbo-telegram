import React from 'react';
import { Dialog, Classes, Tooltip, Button, InputGroup } from '@blueprintjs/core';

const LoginModal = props =>
  <Dialog
    isOpen={props.show}
    className="bp3-dark"
    icon="info-sign"
    onClose={props.toggleModal}
    title="Turbo-Telegram"
    {...this.state} >

    <div className={Classes.DIALOG_BODY}>
      <div>
        <h2>Login</h2>
        <h4>Username:<InputGroup
          leftIcon="tag"
          placeholder="Please enter your username..." /></h4>
        <h4>Password:<InputGroup
          leftIcon="lock"
          placeholder="Please enter your password..." /></h4>
        <Button>Sign In</Button>
      </div>
    </div>
    <div className={Classes.DIALOG_FOOTER}>
      <div className={Classes.DIALOG_FOOTER_ACTIONS}>
        <Tooltip content="This button is hooked up to close the dialog.">
          <Button onClick={props.toggleModal}>Close</Button>
        </Tooltip>

      </div>
    </div>
  </Dialog>

  export default LoginModal;