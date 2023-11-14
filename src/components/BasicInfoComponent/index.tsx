import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Button,
  TextField,
  FormControl,
  InputLabel,
  InputBase,
  MenuItem,
  IconButton,
  Backdrop,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { CountryDropdown } from "react-country-region-selector";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import CameraEnhanceRoundedIcon from "@mui/icons-material/CameraEnhanceRounded";
import ProfilePicEditComponent from "../ProfilePicEditComponent";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ConfirmChangesPopup from "../ConfirmChangesPopup";
import SavedSuccessfulComponent from "../SavedSuccessfulComponent";

const NameInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 10,
    position: "relative",
    backgroundColor: "#E7E7E7",
    fontSize: 14,
    width: "100%",
    padding: "10px 12px",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {},
    color: "#808080",
  },
}));

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

interface BasicInfoProps {
  educator?: boolean;
}

export default function BasicInfoComponent({ educator }: BasicInfoProps) {
  const [country, setCountry] = useState("");
  const [grade, setGrade] = useState("");
  const [subject, setSubject] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [editDP, setEditDP] = useState(false);
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [openSavedSuccessful, setOpenSavedSuccessful] = useState(false);

  const handleChangeGrade = (event: SelectChangeEvent) => {
    setGrade(event.target.value as string);
  };

  const handleChangeSubject = (event: SelectChangeEvent) => {
    setSubject(event.target.value as string);
  };

  const handleOpenEditDP = () => {
    setEditDP(true);
  };

  const handleCloseEditDP = () => {
    setEditDP(false);
  };

  const handleCloseConfirm = () => {
    setOpenConfirmation(false);
  };

  const handleOpenConfirm = () => {
    setOpenConfirmation(true);
  };

  const handleCloseSavedSuccesfful = () => {
    setOpenSavedSuccessful(false);
  };

  const handleOpenSavedSuccesful = () => {
    setOpenSavedSuccessful(true);
    setOpenConfirmation(false);
  };

  return (
    <Box sx={{ backgroundColor: "#ffffff" }} px={10} mt={-30}>
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
      >
        <Avatar
          alt="Avatar Image"
          src="/images/educator1.jpg"
          sx={{
            width: 200,
            height: 200,
            border: 5,
            borderColor: "#ffffff",
            mt: -10,
          }}
        />
        <Box
          mt={-4}
          ml={12}
          sx={{
            backgroundColor: "primary.main",
            width: 45,
            height: 45,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="rounded-full z-40"
        >
          <IconButton onClick={handleOpenEditDP}>
            <CameraEnhanceRoundedIcon sx={{ width: 25, height: 25 }} />
          </IconButton>
        </Box>
      </Box>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={editDP}
      >
        <ProfilePicEditComponent handleCloseEditDP={handleCloseEditDP} />
      </Backdrop>
      <Box sx={{ textAlign: "left" }} py={5}>
        <Typography
          variant="h5"
          gutterBottom
          color={educator ? "primary.darkBlue" : "primary.main"}
          pb={2}
          fontSize={20}
          fontWeight={600}
        >
          Basic Information
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{
            display: "grid",
            gridTemplateColumns: { sm: "1fr 1fr" },
            gap: 10,
          }}
        >
          <FormControl variant="standard">
            <InputLabel shrink htmlFor="bootstrap-input">
              <Typography variant="body1" color="#808080" fontSize={20}>
                First name
              </Typography>
            </InputLabel>
            <NameInput defaultValue="First Name" id="name-input" />
          </FormControl>
          <FormControl variant="standard">
            <InputLabel shrink htmlFor="bootstrap-input">
              <Typography variant="body1" color="#808080" fontSize={20}>
                Last name
              </Typography>
            </InputLabel>
            <NameInput defaultValue="Last Name" id="name-input" />
          </FormControl>
        </Box>
        {educator && (
          <Box
            component="form"
            noValidate
            sx={{
              display: "grid",
              gridTemplateColumns: { sm: "1fr 1fr" },
              gap: 10,
            }}
            pt={3}
          >
            <FormControl variant="standard" fullWidth>
              <InputLabel shrink htmlFor="bootstrap-input">
                <Typography variant="body1" color="#808080" fontSize={20}>
                  Occupation
                </Typography>
              </InputLabel>
              <Box display="flex" alignItems="center">
                <Box
                  sx={{
                    border: 1,
                    borderColor: "#2E72B3B2",
                    borderRadius: 2.5,
                    color: "#808080",
                    width: "100%",
                    marginTop: 3,
                  }}
                >
                  <TextField
                    fullWidth
                    variant="outlined"
                    sx={{
                      color: "#808080",
                      ".MuiOutlinedInput-notchedOutline": {
                        border: ` none !important`,
                      },
                      fontSize: 13,
                    }}
                    size="small"
                  />
                </Box>
                <InfoOutlinedIcon sx={{ color: "#A0A0A0", mt: 3, ml: 1 }} />
              </Box>
            </FormControl>
            <FormControl variant="standard" fullWidth>
              <InputLabel shrink htmlFor="bootstrap-input">
                <Typography variant="body1" color="#808080" fontSize={20}>
                  Language
                </Typography>
              </InputLabel>
              <Box display="flex" alignItems="center">
                <Box
                  sx={{
                    border: 1,
                    borderColor: "#2E72B3B2",
                    borderRadius: 2.5,
                    color: "#808080",
                    width: "100%",
                    marginTop: 3,
                  }}
                >
                  <TextField
                    fullWidth
                    variant="outlined"
                    sx={{
                      color: "#808080",
                      ".MuiOutlinedInput-notchedOutline": {
                        border: ` none !important`,
                      },
                      fontSize: 13,
                    }}
                    size="small"
                  />
                </Box>
                <InfoOutlinedIcon sx={{ color: "#A0A0A0", mt: 3, ml: 1 }} />
              </Box>
            </FormControl>
          </Box>
        )}

        <Box py={3}>
          <FormControl variant="standard" fullWidth>
            <InputLabel shrink htmlFor="bootstrap-input">
              <Typography variant="body1" color="#808080" fontSize={20}>
                Country
              </Typography>
            </InputLabel>

            <Box
              sx={{
                py: 1,
                border: 1,
                borderColor: "#2E72B3B2",
                borderRadius: 2.5,
                px: 1,
                color: "#808080",
                fontSize: 14,
                width: "100%",
                marginTop: 3,
              }}
            >
              <CountryDropdown
                value={country}
                onChange={(val) => setCountry(val)}
                classes=" border-none w-full"
              />
            </Box>
          </FormControl>{" "}
        </Box>
        <Box pb={3}>
          <FormControl variant="standard" fullWidth>
            <InputLabel shrink htmlFor="bootstrap-input">
              <Typography variant="body1" color="#808080" fontSize={20}>
                Grade
              </Typography>
            </InputLabel>
            <Box
              sx={{
                border: 1,
                borderColor: "#2E72B3B2",
                borderRadius: 2.5,
                color: "#808080",
                width: "100%",
                marginTop: 3,
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
          </FormControl>
        </Box>

        <Box pb={3}>
          <FormControl variant="standard" fullWidth>
            <InputLabel shrink htmlFor="bootstrap-input">
              <Typography variant="body1" color="#808080" fontSize={20}>
                Subject
              </Typography>
            </InputLabel>
            <Box
              sx={{
                border: 1,
                borderColor: "#2E72B3B2",
                borderRadius: 2.5,
                color: "#808080",
                width: "100%",
                marginTop: 3,
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
          </FormControl>
        </Box>

        <Box pb={3}>
          <FormControl variant="standard" fullWidth>
            <InputLabel shrink htmlFor="bootstrap-input">
              <Typography variant="body1" color="#808080" fontSize={20}>
                Description
              </Typography>
            </InputLabel>
            <Box
              sx={{
                border: 1,
                borderColor: "#2E72B3B2",
                borderRadius: 2.5,
                color: "#808080",
                width: "100%",
                marginTop: 3,
              }}
            >
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Write about you"
                multiline
                rows={5}
                sx={{
                  color: "#808080",
                  ".MuiOutlinedInput-notchedOutline": {
                    border: ` none !important`,
                  },
                  fontSize: 13,
                }}
              />
            </Box>
          </FormControl>
        </Box>

        <Box display="flex" justifyContent="flex-end">
          <Box
            sx={{
              borderRadius: 2,
              // backgroundColor: isDisabled ? "#2E72B359" : "primary.main",
              backgroundColor: "primary.main",
            }}
            className="w-80 "
          >
            <Button
              color="info"
              size="medium"
              variant="contained"
              onClick={handleOpenConfirm}
              // disabled={isDisabled}
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
                Save
              </Typography>
            </Button>
          </Box>
        </Box>

        <Backdrop
          sx={{
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={openConfirmation}
        >
          <ConfirmChangesPopup
            handleSave={handleOpenSavedSuccesful}
            handleClose={handleCloseConfirm}
          />
        </Backdrop>

        <Backdrop
          sx={{
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={openSavedSuccessful}
        >
          <SavedSuccessfulComponent handleClose={handleCloseSavedSuccesfful} />
        </Backdrop>
      </Box>
    </Box>
  );
}
