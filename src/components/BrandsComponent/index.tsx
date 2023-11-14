import React from "react";
import { Box, Typography, Grid, Button, Stack } from "@mui/material";

interface BrandsProps {
  brandName: string;
  boxColor: string;
}

const Brands: BrandsProps[] = [
  {
    brandName: "Math",
    boxColor: "primary.main",
  },
  {
    brandName: "English",
    boxColor: "#5844AC",
  },
  {
    brandName: "Art",
    boxColor: "#2D62AF",
  },
  {
    brandName: "Science",
    boxColor: "#137E67",
  },
  {
    brandName: "Music",
    boxColor: "#498BCD",
  },
  {
    brandName: "Music",
    boxColor: "#8BDBCA",
  },
];

export default function BrandsComponent() {
  return (
    <Box>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4, lg: 6 }}
      >
        {Brands.map(({ brandName, boxColor }, key) => (
          <Box key={key}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              px={2}
            >
              <Box ml={-4}>
                <img className="w-36" src="/images/logo.png" alt="Home Page" />
              </Box>
              <Typography
                variant="body1"
                color="primary.main"
                fontWeight="bold"
                fontSize={25}
                pt={2}
                ml={-3}
              >
                <Box color="primary.darkBlue" display="inline">
                  E
                </Box>
                Tuition
              </Typography>
            </Box>
            <Box textAlign="center" py={2} sx={{ backgroundColor: boxColor }}>
              <Typography
                variant="body1"
                color="primary.contrastText"
                fontWeight="bold"
              >
                {brandName}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
