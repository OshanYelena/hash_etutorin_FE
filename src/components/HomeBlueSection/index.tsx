import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";

export default function HomeBlueSection() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        background: "linear-gradient(to right, #2E72B3, #280C9B)",
        display: "flex",
        justifyContent: "center",
      }}
      className="h-full"
      px={10}
      pt={5}
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
          <Typography variant="h3" gutterBottom color="primary.contrastText">
            <Box fontWeight="bold" display="inline">
              Expand{" "}
            </Box>{" "}
            Your Horizons, <br />
            <Box fontWeight="bold" display="inline">
              {" "}
              Join with Us{" "}
            </Box>
          </Typography>
          <Box
            sx={{
              borderRadius: 2,
              backgroundColor: "primary.darkBlue",
            }}
            className="w-36 "
          >
            <Button
              color="success"
              size="medium"
              variant="contained"
              href="#about-section"
              sx={{
                textTransform: "none",
                lineHeight: 1.5,
                borderRadius: 2,
                backgroundColor: "primary.darkBlue",
              }}
              className="w-36 py-2"
            >
              <Typography
                variant="body1"
                color="primary.contrastText"
                sx={{ fontWeight: 500, fontSize: "1.1rem" }}
              >
                Explore More
              </Typography>
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img src="/images/homeImage.png" alt="Home Page" />
        </Grid>
      </Grid>
    </Box>
  );
}
