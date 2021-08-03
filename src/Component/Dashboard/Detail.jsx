import React, { Component } from "react";
import DriverDetail from "./DriverDetail";
import RiderDetail from "./RiderDetial";

class Detail extends Component {
  render() {
    if (this.props.state.state.userType != "Driver")
      return <RiderDetail props={this.props.state} />;
    else return <DriverDetail props={this.props.state} />;
  }
}

export default Detail;
