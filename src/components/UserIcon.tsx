import * as React from "react";
import { isLoaded } from "react-redux-firebase";
import SignalWifiOffIcon from "@material-ui/icons/SignalWifiOff";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { connect } from "react-redux";
import { IconButton, Tooltip, Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

type AuthState = Partial<{
  uid: string;
  displayName: string;
  photoURL: string;
}>;

interface Props {
  auth: AuthState;
}

const UserIcon = (props: Props) => {
  const auth = props.auth;
  if (!isLoaded(auth)) {
    return (
      <Tooltip id="tooltip-update" title="Offline">
        <IconButton>
          <SignalWifiOffIcon />
        </IconButton>
      </Tooltip>
    );
  }
  if (auth.uid) {
    return (
      <Tooltip id="tooltip-update" title="Logged in">
        <IconButton>
          <Avatar
            alt={auth.displayName}
            src={auth.photoURL}
            style={{ margin: 10 }}
          />
        </IconButton>
      </Tooltip>
    );
  } else {
    return (
      <Tooltip id="tooltip-update" title="Log in">
        <IconButton>
          <Link to="/login">
            <PersonOutlineIcon />
          </Link>
        </IconButton>
      </Tooltip>
    );
  }
};

interface AuthContainer {
  firebase: { auth: AuthState };
}

function mapStateToProps(state: AuthContainer): Props {
  return { auth: state.firebase.auth };
}

export default connect(mapStateToProps)(UserIcon);
