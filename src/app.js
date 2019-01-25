/**
 * require react modules for browser
 * this will publish the react methods in this scope
 * rather on the global scope
 */

const ReactDOM = require('react-dom');
const React = require('react');

// import
const pureReactDiv = require('./pure-react');
const jsxReactDiv = require('./jsx-react');
const getTimerEl = require('./render');
const FunCompComposed = require("./functional-component");
const ClockClassComp= require("./class-component")

/**
 * ReactDOM.render(element, container[, callback])
 * @param element  react element got from react.createElement()
 * @param container DOM node where the element has to render
 * @param callback function that is called when element is rendered on the page
 */
ReactDOM.render(
  jsxReactDiv,
  document.getElementById('react-root')
);

const timerRenderer = function() {
  ReactDOM.render(
    getTimerEl(),
    document.getElementById("react-root-render")
  );
}
// renders the timer for created timer elements
setInterval(timerRenderer,1000);

/**
 * Functional component
 * JSX <TimerComp> will convert to TimerComp function ref
 */
var sons = ["navin", "sandeep"]
ReactDOM.render(
  // <FunComp name='nalina'><FunComp/>, not parsed
  <FunCompComposed sons = {sons}/>, // parsed
  document.getElementById("react-functional-component")
);


/**
 * ES6 class Component
 */
ReactDOM.render(
  <ClockClassComp offset={5}/>,
  document.getElementById("react-class-component")
)
