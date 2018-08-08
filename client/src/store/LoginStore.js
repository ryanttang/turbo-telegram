import { decorate, observable, action } from 'mobx';
import makeInspectable from 'mobx-devtools-mst';

class Store {
  loggedIn = false;

  showLoginModal = false;

  // user vals go here
  loginForm = {
    username: '',
    password: ''
  }

  credentials = {
    username: "bobby",
    password: "dallas"
  }

  // onChange of login form
  updateValue = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.loginForm[name] = value;
  }

  // compare user input to credentials
  checkCredentials = (e) => {
    e.preventDefault();
    if (this.loginForm.username === this.credentials.username && this.loginForm.password === this.credentials.password) {
      this.loggedIn = true;
      this.showLoginModal = false;
      this.toasts.push({
        success: true
      })
      setTimeout(() => this.toasts = [], 5000)
    } else {
      this.toasts.push({
        success: false
      })
      setTimeout(() => this.toasts = [], 2000)
    }
  }

  toggleModal = () => {
    this.showLoginModal = !this.showLoginModal;
    this.loginForm = {
      username: '',
      password: ''
    };
  }

  logOut = () => {
    this.loggedIn = false;
  }

  toasts = []

}

decorate(Store, {
  loggedIn: observable,
  showLoginModal: observable,
  checkCredentials: action,
  toggleModal: action,
  logOut: action,
  loginForm: observable,
  updateValue: action,
  toasts: observable
})

const loginStore = new Store();


export default loginStore;