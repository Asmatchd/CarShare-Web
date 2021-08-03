import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import RiderTable from "./RiderTable";
import Axios from "axios";
import DashboardCard from "./Dashboard(Card)";
import DriverTable from "./DriverTable";
import Navbar from "./Navbar";
import Detail from "./Detail";
import { URL } from "../../Cofig/Constant";

class Dashboard extends Component {
  state = {
    detail: false,
    driverDataArray: [],
    riderDataArray: [],
    rideDataArray: [],
    driverData: "",
    riderData: "",
    userType: "",
  };
  componentDidMount() {
    Axios.get(URL.Url + `driver`)
      .then((res) => {
        this.setState({ driverDataArray: res.data });
      })
      .catch((error) => {
        console.log(error);
      });

    Axios.get(URL.Url + `rider`)
      .then((res) => {
        this.setState({ riderDataArray: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    if (this.state.detail == true) {
      return <Detail state={this} />;
    } else
      return (
        <>
          <Navbar props={this} />
          <MDBContainer>
            <MDBRow>
              <DashboardCard
                Title="Drivers"
                Icon="id-card"
                Number={this.state.driverDataArray.length}
                color="amber-text"
              />

              <DashboardCard
                Title="Rides"
                Icon="taxi"
                Number={this.state.riderDataArray.length}
                color="red-text"
              />

              <DashboardCard
                Title="Riders"
                Icon="user-friends"
                color="cyan-text"
                Number={this.state.riderDataArray.length}
              />
            </MDBRow>

            <MDBRow className="mt-5">
              <DriverTable state={this} />
            </MDBRow>

            <MDBRow className="mt-5">
              <RiderTable state={this} />
            </MDBRow>
          </MDBContainer>
        </>
      );
  }
}

export default Dashboard;
