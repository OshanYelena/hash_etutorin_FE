import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Grid,
  IconButton,
  Backdrop,
} from "@mui/material";
import * as Yup from "yup";
import { Formik } from "formik";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import OTPComponent from "../OTPComponent";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  phoneNumber: Yup.string().required(),
});

interface AdditionalInfoProps {
  educator?: boolean;
}

export default function AdditionalInfoComponent({
  educator,
}: AdditionalInfoProps) {
  const [isDisabled, setIsDisabled] = useState(true);
  const [isUploaded, setIsUploaded] = useState(false);
  const [openOTPComponent, setOpenOTPComponent] = React.useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    phoneNumber: "",
  });

  const initialValues = {
    email: formValues.email,
    phoneNumber: formValues.phoneNumber,
  };

  const submitForm = (values: any) => {
    setFormValues({
      ...formValues,
      ...values,
    });
  };

  //Functions for OTP popup
  const handleCloseOTPComponent = () => {
    setOpenOTPComponent(false);
  };

  const handleOTPComponent = () => {
    setOpenOTPComponent(true);
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
                Additional Information
              </Typography>

              <Box pb={3}>
                <FormControl variant="standard" fullWidth>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <Typography variant="body1" color="#808080" fontSize={20}>
                      Email
                    </Typography>
                  </InputLabel>
                  <Box
                    sx={{
                      color: "#808080",
                      width: "100%",
                      marginTop: 3,
                    }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={10} display="flex" alignItems="center">
                        <TextField
                          fullWidth
                          variant="outlined"
                          placeholder="Enter your Email"
                          sx={{
                            color: "#808080",
                            ".MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #2E72B3B2 !important",
                              borderRadius: 2.5,
                            },
                            fontSize: 13,
                          }}
                          value={values.email}
                          error={touched.email && !!errors.email}
                          helperText={touched.email ? errors.email : ""}
                          onChange={handleChange("email")}
                          onBlur={handleBlur("email")}
                          size="small"
                        />
                        <InfoOutlinedIcon
                          fontSize="inherit"
                          sx={{
                            color: "#A0A0A0",
                            width: 20,
                            height: 20,
                            ml: 1,
                          }}
                        />
                      </Grid>
                      <Grid item xs={2}>
                        <Box display="flex" justifyContent="flex-end">
                          <Box
                            sx={{
                              borderRadius: 2,
                              backgroundColor: "#80808040",
                              border: "1px solid #80808040",
                            }}
                            className="w-full "
                          >
                            <Button
                              color="info"
                              size="medium"
                              variant="text"
                              onClick={handleOTPComponent}
                              sx={{
                                textTransform: "none",
                                lineHeight: 1.5,
                                borderRadius: 2,
                                backgroundColor: "#80808040",
                              }}
                              className="w-full py-2"
                            >
                              <Typography
                                variant="body1"
                                color="#8C8C8C"
                                sx={{ fontWeight: 500, fontSize: "0.9rem" }}
                              >
                                Verified
                              </Typography>
                            </Button>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </FormControl>
              </Box>
              <Backdrop
                sx={{
                  color: "#fff",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={openOTPComponent}
              >
                <OTPComponent
                  profileEmail
                  handleCloseOTP={handleCloseOTPComponent}
                  educator={educator}
                />
              </Backdrop>

              <Box pb={3}>
                <FormControl variant="standard" fullWidth>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <Typography variant="body1" color="#808080" fontSize={20}>
                      Phone Number
                    </Typography>
                  </InputLabel>
                  <Box
                    sx={{
                      color: "#808080",
                      width: "100%",
                      marginTop: 3,
                    }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={10} display="flex" alignItems="center">
                        <TextField
                          fullWidth
                          variant="outlined"
                          placeholder="Enter phone number"
                          sx={{
                            color: "#808080",
                            ".MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #2E72B3B2 !important",
                              borderRadius: 2.5,
                            },
                            fontSize: 13,
                          }}
                          size="small"
                          value={values.phoneNumber}
                          error={touched.phoneNumber && !!errors.phoneNumber}
                          helperText={
                            touched.phoneNumber ? errors.phoneNumber : ""
                          }
                          onChange={handleChange("phoneNumber")}
                          onBlur={handleBlur("phoneNumber")}
                        />
                        <InfoOutlinedIcon
                          fontSize="inherit"
                          sx={{
                            color: "#A0A0A0",
                            width: 20,
                            height: 20,
                            ml: 1,
                          }}
                        />
                      </Grid>
                      <Grid item xs={2}>
                        <Box display="flex" justifyContent="flex-end">
                          <Box
                            sx={{
                              borderRadius: 2,
                              backgroundColor: "#00CB1433",
                              border: "1px solid #00CB1433",
                            }}
                            className="w-full "
                          >
                            <Button
                              color="info"
                              size="medium"
                              variant="text"
                              sx={{
                                textTransform: "none",
                                lineHeight: 1.5,
                                borderRadius: 2,
                                backgroundColor: "#00CB1433",
                              }}
                              className="w-full py-2"
                            >
                              <Typography
                                variant="body1"
                                color="#8C8C8C"
                                sx={{ fontWeight: 500, fontSize: "0.9rem" }}
                              >
                                Verified
                              </Typography>
                            </Button>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </FormControl>
              </Box>
              {educator && (
                <Box>
                  <Box pb={3}>
                    <FormControl variant="standard" fullWidth>
                      <InputLabel shrink htmlFor="bootstrap-input">
                        <Typography
                          variant="body1"
                          color="#808080"
                          fontSize={20}
                        >
                          Facebook profile URL
                        </Typography>
                      </InputLabel>
                      <Box display="flex" alignItems="center">
                        <Box
                          sx={{
                            border: 1,
                            borderColor: "#2E72B3B2",
                            borderRadius: 2.5,
                            color: "#808080",
                            width: "100%",
                            marginTop: 3,
                          }}
                        >
                          <TextField
                            fullWidth
                            variant="outlined"
                            sx={{
                              color: "#808080",
                              ".MuiOutlinedInput-notchedOutline": {
                                border: ` none !important`,
                              },
                              fontSize: 13,
                            }}
                            size="small"
                          />
                        </Box>
                        <InfoOutlinedIcon
                          sx={{ color: "#A0A0A0", mt: 3, ml: 1 }}
                        />
                      </Box>
                    </FormControl>
                  </Box>
                  <Box pb={3}>
                    <FormControl variant="standard" fullWidth>
                      <InputLabel shrink htmlFor="bootstrap-input">
                        <Typography
                          variant="body1"
                          color="#808080"
                          fontSize={20}
                        >
                          Linkdn profile URL
                        </Typography>
                      </InputLabel>
                      <Box display="flex" alignItems="center">
                        <Box
                          sx={{
                            border: 1,
                            borderColor: "#2E72B3B2",
                            borderRadius: 2.5,
                            color: "#808080",
                            width: "100%",
                            marginTop: 3,
                          }}
                        >
                          <TextField
                            fullWidth
                            variant="outlined"
                            sx={{
                              color: "#808080",
                              ".MuiOutlinedInput-notchedOutline": {
                                border: ` none !important`,
                              },
                              fontSize: 13,
                            }}
                            size="small"
                          />
                        </Box>
                        <InfoOutlinedIcon
                          sx={{ color: "#A0A0A0", mt: 3, ml: 1 }}
                        />
                      </Box>
                    </FormControl>
                  </Box>{" "}
                  <Box
                    my={2}
                    sx={{
                      border: 1,
                      borderStyle: "dashed",
                      borderColor: "#2E72B3B2",

                      color: "#808080",
                      width: "100%",
                    }}
                    px={2}
                    py={3}
                  >
                    {isUploaded ? (
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="flex-start"
                      >
                        <Box
                          sx={{ backgroundColor: "#2E72B326" }}
                          py={2}
                          display="flex"
                          width={200}
                          height={150}
                          mr={5}
                        >
                          <Box px={5}>
                            <img src="/images/upload-file.png" width={100} />{" "}
                          </Box>
                          <Box
                            sx={{
                              backgroundColor: "#fff",
                              width: 30,
                              height: 30,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              mr: 1,
                            }}
                            className="rounded-full"
                          >
                            <IconButton>
                              <CloseOutlinedIcon
                                sx={{ color: "primary.main" }}
                              />
                            </IconButton>
                          </Box>
                        </Box>
                        <Box
                          width={200}
                          height={150}
                          display="flex"
                          alignItems="center"
                          flexDirection="column"
                          justifyContent="center"
                          sx={{ backgroundColor: "#F1F1F1" }}
                        >
                          <FileUploadOutlinedIcon
                            sx={{ color: "#ADADAD", width: 50, height: 50 }}
                          />
                          <Typography
                            variant="body1"
                            color="#ADADAD"
                            pt={1}
                            fontSize={15}
                            fontStyle="italic"
                            textAlign="center"
                          >
                            Drag and drop pdfs or Browse
                          </Typography>
                        </Box>
                      </Box>
                    ) : (
                      <Typography
                        variant="body1"
                        color="#ADADAD"
                        pt={1}
                        fontSize={15}
                        fontStyle="italic"
                        textAlign="center"
                      >
                        Drag & Drop your Cv (PDF) <br /> or <br /> Brows File
                        (PDF)
                      </Typography>
                    )}
                  </Box>
                  {isUploaded && (
                    <Box>
                      <Grid container spacing={2}>
                        <Grid item xs={11}>
                          <Box
                            sx={{ backgroundColor: "#D9D9D9", height: 15 }}
                            className="rounded-full"
                          >
                            <Box
                              sx={{
                                backgroundColor: "primary.main",
                                height: 15,
                                width: "80%",
                              }}
                              className="rounded-full"
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={1}>
                          <Typography
                            variant="body1"
                            color="primary.main"
                            fontSize={12}
                            textAlign="center"
                          >
                            20MB / 25MB
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  )}
                  <Box display="flex" justifyContent="flex-end" pt={3}>
                    <Box
                      sx={{
                        borderRadius: 2,
                        backgroundColor: isDisabled
                          ? "#2E72B359"
                          : "primary.main",
                      }}
                      className="w-80 "
                    >
                      <Button
                        color="info"
                        size="medium"
                        variant="contained"
                        disabled={isDisabled}
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
                          Save
                        </Typography>
                      </Button>
                    </Box>
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        );
      }}
    </Formik>
  );
}
