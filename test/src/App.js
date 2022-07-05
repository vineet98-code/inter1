import React from 'react'
import { Switch, Route } from "react-router-dom";
import Home from './Home';
import Subscribe from './Subscribe';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route path="/subscibe">
          <Subscribe />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
