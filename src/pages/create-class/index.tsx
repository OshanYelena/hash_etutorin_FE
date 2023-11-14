import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Stepper,
  Step,
  Button,
  MenuItem,
  TextField,
  Autocomplete,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import RadioButtonCheckedRoundedIcon from "@mui/icons-material/RadioButtonCheckedRounded";
import RadioButtonUncheckedRoundedIcon from "@mui/icons-material/RadioButtonUncheckedRounded";
import ClassPricingComponent from "@/components/ClassPricingComponent";
import CreateClassDesFAQSection from "@/components/CreateClassDesFAQSection";
import CreateClassGallery from "@/components/CreateClassGallerySection";
import { useRouter } from "next/navigation";
import { NoSsr } from "@mui/base/NoSsr";

const steps = [
  "1. Overview",
  "2. Pricing",
  "3. Description and FAQ",
  "4. Gallery",
];

const Grades = [
  { grade: "1", label: "Grade 1" },
  { grade: "2", label: "Grade 2" },
  { grade: "3", label: "Grade 3" },
  { grade: "4", label: "Grade 4" },
  { grade: "5", label: "Grade 5" },
  { grade: "6", label: "Grade 6" },
  { grade: "7", label: "Grade 7" },
  { grade: "8", label: "Grade 8" },
  { grade: "9", label: "Grade 9" },
  { grade: "10", label: "Grade 10" },
  { grade: "11", label: "Grade 11" },
  { grade: "12", label: "Grade 12" },
  { grade: "13", label: "Grade 13" },
];

const Subjects = [
  { subject: "Maths", label: "Maths" },
  { subject: "Science", label: "Science" },
  { subject: "English", label: "English" },
  { subject: "Sinhala", label: "Sinhala" },
  { subject: "History", label: "History" },
];

export default function CreateClass() {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());
  const [grade, setGrade] = useState("");
  const [subject, setSubject] = useState("");
  const [value, setValue] = useState("1");
  const router = useRouter();

  const handleChangeGrade = (event: SelectChangeEvent) => {
    setGrade(event.target.value as string);
  };
  const handleChangeSubject = (event: SelectChangeEvent) => {
    setSubject(event.target.value as string);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (activeStep === steps.length - 1) {
      router.push("/educator-details[me]");
    } else if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box pt={5} pb={10} px={10}>
      <NoSsr>
        <Box sx={{ width: "100%" }}>
          <Stepper
            activeStep={activeStep}
            sx={{
              backgroundColor: "#2E72B31A",
              px: 10,
              py: 5,
              "& .MuiStepConnector-line": {
                borderColor: "#2E72B34D",
              },
              borderRadius: 5,
            }}
          >
            {steps.map((label, index) => {
              const stepProps: { completed?: boolean } = {};
              const labelProps: {
                optional?: React.ReactNode;
              } = {};

              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <Box
                    sx={{
                      backgroundColor:
                        activeStep >= index ? "primary.main" : "#fff",
                      borderRadius: 10,
                      py: 2,
                      px: 5,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    {...labelProps}
                  >
                    <Typography
                      variant="body1"
                      color={
                        activeStep >= index
                          ? "primary.contrastText"
                          : "primary.main"
                      }
                    >
                      {label}
                    </Typography>
                  </Box>
                </Step>
              );
            })}
          </Stepper>

          <React.Fragment>
            {/* Step 01 */}
            {activeStep === 0 && (
              <Box>
                <Box pt={8}>
                  <Typography
                    variant="h5"
                    color="primary.darkBlue"
                    sx={{ fontWeight: 600, fontSize: 22 }}
                  >
                    Grade
                  </Typography>
                  <Grid container spacing={2} pt={2}>
                    <Grid item xs={4} pr={5}>
                      <Typography
                        variant="body1"
                        color="primary.dark"
                        sx={{ fontSize: 16 }}
                        className="tracking-wide"
                      >
                        Organize your go-to freelancers and favorite services
                        into custom lists you can easily access and share with
                        your team.
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Box
                        sx={{
                          border: 1,
                          borderColor: "#2E72B3B2",
                          borderRadius: 2.5,
                          color: "#808080",
                          width: "100%",
                        }}
                      >
                        <Select
                          placeholder="Select your Grade"
                          labelId="grade-label"
                          id="demo-simple-select"
                          color="primary"
                          value={grade}
                          onChange={handleChangeGrade}
                          sx={{
                            width: "100%",
                            color: "#808080",
                            ".MuiOutlinedInput-notchedOutline": {
                              border: ` none !important`,
                            },
                            fontSize: 14,
                          }}
                          variant="outlined"
                          size="small"
                        >
                          {Grades.map((item, index) => (
                            <MenuItem
                              key={index}
                              value={item.grade}
                              sx={{
                                "&.MuiMenuItem-root:hover": {
                                  backgroundColor: "primary.main",
                                  color: "primary.contrastText",
                                },
                                "&.Mui-selected": {
                                  backgroundColor: "primary.main",
                                  color: "primary.contrastText",
                                },
                                "&.Mui-selected:hover": {
                                  backgroundColor: "primary.main",
                                },
                              }}
                            >
                              {item.label}
                            </MenuItem>
                          ))}
                        </Select>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>

                <Box pt={8}>
                  <Typography
                    variant="h5"
                    color="primary.darkBlue"
                    sx={{ fontWeight: 600, fontSize: 22 }}
                  >
                    Subject
                  </Typography>
                  <Grid container spacing={2} pt={2}>
                    <Grid item xs={4} pr={5}>
                      <Typography
                        variant="body1"
                        color="primary.dark"
                        sx={{ fontSize: 16 }}
                        className="tracking-wide"
                      >
                        Organize your go-to freelancers and favorite services
                        into custom lists you can easily access and share with
                        your team.
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Box
                        sx={{
                          border: 1,
                          borderColor: "#2E72B3B2",
                          borderRadius: 2.5,
                          color: "#808080",
                          width: "100%",
                        }}
                      >
                        <Select
                          placeholder="Select your Subject"
                          labelId="grade-label"
                          id="demo-simple-select"
                          color="primary"
                          value={subject}
                          onChange={handleChangeSubject}
                          sx={{
                            width: "100%",
                            color: "#808080",
                            ".MuiOutlinedInput-notchedOutline": {
                              border: ` none !important`,
                            },
                            fontSize: 13,
                          }}
                          variant="outlined"
                          size="small"
                        >
                          {Subjects.map((item, index) => (
                            <MenuItem
                              key={index}
                              value={item.subject}
                              sx={{
                                "&.MuiMenuItem-root:hover": {
                                  backgroundColor: "primary.main",
                                  color: "primary.contrastText",
                                },
                                "&.Mui-selected": {
                                  backgroundColor: "primary.main",
                                  color: "primary.contrastText",
                                },
                                "&.Mui-selected:hover": {
                                  backgroundColor: "primary.main",
                                },
                              }}
                            >
                              {item.label}
                            </MenuItem>
                          ))}
                        </Select>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>

                <Box pt={8}>
                  <Typography
                    variant="h5"
                    color="primary.darkBlue"
                    sx={{ fontWeight: 600, fontSize: 22 }}
                  >
                    Topic
                  </Typography>
                  <Grid container spacing={2} pt={2}>
                    <Grid item xs={4} pr={5}>
                      <Typography
                        variant="body1"
                        color="primary.dark"
                        sx={{ fontSize: 16 }}
                        className="tracking-wide"
                      >
                        Organize your go-to freelancers and favorite services
                        into custom lists you can easily access and share with
                        your team.
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Box
                        sx={{
                          border: 1,
                          borderColor: "#2E72B3B2",
                          borderRadius: 2.5,
                          color: "#808080",
                          width: "100%",
                        }}
                      >
                        <TextField
                          fullWidth
                          size="small"
                          variant="outlined"
                          placeholder="Add your Topic"
                          sx={{
                            color: "#808080",
                            ".MuiOutlinedInput-notchedOutline": {
                              border: ` none !important`,
                            },
                            fontSize: 13,
                          }}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>

                <Box pt={8}>
                  <Typography
                    variant="h5"
                    color="primary.darkBlue"
                    sx={{ fontWeight: 600, fontSize: 22 }}
                  >
                    Keywords
                  </Typography>
                  <Grid container spacing={2} pt={2}>
                    <Grid item xs={4} pr={5}>
                      <Typography
                        variant="body1"
                        color="primary.dark"
                        sx={{ fontSize: 16 }}
                        className="tracking-wide"
                      >
                        Organize your go-to freelancers and favorite services
                        into custom lists you can easily access and share with
                        your team.
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Box
                        sx={{
                          border: 1,
                          borderColor: "#2E72B3B2",
                          borderRadius: 2.5,
                          color: "#808080",
                          width: "100%",
                        }}
                      >
                        <Autocomplete
                          multiple
                          id="tags-keywords"
                          options={[]}
                          freeSolo
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              fullWidth
                              size="small"
                              variant="outlined"
                              sx={{
                                color: "#808080",
                                ".MuiOutlinedInput-notchedOutline": {
                                  border: ` none !important`,
                                },
                                fontSize: 13,
                              }}
                            />
                          )}
                        />
                      </Box>
                      <Typography
                        variant="body1"
                        color="#808080"
                        sx={{ fontSize: 13 }}
                      >
                        6 tags minimum
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            )}

            {/* Step 02 */}
            {activeStep === 1 && (
              <Box py={5}>
                <Box display="flex" justifyContent="center">
                  <Box
                    py={2}
                    sx={{
                      backgroundColor: "#F3F3F3",
                      borderRadius: 2,
                      width: "40%",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      variant="h5"
                      gutterBottom
                      color="primary.main"
                      fontSize={20}
                    >
                      <Box fontWeight="bold" display="inline">
                        Select{" "}
                      </Box>{" "}
                      your
                      <Box fontWeight="bold" display="inline">
                        {" "}
                        plan
                      </Box>
                    </Typography>
                    <Box px={10} py={1}>
                      <RadioGroup
                        aria-labelledby="classes-radio-group"
                        name="classes-radio-buttons-group"
                        value={value}
                        onChange={handleChange}
                      >
                        <Grid container columnSpacing={2}>
                          <Grid item xs={6}>
                            <Box
                              sx={{
                                backgroundColor:
                                  value === "1" ? "primary.main" : "#639AEA73",
                                borderRadius: 2,
                                py: 0.5,
                              }}
                            >
                              <FormControlLabel
                                value="1"
                                control={
                                  <Radio
                                    icon={
                                      <RadioButtonUncheckedRoundedIcon
                                        sx={{
                                          color: "primary.contrastText",
                                          width: 18,
                                          height: 18,
                                        }}
                                      />
                                    }
                                    checkedIcon={
                                      <RadioButtonCheckedRoundedIcon
                                        sx={{
                                          color: "primary.contrastText",
                                          width: 18,
                                          height: 18,
                                        }}
                                      />
                                    }
                                  />
                                }
                                labelPlacement="start"
                                label="One-Time"
                                sx={{
                                  ".MuiFormControlLabel-label": {
                                    color: "primary.contrastText",
                                    textAlign: "center",
                                  },
                                }}
                              />
                            </Box>
                          </Grid>
                          <Grid item xs={6}>
                            <Box
                              sx={{
                                backgroundColor:
                                  value === "2" ? "primary.main" : "#639AEA73",
                                borderRadius: 2,
                                py: 0.5,
                              }}
                            >
                              <FormControlLabel
                                value="2"
                                control={
                                  <Radio
                                    icon={
                                      <RadioButtonUncheckedRoundedIcon
                                        sx={{
                                          color: "primary.contrastText",
                                          width: 18,
                                          height: 18,
                                        }}
                                      />
                                    }
                                    checkedIcon={
                                      <RadioButtonCheckedRoundedIcon
                                        sx={{
                                          color: "primary.contrastText",
                                          width: 18,
                                          height: 18,
                                        }}
                                      />
                                    }
                                  />
                                }
                                labelPlacement="start"
                                label="Weekly"
                                sx={{
                                  ".MuiFormControlLabel-label": {
                                    color: "primary.contrastText",
                                    textAlign: "center",
                                  },
                                }}
                              />
                            </Box>
                          </Grid>
                        </Grid>
                      </RadioGroup>
                    </Box>
                  </Box>
                </Box>

                <Box my={5} sx={{ backgroundColor: "#2E72B31A" }}>
                  <Grid container columnSpacing={2}>
                    <Grid item xs={4}>
                      <ClassPricingComponent
                        title="Individual Class"
                        headerColor="#2E72B333"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <ClassPricingComponent
                        title="Small Group Class (Less Than 5)"
                        headerColor="#F3F3F3"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <ClassPricingComponent
                        title="Group Class (Over 5)"
                        headerColor="#F3F3F3"
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            )}

            {/* Step 03 */}
            {activeStep === 2 && <CreateClassDesFAQSection />}

            {/* Step 04 */}
            {activeStep === 3 && <CreateClassGallery />}

            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              {activeStep !== 0 && (
                <Button
                  sx={{
                    textTransform: "none",
                    lineHeight: 1.5,
                    backgroundColor: "primary.darkBlue",
                    mr: 1,
                  }}
                  className="w-60 py-2 rounded-full"
                  color="inherit"
                  onClick={handleBack}
                >
                  <Typography
                    variant="body1"
                    color="primary.darkBlue"
                    sx={{ fontWeight: 600, fontSize: "1.1rem" }}
                  >
                    Back
                  </Typography>
                </Button>
              )}

              <Box sx={{ flex: "1 1 auto" }} />
              <Box
                sx={{
                  backgroundColor: "primary.darkBlue",
                }}
                className="w-60 rounded-full"
              >
                <Button
                  color="success"
                  size="medium"
                  variant="contained"
                  onClick={handleNext}
                  sx={{
                    textTransform: "none",
                    lineHeight: 1.5,
                    backgroundColor: "primary.darkBlue",
                  }}
                  className="w-60 py-2 rounded-full"
                >
                  <Typography
                    variant="body1"
                    color="primary.contrastText"
                    sx={{ fontWeight: 500, fontSize: "1.1rem" }}
                  >
                    {activeStep === steps.length - 1
                      ? "Confirm"
                      : "Save & Continue"}
                  </Typography>
                </Button>
              </Box>
            </Box>
          </React.Fragment>
        </Box>
      </NoSsr>
    </Box>
  );
}
