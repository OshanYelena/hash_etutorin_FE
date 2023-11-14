import React, { useEffect } from "react";
import HomeBlueSection from "@/components/HomeBlueSection";
import { Box, Typography } from "@mui/material";
import CourseCard from "@/components/CourseCard";
import Carousel from "react-material-ui-carousel";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";
import { NoSsr } from "@mui/base/NoSsr";

const PopularCourseDetails = [
  {
    courseImg: "/images/science1.jfif",
    avatarImg: "/images/educator1.jpg",
    courseName: "Biology",
    grade: "Grade 12",
    educatorName: "Manga Deboz",
    rating: 4,
    noOfRatings: 20,
    description:
      "Molecular Biology, Recomb nant DNA Technology and Environmental Biology",
  },
  {
    courseImg: "/images/science2.jpg",
    avatarImg: "/images/educator2.png",
    courseName: "Biology",
    grade: "Grade 12",
    educatorName: "Manga Deboz",
    rating: 4,
    noOfRatings: 20,
    description:
      "Molecular Biology, Recomb nant DNA Technology and Environmental Biology",
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
      "Molecular Biology, Recomb nant DNA Technology and Environmental Biology",
  },
  {
    courseImg: "/images/science1.jfif",
    avatarImg: "/images/educator1.jpg",
    courseName: "Biology",
    grade: "Grade 12",
    educatorName: "Manga Deboz",
    rating: 4,
    noOfRatings: 20,
    description:
      "Molecular Biology, Recom bnant DNA Technology and Environmental Biology",
  },
  {
    courseImg: "/images/science2.jpg",
    avatarImg: "/images/educator2.png",
    courseName: "Biology",
    grade: "Grade 12",
    educatorName: "Manga Deboz",
    rating: 4,
    noOfRatings: 20,
    description:
      "Molecular Biology, Recom bnant DNA Technology and Environmental Biology",
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
      "Molecular Biology, Recom bnant DNA Technology and Environmental Biology",
  },
];

export default function SubjectHomePage() {
  const [activeItem, setActiveItem] = React.useState(0);
  const [secondItem, setsecondItem] = React.useState(1);
  const [thirdItem, setThirdItem] = React.useState(2);
  const maxSteps = PopularCourseDetails.length - 1;

  const handleNext = () => {
    setActiveItem((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveItem((prevActiveStep) => prevActiveStep - 1);
  };

  useEffect(() => {
    if (activeItem === maxSteps - 3) {
      setThirdItem(0);
    }
    if (activeItem === maxSteps - 2) {
      setsecondItem(0);
      setThirdItem(1);
    }
    if (activeItem === maxSteps - 1) {
      setActiveItem(0);
      setsecondItem(1);
      setThirdItem(2);
    } else {
      setsecondItem(activeItem + 1);
      setThirdItem(activeItem + 2);
    }
    console.log(activeItem, secondItem, thirdItem);
  }, [activeItem, maxSteps, secondItem, thirdItem]);

  return (
    <div>
      <NoSsr>
        <HomeBlueSection />
        <section id="popular">
          <Box py={5} px={5}>
            <Typography
              variant="h5"
              gutterBottom
              color="primary.darkBlue"
              className="uppercase"
              pb={5}
              px={5}
              sx={{ fontWeight: 700, fontSize: "1.8rem" }}
            >
              Most Popular Courses in{" "}
              <Box color="error.main" display="inline">
                Science,
              </Box>
            </Typography>
            <Box>
              <Carousel
                navButtonsAlwaysVisible
                fullHeightHover={false}
                autoPlay={false}
                navButtonsProps={{
                  style: {
                    backgroundColor: "#fff",
                    borderRadius: 100,
                    width: 60,
                    height: 60,
                    boxShadow: "1px 1px 10px 1px rgba(0,0,0,0.2)",
                  },
                }}
                NextIcon={
                  <NavigateNextRoundedIcon
                    sx={{
                      color: "#000",
                      width: 40,
                      height: 40,
                    }}
                    onClick={handleNext}
                  />
                }
                PrevIcon={
                  <NavigateBeforeRoundedIcon
                    sx={{
                      color: "#000",
                      width: 40,
                      height: 40,
                    }}
                    onClick={handleBack}
                  />
                }
              >
                {PopularCourseDetails.map(
                  (
                    {
                      courseImg,
                      avatarImg,
                      courseName,
                      grade,
                      educatorName,
                      rating,
                      noOfRatings,
                    },
                    index
                  ) => (
                    <Box
                      key={index}
                      display="flex"
                      justifyContent="space-between"
                      px={5}
                    >
                      <Box mx={5}>
                        <CourseCard
                          key={index}
                          courseImg={PopularCourseDetails[activeItem].courseImg}
                          avatarImg={PopularCourseDetails[activeItem].avatarImg}
                          courseName={
                            PopularCourseDetails[activeItem].courseName
                          }
                          grade={PopularCourseDetails[activeItem].grade}
                          educatorName={
                            PopularCourseDetails[activeItem].educatorName
                          }
                          rating={PopularCourseDetails[activeItem].rating}
                          noOfRatings={
                            PopularCourseDetails[activeItem].noOfRatings
                          }
                          description={
                            PopularCourseDetails[activeItem].description
                          }
                          tag="weekly"
                        />
                      </Box>
                      <Box mx={5}>
                        <CourseCard
                          key={index}
                          courseImg={PopularCourseDetails[secondItem].courseImg}
                          avatarImg={PopularCourseDetails[secondItem].avatarImg}
                          courseName={
                            PopularCourseDetails[secondItem].courseName
                          }
                          grade={PopularCourseDetails[secondItem].grade}
                          educatorName={
                            PopularCourseDetails[secondItem].educatorName
                          }
                          rating={PopularCourseDetails[secondItem].rating}
                          noOfRatings={
                            PopularCourseDetails[secondItem].noOfRatings
                          }
                          description={
                            PopularCourseDetails[secondItem].description
                          }
                          tag="one-time"
                        />
                      </Box>
                      <Box mx={5}>
                        <CourseCard
                          key={index}
                          courseImg={PopularCourseDetails[thirdItem].courseImg}
                          avatarImg={PopularCourseDetails[thirdItem].avatarImg}
                          courseName={
                            PopularCourseDetails[thirdItem].courseName
                          }
                          grade={PopularCourseDetails[thirdItem].grade}
                          educatorName={
                            PopularCourseDetails[thirdItem].educatorName
                          }
                          rating={PopularCourseDetails[thirdItem].rating}
                          noOfRatings={
                            PopularCourseDetails[thirdItem].noOfRatings
                          }
                          description={
                            PopularCourseDetails[thirdItem].description
                          }
                          tag="weekly"
                        />
                      </Box>
                    </Box>
                  )
                )}
              </Carousel>
            </Box>
          </Box>

          <Box py={5} px={5}>
            <Typography
              variant="h5"
              gutterBottom
              color="primary.darkBlue"
              className="uppercase"
              pb={5}
              px={5}
              sx={{ fontWeight: 700, fontSize: "1.8rem" }}
            >
              What to learn next,
            </Typography>
            <Box>
              <Carousel
                navButtonsAlwaysVisible
                fullHeightHover={false}
                autoPlay={false}
                navButtonsProps={{
                  style: {
                    backgroundColor: "#fff",
                    borderRadius: 100,
                    width: 60,
                    height: 60,
                    boxShadow: "1px 1px 10px 1px rgba(0,0,0,0.2)",
                  },
                }}
                NextIcon={
                  <NavigateNextRoundedIcon
                    sx={{
                      color: "#000",
                      width: 40,
                      height: 40,
                    }}
                    onClick={handleNext}
                  />
                }
                PrevIcon={
                  <NavigateBeforeRoundedIcon
                    sx={{
                      color: "#000",
                      width: 40,
                      height: 40,
                    }}
                    onClick={handleBack}
                  />
                }
              >
                {PopularCourseDetails.map(
                  (
                    {
                      courseImg,
                      avatarImg,
                      courseName,
                      grade,
                      educatorName,
                      rating,
                      noOfRatings,
                    },
                    index
                  ) => (
                    <Box
                      key={index}
                      display="flex"
                      justifyContent="space-between"
                      px={5}
                    >
                      <Box mx={5}>
                        <CourseCard
                          key={index}
                          courseImg={PopularCourseDetails[activeItem].courseImg}
                          avatarImg={PopularCourseDetails[activeItem].avatarImg}
                          courseName={
                            PopularCourseDetails[activeItem].courseName
                          }
                          grade={PopularCourseDetails[activeItem].grade}
                          educatorName={
                            PopularCourseDetails[activeItem].educatorName
                          }
                          rating={PopularCourseDetails[activeItem].rating}
                          noOfRatings={
                            PopularCourseDetails[activeItem].noOfRatings
                          }
                          description={
                            PopularCourseDetails[activeItem].description
                          }
                          tag="one-time"
                        />
                      </Box>
                      <Box mx={5}>
                        <CourseCard
                          key={index}
                          courseImg={PopularCourseDetails[secondItem].courseImg}
                          avatarImg={PopularCourseDetails[secondItem].avatarImg}
                          courseName={
                            PopularCourseDetails[secondItem].courseName
                          }
                          grade={PopularCourseDetails[secondItem].grade}
                          educatorName={
                            PopularCourseDetails[secondItem].educatorName
                          }
                          rating={PopularCourseDetails[secondItem].rating}
                          noOfRatings={
                            PopularCourseDetails[secondItem].noOfRatings
                          }
                          description={
                            PopularCourseDetails[secondItem].description
                          }
                          tag="weekly"
                        />
                      </Box>
                      <Box mx={5}>
                        <CourseCard
                          key={index}
                          courseImg={PopularCourseDetails[thirdItem].courseImg}
                          avatarImg={PopularCourseDetails[thirdItem].avatarImg}
                          courseName={
                            PopularCourseDetails[thirdItem].courseName
                          }
                          grade={PopularCourseDetails[thirdItem].grade}
                          educatorName={
                            PopularCourseDetails[thirdItem].educatorName
                          }
                          rating={PopularCourseDetails[thirdItem].rating}
                          noOfRatings={
                            PopularCourseDetails[thirdItem].noOfRatings
                          }
                          description={
                            PopularCourseDetails[thirdItem].description
                          }
                          tag="one-time"
                        />
                      </Box>
                    </Box>
                  )
                )}
              </Carousel>
            </Box>
          </Box>
        </section>
      </NoSsr>
    </div>
  );
}
