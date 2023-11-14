import React, { useState } from "react";
import {
  Box,
  Typography,
  InputAdornment,
  IconButton,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface SetNewPasswordProps {
  handleCloseSetNewPassword?: () => void;
  handleOpenOTPComponent?: () => void;
  handlePasswordChangeAlert?: () => void;
}

export default function SetNewPassword({
  handleCloseSetNewPassword,
  handleOpenOTPComponent,
  handlePasswordChangeAlert,
}: SetNewPasswordProps) {
  const [showPasswordText, setShowPasswordText] = useState(false);

  const handleTogglePassword = () => {
    setShowPasswordText(!showPasswordText);
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
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
        <IconButton onClick={handleCloseSetNewPassword}>
          <CloseIcon sx={{ color: "primary.main" }} />
        </IconButton>
      </Box>
      <Box alignItems="center" textAlign="center" pt={5}>
        <Typography variant="h5" color="#000" fontWeight={600} fontSize={28}>
          Set New Password
        </Typography>

        <Box
          pt={3}
          pb={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Box className="w-1/2">
            <Box py={2}>
              <TextField
                required
                fullWidth
                name="password"
                label="Enter your Password"
                type={showPasswordText ? "text" : "password"}
                //   value={values.password}

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
            </Box>
            <Box py={2}>
              <TextField
                required
                fullWidth
                name="password"
                label="Enter your Password"
                type={showPasswordText ? "text" : "password"}
                //   value={values.password}

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
            </Box>
          </Box>
        </Box>

        <Box
          pt={5}
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
                  onClick={handleOpenOTPComponent}
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
                  onClick={handlePasswordChangeAlert}
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
