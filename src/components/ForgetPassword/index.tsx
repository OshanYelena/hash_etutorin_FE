import React from "react";
import {
  Box,
  Typography,
  IconButton,
  TextField,
  Button,
  Stack,
  Link,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

interface ForgetPasswordProps {
  handleCloseForgetPassword?: () => void;
  handleOpenOTPComponent?: () => void;
  handleOpenSignIn?: () => void;
}

export default function ForgetPassword({
  handleCloseForgetPassword,
  handleOpenOTPComponent,
  handleOpenSignIn,
}: ForgetPasswordProps) {
  const [usePhoneNumber, setUsePhoneNumber] = React.useState(true);

  const handleChange = () => {
    setUsePhoneNumber(!usePhoneNumber);
  };

  return (
    <Box
      className="w-7/12"
      sx={{ backgroundColor: "inherit.main" }}
      borderRadius={5}
      height={500}
      pt={5}
    >
      <Box textAlign="end" mr={10}>
        <IconButton onClick={handleCloseForgetPassword}>
          <CloseIcon sx={{ color: "primary.main" }} />
        </IconButton>
      </Box>
      <Box alignItems="center" textAlign="center" pt={5}>
        <Typography variant="h5" color="#000" fontWeight={600} fontSize={28}>
          Forgot Password
        </Typography>

        <Typography
          variant="body1"
          color="#000"
          fontWeight={500}
          fontSize={20}
          sx={{ pt: 3 }}
        >
          We will send you a Message to verify your account
        </Typography>
        <Box
          pt={5}
          pb={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Box className="w-1/2">
            {usePhoneNumber ? (
              <Box display="flex" justifyContent="center" alignItems="end">
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

                  <ArrowDropDownOutlinedIcon sx={{ color: "primary.main" }} />
                </Box>
                <TextField
                  required
                  fullWidth
                  label="Enter your Mobile Number"
                  name="phoneNumber"
                  autoComplete="phoneNumber"
                  variant="standard"
                  size="small"
                  sx={{
                    ".MuiInputLabel-root": {
                      fontSize: 15,
                      color: "secondary.dark",
                      ml: 1,
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
                size="small"
                sx={{
                  ".MuiInputLabel-root": {
                    fontSize: 15,
                    color: "secondary.dark",
                    ml: 1,
                  },
                }}
              />
            )}
          </Box>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Typography
            variant="body1"
            color="primary.dark"
            sx={{ fontWeight: 500, fontSize: "0.9rem" }}
          >
            Verify using the {""}
          </Typography>
          <Button
            onClick={handleChange}
            sx={{ fontWeight: 600, textTransform: "none" }}
          >
            {usePhoneNumber ? "Email Address?" : "Phone Number?"}
          </Button>
        </Box>
        <Box
          pt={8}
          pb={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Box className="w-1/2">
            <Stack
              spacing={2}
              direction="row"
              display="flex"
              justifyContent="space-between"
            >
              <Box
                mt={5}
                sx={{
                  borderRadius: 3,
                  width: 200,
                  border: 1,
                  borderColor: "primary.main",
                }}
              >
                <Button
                  color="info"
                  size="large"
                  type="submit"
                  variant="outlined"
                  onClick={handleOpenSignIn}
                  sx={{
                    textTransform: "none",
                    lineHeight: 1.5,
                    borderRadius: 3,
                    backgroundColor: "primary.main",
                    width: 200,
                    border: 1,
                    borderColor: "primary.main",
                  }}
                >
                  <Typography
                    variant="body1"
                    color="primary.main"
                    sx={{ fontWeight: 600, fontSize: "1rem" }}
                  >
                    Back
                  </Typography>
                </Button>
              </Box>
              <Box
                mt={5}
                sx={{
                  borderRadius: 3,
                  backgroundColor: "primary.main",
                  width: 200,
                }}
              >
                <Button
                  color="info"
                  size="large"
                  type="submit"
                  variant="contained"
                  onClick={handleOpenOTPComponent}
                  sx={{
                    textTransform: "none",
                    lineHeight: 1.5,
                    borderRadius: 3,
                    backgroundColor: "primary.main",
                    width: 200,
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
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
