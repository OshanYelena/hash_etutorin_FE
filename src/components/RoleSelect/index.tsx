import React from "react";
import { Box, Typography, IconButton, Button, Link, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";

interface RoleSelectProps {
  handleCloseRoleSelect?: () => void;
  handleStudentRole?:() => void
  handleOpenSignIn?: () => void;
  handleOpenSignUp?: () => void;
}

export default function RoleSelect({
  handleCloseRoleSelect,
  handleOpenSignIn,
  handleOpenSignUp,
  handleStudentRole,
}: RoleSelectProps) {
  return (
    <Box
      className="w-7/12"
      sx={{ backgroundColor: "inherit.main" }}
      borderRadius={5}
      height={500}
      pt={5}
    >
      <Box textAlign="end" mr={10}>
        <IconButton onClick={handleCloseRoleSelect}>
          <CloseIcon sx={{ color: "primary.main" }} />
        </IconButton>
      </Box>
      <Box alignItems="center" textAlign="center">
        <Typography variant="h5" color="#000" fontWeight={600} fontSize={28}>
          Who do you want to be?
        </Typography>

        <Box px={10}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box
                sx={{
                  backgroundColor: "primary.main",
                  borderRadius: 2,
                  px: 5,
                  mt: 7,
                  pb: 5,
                }}
              >
                {" "}
                <Box display="flex" justifyContent="center">
                  <Box
                    sx={{
                      backgroundColor: "#ffffff",
                      width: 100,
                      height: 100,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mx: "auto",
                      border: "8px solid #2E72B3",
                      mt: -5,
                      position: "absolute",
                    }}
                    className="rounded-full"
                  >
                    <img src="/images/logo.png" alt="logo" className="w-full" />
                  </Box>
                </Box>
                <Typography
                  variant="body1"
                  color="primary.contrastText"
                  fontSize={12}
                  fontWeight={400}
                  sx={{ py: 5, mt: 5 }}
                >
                  Lorem ipsum dolor sit amet consectetur. Augue lacus aenean
                  sollicitudin ultrices iaculis non. Aliquam netus
                </Typography>
                <Box
                  sx={{
                    borderRadius: 3,
                    backgroundColor: "#ffffff",
                    width: "100%",
                  }}
                >
                  <Button
                    color="inherit"
                    size="small"
                    type="submit"
                    variant="contained"
                    onClick={() => {
                      handleOpenSignUp && handleOpenSignUp();
                      handleStudentRole && handleStudentRole();
   
                    }}
                    sx={{
                      textTransform: "none",
                      lineHeight: 1.5,
                      borderRadius: 3,
                      backgroundColor: "#ffffff",
                      width: "100%",
                    }}
                  >
                    <Typography
                      variant="body1"
                      color="primary.main"
                      sx={{ fontWeight: 600, fontSize: "1rem" }}
                    >
                      I need to be a Student
                    </Typography>
                    <ArrowRightAltOutlinedIcon
                      sx={{
                        color: "primary.main",
                        width: 40,
                        height: 40,
                        ml: 1,
                      }}
                    />
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  backgroundColor: "primary.darkBlue",
                  borderRadius: 2,
                  px: 5,
                  mt: 7,
                  pb: 5,
                }}
              >
                {" "}
                <Box display="flex" justifyContent="center">
                  <Box
                    sx={{
                      backgroundColor: "#ffffff",
                      width: 100,
                      height: 100,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mx: "auto",
                      border: "8px solid #280C9B",
                      mt: -5,
                      position: "absolute",
                    }}
                    className="rounded-full"
                  >
                    <img src="/images/logo.png" alt="logo" className="w-full" />
                  </Box>
                </Box>
                <Typography
                  variant="body1"
                  color="primary.contrastText"
                  fontSize={12}
                  fontWeight={400}
                  sx={{ py: 5, mt: 5 }}
                >
                  Lorem ipsum dolor sit amet consectetur. Augue lacus aenean
                  sollicitudin ultrices iaculis non. Aliquam netus
                </Typography>
                <Box
                  sx={{
                    borderRadius: 3,
                    backgroundColor: "#ffffff",
                    width: "100%",
                  }}
                >
                  <Button
                    color="inherit"
                    size="small"
                    type="submit"
                    variant="contained"
                    onClick={handleOpenSignUp}
                    sx={{
                      textTransform: "none",
                      lineHeight: 1.5,
                      borderRadius: 3,
                      backgroundColor: "#ffffff",
                      width: "100%",
                    }}
                  >
                    <Typography
                      variant="body1"
                      color="primary.darkBlue"
                      sx={{ fontWeight: 600, fontSize: "1rem" }}
                    >
                      I need to be an Educator
                    </Typography>
                    <ArrowRightAltOutlinedIcon
                      sx={{
                        color: "primary.darkBlue",
                        width: 40,
                        height: 40,
                        ml: 1,
                      }}
                    />
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Grid container justifyContent="center">
          <Grid item>
            <Typography
              variant="body1"
              color="secondary.dark"
              sx={{ fontWeight: 500, fontSize: "0.9rem", pt: 2 }}
            >
              Already have an account?{" "}
              <Link onClick={handleOpenSignIn} href="#" variant="body2">
                Sign in
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
