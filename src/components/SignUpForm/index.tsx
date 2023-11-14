import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import {
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  InputAdornment,
  IconButton,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import * as Yup from "yup";
import { Formik } from "formik";
import { newUserRegister } from "@/api/auth/auth";

interface SignUpFormProps {
  withPhoneNumber?: boolean;
  handleOpenSignIn?: () => void;
  studentRole: boolean;
}

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required().label("First Name"),
  lastName: Yup.string().required().label("Last Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string()
    .required()
    .min(8)
    .max(15)
    .label("Password")
    .matches(/\d+/, "Password should contain at least one number")
    .matches(
      /[a-z]+/,
      "Password should contain at least one lowercase character"
    )
    .matches(
      /[A-Z]+/,
      "Password should contain at least one uppercase character"
    )
    .matches(
      /[!@#$%^&*()-+]+/,
      "Password should contain at least one special character"
    ),
  confirmPassword: Yup.string()
    .required()
    .label("Confirm Password")
    .oneOf([Yup.ref("password"), null as any], "Passwords must match"),
  phoneNumber: Yup.string(),
});

export default function SignUpForm({
  withPhoneNumber,
  handleOpenSignIn,
  studentRole,
}: SignUpFormProps) {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });

  const initialValues = {
    firstName: formValues.firstName,
    lastName: formValues.lastName,
    email: formValues.email,
    password: formValues.password,
    confirmPassword: formValues.confirmPassword,
    phoneNumber: formValues.phoneNumber,
  };

  const submitForm = (values: any) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      ...values,
    }));
    if (formValues.email) {
      console.log(formValues);
      newUserRegister(formValues, studentRole);
    }
  };


  const Form = React.forwardRef<HTMLDivElement>((props, ref) => {
    const [showPasswordText, setShowPasswordText] = useState(false);
    const handleTogglePassword = () => {
      setShowPasswordText(!showPasswordText);
    };

    const handleMouseDownPassword = (event: any) => {
      event.preventDefault();
    };
    return (
      <div ref={ref} {...props}>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            submitForm(values);
            actions.setSubmitting(false);
          }}
          validationSchema={validationSchema}
        >
          {(formikProps) => {
            const {
              values,
              handleChange,
              errors,
              touched,
              handleBlur,
              handleSubmit,
            } = formikProps;
            return (
              <form onSubmit={handleSubmit}>
                <Box>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        name="firstName"
                        required
                        fullWidth
                        type="text"
                        label="Enter your First Name"
                        value={values.firstName}
                        error={touched.firstName && !!errors.firstName}
                        helperText={touched.firstName ? errors.firstName : ""}
                        onChange={handleChange("firstName")}
                        onBlur={handleBlur("firstName")}
                        variant="standard"
                        size="small"
                        sx={{
                          ".MuiInputLabel-root": {
                            fontSize: 13,
                            color: "secondary.dark",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Enter your Last Name"
                        name="lastName"
                        type="text"
                        autoComplete="family-name"
                        variant="standard"
                        size="small"
                        value={values.lastName}
                        error={touched.lastName && !!errors.lastName}
                        helperText={touched.lastName ? errors.lastName : ""}
                        onChange={handleChange("lastName")}
                        onBlur={handleBlur("lastName")}
                        sx={{
                          ".MuiInputLabel-root": {
                            fontSize: 13,
                            color: "secondary.dark",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      {withPhoneNumber ? (
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="end"
                        >
                          <Box
                            sx={{
                              backgroundColor: "#EDEDED",
                              display: "flex",
                              alignItems: "center",
                            }}
                            px={1}
                            py={0.5}
                          >
                            <Typography
                              variant="subtitle1"
                              className=" tracking-wide"
                              sx={{ color: "primary.main" }}
                              fontWeight={600}
                            >
                              +94{" "}
                            </Typography>

                            <ArrowDropDownOutlinedIcon
                              sx={{ color: "primary.main" }}
                            />
                          </Box>
                          <TextField
                            required
                            fullWidth
                            label="Enter your Phone Number"
                            name="phoneNumber"
                            autoComplete="phoneNumber"
                            variant="standard"
                            value={values.phoneNumber}
                            error={touched.phoneNumber && !!errors.phoneNumber}
                            helperText={
                              touched.phoneNumber ? errors.phoneNumber : ""
                            }
                            onChange={handleChange("phoneNumber")}
                            onBlur={handleBlur("phoneNumber")}
                            size="small"
                            sx={{
                              ".MuiInputLabel-root": {
                                fontSize: 13,
                                color: "secondary.dark",
                                pl: 1,
                              },
                            }}
                          />
                        </Box>
                      ) : (
                        <TextField
                          required
                          fullWidth
                          label="Enter your Email"
                          name="email"
                          autoComplete="email"
                          variant="standard"
                          value={values.email}
                          error={touched.email && !!errors.email}
                          helperText={touched.email ? errors.email : ""}
                          onChange={handleChange("email")}
                          onBlur={handleBlur("email")}
                          size="small"
                          sx={{
                            ".MuiInputLabel-root": {
                              fontSize: 13,
                              color: "secondary.dark",
                            },
                          }}
                        />
                      )}
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="password"
                        label="Enter your Password"
                        autoComplete="new-password"
                        type={showPasswordText ? "text" : "password"}
                        value={values.password}
                        onChange={handleChange("password")}
                        error={touched.password && !!errors.password}
                        helperText={touched.password ? errors.password : ""}
                        onBlur={handleBlur("password")}
                        variant="standard"
                        size="small"
                        sx={{
                          ".MuiInputLabel-root": {
                            fontSize: 13,
                            color: "secondary.dark",
                          },
                        }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={handleTogglePassword}
                                onMouseDown={handleMouseDownPassword}
                              >
                                {showPasswordText ? (
                                  <VisibilityIcon
                                    sx={{ color: "secondary.dark", width: 20 }}
                                  />
                                ) : (
                                  <VisibilityOffIcon
                                    sx={{ color: "secondary.dark", width: 20 }}
                                  />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="password"
                        label="Confirm your Password"
                        autoComplete="new-password"
                        error={
                          touched.confirmPassword && !!errors.confirmPassword
                        }
                        helperText={
                          touched.confirmPassword ? errors.confirmPassword : ""
                        }
                        type={showPasswordText ? "text" : "password"}
                        value={values.confirmPassword}
                        onBlur={handleBlur("confirmPassword")}
                        onChange={handleChange("confirmPassword")}
                        variant="standard"
                        size="small"
                        sx={{
                          ".MuiInputLabel-root": {
                            fontSize: 13,
                            color: "secondary.dark",
                          },
                        }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={handleTogglePassword}
                                onMouseDown={handleMouseDownPassword}
                              >
                                {showPasswordText ? (
                                  <VisibilityIcon
                                    sx={{ color: "secondary.dark", width: 20 }}
                                  />
                                ) : (
                                  <VisibilityOffIcon
                                    sx={{ color: "secondary.dark", width: 20 }}
                                  />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        variant="body1"
                        color="secondary.dark"
                        className="uppercase"
                      >
                        - OR -
                      </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Box
                        sx={{
                          borderRadius: 2,
                          border: 1,
                          borderColor: "secondary.semiDark",
                          px: 1,
                        }}
                      >
                        <Button
                          startIcon={
                            <Avatar
                              alt="Google"
                              src="/images/googleIcon.png"
                              sx={{ width: 24, height: 24 }}
                            />
                          }
                          type="submit"
                          fullWidth
                          sx={{
                            textTransform: "none",
                            px: 2,
                            py: 1,
                            borderRadius: 2,
                          }}
                        >
                          <Typography
                            variant="body1"
                            color="primary.dark"
                            fontSize={14}
                          >
                            Continue with Google
                          </Typography>
                        </Button>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box
                        sx={{
                          borderRadius: 2,
                          border: 1,
                          borderColor: "secondary.semiDark",
                          px: 1,
                        }}
                      >
                        <Button
                          onChange={handleChange("role")}
                          startIcon={
                            <Avatar
                              alt="Facebook Icon"
                              src="/images/fbIcon.png"
                              sx={{ width: 24, height: 24 }}
                            />
                          }
                          type="submit"
                          fullWidth
                          sx={{
                            textTransform: "none",
                            px: 2,
                            py: 1,
                            borderRadius: 2,
                          }}
                        >
                          <Typography
                            variant="body1"
                            color="primary.dark"
                            fontSize={14}
                          >
                            Continue with Facebook
                          </Typography>
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>

                  <Box
                    mt={2}
                    sx={{
                      borderRadius: 3,
                      backgroundColor: "primary.main",
                    }}
                  >
                    <Button
                      type="submit"
                      color="info"
                      size="large"
                      fullWidth
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        lineHeight: 1.5,
                        borderRadius: 3,
                        backgroundColor: "primary.main",
                      }}
                    >
                      <Typography
                        variant="body1"
                        color="primary.contrastText"
                        sx={{ fontWeight: 600, fontSize: "1rem" }}
                      >
                        Continue
                      </Typography>
                    </Button>
                  </Box>

                  <Grid container justifyContent="center">
                    <Grid item>
                      <Typography
                        variant="body1"
                        color="secondary.dark"
                        sx={{ fontWeight: 500, fontSize: "0.9rem", pt: 2 }}
                      >
                        Already have an account?{" "}
                        <Link
                          onClick={handleOpenSignIn}
                          href="#"
                          variant="body2"
                        >
                          Sign in
                        </Link>
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </form>
            );
          }}
        </Formik>
      </div>
    );
  });

  return (
    <Container>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Form />
      </Box>
    </Container>
  );
}
