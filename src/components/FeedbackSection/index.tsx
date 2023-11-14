import React, { useEffect } from "react";
import { Box, Typography, MobileStepper, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FeedbackCard from "../FeedbackCard";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const feedbacks = [
  {
    imagePath: "/images/student1.png",
    name: "Anastasi Shelly",
    rating: 3,
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis accumsan maximus, quam libero tempus nisl, vitae luctus odio nisl eu velit. Sed euismod, diam quis accumsan maximus, quam libero tempus nisl, vitae luctus odio nisl eu velit.",
  },
  {
    imagePath: "/images/student2.png",
    name: "Anastasi Shelly",
    rating: 3,
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis accumsan maximus, quam libero tempus nisl, vitae luctus odio nisl eu velit. Sed euismod, diam quis accumsan maximus, quam libero tempus nisl, vitae luctus odio nisl eu velit.",
  },
  {
    imagePath: "/images/student1.png",
    name: "Anastasi Shelly",
    rating: 3,
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis accumsan maximus, quam libero tempus nisl, vitae luctus odio nisl eu velit. Sed euismod, diam quis accumsan maximus, quam libero tempus nisl, vitae luctus odio nisl eu velit.",
  },
  {
    imagePath: "/images/student2.png",
    name: "Anastasi Shelly",
    rating: 3,
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis accumsan maximus, quam libero tempus nisl, vitae luctus odio nisl eu velit. Sed euismod, diam quis accumsan maximus, quam libero tempus nisl, vitae luctus odio nisl eu velit.",
  },
];

export default function FeedbackSection() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [nextStep, setNextStep] = React.useState(1);
  const maxSteps = feedbacks.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  useEffect(() => {
    if (activeStep === maxSteps - 1) {
      setNextStep(0);
    } else {
      setNextStep(activeStep + 1);
    }
  }, [activeStep, maxSteps, nextStep]);

  return (
    <Box
      sx={{
        alignItems: "center",
        textAlign: "center",
      }}
      className="h-full"
      px={10}
      py={5}
    >
      <Typography
        variant="h5"
        gutterBottom
        color="primary.darkBlue"
        pb={2}
        sx={{ fontWeight: 700, fontSize: "1.8rem" }}
      >
        What Student Say
      </Typography>
      <Box sx={{ flexGrow: 1 }} py={5}>
        <Box
          sx={{ width: "100%", p: 2 }}
          display="flex"
          justifyContent="space-between"
        >
          <Box>
            <FeedbackCard
              imagePath={feedbacks[activeStep].imagePath}
              name={feedbacks[activeStep].name}
              rating={feedbacks[activeStep].rating}
              feedback={feedbacks[activeStep].feedback}
            />
          </Box>
          <Box>
            <FeedbackCard
              imagePath={feedbacks[nextStep].imagePath}
              name={feedbacks[nextStep].name}
              rating={feedbacks[nextStep].rating}
              feedback={feedbacks[nextStep].feedback}
            />
          </Box>
        </Box>
        <MobileStepper
          variant="dots"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <IconButton
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
              sx={{ boxShadow: 10, width: 60, height: 60 }}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft
                  sx={{
                    color: "primary.main",
                    width: 40,
                    height: 40,
                  }}
                />
              ) : (
                <KeyboardArrowRight
                  sx={{
                    color: "primary.main",
                    width: 40,
                    height: 40,
                  }}
                />
              )}
            </IconButton>
          }
          backButton={
            <IconButton
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
              sx={{ boxShadow: 10, width: 60, height: 60 }}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight
                  sx={{
                    color: "primary.main",
                    width: 40,
                    height: 40,
                  }}
                />
              ) : (
                <KeyboardArrowLeft
                  sx={{
                    color: "primary.main",
                    width: 40,
                    height: 40,
                  }}
                />
              )}
            </IconButton>
          }
        />
      </Box>
    </Box>
  );
}
