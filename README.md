# JavaScript-Types
A small constructor to make any object property a strong type rather than loosey a goosey var

# Simple type helper
  Just add the file to your page
  `<script src="strong-types.js"></script>`
  
# Example usage:

````
var type = new JSTypes();

var Person = {};

type.num(Person, 'age');
type.str(Person, 'name');
type.obj(Person, 'friends');
type.bool(Person, 'alive');
type.und(Person, 'future');

Person.age = 12;  // valid and saves the value
console.log(Person.age) // 12
Person.age = "100" // not valid and throws an error
console.log(Person.age) // still 12

````
