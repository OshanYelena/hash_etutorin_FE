import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  MobileStepper,
  Fab,
  Backdrop,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import HomeBlueSection from "@/components/HomeBlueSection";
import HomeDarkBlueSection from "@/components/HomeDarkBlueSection";
import PopularCourseSection from "@/components/PopularCourseSection";
import TopTeachersSection from "@/components/TopTeachersSection";
import FeedbackSection from "@/components/FeedbackSection";
import SwipeableViews from "react-swipeable-views";
import SmsRoundedIcon from "@mui/icons-material/SmsRounded";
import { autoPlay } from "react-swipeable-views-utils";
import HomeReadMorePopup from "@/components/HomeReadMorePopup";
import SignUp from "@/components/SignUp";
import SignIn from "@/components/SignIn";
import ForgetPassword from "@/components/ForgetPassword";
import OTPComponent from "@/components/OTPComponent";
import SetNewPassword from "@/components/SetNewPassword";
import PasswordChangeAlert from "@/components/PasswordChangeAlert";
import { NoSsr } from "@mui/base/NoSsr";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function Home() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [openJoin, setOpenJoin] = React.useState(false);
  const [studentRole, setStudentRole] = React.useState(false);
  const [openSignIn, setOpenSignIn] = React.useState(false);
  const [openForgetPassword, setOpenForgetPassword] = React.useState(false);
  const [openOTPComponent, setOpenOTPComponent] = React.useState(false);
  const [openSetNewpasword, setOpenSetNewpasword] = React.useState(false);
  const [openPasswordChangeAlert, setOpenPasswordChangeAlert] =
    React.useState(false);

  //functions for Sign Up popup
  const handleCloseJoin = () => {
    setOpenJoin(false);
  };
  const handleOpenJoin = () => {
    setOpenSignIn(false);
    setOpenJoin(true);
  };

  //Functions for Sign In popup
  const handleCloseSignIn = () => {
    setOpenSignIn(false);
  };
  const handleOpenSignIn = () => {
    setOpenPasswordChangeAlert(false);
    setOpenForgetPassword(false);
    setOpenJoin(false);
    setOpenSignIn(true);
  };

  //Functions for Forget Password popup
  const handleCloseForgetPassword = () => {
    setOpenForgetPassword(false);
  };

  const handleOpenForgetPassword = () => {
    setOpenSignIn(false);
    setOpenOTPComponent(false);
    setOpenForgetPassword(true);
  };

  //Functions for OTP popup
  const handleCloseOTPComponent = () => {
    setOpenOTPComponent(false);
  };

  const handleOTPComponent = () => {
    setOpenSetNewpasword(false);
    setOpenForgetPassword(false);
    setOpenOTPComponent(true);
  };

  //Functions for Set New Password popup
  const handleCloseSetNewPassword = () => {
    setOpenSetNewpasword(false);
  };

  const handleOpenSetNewPassword = () => {
    setOpenOTPComponent(false);
    setOpenSetNewpasword(true);
  };

  //Functions for Password Change Alert popup
  const handleOpenPasswordAlert = () => {
    setOpenSetNewpasword(false);
    setOpenPasswordChangeAlert(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <main className="items-center">
      <NoSsr>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          <Box>
            {Math.abs(activeStep - 0) <= 2 ? <HomeBlueSection /> : null}
          </Box>
          <Box>
            {Math.abs(activeStep - 1) <= 2 ? <HomeDarkBlueSection /> : null}
          </Box>
        </AutoPlaySwipeableViews>
        <Box display="flex" justifyContent="center">
          <MobileStepper
            steps={2}
            variant="dots"
            position="static"
            activeStep={activeStep}
            backButton={undefined}
            nextButton={undefined}
          />
        </Box>

        {/* This is for HomeDarkBlueSection */}
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={openSignIn}
        >
          <SignIn
            handleCloseSignIn={handleCloseSignIn}
            handleOpenSignUp={handleOpenJoin}
            handleForgetPassword={handleOpenForgetPassword}
          />
        </Backdrop>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={openJoin}
        >
          {/* <SignUp
            handleCloseJoin={handleCloseJoin}
            handleOpenSignIn={handleOpenSignIn}
            studentRole={studentRole}
          /> */}
        </Backdrop>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={openForgetPassword}
        >
          <ForgetPassword
            handleCloseForgetPassword={handleCloseForgetPassword}
            handleOpenOTPComponent={handleOTPComponent}
            handleOpenSignIn={handleOpenSignIn}
          />
        </Backdrop>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={openOTPComponent}
        >
          <OTPComponent
            handleOpenForgetPassword={handleOpenForgetPassword}
            handleCloseOTP={handleCloseOTPComponent}
            handleOpenSetNewPassword={handleOpenSetNewPassword}
          />
        </Backdrop>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={openSetNewpasword}
        >
          <SetNewPassword
            handleCloseSetNewPassword={handleCloseSetNewPassword}
            handleOpenOTPComponent={handleOTPComponent}
            handlePasswordChangeAlert={handleOpenPasswordAlert}
          />
        </Backdrop>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={openPasswordChangeAlert}
        >
          <PasswordChangeAlert
            handleOpenSignIn={handleOpenSignIn}
            loginSuccess
          />
        </Backdrop>

        <Fab
          className="bg-[#2E72B3] w-16 h-16 fab-class"
          sx={{
            position: "fixed",
            right: "2%",
            bottom: "3%",
            backgroundColor: "primary.main",
            color: "primary.main",
            "&:hover": { backgroundColor: "info.main" },
          }}
          aria-label="fab"
        >
          <SmsRoundedIcon
            sx={{
              color: "primary.contrastText",
              width: 30,
              height: 30,
            }}
          />
        </Fab>

        <Fab
          variant="extended"
          size="medium"
          className="bg-[#2E72B3] h-16 rounded-full hide-fab "
          sx={{
            position: "fixed",
            right: "2%",
            bottom: "3%",
            backgroundColor: "primary.main",
            color: "primary.main",
            "&:hover": { backgroundColor: "info.main" },
          }}
        >
          <Box display="flex">
            <Typography
              variant="body1"
              color="primary.contrastText"
              ml={2}
              textTransform="none"
            >
              24/7 Service
            </Typography>
            <SmsRoundedIcon
              sx={{
                color: "primary.contrastText",
                width: 30,
                height: 30,
                ml: 1,
              }}
            />
          </Box>
        </Fab>

        {/* second section */}
        <section id="about-section">
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
            }}
            className="h-screen"
            px={10}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src="/images/aboutUsImage.png" alt="Home Page" />
              </Grid>
              <Grid
                item
                xs={6}
                sx={{
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box pl={5} pb={5}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    color="primary.darkBlue"
                    className="uppercase"
                    pb={2}
                    sx={{ fontWeight: 700, fontSize: "1.8rem" }}
                  >
                    About Us
                  </Typography>
                  <Typography
                    variant="h3"
                    gutterBottom
                    color="primary.main"
                    sx={{ fontWeight: 700 }}
                  >
                    where the learning <br /> begins...
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    className="w-3/4 tracking-wide"
                  >
                    Lorem ipsum dolor sit amet consectetur. Augue lacus aenean
                    sollicitudin ultrices iaculis non. Aliquam netus morbi enim
                    eget egestas eleifend nisi. In nullam lectus nibh cras
                    rhoncus quis.
                  </Typography>
                </Box>
                <Box
                  ml={5}
                  sx={{
                    borderRadius: 2,
                    backgroundColor: "primary.main",
                  }}
                  className="w-60 "
                >
                  <Button
                    color="info"
                    size="medium"
                    variant="contained"
                    onClick={handleOpen}
                    sx={{
                      textTransform: "none",
                      lineHeight: 1.5,
                      borderRadius: 2,
                      backgroundColor: "primary.main",
                    }}
                    className="w-60 py-2"
                  >
                    <Typography
                      variant="body1"
                      color="primary.contrastText"
                      sx={{ fontWeight: 500, fontSize: "1.1rem" }}
                    >
                      Read More
                    </Typography>
                  </Button>
                </Box>
              </Grid>
            </Grid>
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={open}
            >
              <HomeReadMorePopup handleClose={handleClose} />
            </Backdrop>
          </Box>
        </section>

        {/* popular course section */}
        <section id="poularcourses">
          <PopularCourseSection />
        </section>
        {/* How it works section */}
        <Box
          sx={{
            flexGrow: 1,
            backgroundColor: "#2E72B326",
            display: "flex",
            justifyContent: "center",
          }}
          px={13.5}
          pb={7}
        >
          <Grid container spacing={2}>
            <Grid
              item
              xs={6}
              sx={{
                flexDirection: "column",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box pb={5}>
                <Typography
                  variant="h5"
                  gutterBottom
                  color="primary.darkBlue"
                  className="uppercase"
                  pb={2}
                  sx={{ fontWeight: 700, fontSize: "1.8rem" }}
                >
                  How it works
                </Typography>
                <Typography
                  variant="h3"
                  gutterBottom
                  color="primary.main"
                  sx={{ fontWeight: 700 }}
                >
                  Your Favourite Online Tuition....
                </Typography>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  className="w-3/4 tracking-wide"
                >
                  Lorem ipsum dolor sit amet consectetur. Augue lacus aenean
                  sollicitudin ultrices iaculis non. Aliquam netus morbi enim
                  eget egestas eleifend nisi. In nullam lectus nibh cras rhoncus
                  quis.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} mt={7}>
              <video autoPlay loop>
                <source src="/videos/samplevideo.mp4" />
              </video>
            </Grid>
          </Grid>
        </Box>
        {/* Top teachers section */}
        <TopTeachersSection />
        {/* Feedback section */}
        <FeedbackSection />
      </NoSsr>
    </main>
  );
}
