const React = require('react')
const createReactClass = require('create-react-class');


const Clock = createReactClass({
  // default props
  getDefaultProps: function getDefaulProps() {
    return {
      name: "Clock"
    }
  },
  // initial state
  getInitialState: function getInitialState() {
    return {
      date: new Date()
    }
  },
  // hooks
  componentDidMount: function componentDidMount() {
    console.log("clock mounted");
    this.timerId = setInterval(() => {
      this.tick();
    }, 1000)
  },
  componentWillUnmount: function componentWillUnmount() {
    console.log("clock un-mounted");
    clearInterval(this.timerId);
  },

  //  events
  tick: function tick() {
    this.setState({
      date: new Date()
    });
  },

  // template
  render : function render() {
    return (
      <div>
       <h4>ReactClass {this.props.name}</h4>
       <h5>{ this.state.date.toLocaleTimeString()}</h5>
      </div>
    )
  }
});


module.exports = Clock;
