/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Avatar, Box, Grid, Typography, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import AvTimerRoundedIcon from "@mui/icons-material/AvTimerRounded";
import CourseCard from "@/components/CourseCard";
import { NoSsr } from "@mui/base/NoSsr";

const TeachingSubjects = [
  "Maths",
  "O/L Maths",
  "A/L Maths",
  "Maths",
  "O/L Maths",
];

const PopularCorseDetails = [
  {
    courseImg: "/images/science1.jfif",
    avatarImg: "/images/educator4.avif",
    courseName: "Biology",
    grade: "Grade 12",
    educatorName: "Manga Deboz",
    rating: 4,
    noOfRatings: 20,
    description:
      "Molecular Biology, Recombnant DNA Technology and Environmental Biology",
    tag: "one-time",
  },
  {
    courseImg: "/images/science2.jpg",
    avatarImg: "/images/educator4.avif",
    courseName: "Biology",
    grade: "Grade 12",
    educatorName: "Manga Deboz",
    rating: 4,
    noOfRatings: 20,
    description:
      "Molecular Biology, Recombnant DNA Technology and Environmental Biology",
    tag: "weekly",
  },
  {
    courseImg: "/images/science3.jfif",
    avatarImg: "/images/educator3.jpg",
    courseName: "Biology",
    grade: "Grade 12",
    educatorName: "Manga Deboz",
    rating: 4,
    noOfRatings: 20,
    description:
      "Molecular Biology, Recombnant DNA Technology and Environmental Biology",
    tag: "one-time",
  },
  {
    courseImg: "/images/science1.jfif",
    avatarImg: "/images/educator4.avif",
    courseName: "Biology",
    grade: "Grade 12",
    educatorName: "Manga Deboz",
    rating: 4,
    noOfRatings: 20,
    description:
      "Molecular Biology, Recombnant DNA Technology and Environmental Biology",
    tag: "weekly",
  },
  {
    courseImg: "/images/science2.jpg",
    avatarImg: "/images/educator4.avif",
    courseName: "Biology",
    grade: "Grade 12",
    educatorName: "Manga Deboz",
    rating: 4,
    noOfRatings: 20,
    description:
      "Molecular Biology, Recombnant DNA Technology and Environmental Biology",
    tag: "one-time",
  },
];

export default function EducatorPage() {
  return (
    <Box>
      <NoSsr>
        <Box py={10} pl={10} pr={5}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Box
                display="flex"
                textAlign="center"
                justifyContent="center"
                pb={2}
              >
                <Avatar
                  alt="Avatar Image"
                  src="/images/educator4.avif"
                  sx={{ width: 100, height: 100 }}
                />
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                textAlign="center"
                justifyContent="center"
              >
                <Typography
                  variant="body1"
                  color="secondary.dark"
                  fontSize={20}
                  fontWeight={600}
                >
                  Anastasi Shelly
                </Typography>
                <Typography
                  variant="body1"
                  color="secondary.dark"
                  fontSize={15}
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
                        }}
                      />
                    }
                    emptyIcon={
                      <StarIcon
                        fontSize="inherit"
                        sx={{
                          color: "secondary.semiDark",
                        }}
                      />
                    }
                    size="small"
                  />{" "}
                  <Box display="inline">(210)</Box>
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  color="secondary.dark"
                  fontSize={18}
                >
                  <AvTimerRoundedIcon
                    fontSize="inherit"
                    sx={{
                      color: "secondary.dark",
                      width: 25,
                      height: 25,
                      mb: 0.5,
                    }}
                  />{" "}
                  <Box display="inline">240 Teaching Hours</Box>
                </Typography>
              </Box>
              <Box py={2}>
                <Typography
                  variant="body1"
                  gutterBottom
                  color="primar.dark"
                  fontSize={18}
                  align="justify"
                  sx={{ lineHeight: 1.8 }}
                >
                  Lorem ipsum dolor sit amet consectetur. Augue lacus aenean
                  sollicitudin ultrices iaculis non. Aliquam netus morbi enim
                  eget egestas eleifend nisi. In nullam lectu.nibh cras rhoncus
                  quis.Lorem ipsum dolor sit amet consectetur. Augue lacus
                  aenean sollicitudin ultrices iaculis non. Aliquam netus morbi
                  enim eget egestas eleifend nisi. In nullam lectus nibh cras
                  rhoncus quis.
                </Typography>
              </Box>
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
            </Grid>
            <Grid item xs={9}>
              <Box px={5}>
                <Typography
                  variant="h5"
                  gutterBottom
                  color="primary.main"
                  pb={2}
                  sx={{ fontWeight: 900, fontSize: "1.8rem" }}
                >
                  <Box color="#2E72B399" display="inline">
                    Anastasi Shelly's{" "}
                  </Box>
                  Classes
                </Typography>
                <Box>
                  <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                  >
                    {PopularCorseDetails.map((item, index) => (
                      <Grid item xs={2} sm={4} md={4} key={index}>
                        <CourseCard
                          key={index}
                          courseImg={item.courseImg}
                          avatarImg={item.avatarImg}
                          courseName={item.courseName}
                          grade={item.grade}
                          educatorName={item.educatorName}
                          rating={item.rating}
                          noOfRatings={item.noOfRatings}
                          description={item.description}
                          tag={item.tag}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </NoSsr>
    </Box>
  );
}
