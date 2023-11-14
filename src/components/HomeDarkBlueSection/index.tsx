import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";

export default function HomeDarkBlueSection() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        background: "linear-gradient(to right, #280C9B, #1E1541)",
        display: "flex",
        justifyContent: "center",
      }}
      className="h-full"
      px={10}
    >
      <Grid container spacing={2}>
        <Grid
          item
          xs={7}
          sx={{
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" gutterBottom color="primary.contrastText">
            <Box fontWeight="bold" display="inline">
              Discover{" "}
            </Box>{" "}
            Your Path to
            <Box fontWeight="bold" display="inline">
              {" "}
              Becoming a Teacher, <br />
              Join with Us{" "}
            </Box>
          </Typography>
          <Box
            sx={{
              borderRadius: 2,
              backgroundColor: "primary.main",
            }}
            className="w-60 "
            mt={2}
          >
            <Button
              color="info"
              size="medium"
              variant="contained"
              href="#about-section"
              sx={{
                textTransform: "none",
                lineHeight: 1.5,
                borderRadius: 2,
                backgroundColor: "primary.main",
              }}
              className="w-60 py-2"
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
        <Grid item xs={5}>
          <Box mt={-7}>
            <img
              src="/images/homeDarkBlueImage.png"
              alt="Home Page"
              style={{ width: 550 }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
