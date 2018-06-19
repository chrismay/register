import * as React from "react";
import Section from "../components/Section";
import { List } from "@material-ui/core";
import { match } from "react-router";
import BackNavBar from "../components/BackNavBar";

interface EventId {
  id: string;
}
const EventPage = (props:{match: match<EventId>}) => (
  <div>
    <BackNavBar label={props.match.params.id}/>
    <List>
      <Section name="cornets" label="Cornets" />
      <Section name="horns" label="Horns" />
      <Section name="basses" label="Basses" />
      <Section name="percussion" label="Percussion" />
      <Section name="baritone" label="Baris & Euphs" />
      <Section name="trombones" label="Trombones" />
    </List>
  </div>
);

export default EventPage;
