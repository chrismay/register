import * as React from "react";
import { ListItemText } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import EventIcon from "@material-ui/icons/Event";
import { RegisterAppState } from "../domain";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

interface Props {
  id: string;
  label: string;
}

function Event(props: Props) {
  const { id, label } = props;
  return (
    <Link to={`/event/${id}/`} style={{ textDecoration: "none" }}>
      <ListItem>
        <Avatar>
          <EventIcon />
        </Avatar>
        <ListItemText primary={label} secondary="" />
      </ListItem>
    </Link>
  );
}

const mapStateToProps = (state: RegisterAppState) => ({});

export default connect(mapStateToProps)(Event);
