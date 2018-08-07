import { decorate, observable, action } from 'mobx';
import makeInspectable from 'mobx-devtools-mst';

class Store {
  loggedIn = false;

  showLoginModal = false;

  credentials = {
    username: "bobby",
    password: "dallas"
  }

  checkCredentials (username, password) {
    if(username === this.credentials.username && password === this.credentials.password){
      this.loggedIn = true;
    }
  } 
  
  toggleModal () {
    this.showLoginModal = !this.showLoginModal;
    console.log('hi')
  }

  logOut = () => {
    this.loggedIn = false;
  }

}

decorate(Store, {
  loggedIn: observable,
  showLoginModal: observable,
  checkCredentials: action,
  toggleModal: action,
  logOut: action
})

const loginStore = new Store();

makeInspectable(loginStore);

export default loginStore;