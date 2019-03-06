import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'



const Main = () => (<div>Main Without Route</div>);

const Dashboard = () => (<div> Dashboard at Root</div>)

module.exports = function App() {
  return (
    <Router>
      <Main/>
      <Route></Route>

    </Router>

  )
}
