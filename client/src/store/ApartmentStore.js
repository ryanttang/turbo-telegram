import { decorate, observable, action } from 'mobx';
import LoginStore from './LoginStore';

const postData = (data) => {
  return fetch('/api/createapt', {
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
    property_name: "",
    property_units: "",
    property_phone: "",
    property_manager: "Please select a manager for this property",
    property_address1: "",
    property_address2: ""
  };

  updateValue = (e) => {
    const { name, value } = e.target;
    this.form[name] = value;
  }

  createApt = async (e) => {
    let response = await postData(this.form);
    if(!response) {
      LoginStore.addToast('fail', "Server Error")
    } else {
      if (response.success) {
        console.log(response)
        LoginStore.addToast('win', "Apartment Created")
      } else {
        console.log(response)
        LoginStore.addToast('fail', "Server Error")
      }
    }
  }

}

decorate(Store, {
  createApt: action,
  form: observable,
  updateValue: action
})

const aptStore = new Store();


export default aptStore;