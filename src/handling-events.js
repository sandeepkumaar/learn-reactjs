const React = require('react')
const createReactClass = require('create-react-class')



const ToggleButton = createReactClass({
  // default props

  // initial state
  getInitialState: function getInitialState() {
    return {
      isToggleOn: false
    };
  },

  // component hooks

  // events
  handleClick: function handleClick() {
    // this is implicitly bound to the instace
    // by reactClass method
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn
    }));
  },

  // render
  render: function render() {
    return (
      <div>
        
      </div>
    );
  }

});


module.exports = ToggleButton;
// <h4>Event handling</h4>
// <button onClick={this.handleClick}>
//   { this.state.isToggleOn ? 'ON' : 'OFF' }
// </button>
// <button onClick={this.handleClick}>
//   {this.state.isToggleOn ? "ON" : "OFF"}
// </button>
