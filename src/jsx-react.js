const React = require("react")

const family_1 = {
  name: 'JSX_Sandeep Kumar',
  age: 25
};
const family_2 = {
  name: 'JSX_Navin Kumar',
  age: 23
};


const isBool = true;

const heading = (<h1 id = 'heading-4'>sandeep</h1>);

// replaced with
const getHeading = function getHeading(bool) {
  var id = 'heading-4';
  var idBy2 = 'heading';
  if(bool){
    // note: JSX does not support interpolation
    return (<h1 id={id}>{'asdf'}{family_1.name}</h1>);
  }else{
    // throws parse error
    // return (<h1 id={idBy2}'-4'>{family_2.name}</h1>)
    return (<h1 id={idBy2}>{family_2.name}</h1>)
  }

}


/**
 * Composing headign inside division
 * @note we can use javascript composition techniques here
 * to compose templates/react-elements
 */
const division = (
  <div>
    {getHeading(false)}
  </div>
);

module.exports = division;
