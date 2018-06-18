import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import BackIcon from "@material-ui/icons/ArrowBack";
import * as React from "react";
import { withRouter } from "react-router";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};
interface Props {
  label: string;
}

function BackNavBar(props: { classes: any; label: string; history: any }) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" onClick={() => history.back()}>
            <BackIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            {props.label}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default (withRouter(withStyles(styles)(
  BackNavBar
) as any) as any) as React.SFC<Props>;
