import React from "react";
import { Box, Typography, Avatar, Grid } from "@mui/material";

export default function AnnouncementCard() {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: 2,
        boxShadow: 5,
      }}
      py={5}
      px={3}
    >
      <Grid container columnSpacing={2}>
        <Grid item xs={1}>
          <Avatar
            alt="Avatar Image"
            src="/images/educator4.avif"
            sx={{ width: 70, height: 70 }}
          />
        </Grid>
        <Grid item xs={11} pt={1} pr={5}>
          <Typography
            variant="body1"
            color="#000000BF"
            fontSize={20}
            fontWeight={600}
          >
            Anastasi Shelly
          </Typography>
          <Typography variant="body1" color="#00000073" fontSize={14}>
            Tuesday, 29 September 2023, 8:41 PM
          </Typography>
          <Typography
            variant="body1"
            color="#000000BF"
            fontSize={16}
            sx={{ pt: 3 }}
            align="justify"
          >
            Hi All, <br /> <br />
            Lorem ipsum dolor sit amet consectetur. Augue lacus aenean
            sollicitudin ultrices iaculis non. Aliquam netus morbi enim eget
            egestas eleifend nisi. In nullam lectus nibh cras rhoncus quis.
            Lorem ipsum dolor sit amet consectetur. Augue lacus aenean
            sollicitudin ultrices iaculis non. Aliquam netus morbi enim eget
            egestas eleifend nisi. In nullam lectus nibh cras rhoncus quis.
            <br /> <br />
            Thank you!
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
