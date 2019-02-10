## Quick Recap

RR = ReactDOM.render()
RCE = React.createElement()
RE = object returned by RCE

### RE and RR

`React.render()` takes a `ReactElement` object to render

ReactElement is an **immutable object**. Meaning once the
object is created, its properties cannot be modified.

To update the element, we need to create a new RE and pass to RR

RE is created from `React.createElement()` RCE function


### RCE = JSX with properties

JSX = RCE

Both JSX and RCE returns the RE which the render function
needs


### RCE with functions
To create REs(objects) with different properties, we wrap them
in a function that returns RE

 




RCE takes two types of arguments
  - string // for built-in DOM
  - function // custom tag/ component

A `Component` is a function that returns a RE
Since its a function, it can take arguments that can set the properties of the
RE at creation time

```
// Component is a function that returns a RE

function Comp() {
  return (
    <p className='para'>sandeep</p>
  );
}

// RR needs a RE to render

ReactDOM.render(
  Comp(),
  document.getElementById('root')

)

```

Component can be called multiple times with different arguments, just like
functions. each returning an RE.

Component = JSX with Custom tag. Babel when sees this structure, assumes that
Tag is a function and pass that function to RCE.


### Props // function arguments

Since Components are functions, Component properties can be anything
from primitive to objects, arrays and functions.


Wrapping a RCE() within a function is seen as a process of
  - returning a RE with properties.
  - componentize, invoked multiple times


### RE and RR
### RCE and JSX with properties
### RCE inside a function = component
### Component properties =function arguments // component composition

### Reusable Components // reder props, HOC

### Local state
### Lifting state
### Context


### Reusable states
