import React from "react";
import {
  Box,
  Typography,
  IconButton,
  InputBase,
  Button,
  Stack,
  Link,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface OTPProps {
  handleCloseOTP?: () => void;
  handleOpenForgetPassword?: () => void;
  handleOpenSetNewPassword?: () => void;
  profileEmail?: boolean;
  profilePhone?: boolean;
  educator?: boolean;
}

export default function OTPComponent({
  handleCloseOTP,
  handleOpenForgetPassword,
  handleOpenSetNewPassword,
  profileEmail,
  profilePhone,
  educator,
}: OTPProps) {
  return (
    <Box
      className="w-7/12"
      sx={{ backgroundColor: "inherit.main" }}
      borderRadius={5}
      height={500}
      pt={5}
    >
      <Box textAlign="end" mr={10}>
        <IconButton onClick={handleCloseOTP}>
          <CloseIcon sx={{ color: "primary.main" }} />
        </IconButton>
      </Box>
      {profileEmail && (
        <Typography
          variant="body1"
          color="#000"
          fontWeight={500}
          fontSize={22}
          textAlign="center"
        >
          We need to Verify your{" "}
          <Box fontWeight="bold" display="inline">
            Email Address
          </Box>
        </Typography>
      )}

      {profilePhone && (
        <Typography
          variant="body1"
          color="#000"
          fontWeight={500}
          fontSize={22}
          textAlign="center"
        >
          We need to Verify your{" "}
          <Box fontWeight="bold" display="inline">
            Phone Number
          </Box>
        </Typography>
      )}

      <Box
        alignItems="center"
        textAlign="center"
        pt={profileEmail || profilePhone ? 3 : 5}
      >
        <Typography
          variant="body1"
          color="#000"
          fontWeight={500}
          fontSize={20}
          sx={{ pt: 3 }}
        >
          Please Enter the OTP you received to{" "}
          <Box fontWeight="bold" display="inline">
            abc@gmail.com
          </Box>
        </Typography>
        <Box
          pt={5}
          pb={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Box
            className="bg-[#2E72B326]"
            sx={{ width: 80, height: 80, borderRadius: 5 }}
            display="flex"
            alignItems="center"
            textAlign="center"
            mr={2}
          >
            {" "}
            <InputBase
              sx={{
                ml: 4,
                textAlign: "center",
                fontSize: "2rem",
                fontWeight: 600,
              }}
              inputProps={{ "aria-label": "OTP" }}
            />
          </Box>
          <Box
            className="bg-[#2E72B326]"
            sx={{ width: 80, height: 80, borderRadius: 5 }}
            display="flex"
            alignItems="center"
            textAlign="center"
            mr={2}
          >
            {" "}
            <InputBase
              sx={{
                ml: 4,
                textAlign: "center",
                fontSize: "2rem",
                fontWeight: 600,
              }}
              inputProps={{ "aria-label": "OTP" }}
            />
          </Box>
          <Box
            className="bg-[#2E72B326]"
            sx={{ width: 80, height: 80, borderRadius: 5 }}
            display="flex"
            alignItems="center"
            textAlign="center"
            mr={2}
          >
            {" "}
            <InputBase
              sx={{
                ml: 4,
                textAlign: "center",
                fontSize: "2rem",
                fontWeight: 600,
              }}
              inputProps={{ "aria-label": "OTP" }}
            />
          </Box>
          <Box
            className="bg-[#2E72B326]"
            sx={{ width: 80, height: 80, borderRadius: 5 }}
            display="flex"
            alignItems="center"
            textAlign="center"
          >
            {" "}
            <InputBase
              sx={{
                ml: 4,
                textAlign: "center",
                fontSize: "2rem",
                fontWeight: 600,
              }}
              inputProps={{ "aria-label": "OTP" }}
            />
          </Box>
        </Box>
        <Typography
          variant="body1"
          color="secondary.dark"
          sx={{ fontWeight: 500, fontSize: "0.9rem" }}
        >
          Didn’t receive the Email? {""}
          <Link
            href="#"
            variant="body2"
            fontWeight={600}
            sx={{ color: educator ? "primary.darkBlue" : "primary.main" }}
          >
            Resend
          </Link>
        </Typography>
        <Box
          pt={8}
          pb={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          {profileEmail || profilePhone ? (
            <Box
              sx={{
                borderRadius: 3,
                backgroundColor: educator ? "primary.darkBlue" : "primary.main",
                width: 300,
              }}
            >
              <Button
                color={educator ? "success" : "info"}
                size="large"
                type="submit"
                variant="contained"
                onClick={handleOpenSetNewPassword}
                sx={{
                  textTransform: "none",
                  lineHeight: 1.5,
                  borderRadius: 3,
                  backgroundColor: educator
                    ? "primary.darkBlue"
                    : "primary.main",
                  width: "100%",
                }}
              >
                <Typography
                  variant="body1"
                  color="primary.contrastText"
                  sx={{ fontWeight: 600, fontSize: "1rem" }}
                >
                  Verify
                </Typography>
              </Button>
            </Box>
          ) : (
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
                    onClick={handleOpenForgetPassword}
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
                    onClick={handleOpenSetNewPassword}
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
          )}
        </Box>
      </Box>
    </Box>
  );
}
