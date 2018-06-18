import * as React from "react";
import { NewReleases } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { Tooltip } from "@material-ui/core";
import { RegisterAppState } from "../domain";
import { connect } from "react-redux";
interface Props {
  updateAvailable: boolean;
}
const UpdateNotification = (props: Props) => {
  if (props.updateAvailable) {
    return (
      <Tooltip id="tooltip-update" title="New version! Reload to update">
        <IconButton onClick={() => location.reload()} color="secondary">
          <NewReleases />
        </IconButton>
      </Tooltip>
    );
  } else {
    return <></>;
  }
};

function mapStateToProps(state: RegisterAppState) {
  return state.system;
}

export default connect(mapStateToProps)(UpdateNotification);
