import React from "react";
import { Route, Redirect } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";



export const OpenDoors = () => (
  <>
        <Route render={() => {
          if (localStorage.getItem("lu_token")) {
            return (
              <>
                <NavBar />
                <ApplicationViews />
              </>
            )
          } else {
            return <Redirect to="/login" />;
          }
      }} />

      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    
  </>
)
