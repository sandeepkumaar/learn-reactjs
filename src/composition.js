const React = require('react');

const FancyBorder = function FancyBorder(props) {

  console.log('FancyBorder', props.children); // child element
  let greenStyle = { border: "1px solid green"};
  let blueStyle = { border: "1px solid blue"};
  return (
    <div>
      <div style={ greenStyle }> { props.children } </div> <br/>
      <div style={ blueStyle }> { props.attr } </div>
    </div>
  )
};



const Box = function Box(props) {
  console.log('Box', props);
  const AttribComp = function AttribComp() {
    return (
      <p> component passed as the attribute/props </p>
    )
  }


  return (
    <FancyBorder attr={ <AttribComp/> }>
      child element
    </FancyBorder>
  )
}

module.exports =  Box;
