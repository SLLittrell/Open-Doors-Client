import React from "react";
import { Route, Redirect } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { ProfileProvider } from "./auth/ProfileProvider";


export const OpenDoors = () => (
  <>
        <Route render={() => {
          if (localStorage.getItem("open_token")) {
            return (
              <>
              <ProfileProvider>
                <NavBar />
              </ProfileProvider>
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
