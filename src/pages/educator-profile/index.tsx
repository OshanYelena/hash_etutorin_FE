import React from "react";
import { Box, Typography, Tabs, Tab } from "@mui/material";
import ReportIcon from "@mui/icons-material/Report";
import BasicInfoComponent from "@/components/BasicInfoComponent";
import PasswordInfoComponent from "@/components/PasswordInfoComponent";
import AdditionalInfoComponent from "@/components/AdditionalInfoComponent";
import PaymentInfoComponent from "@/components/PaymentInfoComponent";
import { NoSsr } from "@mui/base/NoSsr";

const imageURL = "images/educator-profile-bg-img.png";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function EducatorProfile() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <NoSsr>
        <div
          style={{
            backgroundImage: `url(${imageURL})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "650px",
            width: "100%",
            textAlign: "center",
            paddingTop: "2%",
          }}
        >
          <Box display="flex" justifyContent="center" pb={5}>
            <Box sx={{ backgroundColor: "#FFB546" }} pl={1} pr={4} width="40%">
              <Box sx={{ backgroundColor: "primary.contrastText" }} py={1}>
                <Typography variant="body1" color="primary.dark" fontSize={18}>
                  <ReportIcon
                    fontSize="inherit"
                    sx={{
                      color: "#FFB546",
                      width: 35,
                      height: 35,
                      mb: 0.5,
                      mr: 3,
                    }}
                  />{" "}
                  <Box display="inline" fontWeight={600}>
                    Warning! &nbsp;
                  </Box>
                  Please <u>Complete </u> the registration process
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box pt={5}>
            <Typography
              variant="h5"
              gutterBottom
              color="primary.contrastText"
              sx={{ fontWeight: 800, fontSize: "1.9rem" }}
            >
              My Profile
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              color="primary.contrastText"
              pb={2}
            >
              Add information about yourself
            </Typography>
          </Box>

          <Box sx={{ width: "100%" }} pt={3}>
            <Box justifyContent="center" display="flex">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="Sign up tabs"
                TabIndicatorProps={{
                  style: { display: "none" },
                }}
                sx={{
                  backgroundColor: "#EDEDED",
                  borderRadius: 10,
                  "& .Mui-selected": {
                    color: "#fff",
                    textColor: "#fff",
                  },
                }}
              >
                <Tab
                  label="Basic Information"
                  {...a11yProps(0)}
                  className={value === 0 ? "bg-[#2E72B3]" : ""}
                  sx={{
                    color: value === 0 ? "primary.contrastText" : "#3E3E3E",
                    textTransform: "none",
                    borderRadius: 10,
                    px: 10,
                  }}
                />
                <Tab
                  label="Change password"
                  {...a11yProps(1)}
                  className={value === 1 ? "bg-[#2E72B3]" : ""}
                  sx={{
                    color: value === 1 ? "primary.contrastText" : "#3E3E3E",
                    textTransform: "none",
                    borderRadius: 10,
                    px: 10,
                  }}
                />
                <Tab
                  label="Payment Information"
                  {...a11yProps(2)}
                  className={value === 2 ? "bg-[#2E72B3]" : ""}
                  sx={{
                    color: value === 2 ? "primary.contrastText" : "#3E3E3E",
                    textTransform: "none",
                    borderRadius: 10,
                    px: 10,
                  }}
                />
                <Tab
                  label="Additional Information"
                  {...a11yProps(3)}
                  className={value === 3 ? "bg-[#2E72B3]" : ""}
                  sx={{
                    color: value === 3 ? "primary.contrastText" : "#3E3E3E",
                    textTransform: "none",
                    borderRadius: 10,
                    px: 10,
                  }}
                />
              </Tabs>
            </Box>
          </Box>
        </div>{" "}
        <Box px={10} py={10} sx={{ backgroundColor: "#e7e7e7" }}>
          <Box id={`simple-tabpanel-0`} aria-labelledby={`simple-tab-0`}>
            <BasicInfoComponent educator />
          </Box>{" "}
          <Box id={`simple-tabpanel-1`} aria-labelledby={`simple-tab-1`}>
            <PasswordInfoComponent educator />
          </Box>
          <Box>
            <PaymentInfoComponent />
          </Box>
          <Box>
            <AdditionalInfoComponent educator />
          </Box>
        </Box>
      </NoSsr>
    </Box>
  );
}
