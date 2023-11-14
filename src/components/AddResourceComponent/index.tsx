import React from "react";
import { Box, Divider, Typography, TextField, Button } from "@mui/material";
import EditCalendarRoundedIcon from "@mui/icons-material/EditCalendarRounded";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

export default function AddResourceComponent() {
  return (
    <Box
      sx={{
        border: 1,
        borderColor: "#00000059",
        borderRadius: 2,
        mt: 3,
        py: 2,
        px: 5,
      }}
      mb={5}
    >
      <Divider>
        <Typography
          variant="body1"
          color="primary.main"
          sx={{ fontWeight: 500, px: 5 }}
        >
          Friday Aug 27, 2023
        </Typography>
      </Divider>
      <Box
        mt={5}
        sx={{
          border: 1,
          borderColor: "#2E72B3B2",
          borderRadius: 2.5,
          color: "#808080",
          width: "100%",
        }}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        px={2}
      >
        <Box>
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
        <Box ml={2}>
          <EditCalendarRoundedIcon sx={{ color: "#ADADAD" }} />
        </Box>
      </Box>
      <Box
        mt={5}
        sx={{
          border: 1,
          borderColor: "#2E72B3B2",
          borderRadius: 2.5,
          color: "#808080",
          width: "100%",
        }}
        display="flex"
        justifyContent="space-between"
        px={2}
        pt={1}
      >
        <Box>
          <TextField
            multiline
            rows={3}
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
        <Box ml={2}>
          <EditCalendarRoundedIcon sx={{ color: "#ADADAD" }} />
        </Box>
      </Box>

      <Box
        mt={5}
        sx={{
          border: 1,
          borderStyle: "dashed",
          borderColor: "#2E72B3B2",
          borderRadius: 2.5,
          color: "#808080",
          width: "100%",
        }}
        display="flex"
        alignItems="center"
        flexDirection="column"
        px={2}
        py={3}
      >
        <FileUploadOutlinedIcon
          sx={{ color: "#ADADAD", width: 50, height: 50 }}
        />
        <Typography
          variant="body1"
          color="#ADADAD"
          pt={1}
          fontSize={15}
          fontStyle="italic"
        >
          Drag & Drop Files here
        </Typography>
      </Box>

      <Box sx={{ display: "flex", py: 5, justifyContent: "flex-end" }}>
        <Button
          sx={{
            textTransform: "none",
            lineHeight: 1.5,
            backgroundColor: "primary.main",
            borderRadius: 2,
            mr: 1,
          }}
          className="w-60 py-2 "
          color="inherit"
          // onClick={}
        >
          <Typography
            variant="body1"
            color="primary.main"
            sx={{ fontWeight: 600, fontSize: "1.1rem" }}
          >
            Back
          </Typography>
        </Button>

        <Box
          sx={{
            backgroundColor: "primary.main",
            borderRadius: 2,
          }}
          className="w-60"
        >
          <Button
            color="success"
            size="medium"
            variant="contained"
            // onClick={}
            sx={{
              textTransform: "none",
              lineHeight: 1.5,
              borderRadius: 2,
              backgroundColor: "primary.main",
            }}
            className="w-60 py-2 "
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
  );
}
