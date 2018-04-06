// https://rails.devcamp.com/modern-javascript/basics-modern-javascript-development/how-arrow-functions-work-this


// adding an atrribute to a function and treating this invoice like it is a class 
// js was not object oriented in 4ever
function Invoice() {
  this.taxRate = 0.06;
}

const inv = new Invoice();
console.log(inv.taxRate);





function Invoice(subTotal) {
  this.taxRate = 0.06;
  this.subTotal = subTotal;

  this.total = setInterval(() => {   ///converted into an arrow function
    console.log((this.taxRate * this.subTotal) + this.subTotal);
    // console.log(this);
  }, 2000);
}

const inv = new Invoice(200);
inv.total();



// the big reason they exist: helpful to use. access to the parent scope
// would i ever use anything besides arrow? yes. for the same reason how it uses just the parent scope. there are many times you dont want that. maybe you want access to whatever it is inside. 
//having an understanding of how it works with THIS helps you decide what to use when.
