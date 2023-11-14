import React from "react";
import {
  Box,
  Typography,
  Divider,
  Avatar,
  ListItem,
  List,
  Grid,
  ListItemText,
} from "@mui/material";
import AttachFileRoundedIcon from "@mui/icons-material/AttachFileRounded";

export default function ChatWindowComponent() {
  return (
    <Box
      height={500}
      sx={{
        backgroundColor: "#fff",
        borderRadius: 5,
        boxShadow: "2px 2px 5px 2px #79C5EF61",
      }}
      px={3}
      py={3}
    >
      <Box display="flex">
        <Avatar
          alt="Avatar Image"
          src="/images/teacher1.png"
          sx={{ width: 70, height: 70, mr: 2 }}
        />
        <Box pt={1}>
          <Typography
            variant="body1"
            color="secondary.dark"
            fontSize={20}
            fontWeight={700}
          >
            Anastasi Shelly
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            color="secondary.dark"
            fontSize={16}
          >
            Online - Last seen, 2.02 pm
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ pt: 1 }} />
      <Box>
        <List sx={{ overflowY: "auto" }}>
          <ListItem key="1">
            <Grid container>
              <Grid
                item
                xs={12}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Box
                  sx={{
                    backgroundColor: "primary.main",
                    py: 1,
                    px: 2,
                    borderRadius: 10,
                    textAlign: "center",
                  }}
                  width={300}
                >
                  <ListItemText
                    sx={{ color: "primary.contrastText" }}
                    primary="Hey There!"
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <ListItemText
                  sx={{ textAlign: "right", mr: 2 }}
                  secondary="09:30"
                ></ListItemText>
              </Grid>
            </Grid>
          </ListItem>
          <ListItem key="2">
            <Grid container>
              <Grid item xs={12}>
                <Box
                  sx={{
                    backgroundColor: "#E7E7E7",
                    py: 1,
                    px: 2,
                    borderRadius: 10,
                    textAlign: "center",
                  }}
                  width={300}
                >
                  <ListItemText primary="Hello!" />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <ListItemText
                  sx={{ textAlign: "left", ml: 2 }}
                  secondary="09:31"
                ></ListItemText>
              </Grid>
            </Grid>
          </ListItem>
          <ListItem key="3">
            <Grid container>
              <Grid
                item
                xs={12}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Box
                  sx={{
                    backgroundColor: "primary.main",
                    py: 1,
                    px: 2,
                    borderRadius: 10,
                    textAlign: "center",
                  }}
                  width={300}
                >
                  <ListItemText
                    sx={{ color: "primary.contrastText" }}
                    primary="Hello!"
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <ListItemText
                  sx={{ textAlign: "right", mr: 2 }}
                  secondary="10:30"
                ></ListItemText>
              </Grid>
            </Grid>
          </ListItem>
        </List>
        <Divider />
        <Grid container style={{ padding: "20px" }}>
          <Box
            sx={{ backgroundColor: "#EFF6FCDE", borderRadius: 5 }}
            display="flex"
            px={2}
            py={2}
            width="100%"
            alignItems="center"
          >
            <AttachFileRoundedIcon
              sx={{
                color: "#333333",
                width: 25,
                height: 25,
                transform: "rotate(225deg)",
                mr: 1,
              }}
            />
            <Typography variant="body1" color="secondary.dark" fontSize={15}>
              Type your message here...
            </Typography>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}
