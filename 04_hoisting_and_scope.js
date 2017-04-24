// variable declarations are hoisted to the top of the current scope.
var cat = 'Heathcliff';

function sayHelloToCat(){
  var cat = 'Garfield';
  console.log(cat)
}


// Functions inherit the scope they are defined in...

function sayHelloToHeathcliff(){
  console.log(cat)
}

sayHelloToCat()
sayHelloToHeathcliff()
