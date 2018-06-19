import * as React from "react";
import { Route, Switch } from "react-router";
import EventPage from "./EventPage";
import EventListPage from "./EventListPage";
import SectionPage from "./SectionPage";
import LoginPage from "./LoginPage"

const Routes = () => (
  <Switch>
    <Route exact={true} path="/" component={EventListPage} />
    <Route exact={true} path="/event/:id/" component={EventPage} />
    <Route path="/event/:id/:section" component={SectionPage} />
    <Route path="/login" component={LoginPage} />
   
  </Switch>
);

export default Routes;
