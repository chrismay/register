import * as React from "react";
import Section from "../components/Section";
import { List } from "@material-ui/core";
import AppBar from "../components/AppBar";

const SectionsPage = () => (
  <div>
    <AppBar />
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

export default SectionsPage;
