import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { NoSsr } from "@mui/base/NoSsr";

export default function JoinSessionPage() {
  return (
    <Box>
      <NoSsr>
        <Box py={5} px={10}>
          <Typography
            variant="h5"
            gutterBottom
            color="primary.darkBlue"
            sx={{ fontWeight: 700, fontSize: "1.8rem" }}
          >
            Biology
          </Typography>
          <Typography
            variant="body1"
            color="secondary.dark"
            fontSize={20}
            fontWeight={500}
          >
            Anastasi Shelly
          </Typography>
          <Box py={2} maxWidth={800}>
            <video autoPlay loop>
              <source src="/videos/samplevideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Typography
              variant="body1"
              color="primary.dark"
              fontSize={18}
              pt={3}
            >
              Lorem ipsum dolor sit amet consectetur. Augue lacus aenean
              sollicitudin ultrices iaculis non sfsf. Aliquam netus morbi enim
              eget egestas eleifend nisi. In nullam lectus nibh cras rhoncus
              quis.
            </Typography>
          </Box>
          <Box
            sx={{
              borderRadius: 2,
              backgroundColor: "primary.main",
            }}
            className="w-60 "
            mt={1}
          >
            <Button
              color="info"
              size="medium"
              variant="contained"
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
                sx={{ fontWeight: 500, fontSize: 15 }}
              >
                Click here to open zoom
              </Typography>
            </Button>
          </Box>
        </Box>
      </NoSsr>
    </Box>
  );
}
