
const React = require('react');
const ReactDOM = require('react-dom');


/**
 *
 * @extends React
 */

class Clock extends React.Component {

  // state initialisation
  constructor(props) {
    // Class components should always call the base constructor with props.
    super(props)
    this.state = {
      date: new Date()
    };
  }

  // component hooks
  componentDidMount() {
    console.log("componentDidMount");
    // start the timer
    this.timerId = setInterval(
      () => this.tick() ,
      1000
    );
    // only ()=>() will work. `this` with lexical binding
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
    // stop the timer
    clearInterval(this.timerId);
  }

  // behaviour
  tick() {
    this.setState({
      date: new Date()
    });
  }


  // dom update on state change
  render() {
    return(
      <div>
       <h4>Class Clock</h4>
       <h5>{this.state.date.toLocaleTimeString()}</h5>
      </div>
   );
  }
}




module.exports = Clock;
