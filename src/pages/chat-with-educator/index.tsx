import React from "react";
import { Box, Grid } from "@mui/material";
import ChatConservationsComponent from "@/components/ChatConservationsComponent";
import ChatWindowComponent from "@/components/ChatWindowComponent";

export default function ChatWithEducator() {
  return (
    <Box>
      <Box py={5} px={10} sx={{ backgroundColor: "#B4ABABA8" }}>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <ChatConservationsComponent />
          </Grid>
          <Grid item xs={7}>
            <ChatWindowComponent />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
