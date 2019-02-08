const React = require('react');
const createReactClass = require('create-react-class');


/**
 * Mouse
 */

const Mouse = createReactClass({
  getInitialState: function getInitialState() {
    return {
      x: 0,
      y: 0
    };
  },

  handleMouseMove: function handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  },

  render: function() {
    const { x, y } = this.state;
    return (
      <div
        style={ {height: '250px', border: '1px solid black'}}
        onMouseMove={ this.handleMouseMove }
        >

          <SandeepArea></SandeepArea>
          <p>The current mouse position is ({x}, {y})</p>
      </div>
    );
  }

})


/**
 * SandeepArea
 */
const SandeepArea = function SandeepArea() {
  return (
    <div style={ {height: '250px', border: '1px solid black'}} onMouseMove={ this.handleMouseMove }>
        <h1>Sandeep's Template Area</h1>
        <p>The current mouse position is ({x}, {y})</p>
    </div>
  );
}
