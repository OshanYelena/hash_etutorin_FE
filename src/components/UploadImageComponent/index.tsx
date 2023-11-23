import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";

interface uplaodIamge {
  updateImageData: (imageData: Object) => any;
  removeImageData: (imageData: Object) => any;
  index: number;
}

export default function UploadImageComponent({
  updateImageData,
  removeImageData,
  index,
}: uplaodIamge) {
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];

    if (file) {
      const reader: any = new FileReader();
      reader.onloadend = () => {
        const imageData: Object = {
          file: file,
          preview: reader.result,
          // Add more properties as needed
        };
        setImagePreview(reader.result);
        updateImageData(imageData);
      };
      reader.readAsDataURL(file);
    }
  };

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
      <input type="file" onChange={handleFileChange} />
      <Button variant="contained" onClick={() => removeImageData(index)}>
        Remove Image
      </Button>
      {imagePreview ? (
        <img
          src={imagePreview}
          alt="Preview"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        <>
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
        </>
      )}
    </Box>
  );
}
