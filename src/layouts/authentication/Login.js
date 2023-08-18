import { useCallback, useState } from "react";
import { useHistory } from "react-router";
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

const Login = () => {
  const router = useHistory()
  const [method, setMethod] = useState("email");
  const formik = useFormik({
    initialValues: {
      userId: "",
      password: "",
      WorkingDate: new Date(),
    },
    validationSchema: Yup.object({
      userId: Yup.string()

        .max(12)
        .required("User ID is required"),
      password: Yup.string().max(255).required("Password is required"),
      WorkingDate: Yup.date().required("Date is required"),
    }),
    // onSubmit: async (values, helpers) => {
    //   try {
    //     await auth.signIn(values.email, values.password);
    //     router.push("/");
    //   } catch (err) {
    //     helpers.setStatus({ success: false });
    //     helpers.setErrors({ submit: err.message });
    //     helpers.setSubmitting(false);
    //   }
    // },
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
          <Box sx={{ boxShadow: 4, px: 4, py: 6, borderRadius: 4 }}>
            <Stack spacing={1} sx={{ mb: 3 }}>
              <Typography variant="h4">Login</Typography>
              <Typography color="text.secondary" variant="body2">
                Don&apos;t have an account? &nbsp;
                <a href="/auth/register">Register</a>
              </Typography>
            </Stack>
            {/* <Tabs onChange={handleMethodChange} sx={{ mb: 3 }} value={method}>
              <Tab label="Email" value="email" />
         
            </Tabs> */}

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
                  error={
                    !!(formik.touched.WorkingDate && formik.errors.WorkingDate)
                  }
                  fullWidth
                  helperText={
                    formik.touched.WorkingDate && formik.errors.WorkingDate
                  }
                  label="Working Date"
                  name="WorkingDate"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="date"
                  value={formik.values.WorkingDate}
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
                onClick={router.push("/")}
              >
                Continue
              </Button>
            </form>

            <Typography sx={{ cursor: "pointer" }} color="secondary" mt={3}>
              Forgot Password?
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
