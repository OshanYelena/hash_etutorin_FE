import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import UploadImageComponent from "@/components/UploadImageComponent";
import AfterUploadImageComponent from "@/components/AfterUploadImageComponent";

interface gallery {
  handleImages: (images: any) => void;
}

export default function CreateClassGallery({ handleImages }: gallery) {
  const [imageCount, setImageCount] = useState(1);
  const [imageDataList, setImageDataList] = useState(Array);

  const updateImageData = (index: number, imageData: any) => {
    setImageDataList((prevImageDataList) => {
      const updatedDataList = [...prevImageDataList];
      updatedDataList[index] = imageData;
      return updatedDataList;
    });
  };

  const removeImageData = (index: number) => {
    setImageDataList((prevImageDataList) => {
      const updatedDataList = [...prevImageDataList];
      updatedDataList.splice(index, 1);
      return updatedDataList;
    });
  };

  const handleAddImage = () => {
    setImageDataList((prevImageDataList) => [
      ...prevImageDataList,
      {
        file: null, // You can set default file data or set it to null
        preview: null, // You can set a default preview or set it to null
        // Add more default properties as needed
      },
    ]);
  };
  useEffect(() => {
    handleImages(imageDataList);
  }, [imageDataList]);

  const handleRemoveImage = () => {
    if (imageDataList.length > 2) {
      removeImageData(imageDataList.length - 1);
    }
  };

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
          Images({imageDataList.length})
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
          {imageDataList.map((imageData, index) => (
            <Grid item xs={4} key={index}>
              <UploadImageComponent
                index={index}
                updateImageData={(data) => updateImageData(index, data)}
                removeImageData={() => removeImageData(index)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box mt={2}>
        <Button variant="contained" onClick={handleAddImage}>
          Add Image
        </Button>
        <Button
          variant="contained"
          onClick={handleRemoveImage}
          disabled={imageDataList.length === 1}
        >
          Remove Image
        </Button>
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
          {/* <Grid item xs={4}>
            <UploadImageComponent updateImageData={updateImageData} />
          </Grid> */}
        </Grid>
      </Box>
    </Box>
  );
}
