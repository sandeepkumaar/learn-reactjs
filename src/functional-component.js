
const React = require('react');

/**
 * [props] refers to the data-attributes supplied to the
 * component tag
 */
const FunComp  = function FunComp (props) {
  // console.log("Timer properties", props);
  return(
    <h1>{props.name}</h1>
  );
}

const FunCompComposed = function FunCompComposed(props) {
  console.log("FunCompComposed properties", props);
  return (
    <div>
    <FunComp name="nalina"/>
    <FunComp name={props.sons[0]}/>
    <FunComp name={props.sons[1]}/>
    </div>
  );
}


module.exports =  FunCompComposed;
