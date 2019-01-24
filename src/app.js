/**
 * require react modules for browser
 * this will publish the react methods in this scope
 * rather on the global scope
 */

const ReactDOM = require('react-dom');

// import pure-react
const pureReactDiv = require('./pure-react');


/**
 * ReactDOM.render(element, container[, callback])
 * @param element  react element got from react.createElement()
 * @param container DOM node where the element has to render
 * @param callback function that is called when element is rendered on the page
 */
ReactDOM.render(
  pureReactDiv,
  document.getElementById('react-root')
);
