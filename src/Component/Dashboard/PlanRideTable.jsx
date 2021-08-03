import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";

export default function PlanRideTable(props) {
  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      props.state.setState({
        detail: true,
        rideData: row,
      });
    },
  };
  const { SearchBar } = Search;
  const columns = [
    {
      dataField: "pickupLocation",
      text: "Pickup Location",
      headerStyle: (colum, colIndex) => {
        return { minWidth: "300px", textAlign: "left" };
      },
    },
    {
      dataField: "dropoffLocation",
      text: "Dropoff Location",
      headerStyle: (colum, colIndex) => {
        return { minWidth: "300px", textAlign: "left" };
      },
    },
    {
      dataField: "date",

      text: "Date",
      headerStyle: (colum, colIndex) => {
        return { minWidth: "250px", textAlign: "left" };
      },
    },
    {
      dataField: "fare",

      text: "Fare",
      headerStyle: (colum, colIndex) => {
        return { minWidth: "150px", textAlign: "left" };
      },
    },
  ];

  const options = {
    sizePerPage: 5,
    hideSizePerPage: true,
    //hidePageListOnlyOnePage: true8
  };

  return (
    <MDBContainer className="rounded z-depth-2 " fluid>
      <MDBRow className="col-lg-12 ">
        <MDBCol md="12">
          <h3 className=" green-text">Plan Rides</h3>
          <ToolkitProvider
            keyField="props.state.state.planRideDataArray._id"
            data={props.state.state.planRideDataArray}
            columns={columns}
            search={{
              searchFormatted: true,
            }}
          >
            {(props) => (
              <>
                <MDBCol md="3">
                  <SearchBar {...props.searchProps} />
                </MDBCol>

                <hr />
                <BootstrapTable
                  {...props.baseProps}
                  bordered={true}
                  striped
                  pagination={paginationFactory({ ...options })}
                  rowEvents={rowEvents}
                />
              </>
            )}
          </ToolkitProvider>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
