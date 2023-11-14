import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AddIcon from "@mui/icons-material/Add";

const Banks = [
  { bankId: 1, bankName: "Bank 1" },
  { bankId: 2, bankName: "Bank 2" },
  { bankId: 3, bankName: "Bank 3" },
  { bankId: 4, bankName: "Bank 4" },
  { bankId: 5, bankName: "Bank 5" },
  { bankId: 6, bankName: "Bank 6" },
];

export default function PaymentInfoComponent() {
  const [isDisabled, setIsDisabled] = useState(true);

  const [bank, setBank] = useState("");

  const handleChangeBank = (event: SelectChangeEvent) => {
    setBank(event.target.value as string);
  };

  return (
    <Box sx={{ backgroundColor: "#ffffff" }} px={10} mt={10}>
      <Box sx={{ textAlign: "left" }} py={5}>
        <Typography
          variant="h5"
          gutterBottom
          color="primary.darkBlue"
          pb={2}
          fontSize={20}
          fontWeight={600}
        >
          Payment Information
        </Typography>

        <Box pb={3}>
          <FormControl variant="standard" fullWidth>
            <InputLabel shrink htmlFor="bootstrap-input">
              <Typography variant="body1" color="#808080" fontSize={20}>
                Bank Name
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
                placeholder="Select your Bank"
                labelId="grade-label"
                id="demo-simple-select"
                color="primary"
                value={bank}
                onChange={handleChangeBank}
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
                {Banks.map((item, index) => (
                  <MenuItem
                    key={index}
                    value={item.bankId}
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
                    {item.bankName}
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
                Branch Name
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

        <Box pb={3}>
          <FormControl variant="standard" fullWidth>
            <InputLabel shrink htmlFor="bootstrap-input">
              <Typography variant="body1" color="#808080" fontSize={20}>
                Holder’s Account Number
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

        <Box pb={3}>
          <FormControl variant="standard" fullWidth>
            <InputLabel shrink htmlFor="bootstrap-input">
              <Typography variant="body1" color="#808080" fontSize={20}>
                Holder’s Name
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
        <Box
          sx={{
            borderRadius: 2,
            backgroundColor: "primary.main",
          }}
          className="w-80 "
          mb={5}
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
              display: "flex",
              justifyContent: "space-between",
              px: 3,
            }}
            //   onClick={handleCountChange}
            className="w-full py-2"
            endIcon={<AddIcon sx={{ color: "#fff" }} />}
          >
            <Typography
              variant="body1"
              color="primary.contrastText"
              sx={{ fontWeight: 500, fontSize: "1rem" }}
            >
              Add Another Account
            </Typography>
          </Button>
        </Box>

        <Box display="flex" justifyContent="flex-end" pt={3}>
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
      </Box>
    </Box>
  );
}
