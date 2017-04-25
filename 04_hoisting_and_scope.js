// Functions inherit the scope they are defined in...
var greeting
// what will this output??? what will this return?
function sayName(){
  var name
  console.log(name)
  name = "Fido"
}

// what will this return?
function returnName(){
  var name
  return name
  console.log("Will I see this???")
  name = "Fido"
}


function greet(){
  greeting = "Hi"
  return greeting
}
