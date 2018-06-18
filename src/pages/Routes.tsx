import * as React from "react";
import { Route, Switch } from "react-router";
import { PeoplePage } from "./People";

export function Routes() {
  return (
    <Switch>
      <Route exact={true} path="/" render={() => <div>Stuff goes here</div>} />
      <Route path="/people" render={() => <PeoplePage/>} />
    </Switch>
  );
}
