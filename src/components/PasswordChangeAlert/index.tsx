import React from "react";
import { Box, Typography, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

interface PasswordChangeAlertProps {
  handleOpenSignIn?: () => void;
  loginSuccess?: boolean;
}

export default function PasswordChangeAlert({
  handleOpenSignIn,
  loginSuccess,
}: PasswordChangeAlertProps) {
  return (
    <Box
      className="w-7/12"
      sx={{ backgroundColor: "inherit.main" }}
      borderRadius={5}
      height={500}
      pt={5}
    >
      <Box alignItems="center" textAlign="center" pt={5}>
        <Box display="flex" justifyContent="center" alignItems="center" pb={5}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              textAlign: "center",
              border: 1,
              borderColor: loginSuccess ? "primary.main" : "error.main",
              width: 100,
              height: 100,
              borderRadius: 20,
            }}
          >
            {loginSuccess ? (
              <CheckIcon
                sx={{ color: "primary.main", width: 80, height: 80 }}
              />
            ) : (
              <CloseIcon sx={{ color: "error.main", width: 80, height: 80 }} />
            )}
          </Box>
        </Box>
        <Typography
          variant="h5"
          color={loginSuccess ? "primary.main" : "error.main"}
          fontWeight={600}
          fontSize={28}
        >
          {loginSuccess ? "Password Changed Successfully!" : "Login Fail!"}
        </Typography>
        <Typography
          variant="body1"
          color="#000"
          fontWeight={500}
          fontSize={20}
          sx={{ pt: 3 }}
        >
          {loginSuccess
            ? "Your Password has been updated"
            : "The OTP you enterd is invalid.Please enter the correct OTP."}
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
            <Box
              mt={5}
              sx={{
                borderRadius: 3,
                backgroundColor: loginSuccess ? "primary.main" : "error.main",
              }}
            >
              <Button
                color={loginSuccess ? "info" : "warning"}
                size="large"
                type="submit"
                fullWidth
                variant="contained"
                onClick={handleOpenSignIn}
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
                  {loginSuccess ? "Login" : "Retry"}
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
