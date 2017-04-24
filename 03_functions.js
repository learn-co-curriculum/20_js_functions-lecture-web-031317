// Write a function that takes in a number and returns the double of it's value
// declaration

function numberDoubler (number) {
  return number * 2
}


function hiFranco () {
  return 'Hi'
}

// ES6 way

var sayHi = () => {
  return 'Hi'
}


// Functions must have explicit return values

// Javascript functions are objects. This means we can store them in a variable.
// This is called a function expression

// Function declarations are hoisted, while expressions aren't.

var matt = function () {
  return 'Matt!'
}

function frankie() {
  console.log( matt() )
}

frankie()
