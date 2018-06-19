import * as React from "react";
import { List } from "@material-ui/core";
import Person from "../components/Person";
import { match } from "react-router";
import BackNavBar from "../components/BackNavBar";

interface SectionId {
  section: string;
}
const SectionPage = (props: { match: match<SectionId> }) => {
  return (
    <div>
      <BackNavBar label={props.match.params.section} />
      <List>
        <Person name="Chris May" />
        <Person name="Laurence May" />
        <Person name="Alice May" />
        <Person name="Amanda May" />
      </List>
    </div>
  );
};

export default SectionPage;
