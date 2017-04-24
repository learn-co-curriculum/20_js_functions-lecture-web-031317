// Arrays work pretty much the same as in Ruby, without some of the nice methods.
var teachers = ['Ian', 'Tracy', 'JJ', 'Antoin']
console.log( teachers.length )

// const upcasedTeachers = teachers.map(function(teacher){
//   return teacher.toUpperCase()
// })

// console.log(upcasedTeachers)

// JavaScript Objects can behave a lot like hashes.
var teacher = {
  name: 'JJ',
  beard: true,
  sayHello: function (){
    return 'Hello'
  }
}

// We can access properites using . notation

// var property = prompt('Enter the property you are looking up')
console.log(teacher[property])
console.log( teacher.name )
