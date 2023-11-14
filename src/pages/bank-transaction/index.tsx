import React from "react";
import { Box, Typography, Grid, Button, IconButton } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export default function BankTransaction() {
  return (
    <Box className="h-full" px={10} py={5}>
      <Typography
        variant="h5"
        gutterBottom
        color="primary.darkBlue"
        pb={2}
        sx={{ fontWeight: 700, fontSize: "1.8rem" }}
      >
        Bank Transaction
      </Typography>
      <Box>
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <Typography
              variant="body1"
              color="primary.dark"
              fontSize={18}
              fontWeight={600}
            >
              Total Price (Rs)
            </Typography>{" "}
            <Typography
              gutterBottom
              variant="body1"
              color="#760C9B80"
              fontSize={18}
              fontWeight={600}
            >
              5000.00
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" alignItems="center">
              <Typography
                variant="body1"
                color="primary.dark"
                fontSize={18}
                fontWeight={600}
              >
                Description
              </Typography>{" "}
              <IconButton>
                <InfoOutlinedIcon
                  sx={{ color: "#000", width: 18, height: 18, ml: 0.5 }}
                />
              </IconButton>
            </Box>
            <Typography
              gutterBottom
              variant="body1"
              color="#2E72B380"
              fontSize={18}
              fontWeight={600}
            >
              Subject code - 0123 Payment
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              variant="body1"
              color="primary.dark"
              fontSize={18}
              fontWeight={600}
            >
              Date
            </Typography>
            <Typography
              gutterBottom
              variant="body1"
              color="#ADADAD"
              fontSize={18}
              fontWeight={600}
            >
              23.12.2023
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box py={5}>
        <Typography
          gutterBottom
          variant="body1"
          color="primary.dark"
          fontSize={18}
          fontWeight={600}
        >
          Bank Slip
        </Typography>
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
          <Typography
            variant="body1"
            color="#ADADAD"
            pt={1}
            fontSize={15}
            fontStyle="italic"
            textAlign="center"
          >
            Drag & Drop your slip file (PDF) <br /> or <br /> Browse File (PDF)
          </Typography>
        </Box>
        <Box display="flex" justifyContent="flex-end" pt={2}>
          <Box
            sx={{
              borderRadius: 3,
              backgroundColor: "primary.main",
            }}
            className="w-60 "
          >
            <Button
              color="info"
              size="medium"
              variant="contained"
              // onClick={}
              sx={{
                textTransform: "none",
                lineHeight: 1.5,
                borderRadius: 3,
                backgroundColor: "primary.main",
              }}
              className="w-full "
            >
              <Typography
                variant="body1"
                color="primary.contrastText"
                sx={{ fontWeight: 500, fontSize: "1.1rem" }}
              >
                Confirm
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
