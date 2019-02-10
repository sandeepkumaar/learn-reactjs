const React = require('react');
const createReactClass = require('create-react-class');


/**
 * Mouse
 */

const Mouse = createReactClass({
  getInitialState: function getInitialState() {
    return {
      x: 10,
      y: 5
    };
  },

  // handleMouseMove: function handleMouseMove(event) {
  //   this.setState({
  //     x: event.clientX,
  //     y: event.clientY
  //   });
  // },

  render: function() {
    const { x, y } = this.state;
    const Comp = this.props.children;
    return (
      <div>
        <p> Position ({x}, {y})</p>

        { Comp }
      </div>

    );
  }

})


/**
 * SandeepArea
 */
const SandeepArea = function SandeepArea(props) {
  console.log('sandeep prop',props);
  return (
    <div style={ {height: '250px', border: '1px solid black'}}>
        <h1>Sandeep's Template Area</h1>
        {/* <p>The current mouse position is </p> */}
    </div>
  );
}


module.exports = {
  Mouse,
  SandeepArea
}
