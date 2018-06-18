import * as React from "react";
import { ListItemText } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import GroupIcon from "@material-ui/icons/Group";
import { RegisterAppState, ConnectedReduxProps } from "../domain";
import { connect } from "react-redux";
import { push } from "connected-react-router";

interface Props extends ConnectedReduxProps<RegisterAppState> {
  name: string;
  label: string;
}

function Section(props: Props) {
  const { name, label, dispatch } = props;
  return (
    <ListItem onClick={() => dispatch(push(`/people/${name}`))}>
      <Avatar>
        <GroupIcon />
      </Avatar>
      <ListItemText primary={label} secondary="" />
    </ListItem>
  );
}

const mapStateToProps = (state: RegisterAppState) => ({});

export default connect(mapStateToProps)(Section);
