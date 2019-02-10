const React = require('react');



/**
 * React.createElement(type, [props], [...children])
 * @param type [string] [function]
 * @param props DOM Attributes
 * @param children // innerHTML
 */
const name = 'Pure - Navin Kumar';
const reactElement = React.createElement(
  'h1', // type
  {id:'heading-4'}, // properties
  name // child
);

console.log("RE", reactElement);

// throws TypeError: Cannot assign on Read only prop
// reactElement.type = "div";


module.exports = reactElement;
