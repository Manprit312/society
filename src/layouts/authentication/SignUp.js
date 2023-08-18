import { useCallback, useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Alert,
  Box,
  Button,
  FormHelperText,
  Link,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";

const Signup = () => {
  const [method, setMethod] = useState("email");
  const formik = useFormik({
    initialValues: {
      userId: "",
      password: "",
      confirmPass:"",
      WorkingDate: new Date(),

    },
    validationSchema: Yup.object({
      userId: Yup.string()

        .max(12)
        .required("User ID is required"),
      password: Yup.string().max(255).required("Password is required"),
      WorkingDate: Yup.date().required("Date is required"),
      confirmPass:Yup.string().required("This field is required")
    }),
    onSubmit: async (values, helpers) => {
      try {
        await auth.signIn(values.email, values.password);
        router.push("/");
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });

  const handleMethodChange = useCallback((event, value) => {
    setMethod(value);
  }, []);

  return (
    <>
      <Box
        sx={{
          backgroundColor: "background.paper",
          flex: "1 1 auto",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: "100px",
            width: "100%",
          }}
        >
          <Box sx={{boxShadow:4,px:4,py:6,borderRadius:4}}>
            <Stack spacing={1} sx={{ mb: 3 }}>
              <Typography variant="h4">Sign Up</Typography>
        
            </Stack>
        

            <form noValidate onSubmit={formik.handleSubmit}>
              <Stack spacing={3}>
                <TextField
                  error={!!(formik.touched.userId && formik.errors.userId)}
                  fullWidth
                  helperText={formik.touched.userId && formik.errors.userId}
                  label="User Id"
                  name="userId"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values.userId}
                />
                <TextField
                  error={!!(formik.touched.password && formik.errors.password)}
                  fullWidth
                  helperText={formik.touched.password && formik.errors.password}
                  label="Password"
                  name="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="password"
                  value={formik.values.password}
                />

                 <TextField
                  error={!!(formik.touched.confirmPass && formik.errors.confirmPass)}
                  fullWidth
                  helperText={formik.touched.confirmPass && formik.errors.confirmPass}
                  label="Confirm Password"
                  name="confirmPass"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="password"
                  value={formik.values.confirmPass}
                />
              
              </Stack>

              {formik.errors.submit && (
                <Typography color="error" sx={{ mt: 3 }} variant="body2">
                  {formik.errors.submit}
                </Typography>
              )}
              <Button
                fullWidth
                size="large"
                sx={{ mt: 3 }}
                type="submit"
                variant="contained"
              >
                Continue
              </Button>
            </form>

           
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Signup;
