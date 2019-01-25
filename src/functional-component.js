
const React = require('react');

/**
 * [props] refers to the data-attributes supplied to the
 * component tag
 */
const Timer = function Timer (props) {
  console.log("Timer properties", props);
  return(
    <h1>{props.name}</h1>
  );
}


module.exports =  Timer;
