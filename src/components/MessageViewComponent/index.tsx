import React from "react";
import { Box, Typography, Grid, Avatar } from "@mui/material";
import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";

interface MessageViewComponentProps {
  avatarImg: string;
  name: string;
  message: string;
  time: string;
  noOfUnreadMessages: number;
}

export default function MessageViewComponent({
  avatarImg,
  name,
  message,
  time,
  noOfUnreadMessages,
}: MessageViewComponentProps) {
  return (
    <Box>
      <Grid container>
        <Grid item xs={1} sx={{ mr: 3 }}>
          <Avatar
            alt="Avatar Image"
            src={avatarImg}
            sx={{ width: 50, height: 50 }}
          />
        </Grid>
        <Grid item xs={7}>
          <Typography
            variant="body1"
            color="primary.dark"
            pt={0.5}
            fontSize={16}
            fontWeight={700}
          >
            {name}
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            color="secondary.dark"
            fontSize={15}
          >
            {message.length <= 24 ? message : message.substring(0, 24) + "..."}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Box textAlign="right">
            <Typography
              variant="body1"
              color="#7C7C7C"
              fontSize={13}
              pt={0.5}
              fontWeight={300}
              gutterBottom
            >
              {time}
            </Typography>
            {noOfUnreadMessages === 0 ? (
              <DoneAllRoundedIcon
                fontSize="inherit"
                sx={{
                  color: "#00CB14",
                  width: 20,
                  height: 20,
                  mr: 2,
                }}
              />
            ) : (
              <Box display="flex" justifyContent="flex-end" mr={2}>
                <Box
                  sx={{
                    backgroundColor: "primary.main",
                    width: 20,
                    height: 20,
                    textAlign: "center",
                    borderRadius: 10,
                  }}
                >
                  <Typography
                    variant="body1"
                    color="primary.contrastText"
                    fontSize={13}
                    fontWeight={700}
                  >
                    {noOfUnreadMessages}
                  </Typography>
                </Box>
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
