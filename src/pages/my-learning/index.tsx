import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  InputLabel,
  MenuItem,
  FormControl,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MyLearningTable from "@/components/MyLearningTable";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { NoSsr } from "@mui/base/NoSsr";
import { getClassByStudent } from "@/api/student";

const Grades = [
  "Grade 1",
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
  "Grade 6",
  "Grade 7",
  "Grade 8",
  "Grade 9",
  "Grade 10",
  "Grade 11",
  "Grade 12",
];
var userId: any;
if (typeof window !== "undefined") {
  console.log("You are on the browser");
  // 👉️ can use localStorage here

  userId = localStorage.getItem("userId");
} else {
  console.log("You are on the server");
  // 👉️ can't use localStorage
}

const Subjects = ["Maths", "Science", "English", "Physics", "Chemistry"];

const Date = ["20/08/2023", "02/10/2023", "28/09/2023"];

const Status = ["Completed", "Pending", "Ongoing"];

interface SelectComponentProps {
  label: string;
  menuItems: string[];
}

export function SelectComponent({ label, menuItems }: SelectComponentProps) {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 100 }}>
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Grade"
          onChange={handleChange}
          variant="outlined"
          sx={{ borderRadius: 2 }}
          IconComponent={() => (
            <KeyboardArrowDownRoundedIcon
              sx={{
                color: "#00000066",
                width: 30,
                height: 30,
                mr: 1,
              }}
            />
          )}
        >
          {menuItems.map((item, index) => (
            <MenuItem key={index} value={10}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default function MyLearningPage() {
  const [classes, setClasses] = useState(Array);

  const getClasses = async () => {
    setClasses(await getClassByStudent(userId));
  };

  useEffect(() => {
    getClasses();
    console.log(classes);
  }, []);
  return (
    <>
      {classes && (
        <Box>
          <NoSsr>
            <Box py={5} px={10}>
              <Typography
                variant="h5"
                gutterBottom
                color="primary.darkBlue"
                className="uppercase"
                sx={{ fontWeight: 700, fontSize: "1.8rem" }}
              >
                My Learning
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                color="secondary.dark"
                py={2}
                fontSize={20}
              >
                Filter by
              </Typography>
              <Grid container spacing={10} sx={{ mb: 5 }}>
                <Grid item xs={3}>
                  <SelectComponent label="Grades" menuItems={Grades} />
                </Grid>
                <Grid item xs={3}>
                  <SelectComponent label="Subjects" menuItems={Subjects} />
                </Grid>
                <Grid item xs={3}>
                  <SelectComponent label="Date" menuItems={Date} />
                </Grid>
                <Grid item xs={3}>
                  <SelectComponent label="Status" menuItems={Status} />
                </Grid>
              </Grid>
              <Box py={2}>
                <MyLearningTable courses={classes} />
              </Box>
            </Box>
          </NoSsr>
        </Box>
      )}
    </>
  );
}
