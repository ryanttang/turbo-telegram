import { decorate, observable, action } from 'mobx';
import makeInspectable from 'mobx-devtools-mst';

class Store {
  loggedIn = false;

  showLoginModal = false;

  loginForm = {
    username: '',
    password: ''
  }

  credentials = {
    username: "bobby",
    password: "dallas"
  }

  updateValue = (e) => {
    e.preventDefault();
    const {name, value} = e.target;
    this.loginForm[name] = value;
  }

  checkCredentials = () => {
    if(this.loginForm.username === this.credentials.username && this.loginForm.password === this.credentials.password){
      this.loggedIn = true;
      this.showLoginModal = false;
    }
  
  } 
  
  toggleModal = () => {
    this.showLoginModal = !this.showLoginModal;
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
  logOut: action,
  loginForm: observable,
  updateValue: action
})

const loginStore = new Store();

makeInspectable(loginStore);

export default loginStore;