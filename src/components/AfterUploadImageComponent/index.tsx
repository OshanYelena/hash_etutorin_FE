import React from "react";
import { Box, IconButton } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

const imageURL = "/images/science1.jfif";

export default function AfterUploadImageComponent() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundImage: `url(${imageURL})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      display="flex"
      justifyContent="flex-end"
      pr={5}
    >
      <Box
        sx={{ backgroundColor: "#00000080", width: 30, height: 30 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <IconButton>
          <ModeEditIcon sx={{ color: "#fff", width: 20, height: 20 }} />
        </IconButton>
      </Box>
    </Box>
  );
}
