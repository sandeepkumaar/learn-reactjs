/**
 * require react modules for browser
 * this will publish the react methods in this scope
 * rather on the global scope
 */

const ReactDOM = require('react-dom');
const React = require('react');


/***************************************************
 * RR takes a RE to render in the DOM
 * RE returned by RCE
 * RCE = JSX
 ***************************************************/
// const reactElement = require('./react-element-pure');
// // const reactElement = require('./react-element-jsx');
// ReactDOM.render(
//   reactElement,
//   document.getElementById('react-root')
// );




/***************************************************
 * RCE enclosed within function
 *
 **************************************************/
const getReactElement = require('./rce-within-function');
// ReactDOM.render(
//   getReactElement({name: "Navin"}),
//   document.getElementById('react-root')
// );

// ReactDOM.render(
//   <div>
//     { getReactElement({name: "Navin"}) }
//     { getReactElement({name: "Sandeep"}) }
//   </div>,
//   document.getElementById('react-root')
// );



/***************************************************
 * ReactComponent
 *
 **************************************************/
// const ReactComponent = require('./functional-component');
// // ReactDOM.render(
// //   document.getElementById('react-root')
// // )
// ReactDOM.render(
//   <div>
//     { ReactComponent({name: "imperative-sandeep"}) }
//     <ReactComponent name="declarative-sandeep"></ReactComponent>
//   </div>,
//   document.getElementById('react-root')
// )


/***************************************************
 * Component composition: Imperative
 **************************************************/
// const HeadingWithBorder = require('./composition-imperative');
// const textEl = (<span>Sandeep</span>)
// ReactDOM.render(
//   HeadingWithBorder(textEl),
//   document.getElementById('react-root')
// )


/***************************************************
 * Component composition: Declarative
 **************************************************/
const HeadingWithBorder = require('./composition-declarative');
const textEl = (<span>Sandeep</span>)
ReactDOM.render(
  <HeadingWithBorder el={ textEl }></HeadingWithBorder>,
  document.getElementById('react-root')
)





/**
 * ReactDOM.render(element, container[, callback])
 * @param element  react element got from react.createElement()
 * @param container DOM node where the element has to render
 * @param callback function that is called when element is rendered on the page
 */
// const jsxReactDiv = require('./jsx-react');
// ReactDOM.render(
//   jsxReactDiv,
//   document.getElementById('react-root')
// );

// const getTimerEl = require('./render');
// const timerRenderer = function() {
//   ReactDOM.render(
//     getTimerEl(),
//     document.getElementById("react-root-render")
//   );
// }
// renders the timer for created timer elements
// setInterval(timerRenderer,1000);

/**
 * Functional component
 * JSX <TimerComp> will convert to TimerComp function ref
 */
// const FunCompComposed = require("./functional-component");
// var sons = ["navin", "sandeep"]
// ReactDOM.render(
//   // <FunComp name='nalina'><FunComp/>, not parsed
//   <FunCompComposed sons = {sons}/>, // parsed
//   document.getElementById("react-functional-component")
// );


/**
 * ES6 class Component
 */
// const ClockClassComp = require("./class-component")
// ReactDOM.render(
//   <ClockClassComp/>,
//   document.getElementById("react-class-component")
// )


/**
 * ReactClass component
 */
// const ClockReactClass = require("./reactClass-component")
// ReactDOM.render(
//   <ClockReactClass/>,
//   document.getElementById("react-reactclass-component")
// )


/**
 * Event handling
 */
// const ToggleButton = require("./handling-events")
// ReactDOM.render(
//   <ToggleButton/>,
//   document.getElementById("react-event")
// )


/**
 * Composition
 */
// const ComposeBox = require('./composition');
// ReactDOM.render(
//   <ComposeBox/>,
//   document.getElementById("react-composition")
// )


/**
 * render props
 */
// const MouseTracker = require('./render-prop');
// ReactDOM.render(
//   <MouseTracker/>,
//   document.getElementById('react-render-props')
// )


/**
 * Simple Stateful component
 */
// const { SandeepArea, NavinArea }  = require('./composition/simple-component');
// const Area = function Area() {
//   return (
//     <div>
//       <div className="gutter">
//         <SandeepArea></SandeepArea>
//       </div>
//       <div className="gutter">
//         <NavinArea></NavinArea>
//       </div>
//
//     </div>
//   )
// }
// ReactDOM.render(
//  <Area/>,
//  document.getElementById('react-render-props')
// )

/**
 * Composition thru props
 */

// const { Mouse, SandeepArea } = require('./composition/composition-props');
// ReactDOM.render(
//   <div>
//     <Mouse>
//       <SandeepArea></SandeepArea>
//     </Mouse>
//
//   </div>,
//   document.getElementById('react-composition-props')
// )
