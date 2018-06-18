import * as React from "react";
import Section from "../components/Section";
import { List } from "@material-ui/core";

export function SectionsPage() {
  return (
    <div>
      {" "}
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
}
