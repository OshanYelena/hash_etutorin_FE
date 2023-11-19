import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import Image from "next/image";

interface AfterUploadVideoComponentProps {
  video: File | string;
  onDelete: () => void; // Callback function to handle delete
}

export default function AfterUploadVideoComponent({
  video,
  onDelete,
}: AfterUploadVideoComponentProps) {
  //   const [isHovered, setIsHovered] = useState(false);

  const [isHovered, setIsHovered] = useState(false);

  const handleDeleteClick = () => {
    // Call the onDelete callback when the delete button is clicked
    onDelete();
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        cursor: "pointer",
      }}
    >
      {typeof video === "string" ? (
        <Image
          src={video}
          layout="fill"
          objectFit="cover"
          alt="Video Thumbnail"
        />
      ) : (
        <>
          <video
            src={URL.createObjectURL(video)}
            controls
            width="100%"
            height="100%"
          />
          <IconButton
            onClick={handleDeleteClick}
            sx={{
              position: "absolute",
              top: "5px",
              right: "5px",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              color: "#fff",
            }}
          >
            <DeleteIcon />
          </IconButton>
        </>
      )}
    </Box>
  );
}
