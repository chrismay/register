import * as React from "react";
import { ListItemText } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import GroupIcon from "@material-ui/icons/Group";
import { RegisterAppState } from "../domain";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  label: string;
}

function Section(props: Props) {
  const { name, label } = props;
  return (
    <Link to={`/people/${name}`} style={{ textDecoration: "none" }}>
      <ListItem>
        <Avatar>
          <GroupIcon />
        </Avatar>
        <ListItemText primary={label} secondary="" />
      </ListItem>
    </Link>
  );
}

const mapStateToProps = (state: RegisterAppState) => ({});

export default connect(mapStateToProps)(Section);
