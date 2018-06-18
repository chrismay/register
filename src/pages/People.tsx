import * as React from "react";
import { List } from "@material-ui/core";
import Person from "../components/Person";
import { match } from "react-router";

interface SectionId {
  section: string;
}
const PeoplePage = (props: { match: match<SectionId> }) => {
  return (
    <div>
      <p>({props.match.params.section})</p>
      <List>
        <Person name="Chris May" />
        <Person name="Laurence May" />
        <Person name="Alice May" />
        <Person name="Amanda May" />
      </List>
    </div>
  );
};

export default PeoplePage;
