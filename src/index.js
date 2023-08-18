/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import AdminNavbar from "components/Navbars/AdminNavbar";
import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import routes from "routes.js";

import sidebarImage from "assets/img/sidebar-3.jpg";
import Dashboard from "views/Dashboard";
import Header from "components/Footer/Footer";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import AdminLayout from "layouts/Admin.js";
import Login from "layouts/authentication/Login";
import Signup from "layouts/authentication/SignUp";
import User from "views/UserProfile";
import Sabhasadregistration from "views/Sabhasad/Sabhasadregistration";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <AdminNavbar />

    <Header />
    <Switch>
      <Route path="/signup" render={(props) => <Signup {...props} />} />
      <Route
        path="/Sabhasadregistration"
        render={(props) => <Sabhasadregistration {...props} />}
      />
      <Route path="/" render={(props) => <AdminLayout {...props} />} />
      <Route path="/login" render={(props) => <Login {...props} />} />
    </Switch>
  </BrowserRouter>
);
