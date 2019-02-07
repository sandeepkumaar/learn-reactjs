const React = require('react');
const createReactClass = require('create-react-class');


/**
 * MouseTracker component which has the template
 *
 */
const MouseTracker = createReactClass({
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
        style={ {height: '400px', border: '1px solid black'}}
        onMouseMove={ this.handleMouseMove }
        >
         <h1>Move the mouse around!</h1>
         <p>The current mouse position is ({x}, {y})</p>
      </div>
    );
  }



});

module.exports = MouseTracker;


/**
Some recap:
Wkt, a component consists of
  - template
  - state and behaviour modifying state
  // react takes care of rendering  the modified state automatically
  - utils - pure functions, no state info (more info)


When we say, code reuse, we mean reusing
  - template
  - state and behaviour
  - util. (this is by default reusable)

Code reuse in React is mainly done through *Composition*.
Basically composition of Templates, state&behaviours is achieved by passing
them as *arguments* (props)

components allow *entities* to exists **independent and isolated** and can
compose with other entities without really knowing about the composing entity.
Component are *component agnostic*

We have `MouseTracker` component that has
  - a template // area where mouse movement is tracked
  - state-behaviour // state and logic to track mouse

Template will use the *MouseTrackBehaviour* (state and behaviour)
React will take of rendering the modified state.

Here `MouseTracker`, Area Template and Track Behaviour are *declared* together
They are also tightly coupled thru `this` operator.

*/
