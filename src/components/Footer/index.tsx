/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  Typography,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Link from "next/link";

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        background: "linear-gradient(to bottom, #2E72B3, #280C9B)",
      }}
      pt={5}
      pb={3}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={5} mt={6}>
            <Typography
              color="primary.contrastText"
              variant="h3"
              fontSize={20}
              fontWeight="bold"
            >
              Contact Us
            </Typography>
            <Box
              display="flex"
              flexDirection="row"
              pt={3}
              color="primary.contrastText"
            >
              <WhatsAppIcon />
              <Typography
                color="primary.contrastText"
                variant="caption"
                fontWeight={100}
                pl={1}
              >
                <Box fontSize={15}> Whats App </Box> +1 202-918-2132
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              pt={2}
              color="primary.contrastText"
            >
              <PhoneInTalkIcon />
              <Typography
                color="primary.contrastText"
                variant="caption"
                fontWeight={100}
                pl={1}
              >
                <Box fontSize={15}> Call Us </Box> +1 202-918-2132
              </Typography>
            </Box>
            <Typography
              color="primary.contrastText"
              variant="h3"
              fontSize={20}
              fontWeight="bold"
              pt={4}
            >
              Download App
            </Typography>
            <Box pt={3} display="flex">
              <Link href="#">
                <img
                  src="/images/appStore.png"
                  alt="App Store"
                  className="w-40 mr-3"
                />
              </Link>
              {/* <Link href="#"> */}
              <img
                src="/images/playStore.png"
                alt="Play Store"
                className="w-40"
              />
              {/* </Link> */}
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Typography
              color="primary.contrastText"
              variant="h3"
              fontSize={20}
              gutterBottom
            >
              Most Popular Categories
            </Typography>
            <Divider
              className="w-56 h-0.5"
              sx={{ backgroundColor: "primary.contrastText" }}
            />
            <List sx={{ py: 2 }}>
              <ul>
                <Box
                  display="flex"
                  alignItems="center"
                  color="primary.contrastText"
                  pb={2}
                >
                  <FiberManualRecordIcon sx={{ mr: 1, fontSize: 12 }} />
                  <Typography
                    color="primary.contrastText"
                    variant="body1"
                    fontSize={14}
                    fontWeight={300}
                  >
                    Staples
                  </Typography>
                </Box>
              </ul>
              <ul>
                <Box
                  display="flex"
                  alignItems="center"
                  color="primary.contrastText"
                  pb={2}
                >
                  <FiberManualRecordIcon sx={{ mr: 1, fontSize: 12 }} />
                  <Typography
                    color="primary.contrastText"
                    variant="body1"
                    fontSize={14}
                    fontWeight={300}
                  >
                    Beverages
                  </Typography>
                </Box>
              </ul>
              <ul>
                <Box
                  display="flex"
                  alignItems="center"
                  color="primary.contrastText"
                  pb={2}
                >
                  <FiberManualRecordIcon sx={{ mr: 1, fontSize: 12 }} />
                  <Typography
                    color="primary.contrastText"
                    variant="body1"
                    fontSize={14}
                    fontWeight={300}
                  >
                    Personal Care
                  </Typography>
                </Box>
              </ul>
              <ul>
                <Box
                  display="flex"
                  alignItems="center"
                  color="primary.contrastText"
                  pb={2}
                >
                  <FiberManualRecordIcon sx={{ mr: 1, fontSize: 12 }} />
                  <Typography
                    color="primary.contrastText"
                    variant="body1"
                    fontSize={14}
                    fontWeight={300}
                  >
                    Home Care
                  </Typography>
                </Box>
              </ul>
              <ul>
                <Box
                  display="flex"
                  alignItems="center"
                  color="primary.contrastText"
                  pb={2}
                >
                  <FiberManualRecordIcon sx={{ mr: 1, fontSize: 12 }} />
                  <Typography
                    color="primary.contrastText"
                    variant="body1"
                    fontSize={14}
                    fontWeight={300}
                  >
                    Baby Care
                  </Typography>
                </Box>
              </ul>
              <ul>
                <Box
                  display="flex"
                  alignItems="center"
                  color="primary.contrastText"
                  pb={2}
                >
                  <FiberManualRecordIcon sx={{ mr: 1, fontSize: 12 }} />
                  <Typography
                    color="primary.contrastText"
                    variant="body1"
                    fontSize={14}
                    fontWeight={300}
                  >
                    Vegetables & Fruits
                  </Typography>
                </Box>
              </ul>
              <ul>
                <Box
                  display="flex"
                  alignItems="center"
                  color="primary.contrastText"
                  pb={2}
                >
                  <FiberManualRecordIcon sx={{ mr: 1, fontSize: 12 }} />
                  <Typography
                    color="primary.contrastText"
                    variant="body1"
                    fontSize={14}
                    fontWeight={300}
                  >
                    Snacks & Foods
                  </Typography>
                </Box>
              </ul>
              <ul>
                <Box
                  display="flex"
                  alignItems="center"
                  color="primary.contrastText"
                  pb={2}
                >
                  <FiberManualRecordIcon sx={{ mr: 1, fontSize: 12 }} />
                  <Typography
                    color="primary.contrastText"
                    variant="body1"
                    fontSize={14}
                    fontWeight={300}
                  >
                    Dairy & Bakery
                  </Typography>
                </Box>
              </ul>
            </List>
          </Grid>
          <Grid item xs={3}>
            <Typography
              color="primary.contrastText"
              variant="h3"
              fontSize={20}
              gutterBottom
            >
              Customer Services
            </Typography>
            <Divider
              className="w-44 h-0.5"
              sx={{ backgroundColor: "primary.contrastText" }}
            />
            <List sx={{ py: 2 }}>
              <ul>
                <Box
                  display="flex"
                  alignItems="center"
                  color="primary.contrastText"
                  pb={2}
                >
                  <FiberManualRecordIcon sx={{ mr: 1, fontSize: 12 }} />
                  <Typography
                    color="primary.contrastText"
                    variant="body1"
                    fontSize={14}
                    fontWeight={300}
                  >
                    About Us
                  </Typography>
                </Box>
              </ul>
              <ul>
                <Box
                  display="flex"
                  alignItems="center"
                  color="primary.contrastText"
                  pb={2}
                >
                  <FiberManualRecordIcon sx={{ mr: 1, fontSize: 12 }} />
                  <Typography
                    color="primary.contrastText"
                    variant="body1"
                    fontSize={14}
                    fontWeight={300}
                  >
                    Terms & Conditions
                  </Typography>
                </Box>
              </ul>
              <ul>
                <Box
                  display="flex"
                  alignItems="center"
                  color="primary.contrastText"
                  pb={2}
                >
                  <FiberManualRecordIcon sx={{ mr: 1, fontSize: 12 }} />
                  <Typography
                    color="primary.contrastText"
                    variant="body1"
                    fontSize={14}
                    fontWeight={300}
                  >
                    FAQ
                  </Typography>
                </Box>
              </ul>
              <ul>
                <Box
                  display="flex"
                  alignItems="center"
                  color="primary.contrastText"
                  pb={2}
                >
                  <FiberManualRecordIcon sx={{ mr: 1, fontSize: 12 }} />
                  <Typography
                    color="primary.contrastText"
                    variant="body1"
                    fontSize={14}
                    fontWeight={300}
                  >
                    Privacy Policy
                  </Typography>
                </Box>
              </ul>
              <ul>
                <Box
                  display="flex"
                  alignItems="center"
                  color="primary.contrastText"
                  pb={2}
                >
                  <FiberManualRecordIcon sx={{ mr: 1, fontSize: 12 }} />
                  <Typography
                    color="primary.contrastText"
                    variant="body1"
                    fontSize={14}
                    fontWeight={300}
                  >
                    E-waste Policy
                  </Typography>
                </Box>
              </ul>
              <ul>
                <Box
                  display="flex"
                  alignItems="center"
                  color="primary.contrastText"
                  pb={2}
                >
                  <FiberManualRecordIcon sx={{ mr: 1, fontSize: 12 }} />
                  <Typography
                    color="primary.contrastText"
                    variant="body1"
                    fontSize={14}
                    fontWeight={300}
                  >
                    Cancellation & Return Policy
                  </Typography>
                </Box>
              </ul>
            </List>
          </Grid>
        </Grid>
        <Box pt={5} textAlign="center">
          <Divider sx={{ backgroundColor: "#8BDBCA", mb: 2 }} />
          <Typography
            color="primary.contrastText"
            variant="subtitle1"
            fontSize={15}
          >
            {`© ${new Date().getFullYear()} All rights reserved. Reliance Retail Ltd.`}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
