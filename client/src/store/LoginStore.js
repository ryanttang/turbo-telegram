class Store {
  loggedIn = false;

  showLoginModal = false;

  credentials = {
    username: "bobby",
    password: "dallas"
  }

  checkCredentials = (username, password) => {
    if(username === this.credentials.username && password === this.credentials.password){
      this.loggedIn = true;
    }
  } 

}

const loginStore = new Store();

export default loginStore;