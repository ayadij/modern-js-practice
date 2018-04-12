//https://rails.devcamp.com/modern-javascript/basics-modern-javascript-development/1350


// spread operator used in COMBINING ARRAYS ---------------------------------------------------
let shoppingCart = [345, 375, 765, 123];    // product IDs in the shopping cart collection
let newItems = [98, 123];                   // they continue shopping and want to add these new items

shoppingCart.push(...newItems);
console.log(shoppingCart); 
        // [345, 375, 765, 123, 98, 123]

// spread operator used in Copying Arrays ---------------------------------------------------
const shopCart = [345, 375, 765, 123];
const updatedCart = [...shopCart];
updatedCart.push(5);
console.log(updatedCart);
console.log(shopCart);

const orderTotals = [1, 5, 1, 10, 2, 3];
console.log(Math.max(...orderTotals)); // takes everything inside collection and 

        // [1, 5, 1, 10, 2, 3]
        // ...[1, 5, 1, 10, 2, 3]
        // 1, 5, 1, 10, 2, 3

// spread operator used in object deconstruction ---------------------------------------------------
// creating an object of baseball lineup
// when you dont know how many function arguments you will be using
const { starter, closer, ...relievers } = {
  starter: 'Verlander',
  closer: 'Giles',
  relief_1: 'Morton',
  relief_2: 'Gregerson'
}

console.log(starter);
console.log(closer);
console.log(relievers); // most common way to use object deconstuction

// ---------------------------------------------------



//For function calls:
      //  myFunction(...iterableObj);

//For array literals or strings
      //  [...iterableObj, '4', 'five', 6];

//For object literals (new in ECMAScript 2018):
      //  let objClone = { ...obj };



// ----------------------------------- Concatenate arrays
// Append all items from arr2 onto arr1

//Without spread syntax this is done as:

      var arr1 = [0, 1, 2];
      var arr2 = [3, 4, 5];
      arr1 = arr1.concat(arr2);
      console.log(arr1)

//With spread syntax this becomes:

      var arr1 = [0, 1, 2];
      var arr2 = [3, 4, 5];
      arr1 = [...arr1, ...arr2];
      console.log(arr1)