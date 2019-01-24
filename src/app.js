/**
 * require react modules for browser
 * this will publish the react methods in this scope
 * rather on the global scope
 */

const ReactDOM = require('react-dom');

// import
const pureReactDiv = require('./pure-react');
const jsxReactDiv = require('./jsx-react')
const getTimerEl = require('./render')

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
