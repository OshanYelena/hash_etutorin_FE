import React, { useState } from "react";
import {
  Box,
  Typography,
  CardContent,
  CardActions,
  Card,
  Button,
  TextField,
  Grid,
  InputBase,
} from "@mui/material";
import DatePicker from "react-datepicker";
import DateRangeIcon from "@mui/icons-material/DateRange";
import "react-datepicker/dist/react-datepicker.css";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import AddIcon from "@mui/icons-material/Add";

const timeDifferenceErrorText = "Please enter 'Minimum One Hour'";

interface ClassPricingComponentProps {
  title: string;
  headerColor?: string;
}

export default function ClassPricingComponent({
  title,
  headerColor,
}: ClassPricingComponentProps) {
  const [date, setDate] = useState(new Date());
  const [count, setCount] = useState(1);

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setDate(date);
    }
  };

  const handleCountChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setCount((prev) => prev + 1);
  };

  const currday = (dayInDig: number) => {
    if (dayInDig === 1) {
      return "Monday";
    } else if (dayInDig === 2) {
      return "Tuesday";
    } else if (dayInDig === 3) {
      return "Wednesday";
    } else if (dayInDig === 4) {
      return "Thursday";
    } else if (dayInDig === 5) {
      return "Friday";
    } else if (dayInDig === 6) {
      return "Saturday";
    } else {
      return "Sunday";
    }
  };

  return (
    <Card className="w-full pb-20">
      <Box textAlign="center" sx={{ backgroundColor: headerColor }} py={4}>
        <Typography
          variant="h5"
          color={headerColor === "#2E72B333" ? "primary.main" : "#808080"}
          fontSize={18}
          fontWeight={600}
        >
          {title}
        </Typography>
      </Box>
      <CardContent sx={{ px: 3 }}>
        <Typography gutterBottom variant="body1" color="#ADADAD" fontSize={15}>
          Description
        </Typography>
        <TextField
          fullWidth
          id="standard-basic"
          variant="standard"
          sx={{ color: "#2E72B366", py: 5 }}
        />
        <Typography gutterBottom variant="body1" color="#ADADAD" fontSize={15}>
          Price
        </Typography>
        <TextField
          fullWidth
          id="standard-basic"
          variant="standard"
          sx={{ color: "#2E72B366", py: 5 }}
        />
        <Typography gutterBottom variant="body1" color="#ADADAD" fontSize={15}>
          Date & Time
        </Typography>
        {Array.from(Array(count).keys()).map((index) => (
          <Box key={index}>
            <Grid container spacing={2} mt={1}>
              <Grid item xs={6}>
                <Box
                  sx={{ border: "1px solid #2E72B366", borderRadius: 2 }}
                  display="flex"
                  alignItems="center"
                  px={1}
                  py={0.5}
                >
                  <InputBase
                    sx={{ flex: 1, fontSize: 13 }}
                    value={`${date
                      .toLocaleDateString("en-GB", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                      })
                      .split("/")
                      .reverse()
                      .join(".")}-${currday(date.getDay())}`}
                  />
                  <DatePicker
                    dateFormat="MMMM d, yyyy h:mm aa"
                    selected={date}
                    onChange={handleDateChange}
                    customInput={
                      <DateRangeIcon
                        sx={{ color: "primary.main", width: 15, height: 15 }}
                      />
                    }
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box display="flex" alignItems="center" gap={1}>
                  <Box
                    sx={{ border: "1px solid #2E72B366", borderRadius: 2 }}
                    display="flex"
                    alignItems="center"
                    px={1}
                    py={0.5}
                  >
                    <InputBase sx={{ flex: 1, fontSize: 13 }} />
                    <UnfoldMoreIcon
                      sx={{ color: "primary.main", width: 20, height: 20 }}
                    />
                  </Box>
                  <Typography
                    variant="body1"
                    color="primary.main"
                    fontSize={15}
                  >
                    To
                  </Typography>
                  <Box
                    sx={{ border: "1px solid #2E72B366", borderRadius: 2 }}
                    display="flex"
                    alignItems="center"
                    px={1}
                    py={0.5}
                  >
                    <InputBase sx={{ flex: 1, fontSize: 13 }} />
                    <UnfoldMoreIcon
                      sx={{ color: "primary.main", width: 20, height: 20 }}
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        ))}
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "flex-end", px: 3 }}>
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
            sx={{
              textTransform: "none",
              lineHeight: 1.5,
              borderRadius: 2,
              backgroundColor: "primary.main",
            }}
            onClick={handleCountChange}
            className="w-60 py-2"
            endIcon={<AddIcon sx={{ color: "#fff", ml: 15 }} />}
          >
            <Typography
              variant="body1"
              color="primary.contrastText"
              sx={{ fontWeight: 500, fontSize: "0.8rem" }}
            >
              Add More
            </Typography>
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}
