import React from 'react';
import { Switch, Route } from "react-router-dom";
import Greenhouse from "./components/Greenhouse";
import Navigation from "./components/Navigation";
import Thermometer from "./components/Thermometer";
import Hygrometer from "./components/Hygrometer";

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route path="/thermometer">
          <Thermometer />
        </Route>
        <Route path="/hygrometer">
          <Hygrometer />
        </Route>
        <Route path="/">
          <Greenhouse />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
