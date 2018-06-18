import * as React from "react";
import { Route, Switch } from "react-router";
import PeoplePage from "./People";
import SectionsPage from "./Sections";

const Routes = () => (
  <Switch>
    <Route exact={true} path="/" component={SectionsPage} />
    <Route path="/people/:section" component={PeoplePage} />
  </Switch>
);

export default Routes;
