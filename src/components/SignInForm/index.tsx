import React, { useEffect, useState } from "react";
import {useDispatch } from 'react-redux';
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
import { userLogin } from "@/api/auth/auth";

interface SignUpFormProps {
  withPhoneNumber?: boolean;
  handleOpenSignUp?: () => void;
  handleForgetPassword?: () => void;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label("Email"),
  password: Yup.string()
    .min(8)
    .max(15)
    .required()
    .label("Password")
    .matches(/\d+/, "Password should contain at least one number")
    .matches(
      /[a-z]+/,
      "Password should contain at least one lowercase character"
    )
    .matches(
      /[A-Z]+/,
      "Passoword should contain at least one uppercase character"
    )
    .matches(
      /[!@#$%^&*()-+]+/,
      "Password should contain at least one special character"
    ),
  phoneNumber: Yup.string(),
});

export default function SignInForm({
  withPhoneNumber,
  handleOpenSignUp,
  handleForgetPassword,
}: SignUpFormProps) {
  const [showPasswordText, setShowPasswordText] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    phoneNumber: "",
  });

  const initialValues = {
    email: "",
    password: "",
    phoneNumber: "",
  };

  const submitForm = (values: any) => {
    console.log("hell");
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      ...values,
    }));
    if (formValues.email) {
      userLogin(formValues)
    }
  };

  const handleTogglePassword = () => {
    setShowPasswordText(!showPasswordText);
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

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
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={submitForm}
        >
          {(formikProps) => {
            const {
              values,
              handleChange,
              handleSubmit,
              errors,
              touched,
              handleBlur,
            } = formikProps;

            return (
              <form onSubmit={handleSubmit}>
                <Box>
                  <Grid container spacing={2}>
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
                            fontSize: 15,
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
                    <Grid container justifyContent="flex-end">
                      <Grid item>
                        <Typography
                          variant="body1"
                          color="secondary.dark"
                          sx={{ fontWeight: 500, fontSize: "0.9rem", pt: 2 }}
                        >
                          <Link
                            href="#"
                            onClick={handleForgetPassword}
                            variant="body2"
                          >
                            Forgot passsword?
                          </Link>
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid item xs={12}>
                      <Typography
                        variant="body1"
                        color="secondary.dark"
                        className="uppercase"
                        pb={2}
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
                    mt={5}
                    sx={{
                      borderRadius: 3,
                      backgroundColor: "primary.main",
                    }}
                  >
                    <Button
                      onMouseDown={handleMouseDownPassword}
                      color="info"
                      size="large"
                      type="submit"
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
                        Don’t have an account?{" "}
                        <Link
                          href="#"
                          onClick={handleOpenSignUp}
                          variant="body2"
                        >
                          Join here
                        </Link>
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </form>
            );
          }}
        </Formik>
      </Box>
    </Container>
  );
}
