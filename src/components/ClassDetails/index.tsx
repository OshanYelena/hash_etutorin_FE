/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Box, Grid, Typography, Button, IconButton } from "@mui/material";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

interface ClassDetailsProps {
  handleClose?: () => void;
  handleOpenPaymentType?: () => void;
  classDetails: any
}

export default function ClassDetails({
  handleClose,
  handleOpenPaymentType,
  classDetails
}: ClassDetailsProps) {
  return (
    <Box pt={2} pb={5}>
      <Box sx={{ justifyContent: "flex-end", display: "flex" }}>
        <IconButton onClick={handleClose}>
          <CloseOutlinedIcon sx={{ color: "#000" }} />
        </IconButton>{" "}
      </Box>
      <Typography
        variant="h5"
        gutterBottom
        color="#ADADAD"
        sx={{ fontSize: "1.5rem", fontWeight: 600 }}
      >
        {" "}
        It's easy to &nbsp;
        <Box color="primary.main" display="inline" sx={{ fontWeight: 800 }}>
          Get Started
        </Box>
      </Typography>
      <Typography
        variant="body1"
        color="primary.dark"
        fontSize={18}
        px={5}
        py={2}
      >
        dolor sit amet consectetur. Augue lacus aenean sollicitudin ultrices
        iaculis non.
      </Typography>
      <Box my={3} sx={{ backgroundColor: "#2E72B31A" }} py={2}>
        <Typography
          variant="h5"
          color="primary.main"
          sx={{ fontSize: "1.5rem", fontWeight: 800 }}
        >
         {classDetails && classDetails.plan_type}
        </Typography>
      </Box>

      <Box py={5}>
        <Typography
          variant="h5"
          gutterBottom
          color="primary.main"
          sx={{ fontWeight: 700, fontSize: "1.5rem" }}
        >
          <Box color="#2E72B399" display="inline">
            Subject Code:{" "}
          </Box>
          0123
        </Typography>

        <Typography
          variant="h5"
          gutterBottom
          color="primary.darkBlue"
          sx={{ fontWeight: 800, fontSize: "1.8rem" }}
        >
          Biology
          <Box
            sx={{
              background: "-webkit-linear-gradient(45deg, #280C9B, #FF00E6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: "1.5rem",
            }}
            display="inline"
            ml={1}
          >
            | Grade 12
          </Box>
        </Typography>
        <Typography
          variant="body1"
          color="secondary.dark"
          fontSize={18}
          gutterBottom
          fontWeight={600}
          fontStyle="italic"
        >
          By Anastasi Shelly
        </Typography>

        <Box
          sx={{ background: "linear-gradient(to right, #760C9B12, #280C9B12)" }}
          py={3}
          my={3}
        >
          <Typography
            variant="h5"
            gutterBottom
            color="#760C9BD9"
            sx={{
              fontWeight: 700,
              fontSize: "1.2rem",
              textDecoration: "underline",
            }}
          >
            Individual Class{" "}
          </Typography>
          <Box textAlign="left" px={15} pb={3}>
            <Grid container spacing={5} pt={3}>
              <Grid item xs={3}>
                <Typography
                  variant="body1"
                  color="#AAA9A9"
                  sx={{ fontWeight: 600, fontSize: "1rem" }}
                >
                  Date :
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography
                  variant="body1"
                  color="#000000A6"
                  sx={{ fontSize: "1rem" }}
                >
                  24.05.2023 - Monday
                </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={5} pt={3}>
              <Grid item xs={3}>
                <Typography
                  variant="body1"
                  color="#AAA9A9"
                  sx={{ fontWeight: 600, fontSize: "1rem" }}
                >
                  Time :
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography
                  variant="body1"
                  color="#000000A6"
                  sx={{ fontSize: "1rem" }}
                >
                  2.00PM To 4.00PM
                </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={5} pt={3}>
              <Grid item xs={3}></Grid>
              <Grid item xs={8}>
                <Typography
                  variant="body1"
                  color="#000000A6"
                  sx={{ fontSize: "1rem" }}
                >
                  <ul>
                    <FiberManualRecordRoundedIcon
                      sx={{
                        color: "#000000A6",
                        width: 12,
                        height: 12,
                        mr: 1,
                      }}
                    />
                    4.5 hours on-demand video
                  </ul>
                  <ul>
                    <FiberManualRecordRoundedIcon
                      sx={{
                        color: "#000000A6",
                        width: 12,
                        height: 12,
                        mr: 1,
                      }}
                    />
                    Access on mobile and TV
                  </ul>
                  <ul>
                    <FiberManualRecordRoundedIcon
                      sx={{
                        color: "#000000A6",
                        width: 12,
                        height: 12,
                        mr: 1,
                      }}
                    />
                    Full lifetime access{" "}
                  </ul>
                  <ul>
                    <FiberManualRecordRoundedIcon
                      sx={{
                        color: "#000000A6",
                        width: 12,
                        height: 12,
                        mr: 1,
                      }}
                    />
                    Certificate of completion
                  </ul>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box display="flex" justifyContent="center" pt={5}>
          <Box
            sx={{
              borderRadius: 2,
              backgroundColor: "primary.main",
            }}
            className="w-80 "
          >
            <Button
              color="info"
              size="medium"
              variant="contained"
              onClick={handleOpenPaymentType}
              sx={{
                textTransform: "none",
                lineHeight: 1.5,
                borderRadius: 2,
                backgroundColor: "primary.main",
              }}
              className="w-80 py-2"
            >
              <Typography
                variant="body1"
                color="primary.contrastText"
                sx={{ fontWeight: 500, fontSize: "1.1rem" }}
              >
                Continue
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
