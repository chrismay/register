import * as React from "react";
import { Checkbox } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import FaceIcon from "@material-ui/icons/Face";

interface Props {
  name: string;
}
interface State {
  checked: boolean;
}

class Person extends React.Component<Props, State> {
  public state = { checked: false };
  public render() {
    return (
      <ListItem onClick={() => this.toggleChecked()}>
        <Avatar>
          <FaceIcon />
        </Avatar>
        <ListItemText primary={this.props.name} secondary="" />
        <Checkbox
          checked={this.state.checked}
          onChange={() => this.toggleChecked()}
        />
      </ListItem>
    );
  }

  private toggleChecked() {
    this.setState(st => ({ ...st, checked: !st.checked }));
  }
}

export default Person;
