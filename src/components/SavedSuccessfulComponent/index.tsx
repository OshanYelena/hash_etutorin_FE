import React from "react";
import { Box, Typography, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

interface SavedSuccessfulProps {
  handleClose?: () => void;
  educator?: boolean;
}

export default function SavedSuccessfulComponent({
  handleClose,
  educator,
}: SavedSuccessfulProps) {
  return (
    <Box
      className="w-6/12"
      sx={{ backgroundColor: "#fff" }}
      borderRadius={5}
      height={400}
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
              borderColor: educator ? "primary.darkBlue" : "primary.main",
              width: 100,
              height: 100,
              borderRadius: 20,
            }}
          >
            <CheckIcon
              sx={{
                color: educator ? "primary.darkBlue" : "primary.main",
                width: 80,
                height: 80,
              }}
            />
          </Box>
        </Box>
        <Typography
          variant="h5"
          color={educator ? "primary.darkBlue" : "primary.main"}
          fontWeight={600}
          fontSize={28}
        >
          Saved Successfully!
        </Typography>

        <Box
          pt={2}
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
                backgroundColor: educator ? "primary.darkBlue" : "primary.main",
              }}
            >
              <Button
                color={educator ? "success" : "info"}
                size="large"
                type="submit"
                fullWidth
                variant="contained"
                onClick={handleClose}
                sx={{
                  textTransform: "none",
                  lineHeight: 1.5,
                  borderRadius: 3,
                  backgroundColor: educator
                    ? "primary.darkBlue"
                    : "primary.main",
                }}
              >
                <Typography
                  variant="body1"
                  color="primary.contrastText"
                  sx={{ fontWeight: 600, fontSize: "1rem" }}
                >
                  Ok
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
