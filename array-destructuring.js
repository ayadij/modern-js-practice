// https://rails.devcamp.com/modern-javascript/185/how-to-implement-array-destructuring-javascript


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