
const React = require('react');




const FormattedDate = function FormattedDate(props) {
  return (
    <h5>{props.date.toLocaleTimeString()}</h5>
  )
}

/**
 *
 * @extends React
 */

class Clock extends React.Component {

  // state initialisation // called by ReactDOM.render()
  constructor(props) {
    // Class components should always call the base constructor with props.
    super(props);
    this.state = {
      date: new Date()
    };
    console.log(props);
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
    var date = new Date();

    this.setState((state, props) => ({
      date: new Date(date.setSeconds(date.getSeconds() + props.offset))
    }));
  }


  // dom update on state change
  render() {
    return(
      <div>
       <h4>Class Clock</h4>
       <FormattedDate date={this.state.date}/>
      </div>
   );
  }
}

// default properties
Clock.defaultProps = {
  offset : 0
}

const ClockComposed = function ClockComposed(props) {
  return(
    <div>
      <Clock/>
      <Clock offset={5}/>
    </div>
  )
}


module.exports = ClockComposed;
