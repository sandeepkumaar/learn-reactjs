const React = require('react');

const FancyBorder = function FancyBorder(props) {

  console.log('FancyBorder', props.children); // child element
  let style = { border: "1px solid green"};
  return (
    <div style= { style }>

    </div>
  )
};


const Box = function Box(props) {
  console.log('Box', props);
  return (
    <FancyBorder>
      child element
    </FancyBorder>
  )
}

module.exports =  Box;
