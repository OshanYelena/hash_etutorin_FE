import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography, Grid, Button, ButtonBase } from "@mui/material";

const images = [
  {
    url: "/images/teacher1.png",
    title: "Hi , I'm Anastasi Shelly",
    width: "30%",
    subject: "Maths",
  },
  {
    url: "/images/teacher2.png",
    title: "Hi , I'm Anastasi Shelly",
    width: "30%",
    subject: "O/L Maths",
  },
  {
    url: "/images/teacher3.png",
    title: "Hi , I'm Anastasi Shelly",
    width: "30%",
    subject: "Maths",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 400,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "flex-end",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: "linear-gradient(to bottom, transparent, #000000)",
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

export default function TopTeachersSection() {
  return (
    <Box
      sx={{
        alignItems: "center",
        textAlign: "center",
        background:
          "linear-gradient(to bottom, transparent,#280C9B00, #2E72B3A6)",
      }}
      className="h-full"
      px={13.5}
      pt={15}
      pb={5}
    >
      <Box py={5} sx={{ backgroundColor: "#2E72B340", height: 295 }}>
        <Grid container spacing={2} mt={-18}>
          <Grid
            item
            xs={8}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            mt={15}
          >
            <Typography
              variant="h3"
              gutterBottom
              color="primary.main"
              sx={{ fontWeight: 700 }}
            >
              Start your next chapter <br />
              <Box color="primary.darkBlue" display="inline">
                as a Teacher
              </Box>
            </Typography>
            <Box
              mt={2}
              sx={{
                borderRadius: 2,
                backgroundColor: "primary.darkBlue",
              }}
              className="w-56 "
            >
              <Button
                color="success"
                size="medium"
                variant="contained"
                sx={{
                  textTransform: "none",
                  lineHeight: 1.5,
                  borderRadius: 2,
                  backgroundColor: "primary.darkBlue",
                }}
                className="w-56 py-2"
              >
                <Typography
                  variant="body1"
                  color="primary.contrastText"
                  sx={{ fontWeight: 500, fontSize: "1.1rem" }}
                >
                  Become a Educator
                </Typography>
              </Button>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <img
              src="/images/homeEducator.png"
              alt="Educator Image"
              className="h-96"
            />
          </Grid>
        </Grid>
      </Box>
      {/* Top Teachers sub section */}
      <Box py={5}>
        <Typography
          variant="h5"
          gutterBottom
          color="primary.darkBlue"
          pt={5}
          pb={10}
          sx={{ fontWeight: 700, fontSize: "1.8rem" }}
        >
          Top Teachers
        </Typography>

        <Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              minWidth: 300,
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            {images.map((image, index) => (
              <ImageButton
                focusRipple
                key={index}
                style={{
                  width: image.width,
                }}
              >
                <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                <ImageBackdrop className="MuiImageBackdrop-root" />
                <Image>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    sx={{
                      position: "relative",
                      p: 4,
                      pt: 2,
                      pb: 3,
                    }}
                  >
                    {image.title}{" "}
                    <Box
                      border={1}
                      ml={1}
                      px={1}
                      py={0.5}
                      borderRadius={2.5}
                      display="inline"
                    >
                      {image.subject}
                    </Box>
                  </Typography>
                </Image>
              </ImageButton>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
