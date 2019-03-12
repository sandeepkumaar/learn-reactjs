# React Router

## Some story

Static routing vs Dynamic routing

Frameworks like Expressjs, Ember, Angular provides *static* routing.
Meaning, the routes are provided/configured at the code time.
A Set of configured *url* and corresponding *component* to render is
defined before the application

```
// Express Style routing:
app.get("/", handleIndex);
app.get("/invoices", handleInvoices);
app.get("/invoices/:id", handleInvoice);
app.get("/invoices/:id/edit", handleInvoiceEdit);

app.listen();

```
Here the `path` and `controller` is configured.
This cannot changed at run-time.
The controller should handle which component to render based on external factors.


Instead of letting the controlled handle which/how component to render,
dynamic routing will handle themselves based on the factors


This is more flexible and dynamic and neat.

To achieve this, React-router followed the `react` principles;
component composition. // which is nothing but function composition

Defining Routing functionalities as components rather than configuration


> Routing takes place as your app is rendering


## Basic components
- Routers
- Route matching components
- Navigation components

### Routers
  - Provides the router environment for the app
  - Has routers for web and native

> Router should have only one child element. Hence Route components and other
app components are wrapped in a container div.  

Web Routers:
  - <BrowserRouter> // SPA handled by the server
  - <HashRouter> // SPA through /#!/

https://stackoverflow.com/questions/51974369/hashrouter-vs-browserrouter

If a section of the app needs Router, the entire section must be enclosed by this
router component.
```
<Router> // BrowserRouter or HashRouter
  <App/>
</Router>
```

### Route matching components
- <Route>
    Will render a `component` based on the route `path`
- <Switch>
    Acts like a switch case for selecting a Route.
    The *Case* being the route `path`


#### <Route>
Has 3 properties:
- path // url
- component
- children // not used/preferred

The <Route> component will render the `Component` provided to the component property
when the path matches the browser url.

```
<Router>
  <Route path='/' component={ App }></Route>
  <Route path='/about' component={ About }></Route>
</Router>
```

Note: <Route> is nothing but a React component, Hence you can apply all component,
composing techniques to Route component as well.



## Commits

## Add react-router
npm install react-router-dom --save
Used HashRouter as Router


## Simple Routing
1. Router component can have only one child element.
Hence Routes and app components are wrapped in a container
2. There can be many routes for the same path. Each will render the component.
3. Route component can be nested anywhere inside components. They will render
when the route path matches.

## React router - default routing behaviour
when
path = /
renders = Comp_1

when
path = /about
renders = Comp_1, Comp_2

This behaviour is as per design. This kind of behaviour is useful for
*component with nested routes*
Where,
the **parent** component `path = '/topics'` containing **child** components
whose route's path will be `path = '/topics/child1'`
Typical scenario is *tabbed components*
```
<tab-container>
  <tabs>
    // list of tab button
    // onClick will append the url  /topic/maths
  </tabs>
  <tab-content>
    // loads components based on url.
  </tab-content>
</tab-container>
```

https://github.com/ReactTraining/react-router/issues/4958#issue-221145980
https://github.com/ReactTraining/react-router/issues/4958#issuecomment-293613721
https://github.com/ReactTraining/react-router/issues/4958#issuecomment-293635950

Lets look at this later on how to handle such conditions.

## Every Route is assumed to have child routes
