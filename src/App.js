import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Main from './Main';
import Welcome from './Welcome';


function App() {
  return (
  
    <div style={{overflow:'hidden'}}>

    <Router>
    <Switch>
    <Route exact path="/">
       <Welcome/>
    </Route>
    <Route exact path="/main">
       <Main/>
    </Route>
    </Switch>
    </Router>
    

    </div>
  )
}

export default App