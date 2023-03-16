
const express = require("express")
const { faker } = require('@faker-js/faker');
const app = express()


app.use( express.json() );
app.use( express.urlencoded({ extended: true }) ); 


const createUser = () => {
    const newFake = {
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.phoneNumber(),
        password: faker.internet.password()
    };
    return newFake;
};
    
const newFakeUser = createUser();
console.log(newFakeUser);


const createCompany = () => {
    const newFaker = {
        id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: [
              { Street: faker.address.street(),
               City: faker.address.city(),
               State: faker.address.state(),
               Country: faker.address.country(),
               ZipCode: faker.address.zipCode()}
        ]   
    };
    return newFaker;
};
    
const newFakeCompany = createCompany();


app.get("/api/users/new", (req, res)=>{
    res.json(newFakeUser)
})

app.get("/api/companies/new", (req, res)=>{
    res.json(newFakeCompany)

})
app.get("/api/user/company", (req, res) => {
    
    res.json({newFakeUser, newFakeCompany})
})


app.listen(8000, ()=>console.log(`Listening on port: 8000`))
