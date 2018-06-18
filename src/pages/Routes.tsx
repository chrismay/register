import * as React from "react";
import { Route, Switch } from "react-router";
import { PeoplePage } from "./People";
import { SectionsPage } from "./Sections";

export function Routes() {
  return (
    <Switch>
      <Route exact={true} path="/" render={() => <SectionsPage />} />
      <Route path="/people/:section" render={() => <PeoplePage />} />
    </Switch>
  );
}
