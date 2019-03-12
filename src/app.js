import React from 'react'
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'


const Maths = (props) => {
  console.log('Maths', props);
  return (<div>Maths</div>)
}

const Eng = (props) => {
  console.log("Eng", props);
  return ( <div>English</div>)
}

const Tamil = (props) => {
  console.log("Tamil", props);
  return ( <div>Tamil</div>)
}


const Topics = (props) => {
  console.log('Topics',props);
  return (
    <div>
      <h3>Topics</h3>
      <Switch>
        {/* switch does not affect the parent-child route rendering */}
        <Route path="/topics/math" component={Maths}></Route>
        <Route path="/topics/eng" component={Eng}></Route>
      </Switch>

      <h3>Topics with exact</h3>
      <Switch>
        <Route exact path="/topics/math" component={Maths}></Route>
        <Route exact path="/topics/eng" component={Eng}></Route>
        <Route path="/topics/tamil/:mark" component={Tamil}></Route>
      </Switch>
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
