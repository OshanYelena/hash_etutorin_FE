import React from "react";
import {
  Avatar,
  Box,
  Grid,
  Rating,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import AvTimerRoundedIcon from "@mui/icons-material/AvTimerRounded";
import FAQSection from "@/components/FAQSection";
import SelectClassComponent from "@/components/SelectClassComponent";
import MainDetailsReviewSection from "@/components/MainDetailsReviewSection";
import RecommandedCourseSection from "@/components/RecommandedCourseSection";
import { useRouter } from "next/navigation";
import { NoSsr } from "@mui/base/NoSsr";

const TeachingSubjects = [
  "Maths",
  "O/L Maths",
  "A/L Maths",
  "Maths",
  "O/L Maths",
];

export default function SubjectPage() {
  const router = useRouter();

  const handleOpen = () => {
    router.push("/educator-details");
  };

  return (
    <Box>
      <NoSsr>
        <Box py={5} px={10}>
          <Typography
            variant="h5"
            gutterBottom
            color="primary.main"
            sx={{ fontWeight: 700, fontSize: "1.5rem" }}
          >
            <Box color="#2E72B399" display="inline">
              Subject Code:{" "}
            </Box>
            0123
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={6}>
              <Typography
                variant="h5"
                gutterBottom
                color="primary.darkBlue"
                pb={2}
                sx={{ fontWeight: 800, fontSize: "1.8rem" }}
              >
                Biology
                <Box
                  sx={{
                    background:
                      "-webkit-linear-gradient(45deg, #280C9B, #FF00E6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontSize: "1.5rem",
                  }}
                  display="inline"
                  ml={1}
                >
                  | Grade 12
                </Box>
              </Typography>
              <Box>
                <Grid container columnSpacing={2} sx={{ alignItems: "center" }}>
                  <Grid item xs={2}>
                    <Avatar
                      role="button"
                      onClick={handleOpen}
                      alt="Display picture"
                      src="/images/educator4.avif"
                      sx={{
                        width: 70,
                        height: 70,
                      }}
                    />
                  </Grid>
                  <Grid item xs={10}>
                    <Box>
                      <Box display="flex" alignItems="center">
                        <Typography
                          variant="body1"
                          color="secondary.dark"
                          fontSize={16}
                          gutterBottom
                          fontWeight={600}
                        >
                          Anastasi Shelly
                        </Typography>
                        <Box
                          sx={{
                            background:
                              "linear-gradient(to right, #2E72B3, #280C9B)",
                            textAlign: "center",
                            px: 4,
                            py: 0.5,
                            borderRadius: 2,
                            display: "inline",
                            ml: 2,
                          }}
                        >
                          <Typography
                            variant="body1"
                            color="primary.contrastText"
                            fontSize={14}
                            fontWeight={600}
                          >
                            Verified
                          </Typography>
                        </Box>
                        <Divider
                          orientation="vertical"
                          flexItem
                          sx={{
                            color: "#ADADAD80",
                            border: "2px solid",
                            ml: 2,
                          }}
                        />
                        <Box ml={1}>
                          <Typography
                            variant="body1"
                            color="primary.main"
                            fontSize={16}
                          >
                            <AvTimerRoundedIcon
                              fontSize="inherit"
                              sx={{
                                color: "primary.main",
                                width: 25,
                                height: 25,
                                mb: 0.5,
                              }}
                            />{" "}
                            <Box display="inline">240 Teaching Hours</Box>
                          </Typography>
                        </Box>
                      </Box>

                      <Typography
                        variant="body1"
                        gutterBottom
                        color="secondary.dark"
                        fontSize={13}
                      >
                        <Rating
                          name="rating"
                          defaultValue={4}
                          readOnly
                          icon={
                            <StarIcon
                              fontSize="inherit"
                              sx={{
                                color: "#FFC978",
                                width: 18,
                                height: 18,
                              }}
                            />
                          }
                          emptyIcon={
                            <StarIcon
                              fontSize="inherit"
                              sx={{
                                color: "secondary.semiDark",
                                width: 18,
                                height: 18,
                              }}
                            />
                          }
                        />
                        <Box display="inline">(210)</Box>
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ py: 3 }}>
                <video autoPlay loop>
                  <source src="/videos/samplevideo.mp4" />
                </video>
              </Box>

              <Typography
                variant="body1"
                color="primary.dark"
                py={3}
                fontSize={18}
                align="justify"
              >
                Lorem ipsum dolor sit amet consectetur. Augue lacus aenean
                sollic itudin ultrices iaculis non. Aliquam netus morbi enim
                eget egestas eleifend nisi. In nullam lectus nibh cras rhoncus
                quis.
              </Typography>
              <Box justifyContent="center" display="flex">
                <Box>
                  <Avatar
                    alt="Display picture"
                    src="/images/educator4.avif"
                    sx={{
                      width: 120,
                      height: 120,
                    }}
                  />
                  <Typography
                    variant="body1"
                    color="secondary.dark"
                    fontSize={16}
                    gutterBottom
                    pt={1}
                    fontWeight={600}
                  >
                    Anastasi Shelly
                  </Typography>
                  <Typography
                    variant="body1"
                    gutterBottom
                    color="secondary.dark"
                    fontSize={13}
                  >
                    <Rating
                      name="rating"
                      defaultValue={4}
                      readOnly
                      icon={
                        <StarIcon
                          fontSize="inherit"
                          sx={{
                            color: "#FFC978",
                            width: 18,
                            height: 18,
                          }}
                        />
                      }
                      emptyIcon={
                        <StarIcon
                          fontSize="inherit"
                          sx={{
                            color: "secondary.semiDark",
                            width: 18,
                            height: 18,
                          }}
                        />
                      }
                    />
                    <Box display="inline">(210)</Box>
                  </Typography>
                  <Box
                    sx={{
                      borderRadius: 2,
                      backgroundColor: "#2E72B333",
                      width: 120,
                    }}
                    mt={2}
                  >
                    <Button
                      color="info"
                      size="medium"
                      sx={{
                        textTransform: "none",
                        lineHeight: 1.5,
                        borderRadius: 2,
                        backgroundColor: "#2E72B333",
                        width: 120,
                      }}
                      className=" py-2"
                    >
                      <Typography
                        variant="body1"
                        color="primary.main"
                        sx={{ fontSize: "0.9rem" }}
                      >
                        Contact Me
                      </Typography>
                    </Button>
                  </Box>
                </Box>
              </Box>
              <Typography
                variant="body1"
                color="primary.dark"
                py={3}
                fontSize={18}
                align="justify"
              >
                Lorem ipsum dolor sit amet consectetur. Augue lacus aenean
                sollicitudin ultrices iaculis non. Aliquam netus morbi enim eget
                egestas eleifend nisi. In nullam lectus nibh cras rhoncus
                quis.Lorem ipsum dolor sit amet consectetur. Augue lacus aenean
                sollicitudin ultrices iaculis non. Aliquam netus morbi enim eget
                egestas eleifend nisi. In nullam lectus nibh cras rhoncus quis.
                Lorem ipsum dolor sit amet consectetur.
              </Typography>
              <Box py={2}>
                <Grid
                  container
                  spacing={{ xs: 2, md: 3 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  {TeachingSubjects.map((item, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                      <Box
                        sx={{
                          border: 2,
                          borderColor: "primary.main",
                          borderRadius: 2,
                          textAlign: "center",
                          py: 1,
                        }}
                      >
                        <Typography
                          variant="body1"
                          color="#808080"
                          fontSize={15}
                        >
                          {item}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>

              {/* FAQ Section */}
              <FAQSection />
            </Grid>
            <Grid item xs={6}>
              <SelectClassComponent />
              <MainDetailsReviewSection />
            </Grid>
          </Grid>
        </Box>
        <Box px={5}>
          <RecommandedCourseSection />
        </Box>
      </NoSsr>
    </Box>
  );
}
