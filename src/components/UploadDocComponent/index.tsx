import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { useDropzone } from "react-dropzone";
import { FileWithPath } from "react-dropzone";

interface UploadDocComponentProps {
  onUpload: (uploadedDoc: FileWithPath) => void;
  maxFiles: number;
}

export default function UploadDocComponent({
  onUpload,
  maxFiles,
}: UploadDocComponentProps) {
  const [isHovered, setIsHovered] = useState(false);

  const onDrop = (acceptedFiles: File[]) => {
    // Iterate over the acceptedFiles and call onUpload for each file
    acceptedFiles.slice(0, maxFiles).forEach((file) => {
      onUpload(file);
    });
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles,
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc", ".docx"],
    },
  });

  return (
    <Box
      {...getRootProps()}
      sx={{
        height: 300,
        backgroundColor: isHovered ? "#E0E0E0" : "#F0F0F0F2",
        boxShadow: isHovered ? "#ADADAD" : "none",
      }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      px={15}
      role="button"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <input {...getInputProps()} />
      <InsertDriveFileIcon
        sx={{ color: isHovered ? "#ADADAD" : "#000", width: 70, height: 70 }}
      />
      <Typography
        variant="body1"
        color={isHovered ? "#ADADAD" : "#000"}
        sx={{ fontSize: 16, pt: 2 }}
        className="tracking-wide"
        textAlign="center"
      >
        {maxFiles > 1
          ? `Drag and drop up to ${maxFiles} documents or Browse`
          : "Drag and drop a document or Browse"}
      </Typography>
    </Box>
  );
}
