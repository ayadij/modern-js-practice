// https://rails.devcamp.com/modern-javascript/basics-modern-javascript-development/integrating-conditionals-javascript-strings-ternary-operators

const page = 'about';
console.log(`class=${ page === 'Home' ? 'master-layout' : 'secondary-layout' }`);

// terinary operator

// in js, never use == because it doesnt compare type.. it compares only value

// = asignation
// == compares value
// === comparison