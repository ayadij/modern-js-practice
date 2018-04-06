// https://rails.devcamp.com/modern-javascript/basics-modern-javascript-development/guide-adding-default-object-values-javascript-function-arguments


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