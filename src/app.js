/**
 * ReactDOM.render(element, container[, callback])
 * @param element  react element got from react.createElement()
 * @param container DOM node where the element has to render
 * @param callback function that is called when element is rendered on the page
 */
ReactDOM.render(
  // React.createElement(type, [properties], [...nested/child react-elements])
  React.createElement('h1',null,'sandeep'),
  document.getElementById('react-root')
);
