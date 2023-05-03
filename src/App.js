import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/login";
import Addride from "./component/Driver/addride";
import Dashboard from "./component/dashboard";
import Rides from "./component/rides";
import Ridehistory from "./component/ridehistory";
import MapUtil from "./component/map";
import Showride from "./component/Driver/showride";
import { createGlobalState } from "react-hooks-global-state";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Profile from "./component/profile";
import Header from "./component/header";
const initialState = { user: "", account: "" };
const { useGlobalState } = createGlobalState(initialState);

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat",
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="" element={<Rides />} />
            <Route path="addride" element={<Addride />} />
            <Route path="ridehistory" element={<Ridehistory />} />
          </Route>
          <Route path="/profile" element={<Profile/>} />
          <Route path="/logout" element={<Login />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
    );
};
export default App;
export { useGlobalState };
