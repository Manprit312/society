import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import styles from "./index.module.css";
import SabhasadregistrationForm from "components/AssemlyForm/assembly";
function Sabhasadregistration() {
  return (
    <>
      <Container fluid style={{ background: "#f5f7fa" ,height:"190h"}}>
        <Container>
          <div style={{ height: "50px" }}></div>

          <SabhasadregistrationForm />
        </Container>
      </Container>
    </>
  );
}

export default Sabhasadregistration;
