import { decorate, observable, action } from 'mobx';
import LoginStore from './LoginStore';

const postData = (data) => {
  return fetch('/api/createman', {
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

    form = {
        first_name: "john",
        username: "aaaajohn@gmail.com",
        password: "hgreegreenello",
        last_name: "Green",
        phone: "8183338888",
        contact_method: "ceel",
        address_1: "81844 Albertson",
        address_2: "California CA"
      };
    
      updateValue = (e) => {
        const {name, value} = e.target;
        this.form[name] = value;
      }
    
    createManager = async (e) => {
    let response  = await postData(this.form);

    if (response.success) {
        console.log(response)
        LoginStore.addToast('win')
    } else {
      console.log(response)
      LoginStore.addToast('fail')
    }
  }

}

decorate(Store, {
  createManager: action,
  form: observable,
  updateValue: action
})

const managerStore = new Store();


export default managerStore;