//** Advanced Variables

//* const
const a = 2 //? Value fixed to 2
console.log(a)

a = 3 //? throws error "Assignment to constant variable" i.e. can't change the value.

//* var
//! Almost certainly never use var to create variables.
//? It was the first way defined to create variables when JS was created but it behaves strangely so conts and let were next defined variable creation.

//!! var is accessible outside the scope as well.

//! Example
{
  let a = 1 //? this gives an error coz "a" is not accessible from outside of the scope
}
console.log(a)

//! Whereas

{
  var a = 1 //? 1 is printed to the console coz var doesn't care about scopes, once a variable is created with var as a keyword, it is accesible throughout
}
console.log(a)

//! var is hoisted

console.log(a)

//let a = 1 //? it throws an error coz let and const are not hoisted.
var a = 1 //? 1 is printed here.

console.log(a)
