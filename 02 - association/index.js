const Address = require("./Address");
const Person = require("./Person");

const addr = new Address('Vitoria',15,'Centro','Sorocaba','SP')
const john = new Person('John Destiny',addr)

console.log(john.address.fullAddress())