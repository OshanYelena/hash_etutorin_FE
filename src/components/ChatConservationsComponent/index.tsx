import React from "react";
import { Box, Typography, Divider, IconButton } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import MessageViewComponent from "@/components/MessageViewComponent";

interface MessageDetailsProps {
  avatarImg: string;
  name: string;
  message: string;
  time: string;
  noOfUnreadMessages: number;
}

const MessageDetails: MessageDetailsProps[] = [
  {
    avatarImg: "/images/student2.png",
    name: "Bill Gates",
    message: "Okay, brother, let's see this again",
    time: "Today, 9.52am",
    noOfUnreadMessages: 0,
  },
  {
    avatarImg: "/images/teacher1.png",
    name: "Bill Gates",
    message: "You have to report it to the police",
    time: "Today, 9.52am",
    noOfUnreadMessages: 1,
  },
  {
    avatarImg: "/images/student2.png",
    name: "Bill Gates",
    message: "Okay, brother, let's see this again",
    time: "Today, 9.52am",
    noOfUnreadMessages: 10,
  },
  {
    avatarImg: "/images/student2.png",
    name: "Bill Gates",
    message: "Okay, brother, let's see this again",
    time: "Today, 9.52am",
    noOfUnreadMessages: 5,
  },
  {
    avatarImg: "/images/student2.png",
    name: "Bill Gates",
    message: "Okay, brother, let's see this again",
    time: "Today, 9.52am",
    noOfUnreadMessages: 0,
  },
];

export default function ChatConservationsComponent() {
  const [clickedSearch, setClickedSearch] = React.useState(false);

  const handleSearchClick = () => {
    setClickedSearch(true);
  };
  const handleSearchClose = () => {
    setClickedSearch(false);
  };

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
      {clickedSearch ? (
        <Box
          sx={{
            backgroundColor: "#EBE9E9",
            borderRadius: 5,
          }}
          pl={3}
          width="100%"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            pr={5}
            alignItems="center"
          >
            <Typography
              variant="body1"
              gutterBottom
              color="secondary.dark"
              fontSize={15}
            >
              Search
            </Typography>
            <IconButton onClick={handleSearchClose}>
              <SearchRoundedIcon
                sx={{
                  color: "secondary.dark",
                  width: 30,
                  height: 30,
                }}
              />
            </IconButton>
          </Box>
        </Box>
      ) : (
        <Box display="flex" justifyContent="space-between" pb={1} pr={5} pl={2}>
          <Typography
            variant="body1"
            gutterBottom
            color="secondary.dark"
            fontSize={20}
            fontWeight={700}
          >
            All conservations
          </Typography>
          <IconButton onClick={handleSearchClick}>
            <SearchRoundedIcon
              sx={{
                color: "secondary.dark",
                width: 30,
                height: 30,
              }}
            />
          </IconButton>
        </Box>
      )}

      <Box>
        {MessageDetails.map(
          ({ avatarImg, name, message, time, noOfUnreadMessages }, index) => (
            <Box key={index} py={1}>
              <MessageViewComponent
                avatarImg={avatarImg}
                name={name}
                message={message}
                time={time}
                noOfUnreadMessages={noOfUnreadMessages}
              />
              <Divider sx={{ pt: 1 }} />
            </Box>
          )
        )}
      </Box>
    </Box>
  );
}
