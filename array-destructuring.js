// https://rails.devcamp.com/modern-javascript/185/how-to-implement-array-destructuring-javascript

//What does destructuring mean? It's a JavaScript expression that allows us to extract data from arrays, objects, maps and sets — which we're going to learn more about in a future ES6.io video —into their own variable. It allows us to extract properties from an object or items from an array, multiple at a time.

//Destructuring is a convenient way of extracting multiple values from data stored in (possibly nested) objects and Arrays.

// old way ------------------------------------------
// lets us do all of this on a single line:

const apiList = [
  'https://api.dailysmarty.com/posts',
  'https://api.github.com/users/jordanhudgens/repos',
  'https://api.github.com/users/jordanhudgens'
]

const posts = apiList[0];
console.log(posts);

const posts = apiList[1];
console.log(posts);

const posts = apiList[2];
console.log(posts);


// modern way ------------------------------------------
// also assigning each of the deconstructedd elements to a variable
// leverage destructuring with ARRAYS
const apiList = [
  'https://api.dailysmarty.com/posts',
  'https://api.github.com/users/jordanhudgens/repos',
  'https://api.github.com/users/jordanhudgens'
]

const [posts, repos, profile] = apiList;

console.log(posts);
console.log(repos);
console.log(profile);