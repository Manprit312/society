import React from "react";
import { Formik, Form, Field } from "formik";
import { TextField, InputLabel, Grid } from "@mui/material";
import styles from "./index.module.css";
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import * as Yup from "yup";
import { event } from "jquery";
const SabhasadregistrationForm = () => {
  const handleSubmit = (values, e) => {
    // Handle form submission here
    console.log(values, ">>>>>>>>>>>>>>>>>>>>");

values.preventDefault()
  };
  const validationSchema = () =>
    Yup.object({
      Mobileno: Yup.string()
        .matches(/^\d+$/, "Please enter only numbers")
        .min(10, "Phone number must be at least 10 digits")
        .required("Phone number is required"),
    });

  return (
    <Card className={styles.card}>
      <div className={styles.cardtitle}> Sabhasad Registration</div>
      <Card.Body>
        <Formik
          initialValues={{
            MemberNo: "",
            name: "",
            TypeofMember: "",
            Typeoffarmer: "",
            NameofFatherHusband: "",
            Surname: "",
            NameInEnglish: "",
            NameofFatherHusbandInEnglish: "",
            SurnameInEnglish: "",
            Mainly: "",
            birthdate: "",
            Age: "",
            ResolutionNo: "",
            DateofResolution: "",
            status: "",
            SelectFarmerStatus: "",
            Address1: "",
            Address2: "",
            village: "",
            pin: "",
            Taluk: "",
            State: "",
            country: "",
            phoneNo: "",
            Mobileno: "",
            Gender: "",
            caste: "",
            SubCaste: "",
            casteclass: "",
            study: "",
            profession: "",
            MaritalStatus: "",
            RationCardNo: "",
            ElectionCardNo: "",
            AadhaarCardNo: "",
            PANCardNo: "",
            email: "",
            SavingsAccountNo: "",
            KCCCardNo: "",
            CardIssueDate: "",
          }}
          validationSchema={validationSchema()}
          // onSubmit={handleSubmit}
        >
          <Form onSubmit={handleSubmit}>
            <Grid container spacing={3} sx={{ padding: "10px" }}>
              <Grid item xs={12} lg={4} md={4}>
                <div className={styles.label}>
                  <InputLabel>Member No</InputLabel>
                  <Field name="memberNo" as={TextField} fullWidth />
                </div>
                <div className={styles.label}>
                  <InputLabel>name</InputLabel>
                  <Field name="name" as={TextField} fullWidth />
                </div>
                <div className={styles.label}>
                  <InputLabel>Name-(English)</InputLabel>
                  <Field name="NameInEnglish" as={TextField} fullWidth />
                </div>
                <div className={styles.label}>
                  <InputLabel>Mainly</InputLabel>
                  <Field name="Mainly" as={TextField} fullWidth />
                </div>
                <div className={styles.label}>
                  <InputLabel>Card Issue Date</InputLabel>
                  <Field
                    type={"date"}
                    name={"CardIssueDate"}
                    as={TextField}
                    fullWidth
                  />
                </div>
                <div className={styles.label}>
                  <InputLabel>Resolution No </InputLabel>
                  <Field name="ResolutionNo" as={TextField} fullWidth />
                </div>
                <div className={styles.label}>
                  <InputLabel>Address-1</InputLabel>
                  <Field name={"Address1"} as={TextField} fullWidth />
                </div>
                <div className={styles.label}>
                  <InputLabel>pin</InputLabel>
                  <Field name="pin" as={TextField} fullWidth />
                </div>
                <div className={styles.label}>
                  <InputLabel>Election Card No </InputLabel>
                  <Field name={"ElectionCardNo"} as={TextField} fullWidth />
                </div>
                <div className={styles.label}>
                  <InputLabel>country</InputLabel>
                  <Field name="country" as={TextField} fullWidth />
                </div>
                <div className={styles.label}>
                  <InputLabel>Male/Female</InputLabel>
                  <Field name="gender" as={TextField} fullWidth />
                </div>
                <div className={styles.label}>
                  <InputLabel>Mobile</InputLabel>
                  <Field name="mobileno" as={TextField} fullWidth />
                </div>

                <div className={styles.label}>
                  <InputLabel>caste class</InputLabel>
                  <Field name={"casteclass"} as={TextField} fullWidth />
                </div>
                <div className={styles.label}>
                  <InputLabel>Marital Status</InputLabel>
                  <Field name={"MaritalStatus"} as={TextField} fullWidth />
                </div>
              </Grid>
              <Grid item xs={12} lg={4} md={4}>
                <div className={styles.label}>
                  <InputLabel>Aadhaar Card No</InputLabel>
                  <Field name={"AadhaarCardNo"} as={TextField} fullWidth />
                </div>
                <div className={styles.label}>
                  <InputLabel>Savings Account No</InputLabel>
                  <Field name="SavingsAccountNo" as={TextField} fullWidth />
                </div>
                <div className={styles.label}>
                  <InputLabel>Type of Member-</InputLabel>
                  <Field name={"TypeofMember"} as={TextField} fullWidth />
                </div>
                <div className={styles.label}>
                  <InputLabel>Name of Father/Husband</InputLabel>
                  <Field
                    name={"NameofFatherHusband"}
                    as={TextField}
                    fullWidth
                  />
                </div>
                <div className={styles.label}>
                  <InputLabel>profession</InputLabel>
                  <Field name={"profession"} as={TextField} fullWidth />
                </div>
                <div className={styles.label}>
                  <InputLabel>Name of Father/Husband (English)</InputLabel>
                  <Field
                    name={"NameofFatherHusbandInEnglish"}
                    as={TextField}
                    fullWidth
                  />
                </div>
                <div className={styles.label}>
                  <InputLabel>birth date</InputLabel>
                  <Field
                    name={"birthdate"}
                    type="date"
                    as={TextField}
                    fullWidth
                  />
                </div>
                <div className={styles.label}>
                  <InputLabel>Date of resolution</InputLabel>
                  <Field
                    name={"DateofResolution"}
                    type="date"
                    as={TextField}
                    fullWidth
                  />
                </div>
                <div className={styles.label}>
                  <InputLabel>Address-2</InputLabel>
                  <Field name={"Address2"} as={TextField} fullWidth />
                </div>
                <div className={styles.label}>
                  <InputLabel>Taluk</InputLabel>
                  <Field name="Taluk" as={TextField} fullWidth />
                </div>
                <div className={styles.label}>
                  <InputLabel>phone no</InputLabel>
                  <Field name={"phoneNo"} as={TextField} fullWidth />
                </div>
                <div className={styles.label}>
                  <InputLabel>Member No</InputLabel>
                  <Field name="memberNo" as={TextField} fullWidth />
                </div>
                <div className={styles.label}>
                  <InputLabel>caste</InputLabel>
                  <Field name={"caste"} as={TextField} fullWidth />
                </div>
                <div className={styles.label}>
                  <InputLabel>email </InputLabel>
                  <Field name={"email"} as={TextField} fullWidth />
                </div>
              </Grid>
              <Grid item xs={12} lg={4} md={4}>
                <div className={styles.label}>
                  <InputLabel>study</InputLabel>
                  <Field name="study" as={TextField} fullWidth />
                </div>
                <div className={styles.label}>
                  <InputLabel>Ration Card No</InputLabel>
                  <Field name={"RationCardNo"} as={TextField} fullWidth />
                </div>
                <div className={styles.label}>
                  <InputLabel>PAN Card No</InputLabel>
                  <Field name={"PANCardNo"} as={TextField} fullWidth />
                </div>
                <div className={styles.label}>
                  <InputLabel>KCC Card No</InputLabel>
                  <Field name={"KCCCardNo"} as={TextField} fullWidth />
                </div>
                <div className={styles.label}>
                  <InputLabel>Type of farmer</InputLabel>
                  <Field name={"Typeoffarmer"} as={TextField} fullWidth />
                </div>
                <div className={styles.label}>
                  <InputLabel>Surname</InputLabel>
                  <Field name={"Surname"} as={TextField} fullWidth />
                </div>
                <div className={styles.label}>
                  <InputLabel>Surname (English)</InputLabel>
                  <Field name={"SurnameInEnglish"} as={TextField} fullWidth />
                </div>
                <div className={styles.label}>
                  <InputLabel>Age</InputLabel>
                  <Field name={"Age"} as={TextField} fullWidth />
                </div>
                <div className={styles.label}>
                  <InputLabel>status</InputLabel>
                  <Field name="status" as={TextField} fullWidth />
                </div>
                <div className={styles.label}>
                  <InputLabel>village</InputLabel>
                  <Field name="village" as={TextField} fullWidth />
                </div>
                <div className={styles.label}>
                  <InputLabel>State</InputLabel>
                  <Field name="State" as={TextField} fullWidth />
                </div>
                <div className={styles.label}>
                  <InputLabel>Mobile no </InputLabel>
                  <Field name={"Mobileno"} as={TextField} fullWidth />
                </div>
                <div className={styles.label}>
                  <InputLabel>Sub Caste</InputLabel>
                  <Field name={"SubCaste"} as={TextField} fullWidth />
                </div>
                <div className={styles.labelbutton}>
                  {" "}
                  <Button className="btn-fill" variant="info" type="submit">
                    Save
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Card.Body>
    </Card>
  );
};

export default SabhasadregistrationForm;
