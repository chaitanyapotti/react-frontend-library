import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

class CuiCheckbox extends React.Component {
  render() {
    return (
      <div>
        <Checkbox {...this.props} />
      </div>
    );
  }
}

export default CuiCheckbox;
