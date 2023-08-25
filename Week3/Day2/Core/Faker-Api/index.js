 
 const express = require('express');
const faker = require('faker');


function createUser() {
    return {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      phoneNumber: faker.phone.phoneNumber(),
      email: faker.internet.email(),
      password: faker.internet.password()
    };
  }
  
  function createCompany() {
    return {
      name: faker.company.companyName(),
      address: {
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country()
      }
    };
  }
  const app = express();

  app.get('/api/users/new', (req, res) => {
    res.json(createUser());
  });
  
  app.get('/api/companies/new', (req, res) => {
    res.json(createCompany());
  });
  
  app.get('/api/user/company', (req, res) => {
    res.json({
      user: createUser(),
      company: createCompany()
    });
  });
    
    
  const port = process.env.PORT || 8000;
  app.listen(port, () => console.log(`Server listening on port ${port}`));
  