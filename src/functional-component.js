
const React = require('react');





/**
 * ReactComponent function takes an object as parameter
 * returns a RE
 */
const ReactComponent = function ReactComponent({name}) {
  return (
    <h1 className='heading'> { name }</h1>
  );
}



module.exports =  ReactComponent;
