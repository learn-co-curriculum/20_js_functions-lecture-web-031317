// Because functions are objects, you can pass them into other functions to be called later.
// This is called a 'callback


function sayHelloAndDoSomething( name, callback ){
  console.log('Firing sayHelloAndDoSomething')
  var beard = true
  var hometown = 'Greensburg, PA'
  var steelers = 'pretty good'
  callback(name, beard, hometown, steelers)
}



var myCallback = function(name){
  console.log('Firing the callback function!!!')
  console.log('Hello ' + name)
}

// sayHelloAndDoSomething( myCallback )

// sayHelloAndDoSomething(function(){
//   console.log('Firing an anonymous function!!')
// })

sayHelloAndDoSomething("Andrew", function(name, beard){
  if (beard === true) {
    console.log( name + ' has a beard!' )
  } else {
    return 'No beard for ' + name
  }
})

// 1. Define a function that takes in two arguments, a name and another function
// 2. Print out the persons name to the console and then execute the code from the second function


//
// function greetUser(name, callback){
//   var newFunktion = function () {
//     console.log('Hello ' + name)
//   }
//
//   callback(newFunktion)
// }
//
//
//
// greetUser('Matt', function(callback){
//   console.log('First callback fired')
//   callback()
// })
