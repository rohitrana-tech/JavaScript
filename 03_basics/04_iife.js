// Immediately Invoked Function Expressions (IIFE)

// Named iife
(function one () {
    console.log(`DB CONNECTED`);
})();


// Simple iife
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('Rohit');