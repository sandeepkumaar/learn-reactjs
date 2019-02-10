const React = require('react');


/**
 * function takes a object to support multiple params
 * @param   name destructured
 * @return   RE
 */
const getReactElement = function getReactElement({name}) {
  return (
    <h1 className='heading-4'>{ name }</h1>
  )

}


module.exports = getReactElement;
