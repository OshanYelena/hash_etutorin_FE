import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import SaveAltRoundedIcon from "@mui/icons-material/SaveAltRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

interface ResourceCardProps {
  id: number;
  title: string;
  date: string;
}

export default function ResourceCard({ id, title, date }: ResourceCardProps) {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        boxShadow: "2px 2px 9px 2px #79C5EF61",
      }}
      py={5}
      px={5}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: 600, fontSize: "1.3rem" }}
            color="#000000BF"
          >
            {id}. {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "0.9rem", pl: 5 }}
            color="#808080"
          >
            {date}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={2}>
            <Grid item xs={11}>
              <Box
                sx={{
                  borderRadius: 2,
                  backgroundColor: "primary.main",
                }}
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
                  className="w-full py-2"
                >
                  <SaveAltRoundedIcon
                    sx={{ mr: 1, color: "primary.contrastText" }}
                  />
                  <Typography
                    variant="body1"
                    color="primary.contrastText"
                    sx={{ fontWeight: 500, fontSize: "1.1rem" }}
                  >
                    Download
                  </Typography>
                </Button>
              </Box>
            </Grid>
            <Grid item xs={1}>
              <InfoOutlinedIcon sx={{ color: "primary.main", mt: 1 }} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
