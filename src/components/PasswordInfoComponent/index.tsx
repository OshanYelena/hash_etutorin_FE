import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  Backdrop,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import * as Yup from "yup";
import { Formik } from "formik";
import ConfirmChangesPopup from "../ConfirmChangesPopup";
import SavedSuccessfulComponent from "../SavedSuccessfulComponent";

const validationSchema = Yup.object().shape({
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
});

interface PasswordInfoProps {
  educator?: boolean;
}

export default function PasswordInfoComponent({ educator }: PasswordInfoProps) {
  const [isDisabled, setIsDisabled] = useState(true);
  const [showPasswordText, setShowPasswordText] = useState(false);
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [openSavedSuccessful, setOpenSavedSuccessful] = useState(false);

  const [formValues, setFormValues] = useState({
    password: "",
    confirmPassword: "",
  });

  const initialValues = {
    password: formValues.password,
    confirmPassword: formValues.confirmPassword,
  };

  const submitForm = (values: any) => {
    setFormValues({
      ...formValues,
      ...values,
    });
  };
  const handleTogglePassword = () => {
    setShowPasswordText(!showPasswordText);
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const handleCloseConfirm = () => {
    setOpenConfirmation(false);
  };

  const handleOpenConfirm = () => {
    setOpenConfirmation(true);
  };

  const handleCloseSavedSuccesfful = () => {
    setOpenSavedSuccessful(false);
  };

  const handleOpenSavedSuccesful = () => {
    setOpenSavedSuccessful(true);
    setOpenConfirmation(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitForm}
      validationSchema={validationSchema}
    >
      {(formikProps) => {
        const { values, handleChange, errors, touched, handleBlur } =
          formikProps;
        return (
          <Box sx={{ backgroundColor: "#ffffff" }} px={10} mt={10}>
            <Box sx={{ textAlign: "left" }} py={5}>
              <Typography
                variant="h5"
                gutterBottom
                color={educator ? "primary.darkBlue" : "primary.main"}
                pb={2}
                fontSize={20}
                fontWeight={600}
              >
                Change Password
              </Typography>

              <Box pb={3}>
                <FormControl variant="standard" fullWidth>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <Typography variant="body1" color="#808080" fontSize={20}>
                      Current Password
                    </Typography>
                  </InputLabel>
                  <Box
                    sx={{
                      color: "#808080",
                      width: "100%",
                      marginTop: 3,
                    }}
                  >
                    <TextField
                      fullWidth
                      variant="outlined"
                      placeholder="Enter your Current Password"
                      sx={{
                        color: "#808080",
                        ".MuiOutlinedInput-notchedOutline": {
                          border: "1px solid #2E72B3B2 !important",
                          borderRadius: 2.5,
                        },
                        fontSize: 13,
                      }}
                      size="small"
                      type={showPasswordText ? "text" : "password"}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={handleTogglePassword}
                              onMouseDown={handleMouseDownPassword}
                            >
                              {showPasswordText ? (
                                <VisibilityIcon
                                  sx={{
                                    color: "secondary.dark",
                                    width: 20,
                                  }}
                                />
                              ) : (
                                <VisibilityOffIcon
                                  sx={{
                                    color: "secondary.dark",
                                    width: 20,
                                  }}
                                />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>
                </FormControl>
              </Box>

              <Box pb={3}>
                <FormControl variant="standard" fullWidth>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <Typography variant="body1" color="#808080" fontSize={20}>
                      New Password
                    </Typography>
                  </InputLabel>
                  <Box
                    sx={{
                      color: "#808080",
                      width: "100%",
                      marginTop: 3,
                    }}
                  >
                    <TextField
                      fullWidth
                      variant="outlined"
                      placeholder="Enter your New Password"
                      sx={{
                        color: "#808080",
                        ".MuiOutlinedInput-notchedOutline": {
                          border: "1px solid #2E72B3B2 !important",
                          borderRadius: 2.5,
                        },
                        fontSize: 13,
                      }}
                      value={values.password}
                      onChange={handleChange("password")}
                      error={touched.password && !!errors.password}
                      helperText={touched.password ? errors.password : ""}
                      onBlur={handleBlur("password")}
                      size="small"
                      type={showPasswordText ? "text" : "password"}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={handleTogglePassword}
                              onMouseDown={handleMouseDownPassword}
                            >
                              {showPasswordText ? (
                                <VisibilityIcon
                                  sx={{
                                    color: "secondary.dark",
                                    width: 20,
                                  }}
                                />
                              ) : (
                                <VisibilityOffIcon
                                  sx={{
                                    color: "secondary.dark",
                                    width: 20,
                                  }}
                                />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>
                </FormControl>
              </Box>

              <Box pb={3}>
                <FormControl variant="standard" fullWidth>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <Typography variant="body1" color="#808080" fontSize={20}>
                      Confirm New Password
                    </Typography>
                  </InputLabel>
                  <Box
                    sx={{
                      color: "#808080",
                      width: "100%",
                      marginTop: 3,
                    }}
                  >
                    <TextField
                      fullWidth
                      variant="outlined"
                      placeholder="Confirm your New Password"
                      sx={{
                        color: "#808080",
                        ".MuiOutlinedInput-notchedOutline": {
                          border: "1px solid #2E72B3B2 !important",
                          borderRadius: 2.5,
                        },
                        fontSize: 13,
                      }}
                      size="small"
                      type={showPasswordText ? "text" : "password"}
                      value={values.confirmPassword}
                      onBlur={handleBlur("confirmPassword")}
                      onChange={handleChange("confirmPassword")}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={handleTogglePassword}
                              onMouseDown={handleMouseDownPassword}
                            >
                              {showPasswordText ? (
                                <VisibilityIcon
                                  sx={{
                                    color: "secondary.dark",
                                    width: 20,
                                  }}
                                />
                              ) : (
                                <VisibilityOffIcon
                                  sx={{
                                    color: "secondary.dark",
                                    width: 20,
                                  }}
                                />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>
                </FormControl>
              </Box>

              <Box display="flex" justifyContent="flex-end">
                <Box
                  sx={{
                    borderRadius: 2,
                    // backgroundColor: isDisabled ? "#2E72B359" : "primary.main",
                    backgroundColor: "primary.main",
                  }}
                  className="w-80 "
                >
                  <Button
                    color="info"
                    size="medium"
                    variant="contained"
                    // disabled={isDisabled}
                    onClick={handleOpenConfirm}
                    sx={{
                      textTransform: "none",
                      lineHeight: 1.5,
                      borderRadius: 2,
                      backgroundColor: "primary.main",
                    }}
                    className="w-80 py-2"
                  >
                    <Typography
                      variant="body1"
                      color="primary.contrastText"
                      sx={{ fontWeight: 500, fontSize: "1.1rem" }}
                    >
                      Set Password
                    </Typography>
                  </Button>
                </Box>
              </Box>
              <Backdrop
                sx={{
                  color: "#fff",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={openConfirmation}
              >
                {/* <ConfirmChangesPopup
                  handleSave={handleOpenSavedSuccesful}
                  handleClose={handleCloseConfirm}
                /> */}
              </Backdrop>
              <Backdrop
                sx={{
                  color: "#fff",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={openSavedSuccessful}
              >
                <SavedSuccessfulComponent
                  handleClose={handleCloseSavedSuccesfful}
                />
              </Backdrop>
            </Box>
          </Box>
        );
      }}
    </Formik>
  );
}
