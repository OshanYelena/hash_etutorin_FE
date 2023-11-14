import React from "react";
import { Box, Typography, Grid, Tab, Tabs, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SignInForm from "../SignInForm";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface SignUpProps {
  handleCloseJoin?: () => void;
  handleOpenSignIn?: () => void;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: 3,
            alignItems: "center",
            px: 15,
          }}
        >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface SignUpProps {
  handleCloseSignIn?: () => void;
  handleOpenSignUp?: () => void;
  handleForgetPassword?: () => void;
}

export default function SignIn({
  handleCloseSignIn,
  handleOpenSignUp,
  handleForgetPassword,
}: SignUpProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      className="w-10/12"
      sx={{ backgroundColor: "primary.main" }}
      borderRadius={5}
      height={650}
      pt={2}
    >
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Typography
            variant="h3"
            pt={5}
            pl={5}
            gutterBottom
            color="#D9D9D98C"
            fontWeight={700}
          >
            Success starts here
          </Typography>
          <Box position="absolute" bottom={44} ml={12}>
            <img src="/images/signInImage.png" alt="SignUp Image" />
          </Box>
        </Grid>
        <Grid
          item
          xs={9}
          sx={{
            backgroundColor: "primary.contrastText",
            borderRadius: 5,
          }}
        >
          <Box>
            <Box height={633}>
              <Box textAlign="end" mr={10}>
                <IconButton onClick={handleCloseSignIn}>
                  <CloseIcon sx={{ color: "primary.main" }} />
                </IconButton>
              </Box>
              <Box alignItems="center" textAlign="center" width={800} ml={20}>
                <Typography
                  variant="h5"
                  color="#000"
                  fontWeight={600}
                  fontSize={28}
                >
                  Sign in to your account
                </Typography>

                <Box sx={{ width: "100%" }} pt={3}>
                  <Box justifyContent="center" display="flex">
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      aria-label="Sign up tabs"
                      TabIndicatorProps={{
                        style: { display: "none" },
                      }}
                      sx={{
                        backgroundColor: "#EDEDED",
                        borderRadius: 2,
                        p: 0.5,
                        "& .Mui-selected": {
                          color: "#fff",
                          textColor: "#fff",
                        },
                        "& button": {
                          minHeight: 40,
                          height: 40,
                        },
                      }}
                    >
                      <Tab
                        label="Sign Up with Email"
                        {...a11yProps(0)}
                        className={value === 0 ? "bg-[#2E72B3]" : ""}
                        sx={{
                          color:
                            value === 0
                              ? "primary.contrastText"
                              : "primary.main",
                          textTransform: "none",
                          fontWeight: 550,
                          borderRadius: 2,
                          px: 5,
                        }}
                      />
                      <Tab
                        label="Sign Up with Phone Number"
                        {...a11yProps(1)}
                        className={value === 1 ? "bg-[#2E72B3]" : ""}
                        sx={{
                          color:
                            value === 1
                              ? "primary.contrastText"
                              : "primary.main",
                          textTransform: "none",
                          fontWeight: 550,
                          borderRadius: 2,
                          px: 5,
                        }}
                      />
                    </Tabs>
                  </Box>
                  <CustomTabPanel value={value} index={0}>
                    <SignInForm
                      handleForgetPassword={handleForgetPassword}
                      handleOpenSignUp={handleOpenSignUp}
                    />
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={1}>
                    <SignInForm
                      handleForgetPassword={handleForgetPassword}
                      handleOpenSignUp={handleOpenSignUp}
                      withPhoneNumber
                    />
                  </CustomTabPanel>
                </Box>

                <Box sx={{ width: "100%" }}>
                  <Box justifyContent="center" display="flex">
                    <Box
                      sx={{
                        p: 3,
                        alignItems: "center",
                        px: 15,
                      }}
                    >
                      <Typography>
                        <SignInForm
                          handleForgetPassword={handleForgetPassword}
                          handleOpenSignUp={handleOpenSignUp}
                        />
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
