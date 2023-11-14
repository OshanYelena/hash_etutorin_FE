import React from "react";
import { Box, Typography } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";

export default function UploadImageComponent() {
  return (
    <Box
      sx={{
        height: 300,
        backgroundColor: "#F0F0F0F2",
        ":hover": {
          boxShadow: "#ADADAD",
        },
      }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      px={15}
      role="button"
    >
      <ImageIcon sx={{ color: "#ADADAD", width: 70, height: 70 }} />
      <Typography
        variant="body1"
        color="#ADADAD"
        sx={{ fontSize: 16, pt: 2 }}
        className="tracking-wide"
        textAlign="center"
      >
        Drag and drop images or Browse
      </Typography>
    </Box>
  );
}
