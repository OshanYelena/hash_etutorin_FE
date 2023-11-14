/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Box, Typography, Grid } from "@mui/material";

interface ClassHistoryCardProps {
  date: string;
  day: string;
  title: string;
  time: string;
  description: string;
  image: string;
}

export default function ClassHistoryCard({
  date,
  day,
  title,
  time,
  description,
  image,
}: ClassHistoryCardProps) {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        boxShadow: "2px 2px 9px 2px #9E00FF26",
      }}
      py={3}
      px={3}
    >
      <Typography variant="body1" gutterBottom color="#760C9B" pb={2}>
        <Box sx={{ fontSize: "1.1rem" }} fontWeight="bold" display="inline">
          {date} |
        </Box>{" "}
        {day}
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={2}>
          <Box>
            <img src={image} alt="Img" width={200} height={200} />
          </Box>
        </Grid>
        <Grid item xs={10}>
          <Box>
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, fontSize: "1.3rem" }}
              color="#000000BF"
            >
              {title}
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ fontSize: "0.9rem" }}
              color="#808080"
            >
              {time}
            </Typography>
            <Typography
              variant="body1"
              pt={5}
              sx={{ fontSize: "1rem" }}
              color="#808080"
            >
              {description}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
