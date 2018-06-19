import * as React from "react";
import { List } from "@material-ui/core";
import Event from "../components/Event";
import AppMenuBar from "../components/AppMenuBar";

const EventListPage = () => {
  return (
    <div>
      <AppMenuBar/>          
      <List>
        <Event id="1" label="01/06/2018" />
        <Event id="2" label="02/06/2018" />
        <Event id="3" label="03/06/2018" />
        <Event id="4" label="04/06/2018" />
        <Event id="5" label="05/06/2018" />
      </List>
    </div>
  );
};

export default EventListPage;
