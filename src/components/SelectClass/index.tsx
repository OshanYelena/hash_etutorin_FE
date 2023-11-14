/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import KeyboardDoubleArrowRightRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowRightRounded";
import RadioButtonCheckedRoundedIcon from "@mui/icons-material/RadioButtonCheckedRounded";
import RadioButtonUncheckedRoundedIcon from "@mui/icons-material/RadioButtonUncheckedRounded";

interface SelectClassProps {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleOpenClassDate: () => void;
  isDisabled: boolean;
  handleOpenClassDetails: () => void;
}

export default function SelectClass({
  value,
  handleChange,
  handleOpenClassDate,
  isDisabled,
  handleOpenClassDetails,
}: SelectClassProps) {
  return (
    <Box py={5}>
      <Typography
        variant="h5"
        gutterBottom
        color="#ADADAD"
        sx={{ fontSize: "1.5rem", fontWeight: 600 }}
      >
        {" "}
        It's easy to &nbsp;
        <Box color="primary.main" display="inline" sx={{ fontWeight: 800 }}>
          Get Started
        </Box>
      </Typography>
      <Typography
        variant="body1"
        color="primary.dark"
        fontSize={18}
        px={5}
        py={2}
      >
        dolor sit amet consectetur. Augue lacus aenean sollicitudin ultrices
        iaculis non.
      </Typography>
      <Box my={3} sx={{ backgroundColor: "#2E72B31A" }} py={2}>
        <Typography
          variant="h5"
          color="primary.main"
          sx={{ fontSize: "1.5rem", fontWeight: 800 }}
        >
          Weekly
        </Typography>
      </Box>

      <Box py={5}>
        <RadioGroup
          aria-labelledby="classes-radio-group"
          name="classes-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          {/* First Choice */}
          <Box
            sx={{ backgroundColor: value === "1" ? "#2E72B340" : "" }}
            py={5}
            px={2}
            mb={2}
          >
            <Grid
              container
              columnSpacing={1}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Grid item xs={3} textAlign="left">
                <FormControlLabel
                  value="1"
                  control={
                    <Radio
                      icon={
                        <RadioButtonUncheckedRoundedIcon
                          sx={{
                            color: "primary.main",
                          }}
                        />
                      }
                      checkedIcon={
                        <RadioButtonCheckedRoundedIcon
                          sx={{
                            color: "primary.main",
                          }}
                        />
                      }
                    />
                  }
                  label="Individual Class"
                  sx={{
                    ".MuiFormControlLabel-label": {
                      fontWeight: 600,
                      color: value === "1" ? "primary.main" : "#808080",
                      fontSize: "1rem",
                      textAlign: "center",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={value === "1" ? 5 : 8} textAlign="left">
                <Typography
                  variant="body1"
                  sx={{ color: value === "1" ? "primary.main" : "#808080" }}
                  fontSize={15}
                >
                  <ul>
                    <FiberManualRecordRoundedIcon
                      sx={{
                        color: value === "1" ? "primary.main" : "#808080",
                        width: 12,
                        height: 12,
                        mr: 1,
                      }}
                    />
                    4.5 hours on-demand video
                  </ul>
                  <ul>
                    <FiberManualRecordRoundedIcon
                      sx={{
                        color: value === "1" ? "primary.main" : "#808080",
                        width: 12,
                        height: 12,
                        mr: 1,
                      }}
                    />
                    Access on mobile and TV
                  </ul>
                  <ul>
                    <FiberManualRecordRoundedIcon
                      sx={{
                        color: value === "1" ? "primary.main" : "#808080",
                        width: 12,
                        height: 12,
                        mr: 1,
                      }}
                    />
                    Full lifetime access{" "}
                  </ul>
                  <ul>
                    <FiberManualRecordRoundedIcon
                      sx={{
                        color: value === "1" ? "primary.main" : "#808080",
                        width: 12,
                        height: 12,
                        mr: 1,
                      }}
                    />
                    Certificate of completion
                  </ul>
                </Typography>
              </Grid>
              {value === "1" && (
                <Grid item xs={4}>
                  <Box
                    sx={{
                      borderRadius: 3,
                      background: "linear-gradient(to right, #49A1F4, #280C9B)",
                      width: "100%",
                      ":hover": {
                        background:
                          "linear-gradient(to right, #3b82f6, #1f0a78)",
                      },
                    }}
                  >
                    <Button
                      color="info"
                      size="medium"
                      onClick={handleOpenClassDate}
                      sx={{
                        textTransform: "none",
                        borderRadius: 3,
                        backgroundColor: "#2E72B333",
                        width: "100%",
                      }}
                      className=" py-2"
                    >
                      <Typography
                        variant="body1"
                        color="primary.contrastText"
                        sx={{ fontSize: "0.9rem" }}
                      >
                        Click Here To Select &nbsp;
                        <Box
                          display="inline"
                          sx={{ fontSize: "1.1rem", fontWeight: 600 }}
                        >
                          Class Date
                        </Box>
                      </Typography>
                      <KeyboardDoubleArrowRightRoundedIcon
                        sx={{
                          color: "primary.contrastText",
                          width: 30,
                          height: 30,
                        }}
                      />
                    </Button>
                  </Box>
                </Grid>
              )}
            </Grid>
          </Box>

          {/* Second Choice */}
          <Box
            sx={{ backgroundColor: value === "2" ? "#2E72B340" : "" }}
            py={5}
            px={2}
            mb={2}
          >
            <Grid
              container
              columnSpacing={1}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Grid item xs={3} textAlign="left">
                <FormControlLabel
                  value="2"
                  control={
                    <Radio
                      icon={
                        <RadioButtonUncheckedRoundedIcon
                          sx={{
                            color: "primary.main",
                          }}
                        />
                      }
                      checkedIcon={
                        <RadioButtonCheckedRoundedIcon
                          sx={{
                            color: "primary.main",
                          }}
                        />
                      }
                    />
                  }
                  label="Small Group (Less than 5)"
                  sx={{
                    ".MuiFormControlLabel-label": {
                      fontWeight: 600,
                      color: value === "2" ? "primary.main" : "#808080",
                      fontSize: "0.9rem",
                      textAlign: "center",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={value === "2" ? 5 : 8} textAlign="left">
                <Typography
                  variant="body1"
                  sx={{ color: value === "2" ? "primary.main" : "#808080" }}
                  fontSize={15}
                >
                  <ul>
                    <FiberManualRecordRoundedIcon
                      sx={{
                        color: value === "2" ? "primary.main" : "#808080",
                        width: 12,
                        height: 12,
                        mr: 1,
                      }}
                    />
                    4.5 hours on-demand video
                  </ul>
                  <ul>
                    <FiberManualRecordRoundedIcon
                      sx={{
                        color: value === "2" ? "primary.main" : "#808080",
                        width: 12,
                        height: 12,
                        mr: 1,
                      }}
                    />
                    Access on mobile and TV
                  </ul>
                  <ul>
                    <FiberManualRecordRoundedIcon
                      sx={{
                        color: value === "2" ? "primary.main" : "#808080",
                        width: 12,
                        height: 12,
                        mr: 1,
                      }}
                    />
                    Full lifetime access{" "}
                  </ul>
                  <ul>
                    <FiberManualRecordRoundedIcon
                      sx={{
                        color: value === "2" ? "primary.main" : "#808080",
                        width: 12,
                        height: 12,
                        mr: 1,
                      }}
                    />
                    Certificate of completion
                  </ul>
                </Typography>
              </Grid>
              {value === "2" && (
                <Grid item xs={4}>
                  <Box
                    sx={{
                      borderRadius: 3,
                      background: "linear-gradient(to right, #49A1F4, #280C9B)",
                      width: "100%",
                      ":hover": {
                        background:
                          "linear-gradient(to right, #3b82f6, #1f0a78)",
                      },
                    }}
                  >
                    <Button
                      color="info"
                      size="medium"
                      onClick={handleOpenClassDate}
                      sx={{
                        textTransform: "none",
                        borderRadius: 3,
                        backgroundColor: "#2E72B333",
                        width: "100%",
                      }}
                      className=" py-2"
                    >
                      <Typography
                        variant="body1"
                        color="primary.contrastText"
                        sx={{ fontSize: "0.9rem" }}
                      >
                        Click Here To Select &nbsp;
                        <Box
                          display="inline"
                          sx={{ fontSize: "1.1rem", fontWeight: 600 }}
                        >
                          Class Date
                        </Box>
                      </Typography>
                      <KeyboardDoubleArrowRightRoundedIcon
                        sx={{
                          color: "primary.contrastText",
                          width: 30,
                          height: 30,
                        }}
                      />
                    </Button>
                  </Box>
                </Grid>
              )}
            </Grid>
          </Box>

          {/* Third Choice */}
          <Box
            sx={{ backgroundColor: value === "3" ? "#2E72B340" : "" }}
            py={5}
            px={2}
            mb={2}
          >
            <Grid
              container
              columnSpacing={1}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Grid item xs={3} textAlign="left">
                <FormControlLabel
                  value="3"
                  control={
                    <Radio
                      icon={
                        <RadioButtonUncheckedRoundedIcon
                          sx={{
                            color: "primary.main",
                          }}
                        />
                      }
                      checkedIcon={
                        <RadioButtonCheckedRoundedIcon
                          sx={{
                            color: "primary.main",
                          }}
                        />
                      }
                    />
                  }
                  label="Group Classes (Over 5)"
                  sx={{
                    ".MuiFormControlLabel-label": {
                      fontWeight: 600,
                      color: value === "3" ? "primary.main" : "#808080",
                      fontSize: "0.8rem",
                      textAlign: "center",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={value === "3" ? 5 : 8} textAlign="left">
                <Typography
                  variant="body1"
                  sx={{ color: value === "3" ? "primary.main" : "#808080" }}
                  fontSize={15}
                >
                  <ul>
                    <FiberManualRecordRoundedIcon
                      sx={{
                        color: value === "3" ? "primary.main" : "#808080",
                        width: 12,
                        height: 12,
                        mr: 1,
                      }}
                    />
                    4.5 hours on-demand video
                  </ul>
                  <ul>
                    <FiberManualRecordRoundedIcon
                      sx={{
                        color: value === "3" ? "primary.main" : "#808080",
                        width: 12,
                        height: 12,
                        mr: 1,
                      }}
                    />
                    Access on mobile and TV
                  </ul>
                  <ul>
                    <FiberManualRecordRoundedIcon
                      sx={{
                        color: value === "3" ? "primary.main" : "#808080",
                        width: 12,
                        height: 12,
                        mr: 1,
                      }}
                    />
                    Full lifetime access{" "}
                  </ul>
                  <ul>
                    <FiberManualRecordRoundedIcon
                      sx={{
                        color: value === "3" ? "primary.main" : "#808080",
                        width: 12,
                        height: 12,
                        mr: 1,
                      }}
                    />
                    Certificate of completion
                  </ul>
                </Typography>
              </Grid>
              {value === "3" && (
                <Grid item xs={4}>
                  <Box
                    sx={{
                      borderRadius: 3,
                      background: "linear-gradient(to right, #49A1F4, #280C9B)",
                      width: "100%",
                      ":hover": {
                        background:
                          "linear-gradient(to right, #3b82f6, #1f0a78)",
                      },
                    }}
                  >
                    <Button
                      color="info"
                      size="medium"
                      onClick={handleOpenClassDate}
                      sx={{
                        textTransform: "none",
                        borderRadius: 3,
                        backgroundColor: "#2E72B333",
                        width: "100%",
                      }}
                      className=" py-2"
                    >
                      <Typography
                        variant="body1"
                        color="primary.contrastText"
                        sx={{ fontSize: "0.9rem" }}
                      >
                        Click Here To Select &nbsp;
                        <Box
                          display="inline"
                          sx={{ fontSize: "1.1rem", fontWeight: 600 }}
                        >
                          Class Date
                        </Box>
                      </Typography>
                      <KeyboardDoubleArrowRightRoundedIcon
                        sx={{
                          color: "primary.contrastText",
                          width: 30,
                          height: 30,
                        }}
                      />
                    </Button>
                  </Box>
                </Grid>
              )}
            </Grid>
          </Box>
        </RadioGroup>
        <Box display="flex" justifyContent="center" pt={5}>
          <Box
            sx={{
              borderRadius: 2,
              backgroundColor: isDisabled ? "#2E72B359" : "primary.main",
            }}
            className="w-80 "
          >
            <Button
              color="info"
              size="medium"
              variant="contained"
              disabled={isDisabled}
              onClick={handleOpenClassDetails}
              sx={{
                textTransform: "none",
                lineHeight: 1.5,
                borderRadius: 2,
                backgroundColor: "primary.main",
              }}
              className="w-80 py-2"
            >
              <Typography
                variant="body1"
                color="primary.contrastText"
                sx={{ fontWeight: 500, fontSize: "1.1rem" }}
              >
                Continue
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
