import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import CourseCard from "@/components/CourseCard";
import Carousel from "react-material-ui-carousel";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";

export default function RecommandedCourseSection() {
  const [activeItem, setActiveItem] = React.useState(0);
  const [secondItem, setsecondItem] = React.useState(1);
  const [thirdItem, setThirdItem] = React.useState(2);
  const maxSteps = RecommandedCourseDetails.length - 1;

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
    <Box>
      <Typography
        variant="h5"
        color="primary.main"
        pt={5}
        px={5}
        sx={{ fontWeight: 700, fontSize: "1.5rem" }}
      >
        Recommanded for You
      </Typography>
      <Box py={5}>
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
          {RecommandedCourseDetails.map((_, index) => (
            <Box key={index} display="flex" justifyContent="space-between">
              <Box mx={5}>
                <CourseCard
                classId={"new"}
                  key={index}
                  courseImg={RecommandedCourseDetails[activeItem].courseImg}
                  avatarImg={RecommandedCourseDetails[activeItem].avatarImg}
                  courseName={RecommandedCourseDetails[activeItem].courseName}
                  grade={RecommandedCourseDetails[activeItem].grade}
                  educatorName={
                    RecommandedCourseDetails[activeItem].educatorName
                  }
                  rating={RecommandedCourseDetails[activeItem].rating}
                  noOfRatings={RecommandedCourseDetails[activeItem].noOfRatings}
                  description={RecommandedCourseDetails[activeItem].description}
                  tag="one-time"
                />
              </Box>
              <Box mx={5}>
                <CourseCard
                classId={"new"}
                  key={index}
                  courseImg={RecommandedCourseDetails[secondItem].courseImg}
                  avatarImg={RecommandedCourseDetails[secondItem].avatarImg}
                  courseName={RecommandedCourseDetails[secondItem].courseName}
                  grade={RecommandedCourseDetails[secondItem].grade}
                  educatorName={
                    RecommandedCourseDetails[secondItem].educatorName
                  }
                  rating={RecommandedCourseDetails[secondItem].rating}
                  noOfRatings={RecommandedCourseDetails[secondItem].noOfRatings}
                  description={RecommandedCourseDetails[secondItem].description}
                  tag="weekly"
                />
              </Box>
              <Box mx={5}>
                <CourseCard
                classId={"new"}
                  key={index}
                  courseImg={RecommandedCourseDetails[thirdItem].courseImg}
                  avatarImg={RecommandedCourseDetails[thirdItem].avatarImg}
                  courseName={RecommandedCourseDetails[thirdItem].courseName}
                  grade={RecommandedCourseDetails[thirdItem].grade}
                  educatorName={
                    RecommandedCourseDetails[thirdItem].educatorName
                  }
                  rating={RecommandedCourseDetails[thirdItem].rating}
                  noOfRatings={RecommandedCourseDetails[thirdItem].noOfRatings}
                  description={RecommandedCourseDetails[thirdItem].description}
                  tag="one-time"
                />
              </Box>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
}

const RecommandedCourseDetails = [
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
