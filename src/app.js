import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'



const Main = () => (<div>Main Without Route</div>);

const Comp_1 = () => (<div> Comp_1 at path / </div>)
const Comp_2 = () => (<div> Comp_2 at path / </div>)

const MainWithRoute = () => (
  <div>
    <Route path="/" component={Comp_1}></Route>
    <Route path="/" component={Comp_2}></Route>
  </div>
)

module.exports = function App() {
  return (
    <Router>
      <div>
        {/* Router can have only one child element. Hence wrapped in a container  */}
        <Main/>
        <Route path="/" component={Comp_1}></Route>
        <Route path="/" component={Comp_2}></Route>


        <MainWithRoute></MainWithRoute>
      </div>

    </Router>

  )
}
