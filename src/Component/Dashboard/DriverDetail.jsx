import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow, MDBIcon } from "mdbreact";
import PlanRideTable from "./PlanRideTable";
import Axios from "axios";
import { URL } from "../../Cofig/Constant";
import RideTable from "./RideTable";

class DriverDetail extends Component {
  close = (event) => {
    this.props.props.setState({ detail: false });
  };
  state = {
    detail: false,
    planRideDataArray: [],
    rideDataArray: [],
  };

  componentDidMount() {
    let path = `ridePlan/` + this.props.props.state.driverData._id;
    Axios.get(URL.Url + path)
      .then((res) => {
        this.setState({ planRideDataArray: res.data.ridePlan });
      })
      .catch((error) => {
        console.log(error);
      });
    path = `ride/driver/` + this.props.props.state.driverData._id;
    Axios.get(URL.Url + path)
      .then((res) => {
        this.setState({ rideDataArray: res.data.ride });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  block = () => {
    let user = {
      id: this.props.props.state.driverData._id,
      status: "block",
    };
    let path = `driver/block`;
    Axios.put(URL.Url + path, user)
      .then((res) => {
        const updatedDriver = [];

        updatedDriver.push(res.data);
        {
          this.props.props.state.driverDataArray.filter((user) => {
            if (user._id != res.data._id) updatedDriver.push(user);
          });
        }
        alert("this User is Blocked Now");
        this.props.props.setState({
          driverDataArray: updatedDriver,
          detail: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  unBlock = () => {
    let user = {
      id: this.props.props.state.driverData._id,
      status: "allow",
    };
    let path = `driver/block`;
    Axios.put(URL.Url + path, user)
      .then((res) => {
        const updatedDriver = [];

        updatedDriver.push(res.data);
        {
          this.props.props.state.driverDataArray.filter((user) => {
            if (user._id != res.data._id) updatedDriver.push(user);
          });
        }
        alert("this User is Allow Now");
        this.props.props.setState({
          driverDataArray: updatedDriver,
          detail: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <>
        <MDBContainer fluid>
          <MDBContainer>
            <MDBRow>
              <MDBCol md="4">
                <h3 className=" green-text">
                  {this.props.props.state.userType}
                </h3>
              </MDBCol>
              <MDBCol>
                <MDBBtn
                  sm
                  className="float-right mt-5"
                  onClick={this.close}
                  color="success"
                >
                  Close <i class="fas fa-times-circle" />
                </MDBBtn>
              </MDBCol>
            </MDBRow>

            <MDBContainer fluid className="rounded z-depth-4">
              <MDBRow>
                <MDBCol className="mt-2" md="4">
                  <h5>{this.props.props.state.driverData.name}</h5>
                </MDBCol>

                <MDBCol className="mt-2 " md="4">
                  <h5>
                    <i className="fas fa-phone mr-3 " />
                    {this.props.props.state.driverData.phoneNumber}
                  </h5>
                </MDBCol>
                <MDBCol md="4">
                  <h5>
                    <MDBIcon className="mr-3" icon="taxi" />
                    {this.props.props.state.driverData.carName}
                  </h5>
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol md="4">
                  <h5>
                    Car Modal:
                    {this.props.props.state.driverData.carModel}
                  </h5>
                </MDBCol>

                <MDBCol md="4">
                  <h5>
                    <i class="fas fa-home mr-2" />
                    {this.props.props.state.driverData.address}
                  </h5>
                </MDBCol>
                <MDBCol md="4">
                  {this.props.props.state.driverData.status != "allow" ? (
                    <MDBBtn sm color="success" onClick={this.unBlock}>
                      UnBlock
                    </MDBBtn>
                  ) : (
                    <MDBBtn sm color="red" onClick={this.block}>
                      Block
                    </MDBBtn>
                  )}
                </MDBCol>
              </MDBRow>

              <MDBRow className="mt-5">
                <MDBCol md="12">
                  <PlanRideTable state={this} />
                </MDBCol>
              </MDBRow>

              <MDBRow className="mt-5">
                <MDBCol md="12">
                  <RideTable state={this} />
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBContainer>
        </MDBContainer>
      </>
    );
  }
}

export default DriverDetail;
