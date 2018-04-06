// https://rails.devcamp.com/modern-javascript/basics-modern-javascript-development/1265


const user = {
  name: 'lucien',
  email: 'lucien@dijkwel.com'
}

// this syntax of function argument list wrapped in brackets.
// instead of variable, looking for object
const renderUser = ({ name, email }) => {
  console.log(`${name}: ${email}`);
}

// prints name and email
renderUser(user);

