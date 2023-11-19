import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { updateEducatorDetails } from "@/api/user/userDetails";

interface ConfirmChangesProps {
  handleClose?: () => void;
  educator?: boolean;
  handleSave?: () => void;
  educatorDetails: Object
}

export default function ConfirmChangesPopup({
  handleClose,
  educator,
  handleSave,
  educatorDetails
}: ConfirmChangesProps) {


  return (
    <Box
      className="w-6/12"
      sx={{ backgroundColor: "#fff" }}
      borderRadius={5}
      height={400}
      pt={5}
    >
      <Box alignItems="center" textAlign="center" pt={5}>
        <Typography
          variant="h5"
          color={educator ? "primary.darkBlue" : "primary.main"}
          fontWeight={600}
          fontSize={28}
        >
          Are you sure?
        </Typography>

        <Box
          pt={3}
          pb={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Box className="w-3/4">
            <Typography variant="body1" color="#444444" fontSize={18}>
              Are you sure that want to leave this form? you’ll still have an
              oppurtunity to save your unsaved changes.
            </Typography>
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
          <Box className="w-3/4">
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
                  width: 300,
                  border: 1,
                  borderColor: educator ? "primary.darkBlue" : "primary.main",
                }}
              >
                <Button
                  color="success"
                  size="large"
                  type="submit"
                  variant="outlined"
                  onClick={handleClose}
                  sx={{
                    textTransform: "none",
                    lineHeight: 1.5,
                    borderRadius: 3,
                    backgroundColor: educator
                      ? "primary.darkBlue"
                      : "primary.main",
                    width: "100%",
                    border: 1,
                    borderColor: educator ? "primary.darkBlue" : "primary.main",
                  }}
                >
                  <Typography
                    variant="body1"
                    color="primary.main"
                    sx={{ fontWeight: 600, fontSize: "1rem" }}
                  >
                    Cancel
                  </Typography>
                </Button>
              </Box>
              <Box
                mt={5}
                sx={{
                  borderRadius: 3,
                  backgroundColor: educator
                    ? "primary.darkBlue"
                    : "primary.main",
                  width: 300,
                }}
              >
                <Button
                  color={educator ? "success" : "info"}
                  size="large"
                  type="submit"
                  variant="contained"
                  onClick={handleSave}
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
                    Save
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
