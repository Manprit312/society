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
import React, { Component } from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Container, Nav, Dropdown, Button } from "react-bootstrap";
import styles from "./index.module.css";
import routes from "routes.js";
import { BackupTable, FiberNew, Help, Home, Logout, ManageAccounts, MoneyOff, Summarize } from "@mui/icons-material";

function Header() {
  const location = useLocation();
  const mobileSidebarToggle = (e) => {
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function () {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  };

  return (
    <Navbar
      className={styles.navbar}
      style={{
        background: "#304ffe",

        color: "#ffffff",
      }}
      expand="lg"
    >
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2">
            <span className="navbar-toggler-bar burger-lines"></span>
            <span className="navbar-toggler-bar burger-lines"></span>
            <span className="navbar-toggler-bar burger-lines"></span>
          </Navbar.Toggle>
       
          <Navbar.Brand
            href="#home"
            className={styles.navbarheading}
            style={{ color: "#ffffff" }}
            onClick={(e) => e.preventDefault()}
          >
            Dhardi Seva Co-operative Society Ltd.
          </Navbar.Brand>
        </div>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav mr-auto" navbar>
    
          <Container fluid >
          <ul className={styles.footermenu}>
            <li className={styles.navigate}>
              <a
                href="#pablo"
                className={styles.iconsbox}
                onClick={(e) => e.preventDefault()}
              >
                <Home
                  style={{ width: "18px", height: "16px", marginRight: "5px" }}
                />{" "}
                <span>Home</span>
              </a>
            </li>
            <li className={styles.navigate}>
              <a
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                className={styles.iconsbox}
              >
                <ManageAccounts
                  style={{ width: "18px", height: "16px", marginRight: "5px" }}
                />{" "}
                <span>Master</span>
              </a>
            </li>
            <li className={styles.navigate}>
              <a
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                className={styles.iconsbox}
              >
                <MoneyOff
                  style={{ width: "18px", height: "16px", marginRight: "5px" }}
                />
                <span>Transaction</span>
              </a>
            </li>
            <li className={styles.navigate}>
              <a
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                className={styles.iconsbox}
              >
                <FiberNew
                  style={{ width: "18px", height: "16px", marginRight: "5px" }}
                />{" "}
                <span>Namu</span>
              </a>
            </li>
            <li className={styles.navigate}>
              <a
                href="#pablo"
                className={styles.iconsbox}
                onClick={(e) => e.preventDefault()}
              >
                <Summarize
                  style={{ width: "18px", height: "16px", marginRight: "5px" }}
                />
                <span> Report</span>
              </a>
            </li>
            <li className={styles.navigate}>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <BackupTable
                  style={{ width: "18px", height: "16px", marginRight: "5px" }}
                />{" "}
                <span>Utility</span>
              </a>
            </li>
            <li className={styles.navigate}>
              <a
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                className={styles.iconsbox}
              >
                <Help
                  style={{ width: "18px", height: "16px", marginRight: "5px" }}
                />{" "}
                <spam>Help</spam>
              </a>
            </li>
            <li className={styles.navigate}>
              <a
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                className={styles.iconsbox}
              >
                <Logout
                  style={{ width: "18px", height: "16px", marginRight: "5px" }}
                />{" "}
                <span>Out</span>
              </a>
            </li>
          </ul>

          {/* <p className="copyright text-center">
              © {new Date().getFullYear()}{" "}
              <a href="http://www.creative-tim.com">Creative Tim</a>, made with
              love for a better web
            </p> */}
        </Container>
         
          </Nav>
     
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
