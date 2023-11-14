/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Avatar, Box, Grid, Typography, Rating, Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import AvTimerRoundedIcon from "@mui/icons-material/AvTimerRounded";
import EditCalendarRoundedIcon from "@mui/icons-material/EditCalendarRounded";
import EducatorCourseCard from "@/components/EducatorCourseCard";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { useRouter } from "next/navigation";
import { NoSsr } from "@mui/base/NoSsr";

const TeachingSubjects = [
  "Maths",
  "O/L Maths",
  "A/L Maths",
  "Maths",
  "O/L Maths",
];

const PopularCourseDetails = [
  {
    courseImg: "/images/science1.jfif",
    courseName: "Biology",
    grade: "Grade 12",
    description:
      "Molecular Biology, Recombnant DNA Technology and Environmental Biology",
    tag: "one-time",
  },
  {
    courseImg: "/images/science2.jpg",
    courseName: "Biology",
    grade: "Grade 12",
    description:
      "Molecular Biology, Recombnant DNA Technology and Environmental Biology",
    tag: "weekly",
  },
];

export default function EducatorAddDetailPage() {
  const router = useRouter();

  const handleOpen = () => {
    router.push("/create-class");
  };

  const handleOpenProfile = () => {
    router.push("/educator-profile");
  };

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
              <Box display="flex" justifyContent="center" py={2}>
                <Box
                  sx={{
                    borderRadius: 2,
                    backgroundColor: "primary.main",
                  }}
                  className="w-60 "
                  mt={2}
                >
                  <Button
                    color="info"
                    size="medium"
                    variant="contained"
                    onClick={handleOpenProfile}
                    sx={{
                      textTransform: "none",
                      lineHeight: 1.5,
                      borderRadius: 2,
                      backgroundColor: "primary.main",
                    }}
                    className="w-60 py-2"
                  >
                    <EditCalendarRoundedIcon
                      sx={{
                        color: "primary.contrastText",
                        mr: 1,
                        width: 20,
                        height: 20,
                      }}
                    />
                    <Typography
                      variant="body1"
                      color="primary.contrastText"
                      sx={{ fontWeight: 500, fontSize: "1.1rem" }}
                    >
                      Edit Your Profle
                    </Typography>
                  </Button>
                </Box>
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
                    {PopularCourseDetails.map((item, index) => (
                      <Grid item xs={2} sm={4} md={4} key={index}>
                        <EducatorCourseCard
                          key={index}
                          courseImg={item.courseImg}
                          courseName={item.courseName}
                          grade={item.grade}
                          description={item.description}
                          tag={item.tag}
                        />
                      </Grid>
                    ))}
                    <Grid item xs={2} sm={4} md={4}>
                      <Box
                        sx={{
                          width: "100%",
                          height: 400,
                          boxShadow: 10,
                          backgroundColor: "#F1F1F1F2",
                          p: 0.5,
                        }}
                        role="button"
                        onClick={handleOpen}
                      >
                        <Box
                          sx={{
                            border: 1,
                            borderStyle: "dashed",
                            borderColor: "#2E72B3B2",
                            height: "100%",
                            color: "#808080",
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                          }}
                          px={2}
                          py={3}
                        >
                          <AddCircleOutlinedIcon
                            sx={{ color: "#ADADAD", width: 75, height: 75 }}
                          />
                          <Typography
                            variant="body1"
                            color="#ADADAD"
                            pt={1}
                            fontSize={15}
                            fontStyle="italic"
                            textAlign="center"
                          >
                            Click to add a new Class
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
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
