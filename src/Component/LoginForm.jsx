import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput,
} from "mdbreact";
import Axios from "axios";
import { Component } from "react";
import { Redirect } from "react-router-dom";

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    islogin: false,
  };
  login = () => {
    console.log("coming in this function");
    Axios.post(`http://localhost:4000/auth/admin`, {
      email: this.state.email,
      password: this.state.password,
    })
      .then((res) => {
        //   let user = JSON.stringify(res.data);
        //   localStorage.setItem("x-auth-token", user);
        this.setState({ islogin: true });
      })
      .catch((error) => {
        console.log(error);
        alert("invalid login");
      });
  };
  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    if (this.state.islogin) return <Redirect to="/dashboard" />;
    else
      return (
        <MDBContainer className="my-2">
          <MDBRow>
            <MDBCol md="12">
              <MDBCard>
                <MDBCardBody className="my-4">
                  <MDBCardHeader
                    className="form-header  rounded"
                    style={{ color: "#00B74A" }}
                  >
                    <h3 className="my-3">
                      <MDBIcon icon="lock" /> Login:
                    </h3>
                  </MDBCardHeader>
                  <form>
                    <div className="grey-text">
                      <MDBInput
                        value={this.state.email}
                        name="email"
                        onChange={this.changeHandler}
                        type="email"
                        id="materialFormRegisterNameEx"
                        label="Your email"
                        required
                      />
                      <MDBInput
                        value={this.state.password}
                        name="password"
                        onChange={this.changeHandler}
                        type="password"
                        id="materialFormRegisterNameEx"
                        label="your password"
                        required
                      />
                    </div>

                    <div className="text-center mt-4">
                      <MDBBtn
                        color="success"
                        className="mb-3"
                        onClick={this.login}
                      >
                        <MDBIcon className="ml-2" icon="key" /> Login
                      </MDBBtn>
                    </div>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      );
  }
}

export default LoginForm;
