import React from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

interface HomeReadMorePopupProps {
  handleClose?: () => void;
}

export default function HomeReadMorePopup({
  handleClose,
}: HomeReadMorePopupProps) {
  return (
    <Box sx={{ backgroundColor: "#fff" }} width="80%" pt={2} pb={5} px={10}>
      <Box sx={{ justifyContent: "flex-end", display: "flex" }} pb={2}>
        <IconButton onClick={handleClose}>
          <CloseOutlinedIcon sx={{ color: "primary.main" }} />
        </IconButton>{" "}
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Typography
            variant="h3"
            gutterBottom
            color="primary.main"
            fontSize={40}
          >
            <Box fontWeight="bold" display="inline">
              Expand{" "}
            </Box>{" "}
            Your Horizons, <br />
            <Box fontWeight="bold" display="inline">
              {" "}
              Join with Us{" "}
            </Box>
          </Typography>
          <Typography
            variant="subtitle1"
            className=" tracking-wide"
            sx={{ color: "primary.dark" }}
          >
            Lorem ipsum dolor sit amet consectetur. Augue lacus aenean
            sollicitudin ultrices iaculis non. Aliquam netus morbi enim eget
            egestas eleifend nisi. In nullam lectus nibh cras rhoncus quis..
            Lorem ipsum dolor sit amet consectetur. Augue lacus aenean
            sollicitudin ultrices iaculis non. Aliquam netus morbi enim eget
            egestas eleifend nisi. In nullam lectus nibh cras rhoncus
            quis..Lorem ipsum dolor sit amet consectetur. Augue lacus aenean
            sollicitudin ultrices iaculis non. Aliquam netus morbi enim eget
            egestas eleifend nisi. In nullam lectus nibh cras rhoncus
            quis..Lorem ipsum dolor sit amet consectetur..
          </Typography>
        </Grid>
        <Grid item xs={5} display="flex" justifyContent="flex-end">
          <Box width="90%">
            <img src="/images/home-about-read-more-image.png" alt="image" />
          </Box>
        </Grid>
      </Grid>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        mt={5}
        flexDirection="column"
      >
        <Typography
          variant="h3"
          gutterBottom
          color="primary.darkBlue"
          fontSize={35}
        >
          Our &nbsp;
          <Box fontWeight="bold" display="inline">
            Mission
          </Box>
        </Typography>
        <Box sx={{ backgroundColor: "#2E72B326" }} py={3} px={15} mt={2}>
          <Typography
            variant="subtitle1"
            className=" tracking-wide"
            sx={{ color: "primary.dark" }}
            textAlign="center"
          >
            <Box fontWeight="bold" display="inline">
              Lorem ipsum dolor sit amet consectetur.
            </Box>{" "}
            Augue lacus aenean sollicitudin ultrices iaculis non. Aliquam netus
            morbi enim eget egestas eleifend nisi. In nullam lectus nibh cras
            rhoncus quis.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
