===========================
# Reactjs
===========================
On the launch page of Reactjs we can see
 - Declarative
 - Components
 - Learn Once Write Anywhere

Lets elaborate
### Declarative
We know that declarative programming hides the implementation/algorithm details and
allows the developer to operate the logic on the arguments
Eg: for loop --> *imperative*
    [].map   --> *declarative*
Similarly here,
With React we can write **Declarative Views** and React will take care of updating,
modifying based on the argument(scope)

### Component
In React everything is in javascript. View to be rendered on any platform is
expressed as simple js objects in React
Eg: css, html are expressed as objects for browser environment
The corresponding environment package, here **react-dom** will take care of rendering in
the actual html
This way of expressing the view technologies(html, css, IOS, android) in simple javascripts will allow the
developer to
  - to have complete controll over the code
  - can use all js features/powers *functional programming,composing software*
  - need not worry about the platform implementation details or platform specific code for achieving a behaviour

React supports components and component composition

### Learn Once, Write Anywhere
Since everything is javascript we know how react works, with the help of the platform
specific pakages *react-dom, react-native* we can write for any platform

--------------------------------
## What makes Reactjs powerful
--------------------------------
Manipulating DOM through browser's DOM api is slow and costly

Small comparison
### Normal DOM manipulation
  - query elements **READ**
  - modify the contents of the DOM **WRITE**
The above approach is costly and time consuming

### Backbone, Angular approach
 - Checks for the difference in the scope/model and DOM and updates(**WRITE**) the DOM
 - Only **WRITE** no **READ**
 - I think it rewrites the entire DOM
 - Problem is, it has to re-render/digest for applying the changes.*$apply - $watch -  $digest*

### React way
  - All operation **WRITE** and **READ** are done at the virtual DOM level *which is quicker*
  - updation **WIRTE** only happens on the *diffed* elements

Characterstics
  - virtual DOM // DOM Diffing and updating only the changes



## A simple html with React

In React, everything is expressed as javascript, javascript objects including html,css
The Virtual DOM is built with javascript. Hence its easier to manipulate the virtual DOM
as it is simply an JS Object.

### Step 1
  - Some introduction on React
  - setup folder structure
    - ./src contains all the js code that gets build to ./dist folder
    - ./dist is the formatted code that is runnable in all browsers. This is where the application runs


### Step 2 Pure React in browser

  - Load the react scripts ie. *react and react-dom* to index.html
  - As expected the script will publish react globals  
      ![inspect view](./resources/docs/inspect-globals.png)  

Of these some of the important methods are
  - React
    - createElement()

  - ReactDOM
    - render()  

Lets use these methods to build a simple element and render on html  

1. In order to render the page ReactDOM.render() needs
  - the **react-element** to render
  - container DOM to load the **react-element** and render
2. **react-element** is an object got from React.createElement() *signature is in code*



### Step 3 Pure React in browser Extended

Lets create react-elements with child tags
We will see how react-elements are simple js objects  
And how we can apply js composition techniques to
compose complex template.


### Step 4 Setup browserify to load modules

Since React follows most of the native js values. we will leverage it by using node style module loading thru browserify.  

  - install react, react-dom module from npm
  - load them in the browser thru browserify
  - remove the cdn scripts

Note:
Here we have dynamically added the data name in the react element  
with which we can use js techniques (reduce, map etc);

Also we have created a pure-react file for *modularisation*


#### Step 5 Introducing JSX for replacing complex react-element

Writing code with react-elements is difficult especially when the DOM
structure is huge  
Hence React guys used the JSX for constructing react-elemnts

##### What is JSX
JSX stands for Javasript XML


JSX is an XML-like syntax extension to ECMAScript without any *defined semantics*  
It is **NOT** intended to be implemented by engines or browsers  
**It's NOT a proposal to incorporate JSX into the ECMAScript spec itself.**  

It's intended to be used by various preprocessors (transpilers) to transform these **tokens** into standard ECMAScript.

```
const x = <h1>sandeep</h1>;
```
The above code if ran on node,browser it throws error.  
The browser or node cannot understand JSX notations.The transpilers like
babel will identify the JSX code and convert them to runnable js code.  

```
const x = <h1>sandeep</h1>;
```
is converted to

```
var x = React.createElement(
  "h1",
  null,
  "sandeep"
);
```

Here the object is wrapped by React.createElement(). This is due to *preset* set
in babel to react. so babel will assume that the JSX has to converted to a react-element.   
Hence the object is wrapped with React.createElement();  

We can use other *presets* to convert the JSX to whatever library specific code.

Note: JSX is independent of React. JSX ca be used anywhere.
[JSX site](https://facebook.github.io/jsx/)


In the illustration we will see how JSX gets converted to react-elements and
how dynamic data passing is still possible  

> Note: Make sure JSX expression returns a single element. Having adjacent elements or siblings
> will ask you to enclose the second element with expression syntax (expr)
> Avoid returning JSX with siblings. Instead separate them into components. This is more convenient and
> a best practice

##### What is Babel ?
Babel is a transpiler that converts all ES2015+ code ie. ES6,ES7,Typescript,JSX and
few other advanced js code to normal vanilla JS (ES2015)


babel-core // is the core package that contains logic to convert anything to js  
what to convert ie. ES6 -> ES5 or Promises -> polyfills are mentioned by **presets**  also called as plugins  
[Here is the list of presets](https://babeljs.io/docs/en/presets)  

Babel-cli package is used to transpile code with the help of babel-core and
related presets/plugins  

babel-cli looks for .babelrc file to see what format needs to be transpiled

```
{
  "presets": ["env"] // env represents all ES5+ codes not react or other special types
}
```


###### JSX is an Expression !
Since react-element is a js object/expression we can treat it like any other js
code and subject it to any js operations  
JSX itself is an expression and allows js expressions within them so that it can exhibit all the behaviours   

Expressions are enclosed by {js expressions}

> Best practice: Since JSX is an expression its better to treat them as expression by enclosing with (expr)

> Important: Inside JSX context all expressions should be enclosed by {}. Don't try to inline js blocks *{}*
> or function blocks. Instead treat JSX as a variable and use that variable in your functions or conditional expr

In short, don't do this

```
const heading = (
  //  expression
  if(!isBool){
    <h1 id='heading-4'>{family_1.name}</h1>
  }else{
    <h1 id='heading-4'>{family_2.name}</h1>
  }
);
```
Instead,
```
var head_1 = (<h1 id='heading-4'>{family_1.name}</h1>);
var head_2 = (<h1 id='heading-4'>{family_2.name}</h1>);

function getHeading(bool) {
  if(bool){
    return head_1;
  }else{
      return head_2
  }

}
// or

function getHeading(bool) {
  if(bool){
    return (<h1 id='heading-4'>{family_1.name}</h1>);
  }else{
      return (<h1 id='heading-4'>{family_2.name}</h1>)
  }

}
```

> Note: Don't interpolate the jsx {} expression with string. It wont transpile.For XML attributes
> either use curly braces {} or "". Not together in whichever fashion.  
> This can be handled by interpolating outside the jsx expression and providing the interpolated value


We have illustrated all the possible expressions applied on JSX  

> Note: JSX boils down to React.createElement() call which returns a simple object

> Info: JSX Prevents Injection Attacks


> Important Note: Since JSX is transpiled to a fixed code with React.createElement,
when requiring `react` module make sure the variable name matches the transpiled version



#### Step 6 Rendering Elements

React.render() method will render the react-element

> Note: react-elements are immutable. ie once created their attr,dom childs or anything cannot be
> modified. react-element is like a single frame in a movie. the frame represents the UI at a certain point
> Hence the only way to modify/update the react-element is by creating another react-element with the state changed
> and pass it React.DOM() to re-render


> React.DOM() while re-rendering will diff the existing react-element with the new react-element and *WRITES* only
> what is changed


The above is illustrated in dom (id = 'react-root-render')


### Step 7.1 Components - Functional component

React allows you to create components in 3 ways
[Three ways to create react components](https://medium.com/@the.benhawy/3-ways-to-create-react-components-8b3620e4ea0)


we will use the functional way as it is simple and aligns with functional values  
Understanding functional implementation of react components is simple  
We know that,
  - new object instance is received by returning an object literal
  - ReactDOM.createElement() returns a new object instance


Note:
```
React.createElement(
  type,
  [props],
  [...children]
)
```
type
  - string // for declaring html tags
  - function // that returns a react-elemt // for declaring components

When using JSX, babel transpiler will need to differentiate between the
**DOM** tags and **Cutom tags**
For that if a tag name
  - is in small letters // built-in dom
  - Starts with capital // Custom DOM with a corresponding function ref of *same name*


![Ref from React site](./resources/docs/component-name.png)

![Ref from React site](./resources/docs/demo-component-name.png)

So whenever a JSX with custom tag starting with capital letter is used babel
transpiles them to functional reference.  
The function in turn should **return a react-elemnt**

![Babel Transforming Cumstom tags](./resources/docs/babel-jsx-custom-tag.png)


### Step 7.2 Components - functional component - extended
- How to pass complex types as `props`
- function composition with different value

complex types Arrays, objects cannot be declared directly to JSX expression.
The transpiler cannot understand. Hence the complex values are passed as variable
reference


#### Note:
Functional components are pure functions. They dont modify the `props`


### Stateful Components using Class
Difference between State and Props
Props are input arguments supplied to the component thru DOM attributes.
States are ?

Responsibility of a Component:
- May have its own state. // state
- behaviour // method
- lifecycle hooks //
- should update itself when state is updated. // setState
- template // render


Note:
In two-way binding, the framework *itself* update the view, model during digest
cycles triggered by framework methods.

What makes a component to unmount?

What happens,
- `ReactDOM.render()` calls the Clock's constructor and initializes
state
- calls component's `render()` and updates DOM
- When render() output is inserted to DOM it triggers
`componentDidMount()`

Extended
#### Using props and states

> Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.

```
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});
```

```
// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

How to assign default values to `props` and `states`


#### Do Not Modify State Directly
```
this.state.name = "" //wont work
```
```
this.state = { name: "" }
// always update as a snapshot
```

#### State Updates are Merged // Object.assign()
states which are not mentioned are left as such


#### Data flows down


#### component composition


### Stateful Components using ReactClass module
- getDefaultProps
- getInitialState
- auto-binding




### Handling events
- React events are named using camelCase, rather than lowercase.
- With JSX you pass a *function reference* as the event handler, rather than a string.
```
<button onclick="activateLasers()">Activate Lasers</button> // html

<button onClick={activateLasers}>Activate Lasers</button> // jsx

```

Explicit `preventDefault()` to override default behaviour, returning false wont work

event object - react specific *synthetic* event. follows w3c standards

Note: We know that Classes are nothing but syntactic sugar for *constructor functions*
`this` inside a class **method** will not be bound the *instance*. (react doesn't
call them with `new` operator which binds this to *instance*)

- Explicitly bind method properties // Class
- use arrow functions // uses lexical scope
- use reactClass module which automatically binds all method properties to the
`instance`



### How to pass custom parameters to the function reference??
By default react event pass in the *synthetic event* object to the callback

We can pass the custom params through *currying* arrow functions


## Conditional Rendering
Since *JSX* is an expression, it can be assigned to a variables,
treated as **operands** and can be *operated* by conditional operators

Two things can happen at Conditional Rendering
  - conditionally render an element // return the element thru conditional constructs
  - conditionally don't render an element // return false


Conditions can happen at two places
- parent deciding which component to render
- component itself can decide whether to render or not based on props supplied
// component returning false instead or an element

Point 2 is similar to ng-if

Note: JSX expression can have *expressions* {} in them that can have
  - mathematical expressions
  - another jsx expression


```
// parent deciding what to render
const Parent = function(props) {
  const { bool } = props;


  let el1 = <h1>sandeep</h1>
  let el2 = <div>navin</div>

  return bool ? el1 : el2

}

const Parent = function(props) {
  const { messages } = props;

  return (
    <div>
      <h1>Hello!</h1>
      {messages.length > 0 &&
        <h2>
          You have {messages.length} unread messages.
        </h2>
      }
    </div>
    )
}

// component itself decides based on passed in props
function displayMsg = function({messages}) {
  if(!messages.length) {
    return null;
  };

  return (
    <h2>
      You have {messages.length} messages.
    </h2>
    )
}

```

## List and Keys

Two approaches
- Define another Parent component to hold the list
- Simply inline the iterations within the JSX

### Keys
- Makes react identify the list elements
- should be unique
- It is React specific hence should not be applied in dom elements


## Forms
How HTML form elements work ?
**form elements** have value attribute that gets *updated* by the browser
whenever the user types.
Here two things happen
  - data is *handled* by the DOM // internal impl
  - data is stored by the DOM // value attribute

Basically we need have control over how *updates* are handled and
how we can manage the data(state)

We need React to be the source of truth. ie. control should passl from
DOM to React.

To do so, React has
   - value *state* that is bound to the DOM value *attribute*
   - onChange *handler* to update the value state which in turn updates the
   DOM value attribute  

The above approach makes the Form element a **Controlled Component**
A form element controlled by the React component

For uniformness all React form elements have two properties to operate
  - value
  - onChange

**Uncontrolled Components** which lets DOM to maintain state, when react simply
gets the value on Submit. With this approach
  - we can rely only on browsers features
  - less controll over elements

React advices us to avoid **uncontrolled** components


## Lifting State Up

Lifting the **Shared State** up to the closest ancestor(Parent component)

Shared State: A state shared by child components in a Parent component
Any change made to the shared state by any of the child components are
reflected to all other child components

Note:
**Props** are read-only. A functional component with props cannot *directly*
modify the prop state.
They call the stateHandler function supplied by the parent component as props.

U can treat this state updation similar to form element updation.
value, onChange()
This approach is called **Controlled Component** component's *state* are
controlled by the Parent component

## Composition

Component composition is similar to Object composition.
A factory function which takes arguments and compose them
to return a new composed object


Component composition also follow the same,
factory =>  Box
component =>

Composing *independent* functions together to form a Complex function.
Function as building blocks

h = f.g = f(g(x))
g(x) | f(x)  
output of g is fed as input of f

In React, Component **composition** is done by passing the component as the
*input* for another component. The input is *rendered*(output) and passed as
input to composing component which will render along with ....tl;


Note:
props is available in the js world, meaning it can handle any type values as
inputs.
Hence we can send props as *function* and *objects*. Since *ReactElement* is
simply an js object we can simply pass them as props

We know that **props** hold the properties defined as attribute on the **component**
Along with props expose other properties.
- prop.children // has the child element of the component

React component composition can happen by simply passing the React component/element
as props(input). props can be either
  - child
  - attribute on the component






```

// composing component
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

// FancyBorder component is *ready* to compose with any independent component
// To actually compose, we declare the input component inside FancyBorder. f(g(x))

// ideally g(x) should not have access to f(x)
// can f(x) pass in the props ??

//
function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}

```





## Thinking in React

### Break the UI into a component heirarchy
### Build a static version in react
### Identify the minimal (but complete) representation of UI State
### Identify where your state should live
### Add inverse data flow


## Context

> Context provides a way to pass data through the component tree without having to pass props down manually at every level.


## Fragments
Group list of children without adding extra nodes to the DOM
```
<React.Fragment key={}>
</React.Fragment>
```
only **key** attribute can be set in a **fragment** element


## Higher Order components
Reusing component logic

HOC is a *function* that takes a component and returns a component


HOC doesn't modify the input component, nor does it uses inheritance
to *copy* its behaviour

HOC *composes* the original component by *wrapping* it in a container
component.

A HOC is a pure function with zero side effects

The wrapped component receives all the props of the *container*, along
with a new prop, data , which it uses to render.

HOC isn't concerned with how or why, who?? the data is used.

And the wrapper component isn't concerned with where the data came from.


HOC is a normal function, where you can pass any arguments
Eg:
- make the attribute name on the component configurable
- configures data source

Since every composition is prop-based,
it is easy to swap one HOC for a different one, as long as they provide the same props to the wrapped component.

HOCs should use composition, by wrapping the input component in a container component:

Containers manage things like subscriptions and state, and pass props to components that handle things like rendering UI

You may have noticed similarities between HOCs and a pattern called container components.

HOCs use containers as part of their implementation. You can think of HOCs as parameterized container component definitions.



HOCs add features to a component. They shouldn’t drastically alter its contract. It’s expected that the *component returned from a HOC* has a **similar interface** to the *wrapped component.*

HOCs should pass through props that are unrelated to its specific concern.

This makes the returned component behave like the wrapped component

Convention:
#### Pass Unrelated Props Through to the Wrapped Component

#### Maximizing composability

#### Wrap the Display Name for Easy Debugging

Caveats:

Don’t Use HOCs Inside the render Method
Static Methods Must Be Copied Over
  - prototype properties
Refs Aren’t Passed Through


Mixins vs HOC vs Render props


## Render props



A Render prop is a *function as a prop* that the component uses
to know *what to render*


just render a regular component with a function prop that it can use to share
some state/behaviour with you

The term “render prop” refers to a technique for sharing code between
React components using a prop whose value is a function.



Some recap:
Wkt, a component consists of
  - template
  - state and behaviour modifying state
  // react takes care of rendering  the modified state automatically
  - utils - pure functions, no state info (more info)


When we say, code reuse, we mean reusing
  - template
  - state and behaviour
  - util. (this is by default reusable)

Code reuse in React is mainly done through *Composition*.
Basically composition of Templates, state&behaviours is achieved by passing
them as *arguments* (props)

components allow *entities* to exists **independent and isolated** and can
compose with other entities without really knowing about the composing entity.
Component are *component agnostic*

We have `MouseTracker` component that has
  - a template // area where mouse movement is tracked
  - state-behaviour // state and logic to track mouse

Template will use the *MouseTrackBehaviour* (state and behaviour)
React will take of rendering the modified state.

Here `MouseTracker`, Area Template and Track Behaviour are *declared* together
They are also tightly coupled thru `this` operator.


Next steps:
Slowly decouple Area Template and Track Behaviour
Make them independent, isolate entities
Compose them with other entities to *extend* the behaviour


Decouple







Note:
Use `arrow functions` when you want `this` to refer to the containing scope/
lexical scope
Use `Named function expressions` when you u planning to use it as a util/
algorithm implementation that gets differenct **contexts**








## best practice
- destructure props
- Use more presentation/functional components
- less state components

createReactClass, factory, hooks -- middle ground

Handling events
Conditional Rendering
List and Keys
Forms
Lifting state up
composition vs inheritance
Thinking in react



## Tools
ternjs  // autocompletion
lint on save?   // format, typos
documentation // minimal
snippets    //
autocomplete package
shortcuts
file generation




```

/**
 * Without reusability
 */

/**
 * Step 1:
 */

function Sandeep(prop) {
  return "sandeep" + prop
}

function Navin(prop) {
  return "Navin" + prop
}


function Mouse(prop) {
  return "Mouse" + prop
}

function SandeepMouse() {
  return Sandeep("x") + Mouse("")
}
SandeepMouse();

function NavinMouse() {
  return Navin("y") + Mouse()
}
NavinMouse();



/**
 * Composition thru props
 * By nature, every function is composable thru props
 * it is just the function should handle the prop correctly
 */


function Mouse(prop, comp) {
  return "Mouse" + prop + comp
}

function Sandeep(prop) {
  return "sandeep" + prop
}


let sandeep = Sandeep('x')
// composing
let sandeepMouse = ComposableMouse('prop', sandeep)

/**
 *
 */
```
