const React = require('react');

const FancyBorder = function FancyBorder(props) {
  // no child property, when jsx transpiles
  console.log('FancyBorder', props.children); // undefined, undeclared
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

    </FancyBorder>
  )
}

module.exports =  Box;
