import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  IconButton,
} from "@mui/material";
import RadioButtonCheckedRoundedIcon from "@mui/icons-material/RadioButtonCheckedRounded";
import RadioButtonUncheckedRoundedIcon from "@mui/icons-material/RadioButtonUncheckedRounded";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import KeyboardDoubleArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined";

interface TimeSlotProps {
  id: string;
  date: string;
  time: string;
}
const timeSlots: TimeSlotProps[] = [
  {
    id: "1",
    date: "24.05.2023 - Monday",
    time: "2.00PM To 4.00PM",
  },
  {
    id: "2",
    date: "24.05.2023 - Monday",
    time: "2.00PM To 4.00PM",
  },
  {
    id: "3",
    date: "24.05.2023 - Monday",
    time: "2.00PM To 4.00PM",
  },
  {
    id: "4",
    date: "24.05.2023 - Monday",
    time: "2.00PM To 4.00PM",
  },
];

interface SelectClassDateProps {
  dateValue: string;
  handleChangeDate: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectDate: () => void;
  handleClose?: () => void;
}

export default function SelectClassDate({
  dateValue,
  handleClose,
  handleChangeDate,
  handleSelectDate,
}: SelectClassDateProps) {
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (dateValue !== "0") {
      setIsDisabled(false);
    }
  }, [dateValue]);

  return (
    <Box pt={2} pb={5}>
      <Box sx={{ justifyContent: "flex-end", display: "flex" }}>
        <IconButton onClick={handleClose}>
          <CloseOutlinedIcon sx={{ color: "#000" }} />
        </IconButton>{" "}
      </Box>
      <Typography
        variant="h5"
        gutterBottom
        color="#ADADAD"
        sx={{ fontSize: "1.5rem", fontWeight: 600, pt: 10 }}
      >
        {" "}
        Select your &nbsp;
        <Box color="primary.main" display="inline" sx={{ fontWeight: 800 }}>
          Class Date
        </Box>
      </Typography>
      <Box py={5}>
        <RadioGroup
          aria-labelledby="classes-radio-group"
          name="classes-radio-buttons-group"
          value={dateValue}
          onChange={handleChangeDate}
        >
          {timeSlots.map((timeSlot, index) => (
            <Box
              key={index}
              sx={{
                ":hover": {
                  border: 2,
                  borderColor: "primary.main",
                  my: 1,
                },
                borderRadius: 2,
                border: dateValue === timeSlot.id ? 2 : 0,
                borderColor: "primary.main",
                py: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={2}>
                  <FormControlLabel
                    value={timeSlot.id}
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
                    label=""
                  />
                </Grid>
                <Grid item xs={5}>
                  <Typography variant="body1" color="#808080" fontSize={18}>
                    {timeSlot.date}
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography
                    variant="body1"
                    color="primary.dark"
                    fontSize={18}
                  >
                    {timeSlot.time}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          ))}
        </RadioGroup>
      </Box>
      <Box display="flex" justifyContent="center" pt={30}>
        <Box
          sx={{
            borderRadius: 2,
            background: isDisabled
              ? "linear-gradient(to right, #280C9B59, #49A1F459)"
              : "linear-gradient(to right, #280C9B, #49A1F4)",
          }}
          className="w-80 "
        >
          <Button
            color="info"
            size="medium"
            variant="contained"
            disabled={isDisabled}
            onClick={handleSelectDate}
            sx={{
              textTransform: "none",
              lineHeight: 1.5,
              borderRadius: 2,
              backgroundColor: "primary.main",
            }}
            className="w-80 py-2"
          >
            <KeyboardDoubleArrowLeftOutlinedIcon
              sx={{ color: "#fff", mr: 1 }}
            />
            <Typography
              variant="body1"
              color="primary.contrastText"
              sx={{ fontWeight: 500, fontSize: "1.1rem" }}
            >
              Go Back
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
