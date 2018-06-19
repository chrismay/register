import * as React from "react";
import { List, Button } from "@material-ui/core";
import Event from "../components/Event";
import AppMenuBar from "../components/AppMenuBar";
import AddIcon from "@material-ui/icons/Add";
const EventListPage = () => {
  return (
    <div>
      <AppMenuBar />
      <List>
        <Event id="1" label="01/06/2018" />
        <Event id="2" label="02/06/2018" />
        <Event id="3" label="03/06/2018" />
        <Event id="4" label="04/06/2018" />
        <Event id="5" label="05/06/2018" />
      </List>
      <Button
          variant="fab"
          color="primary"
          aria-label="add"
          style={{ position: "absolute", bottom: 80, right: 20 }}
        >
          <AddIcon />
        </Button>
    </div>
  );
};

export default EventListPage;
