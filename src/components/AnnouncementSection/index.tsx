import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import AddAnnouncementComponent from "../AddAnnouncementComponent";
import AnnouncementCard from "../AnnouncementCard";

export default function AnnouncementSection() {
  const [addAnnouncement, setAddAnnouncement] = useState(false);

  const handleAddAnnouncement = () => {
    setAddAnnouncement(!addAnnouncement);
  };

  return (
    <Box py={5} sx={{ backgroundColor: "#F1F1F1F2" }} px={10}>
      {addAnnouncement ? (
        <AddAnnouncementComponent
          handleAddAnnouncement={handleAddAnnouncement}
        />
      ) : (
        <Box>
          <Box display="flex" alignItems="center" pt={1} pb={5} width="30%">
            <Box
              sx={{
                borderRadius: 3,
                background: "linear-gradient(to right, #760C9BB8, #5844ACE5)",
              }}
              className="w-full"
            >
              <Button
                size="medium"
                variant="contained"
                sx={{
                  textTransform: "none",
                  lineHeight: 1.5,
                  borderRadius: 3,
                  background: "linear-gradient(to right, #760C9BB8, #5844ACE5)",
                }}
                className=" w-full py-2"
                onClick={handleAddAnnouncement}
              >
                <Typography
                  variant="body1"
                  color="primary.contrastText"
                  sx={{ fontWeight: 500 }}
                >
                  Add New Announcement
                </Typography>
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              overflow: "hidden",
              overflowY: "scroll",
              "::-webkit-scrollbar": {
                width: "0.6rem",
              },

              "::-webkit-scrollbar-thumb": {
                backgroundColor: "#ADADADB2",

                borderRadius: 5,
              },
            }}
            height={700}
          >
            <Box mt={1} mb={5} mx={2}>
              <AnnouncementCard />
            </Box>
            <Box my={5} mx={2}>
              <AnnouncementCard />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export function StudentAnnouncementSection() {
  return (
    <Box pt={2}>
      <Typography
        variant="h5"
        gutterBottom
        color="#760C9B"
        pb={2}
        sx={{ fontWeight: 600, fontSize: "1.8rem" }}
      >
        Specials Announcements
      </Typography>
      <Box py={5} sx={{ backgroundColor: "#F1F1F1F2" }}>
        <Box
          sx={{
            overflow: "hidden",
            overflowY: "scroll",
            "::-webkit-scrollbar": {
              width: "0.6rem",
            },

            "::-webkit-scrollbar-thumb": {
              backgroundColor: "#ADADADB2",

              borderRadius: 5,
            },
          }}
          height={700}
        >
          <Box mt={1} mb={5} mx={2}>
            <AnnouncementCard />
          </Box>
          <Box my={5} mx={2}>
            <AnnouncementCard />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
