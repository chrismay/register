import * as React from "react";
import { List } from "@material-ui/core";
import Person from "../components/Person";

export function PeoplePage() {
  return (
    <div>
      <List>
        <Person name="Chris May" />
        <Person name="Laurence May" />
        <Person name="Alice May" />
        <Person name="Amanda May" />
      </List>
    </div>
  );
}
