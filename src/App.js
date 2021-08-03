import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./Component/Dashboard/Dashboard";
import Navbar from "./Component/Dashboard/Navbar";
import ProtectedRoute from "./Component/Dashboard/protected";
import Login from "./Component/Login";

function App() {
  let user = JSON.parse(localStorage.getItem("x-auth-token"));
  return (
    <>
      {/* <Switch>
        <Route exect path="/login" component={Login} />
        <Route exect path="/dashboard" component={Dashboard} />
      </Switch> */}
      <Dashboard />
    </>
  );
}

{
  /* <Switch>
<Route exect path="/login" component={Login } />
<ProtectedRoute exect path="/dashboard" component={() => <Dashboard user={user} />} />
</Switch> */
}

export default App;
