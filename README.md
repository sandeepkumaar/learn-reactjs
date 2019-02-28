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
This cannot change at run-time.
The controller should handle which component to render based on factors.


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
  - Has router for web and native

Web Routers:
  - <BrowserRouter> // SPA handled by the server
  - <HashRouter> // SPA through /#!/

https://stackoverflow.com/questions/51974369/hashrouter-vs-browserrouter

If a section of the app needs Router, the entire section must be enclosed by this
router.
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
    The case being the route `path`


#### <Route>
Has 3 properties:
- path // url
- component
- children // not used, preferred

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
