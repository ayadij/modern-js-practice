// https://rails.devcamp.com/modern-javascript/basics-modern-javascript-development/guide-adding-default-object-values-javascript-function-arguments

//There’s one last thing we need to know about destructuring objects, and that is the ability to set defaults...
//When you destructure an object, what happens if that value isn’t there?
// It’s undefined because we create the variable, but it’s not able to be set to anything.
//With destructuring we can set defaults, or fallback values so that if an item is not in the object (or Array, Map, or Set) it will fall back to what you have set at the default.
//This syntax is a little hard to read:

const blog = {
  task: 'Do the dishes.',
  summary: 'Rinse, wash with soap, rinse again, dry, and put away'
}
            // task is required   // summary is optional so given a defualt value
const openGraphMetadata = ({ task, summary = 'A Informational Post' }) => {
  console.log(`
    og-task=${task}
    og-description=${summary}
  `);
}

openGraphMetadata(blog);


// If a function is called with missing arguments (less than declared), the missing values are set to: undefined

//Sometimes this is acceptable, but sometimes it is better to assign a default value to the parameter



// another example 
    //          const settings = {
    //              speed: 150
    //          }
    //          const { speed = 750, width = 500 } = settings;
    //          console.log(speed); // 150 - comes from settings object
    //          console.log(width); // 500 - fallback to default

    