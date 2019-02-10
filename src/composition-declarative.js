const React = require('react');

/**
 * Function/Component that takes a text elem and
 * converts to heading
 * return the elem
 */
const Heading = function Heading(el) {
  return(
    <h1 className='heading'>
      { el }
    </h1>
  )
}

/**
 * Takes a elem
 * add border
 * returns the RE
 */
const Border = function Border(el) {
  return(
    <div className='border-bottom'>
      { el }
    </div>
  )
}

/**
 * Compose Heading and border
 */
const HeadingWithBorder = function HeadingWithBorder(el) {
  return Border(Heading(el)); // imperative
}



module.exports =  HeadingWithBorder;
