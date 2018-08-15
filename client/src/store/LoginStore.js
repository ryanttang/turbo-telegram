import { decorate, observable, action } from 'mobx';

const postData = (data) => {
  return fetch('/api/login', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .catch(error => console.error(`Fetch Error =\n`, error))
}
class Store {
  loggedIn = false;

  showLoginModal = false;

  // user vals go here
  loginForm = {
    username: 'vasiliy',
    password: 'hulin'
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
  checkCredentials = async (e) => {
    e.preventDefault();
    let response  = await postData(this.loginForm);
    if (response.success) {
      this.loggedIn = true;
      this.showLoginModal = false;
      this.addToast('win', "Login Successful")
    } else {
      this.addToast('fail', "Login failed")
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

  addToast = (intent, text) => {
    intent === 'win' ? this.toasts.push({success: true, text: text }) : this.toasts.push({success: false, text: text})
    setTimeout(() => this.toasts = [], 2000)
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
  toasts: observable,
  addToast: action
})

const loginStore = new Store();


export default loginStore;