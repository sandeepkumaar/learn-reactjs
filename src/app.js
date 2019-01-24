/**
 * React.createElement(type, [properties], [...nested/child react-elements])
 * @param type  element type specific to react-dom element.
 * Note: the type is not html. Its an attribute in react-dom
 * Similarly we have different attributes for react-native
 * We should know this before using it
 * By default most attributes follow their technological equivalent
 * @param properties here corresponds to the data-attr
 * @param child contains all child react-elements - innerHTML
 */
const heading = React.createElement(
  'h1',
  {id:'heading-4'},
  'navin'
);
/**
 * Composing headign inside division
 * @note we can use javascript composition techniques here
 * to compose templates/react-elements
 */
const division = React.createElement(
  'div',
  null,
  heading //
);

/**
 * ReactDOM.render(element, container[, callback])
 * @param element  react element got from react.createElement()
 * @param container DOM node where the element has to render
 * @param callback function that is called when element is rendered on the page
 */
ReactDOM.render(
  division,
  document.getElementById('react-root')
);
