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
          <Button onClick={props.store.toggleModal}>Close</Button>
        </Tooltip>

      </div>
    </div>
  </Dialog>
)

export default observer(LoginModal);