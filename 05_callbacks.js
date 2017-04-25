// Because functions are objects, you can pass them into other functions to be called later.
// This is called a 'callback

function sayHelloAndDoSomething(callback){
  console.log("Hello")
  return callback()
}


// 1. Define a function that takes in two arguments, a name and another function
// 2. Print out the persons name to the console and then execute the code from the second function


var callback = () => {
  return "This is a defined callback"
}

sayHelloAndDoSomething(function(){
  return "Sammy"
})

sayHelloAndDoSomething(()=>{
  return "Arrow"
})

sayHelloAndDoSomething(callback)
