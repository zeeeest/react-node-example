import React from 'react';
import './App.scss';
import { Route, Switch } from "react-router";
import ImagesLayout from "./containers/ImagesLayout";

function App() {

  return (
      <Switch>
        <Route exact path="/" component={ImagesLayout} />/>
      </Switch>
  );
}

export default App;
