import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'


const Maths = () => ( <div>Maths</div>)
const Eng = () => ( <div>English</div>)
const Topics = () => {
  return (
    <div>
      <h3>Topics</h3>
      <Route path="/topics/math" component={Maths}></Route>
      <Route path="/topics/eng" component={Eng}></Route>


      <h3>Topics with exact</h3>
      <Route exact path="/topics/math" component={Maths}></Route>
      <Route exact path="/topics/eng" component={Eng}></Route>
    </div>


  )
}

module.exports = function App() {
  return (
    <Router>
      <div>
        <h2>Route default</h2>
        <Route path='/topics' component={Topics}></Route>

        <h2>Route with exact</h2>
        <Route exact path='/topics' component={Topics}></Route>
      </div>

    </Router>

  )
}
