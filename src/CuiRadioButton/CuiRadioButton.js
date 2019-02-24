import React from "react";
import Radio from "@material-ui/core/Radio";

class CuiRadioButton extends React.Component {
  render() {
    return (
      <div>
        <Radio {...this.props} />
      </div>
    );
  }
}

export default CuiRadioButton;
