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
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import styles from "./index.module.css";
import { useHistory } from "react-router";
import Menu from "@mui/material/Menu";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  MenuItem,
} from "@mui/material";

import {
  BackupTable,
  ExpandMore,
  ExpandMoreOutlined,
  FiberNew,
  Help,
  Home,
  Logout,
  ManageAccounts,
  MoneyOff,
  MoneyRounded,
  Report,
  Summarize,
} from "@mui/icons-material";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menu2, setMenu2] = useState(null);
  const [menu3, setMenu3] = useState(null);
  const [menu4, setMenu4] = useState(null);
  const [menu5, setMenu5] = useState(null);
  const [expandedincome, setexpandedincome] = useState(null);
  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleOpenMenu3 = (event) => {
    setMenu3(event.currentTarget);
  };
  const handleCloseMenu3 = () => {
    setMenu3(null);
  };

  const handleOpenMenu5 = (event) => {
    setMenu5(event.currentTarget);
  };
  const handleCloseMenu5 = () => {
    setMenu5(null);
  };
  const handleOpenMenu4 = (event) => {
    setMenu4(event.currentTarget);
  };
  const handleCloseMenu4 = () => {
    setMenu4(null);
  };
  const handleOpenMenu1 = (event) => {
    setMenu2(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleCloseMenu1 = () => {
    setMenu2(null);
  };
  const [expandednewaccount, setexpandednewaccount] = React.useState(false);

  const [expandedcreditshhet, setexpandedcreditshhet] = React.useState(false);
  const router = useHistory()
  const [expanded, setExpanded] = React.useState(false);
  const [expandedstock, setExpandedstock] = React.useState(false);
  const [expandedgeneral, setexpandedgeneral] = React.useState(false);
  const [expandedlemding, setexpandedlemding] = useState(false);
  const [expandedloan, setexpandedloan] = useState(false);
  const [expandedpersonal, setexpandedpersonal] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const handleChange2 = (panel) => (event, isExpanded) => {
    setExpandedstock(isExpanded ? panel : false);
  };
  const handleChange3 = (panel) => (event, isExpanded) => {
    setexpandedgeneral(isExpanded ? panel : false);
  };
  const handleChange4 = (panel) => (event, isExpanded) => {
    setexpandedlemding(isExpanded ? panel : false);
  };
  const handleChange5 = (panel) => (event, isExpanded) => {
    setexpandedincome(isExpanded ? panel : false);
  };
  const handleChange6 = (panel) => (event, isExpanded) => {
    setexpandedloan(isExpanded ? panel : false);
  };
  const handleChange7 = (panel) => (event, isExpanded) => {
    setexpandedpersonal(isExpanded ? panel : false);
  };
  const handleChange8 = (panel) => (event, isExpanded) => {
    setexpandedcreditshhet(isExpanded ? panel : false);
  };
  const handleChange9 = (panel) => (event, isExpanded) => {
    setexpandednewaccount(isExpanded ? panel : false);
  };
  return (
    <footer className={styles.footer}>
      <Container fluid>
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
              aria-controls="hover-menu1"
              aria-haspopup="true"
              onMouseEnter={handleOpenMenu}
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
              aria-controls="hover-menu2"
              aria-haspopup="true"
              onMouseEnter={handleOpenMenu1}
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
              aria-controls="hover-menu3"
              aria-haspopup="true"
              onMouseEnter={handleOpenMenu3}
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
              aria-controls="hover-menu4"
              aria-haspopup="true"
              onMouseEnter={handleOpenMenu4}
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
            <a
              aria-controls="hover-menu5"
              aria-haspopup="true"
              onMouseEnter={handleOpenMenu5}
              href="#pablo"
              className={styles.iconsbox}
              onClick={(e) => e.preventDefault()}
            >
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
        <Menu
          id="hover-menu1"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
          onMouseLeave={handleCloseMenu}
        >
          <div style={{ display: "flex" }}>
            <div>
              {" "}
              <Accordion
                keepMounted
                className={styles.hovermenu}
                style={{
                  "&:hover": {
                    backgroundColor: "#fff",
                  },
                  border: "none",
                  boxShadow: "none",
                }}
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreOutlined />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
               
                  Assembly
                </AccordionSummary>
                <AccordionDetails onClick={()=>router.push("/Sabhasadregistration")}>Sabhasad Registration</AccordionDetails>
                <AccordionDetails>Sabhasad land entry</AccordionDetails>
                <AccordionDetails>Entry of Sabhasad shares</AccordionDetails>
                <AccordionDetails>
                  Entrance to the Assembly Hall
                </AccordionDetails>
                <AccordionDetails>
                  Entry of Sabhasad vehicles/machines
                </AccordionDetails>
                <AccordionDetails>Entry of Sabhasad Varasdar</AccordionDetails>
                <AccordionDetails>Sabhasad photo upload</AccordionDetails>
              </Accordion>
              <MenuItem className={styles.hovermenu} onClick={handleCloseMenu}>
                My Community Entry
              </MenuItem>
              <MenuItem className={styles.hovermenu} onClick={handleCloseMenu}>
                Employee Entry
              </MenuItem>
              <Accordion
                keepMounted
                className={styles.hovermenu}
                style={{
                  border: "none",
                  boxShadow: "none",
                }}
                expanded={expandedstock === "panel1"}
                onChange={handleChange2("panel1")}
              >
                <AccordionSummary
                  className={styles.hovermenu}
                  expandIcon={<ExpandMoreOutlined />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  Dead stock
                </AccordionSummary>
                <AccordionDetails className={styles.hovermenu}>
                  Entry of dead stock
                </AccordionDetails>
                <AccordionDetails className={styles.hovermenu}>
                  Dead stock cancellation entry
                </AccordionDetails>
              </Accordion>
              <Accordion
                keepMounted
                className={styles.hovermenu}
                style={{
                  "&:hover": {
                    backgroundColor: "#fff",
                  },
                  border: "none",
                  boxShadow: "none",
                }}
                expanded={expandedgeneral === "panel1"}
                onChange={handleChange3("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreOutlined />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  General Ledger Master
                </AccordionSummary>
                <AccordionDetails> General Ledger Master </AccordionDetails>
                <AccordionDetails>Create a new group</AccordionDetails>
                <AccordionDetails>Create a new head Opening</AccordionDetails>
                <AccordionDetails>
                  Opening of New Account - In G.L
                </AccordionDetails>
                <AccordionDetails>
                  Opening of New Account - In GL-2
                </AccordionDetails>
              </Accordion>
            </div>

            <div>
              <MenuItem className={styles.hovermenu} onClick={handleCloseMenu}>
                Crop Master
              </MenuItem>

              <MenuItem className={styles.hovermenu} onClick={handleCloseMenu}>
                Lending Master
              </MenuItem>
              <MenuItem className={styles.hovermenu} onClick={handleCloseMenu}>
                Lending Interest Master
              </MenuItem>
              <MenuItem className={styles.hovermenu} onClick={handleCloseMenu}>
                {" "}
                Master the deposit Interest
              </MenuItem>
              <MenuItem className={styles.hovermenu} onClick={handleCloseMenu}>
                Thing Master
              </MenuItem>
            </div>
          </div>
        </Menu>
        <Menu
          id="hover-menu2"
          anchorEl={menu2}
          keepMounted
          open={Boolean(menu2)}
          onClose={handleCloseMenu1}
          onMouseLeave={handleCloseMenu}
        >
          <div style={{ display: "flex" }}>
            <div>
              {" "}
              <Accordion
                keepMounted
                className={styles.hovermenu}
                style={{
                  "&:hover": {
                    backgroundColor: "#fff",
                  },
                  border: "none",
                  boxShadow: "none",
                }}
                expanded={expandedlemding === "panel1"}
                onChange={handleChange4("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreOutlined />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  Lending
                </AccordionSummary>
                <AccordionDetails> Cash-transactions</AccordionDetails>
                <AccordionDetails> Transfer transaction </AccordionDetails>
              </Accordion>
              <MenuItem className={styles.hovermenu} onClick={handleCloseMenu1}>
                Recovery
              </MenuItem>
              <Accordion
                keepMounted
                className={styles.hovermenu}
                style={{
                  "&:hover": {
                    backgroundColor: "#fff",
                  },
                  border: "none",
                  boxShadow: "none",
                }}
                expanded={expandedincome === "panel1"}
                onChange={handleChange5("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreOutlined />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  Other income/expenditure
                </AccordionSummary>
                <AccordionDetails> Cash Credit </AccordionDetails>
                <AccordionDetails> Medium term account </AccordionDetails>
                <AccordionDetails>
                  {" "}
                  Current / Savings Account Fixed
                </AccordionDetails>
                <AccordionDetails>Fixed Deposit Account </AccordionDetails>
              </Accordion>
              <MenuItem className={styles.hovermenu} onClick={handleCloseMenu1}>
                Purchase
              </MenuItem>
              <Accordion
                keepMounted
                className={styles.hovermenu}
                style={{
                  "&:hover": {
                    backgroundColor: "#fff",
                  },
                  border: "none",
                  boxShadow: "none",
                }}
                expanded={expandedloan === "panel1"}
                onChange={handleChange6("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreOutlined />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  Sale
                </AccordionSummary>
                <Accordion
                  className={styles.hovermenu}
                  style={{
                    "&:hover": {
                      backgroundColor: "#fff",
                    },
                    border: "none",
                    boxShadow: "none",
                  }}
                  expanded={expandedpersonal === "panel1"}
                  onChange={handleChange7("panel1")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreOutlined />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    Repayment of loan
                  </AccordionSummary>
                  <AccordionDetails>Personal Credit Report</AccordionDetails>
                </Accordion>
                <AccordionDetails>Collection-Access</AccordionDetails>
              </Accordion>
              <Accordion
                keepMounted
                className={styles.hovermenu}
                style={{
                  "&:hover": {
                    backgroundColor: "#fff",
                  },
                  border: "none",
                  boxShadow: "none",
                }}
                expanded={expandedcreditshhet === "panel1"}
                onChange={handleChange8("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreOutlined />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  Credit sheet
                </AccordionSummary>

                <AccordionDetails>Entire Credit Sheet</AccordionDetails>
              </Accordion>
              <MenuItem className={styles.hovermenu} onClick={handleCloseMenu1}>
                KCC Charge
              </MenuItem>
              <MenuItem className={styles.hovermenu} onClick={handleCloseMenu1}>
                Insurance premium generation
              </MenuItem>
            </div>
          </div>
        </Menu>
        <Menu
          id="hover-menu3"
          anchorEl={menu3}
          keepMounted
          open={Boolean(menu3)}
          onClose={handleCloseMenu3}
          onMouseLeave={handleCloseMenu3}
        >
          <div style={{ display: "flex" }}>
            <div>
              <Accordion
                keepMounted
                className={styles.hovermenu}
                style={{
                  "&:hover": {
                    backgroundColor: "#fff",
                  },
                  border: "none",
                  boxShadow: "none",
                }}
                expanded={expandednewaccount === "panel1"}
                onChange={handleChange9("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreOutlined />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  Open a new account
                </AccordionSummary>

                <AccordionDetails>For share</AccordionDetails>
              </Accordion>
            </div>
          </div>
        </Menu>
      
        <Menu
          id="hover-menu4"
          anchorEl={menu4}
          keepMounted
          open={Boolean(menu4)}
          onClose={handleCloseMenu4}
          onMouseLeave={handleCloseMenu4}
        >
          <div style={{ display: "flex" }}>
            <div>
              {" "}
              <MenuItem className={styles.hovermenu} onClick={handleCloseMenu4}>
                Sabhasad-Report
              </MenuItem>
              <MenuItem className={styles.hovermenu} onClick={handleCloseMenu4}>
                Account-Report
              </MenuItem>
              <MenuItem className={styles.hovermenu} onClick={handleCloseMenu4}>
                Lending/Collection-Report
              </MenuItem>
              <MenuItem className={styles.hovermenu} onClick={handleCloseMenu4}>
                MIS-Report
              </MenuItem>
              <MenuItem className={styles.hovermenu} onClick={handleCloseMenu4}>
                Bank-Report
              </MenuItem>
              <MenuItem className={styles.hovermenu} onClick={handleCloseMenu4}>
                Other-report
              </MenuItem>
            </div>
          </div>
        </Menu>
        <Menu
          id="hover-menu5"
          anchorEl={menu5}
          keepMounted
          open={Boolean(menu5)}
          onClose={handleCloseMenu5}
          onMouseLeave={handleCloseMenu5}
        >
          <div style={{ display: "flex" }}>
            <div>
              {" "}
              <MenuItem className={styles.hovermenu} onClick={handleCloseMenu5}>
                Backing Up data
              </MenuItem>
            </div>
          </div>
        </Menu>
        
      </Container>
    </footer>
  );
};

export default Header;
