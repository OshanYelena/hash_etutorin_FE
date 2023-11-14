import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import UploadImageComponent from "@/components/UploadImageComponent";
import AfterUploadImageComponent from "@/components/AfterUploadImageComponent";

export default function CreateClassGallery() {
  return (
    <Box py={5}>
      <Typography
        variant="h5"
        color="primary.darkBlue"
        sx={{ fontWeight: 600, fontSize: 22 }}
      >
        Description
      </Typography>
      <Typography
        variant="body1"
        color="primary.dark"
        sx={{ fontSize: 18, py: 2 }}
        className="tracking-wide"
      >
        Organize your go-to freelancers and favorite services into custom lists
        you can easily access and share with your team.
      </Typography>
      <Box>
        <Typography
          variant="h5"
          color="primary.main"
          sx={{ fontSize: 20, pt: 5 }}
        >
          Images(3)
        </Typography>
        <Typography
          variant="body1"
          color="primary.dark"
          sx={{ fontSize: 16, py: 2 }}
          className="tracking-wide"
        >
          Organize your go-to freelancers and favorite services into custom
          lists you can easily access and share with your team.
        </Typography>
        <Grid container spacing={4} py={3}>
          <Grid item xs={4}>
            <Box height={300}>
              <AfterUploadImageComponent />
            </Box>
            {/* <UploadImageComponent /> */}
          </Grid>
          <Grid item xs={4}>
            <UploadImageComponent />
          </Grid>
          <Grid item xs={4}>
            <UploadImageComponent />
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Typography
          variant="h5"
          color="primary.main"
          sx={{ fontSize: 20, pt: 5 }}
        >
          Videos
        </Typography>
        <Typography
          variant="body1"
          color="primary.dark"
          sx={{ fontSize: 16, py: 2 }}
          className="tracking-wide"
        >
          Organize your go-to freelancers and favorite services into custom
          lists you can easily access and share with your team.
        </Typography>
        <Grid container spacing={4} py={3}>
          <Grid item xs={4}>
            <UploadImageComponent />
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Typography
          variant="h5"
          color="primary.main"
          sx={{ fontSize: 20, pt: 5 }}
        >
          Documents
        </Typography>
        <Typography
          variant="body1"
          color="primary.dark"
          sx={{ fontSize: 16, py: 2 }}
          className="tracking-wide"
        >
          Organize your go-to freelancers and favorite services into custom
          lists you can easily access and share with your team.
        </Typography>
        <Grid container spacing={4} py={3}>
          <Grid item xs={4}>
            <UploadImageComponent />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
