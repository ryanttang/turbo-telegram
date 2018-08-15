const { User, Property, Worker } = require('../models');
const faker = require('faker');
const date = require('date.js');

const colors = require('colors');

// const seeder = require('mongoose-seeder');

const generateLeads = (iterations) => {
  let n = iterations;
  let data = [];
  while (n > 0) {
    let lead = {
      fname: faker.name.firstName(),
      lname: faker.name.lastName(),
      username: faker.internet.userName(),
      password: faker.internet.password(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      managers: [],
      properties: [],
    }
    data.push(lead)
    n--;
  }
  return data;
}

const generateManagers = (iterations, role) => {
  let n = iterations;
  let data = []
  while (n > 0) {
    let lead = {
      username: faker.internet.userName(),
      password: faker.internet.password(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone: faker.phone.phoneNumber(),
      role: role
    }
    data.push(lead)
    n--;
  }
  return data;
}

const generateProperties = (iterations) => {
  let n = iterations;
  let data = []
  let today = new Date()
  while (n > 0) {
    let lead = {
      title: n,
      address: `${faker.address.streetAddress()} ${faker.address.streetName()} ${faker.address.city()}, ${faker.address.zipCode()}`,
      super: `${faker.name.firstName()} ${faker.name.lastName()}`,
      pointOfContact: `${faker.name.firstName()} ${faker.name.lastName()}`,
      calendarDates: [...getDates(10)],
    }
    data.push(lead)
    n--;
  }
  return data;
}

const getDates = (times) => {
  let data = []
  while(times > 0) {
    data.push(faker.date.between(date('last month'), date('next month')))
    times--;
  }
  return data
}


const generateWorkers = (iterations) => {
  let n = iterations;
  let data = []
  while (n > 0) {
    let lead = {
      fname: faker.name.firstName(),
      lname: faker.name.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      properties: [],
    }
    data.push(lead)
    n--;
  }
  return data;
}

const seedData = (n) => {
  Lead.insertMany(generateLeads(n), (err, docs)=>{
    if(err) console.log(err);
  })
  Manager.insertMany(generateManagers(n), (err, docs)=>{
    if(err) console.log(err);
    console.log(docs);
  })
  Property.insertMany(generateProperties(n), (err, docs)=>{
    if(err) console.log(err);
    console.log(docs);
  })
  Worker.insertMany(generateWorkers(n), (err, docs)=>{
    if(err) console.log(err);
    console.log(docs);
  })
}

// seedData(10);
const leads = generateLeads(10);
const managers = generateManagers(10);
const properties = generateProperties(10);
const workers = generateWorkers(10);
const data =  [
  {
    'model': 'Lead',
    'documents': [...leads]
  },
  {
    'model': 'Manager',
    'documents': [...managers]
  },
  {
    'model': 'Property',
    'documents': [...properties]
  },
  {
    'model': 'Worker',
    'documents': [...workers]
  },
];
const genPerson = (quantity, role) => User.insertMany(generateManagers(quantity, role), (err, docs) => {
  if(err) throw(err);
  console.log(`${quantity} ${role} created`.bgYellow);
})

const gen25Apt = () => Property.insertMany(generateProperties(25), (err, docs) =>{
  if(err) throw(err);
  console.log('25 properties created'.bgCyan);
})

module.exports = {
  genPerson,
  gen25Apt
}

/*
seeder.connect('mongodb://localhost/turbodb', function () {
  let models = ['../models/Lead.js', '../models/Manager.js', '../models/Property.js', '../models/Worker.js']
  seeder.loadModels([...models]);

  seeder.clearModels(models, function () {
    console.log('start clearing'.underline.red);
    seeder.populateModels(data, function () {
      console.log('PoPulation Started'.inverse);
      seeder.disconnect();
      console.log('disconnected'.trap);
    })
  })
})
*/
