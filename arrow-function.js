//https://rails.devcamp.com/modern-javascript/basics-modern-javascript-development/introduction-arrow-functions-javascript


// regular function declaration
function fullName (fName, lName) { 
  console.log(`${lName}, ${fName}`);
}
fullName('Aya', 'Dijkwel');

// Same function written as function expression
fullName = (fName, lName) => { 
  console.log(`${lName}, ${fName}`);
}
fullName('Osiris', 'Gonzalez');

// Basic arrow function  //
helloWorld = () => { console.log("Konnichiwa"); }
helloWorld();

// Arrow function with shorthand function argument for single arguments
firstName = fname => { console.log(fname.toUpperCase()); }
firstName('Miyoko');

// Arrow function with multiple arguments
fullName = (fName, lName) => { 
  console.log(`${lName}, ${fName}`); 
}
fullName('Atushi', 'Tanaka');



// an arrow function is just another way of defining a function it's another way of setting up some process that you want to wrap up you want to encapsulate and then you want to call it later 
