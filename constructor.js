// https://rails.devcamp.com/modern-javascript/194/introduction-object-oriented-programming-javascript

class Instructor {
  constructor({ name }) {  // constructor is a reserve term  // passing in a name attribute as an object
    this.name = name;
  }
}

const ayattaze = new Instructor({ name: 'Aya Dijkwe' });
console.log(jon.name);
// prints out an OBJECT not "instructor"
// ayattaze is an instance of the Instructor Class