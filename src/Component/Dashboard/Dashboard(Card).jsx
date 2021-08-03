import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBIcon,
} from "mdbreact";

const DashboardCard = (props) => {
  return (
    <MDBCol md="4">
      <MDBCard className=" z-depth-1">
        <MDBCardBody className="mt-0">
          <MDBCardTitle>
            <h5>{props.Title}</h5>
          </MDBCardTitle>
          <MDBCardText>
            <MDBIcon
              icon={props.Icon}
              className={"float-left fa-2x mr-2 " + props.color}
            />
            <h5>{props.Number}</h5>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default DashboardCard;
