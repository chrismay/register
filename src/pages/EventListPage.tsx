import * as React from "react";
import { List, Button } from "@material-ui/core";
import Event from "../components/Event";
import AppMenuBar from "../components/AppMenuBar";
import AddIcon from "@material-ui/icons/Add";
import { connect } from "react-redux";
import {  ConnectedReduxProps, RegisterAppState } from "../domain";
import { addEvent, EventActions, EventListState } from "../domain/Events";

type Props=   ConnectedReduxProps<EventActions> & EventListState

const EventListPage = (props: Props) => {
  return (
    <div>
      <AppMenuBar />
      <List>
        {props.events.map(e=> <Event key={e.id} id={e.id} label={e.label} />)}       
      </List>
      <Button
        variant="fab"
        color="primary"
        aria-label="add"
        style={{ position: "absolute", bottom: 65, right: 20 }}
        onClick={()=>props.dispatch(addEvent())}
      >
        <AddIcon />
      </Button>
    </div>
  );
};
const mapStateToProps:(state: RegisterAppState)=> EventListState = state=>  state.events;

export default connect(mapStateToProps)(EventListPage);
