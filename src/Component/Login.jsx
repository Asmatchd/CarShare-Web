import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import FormPage from "./LoginForm";

class Login extends Component {
  render() {
    return (
      <>
        <MDBContainer fluid>
          <MDBContainer className="mt-5 rounded z-depth-3 ">
            <MDBRow className="mt-5">
              <MDBCol className="my-5 " md="7">
                <FormPage />
              </MDBCol>
              <MDBCol className="my-5 " md="5">
                <img
                  className="d-block w-100 my-5"
                  src={require("./carshareLogin.JPG")}
                  alt="Login"
                />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBContainer>
      </>
    );
  }
}

export default Login;
