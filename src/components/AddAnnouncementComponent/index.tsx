import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  InputBase,
} from "@mui/material";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";

interface LimitedTextareaProps {
  value: string;
  limit: number;
  rows?: number;
  placeholder?: string;
}

const LimitedTextarea = ({
  value,
  limit,
  placeholder,
  rows,
}: LimitedTextareaProps) => {
  const [content, setContent] = React.useState(value.slice(0, limit));

  const setFormattedContent = React.useCallback(
    (text: string) => {
      setContent(text.slice(0, limit));
    },
    [limit, setContent]
  );

  return (
    <Box sx={{ width: "100%" }}>
      <InputBase
        multiline
        rows={rows}
        sx={{ flex: 1, fontSize: 16 }}
        onChange={(event) => setFormattedContent(event.target.value)}
        value={content}
        className="w-full"
        placeholder={placeholder}
      />

      <Box display="flex" justifyContent="flex-end">
        <Typography variant="body1" color="#ADADAD" sx={{ fontSize: 15 }}>
          {content.length}/{limit}
        </Typography>
      </Box>
    </Box>
  );
};

interface AddAnnouncementComponentProps {
  handleAddAnnouncement?: () => void;
}

export default function AddAnnouncementComponent({
  handleAddAnnouncement,
}: AddAnnouncementComponentProps) {
  const [alignment, setAlignment] = useState("left");
  const [formats, setFormats] = useState(() => ["normal"]);

  const handleChangeAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[]
  ) => {
    setFormats(newFormats);
  };

  const children = [
    <ToggleButton value="left" key="left">
      <FormatAlignLeftIcon sx={{ color: "#808080" }} />
    </ToggleButton>,
    <ToggleButton value="right" key="right">
      <FormatAlignRightIcon sx={{ color: "#808080" }} />
    </ToggleButton>,
  ];

  const control = {
    value: alignment,
    onChange: handleChangeAlignment,
    exclusive: true,
  };

  return (
    <Box>
      <Typography
        variant="h5"
        color="#808080"
        sx={{ fontWeight: 600, fontSize: 20, my: 2 }}
      >
        Add Your New Announcement
      </Typography>
      <Box display="flex" py={1}>
        {" "}
        <ToggleButtonGroup
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
          size="small"
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon sx={{ color: "#808080" }} />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon sx={{ color: "#808080" }} />
          </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup size="small" {...control} aria-label="Small sizes">
          {children}
        </ToggleButtonGroup>
      </Box>

      <Box
        sx={{
          my: 2,
          py: 1,
          px: 2,
          border: 1,
          borderColor: "#2E72B3B2",
          borderRadius: 2.5,
          color: "#808080",
          width: "100%",
          backgroundColor: "#fff",
        }}
      >
        <LimitedTextarea
          limit={1000}
          value=""
          rows={6}
          placeholder="Briefly describe"
        />
      </Box>
      <Box sx={{ display: "flex", py: 5, justifyContent: "flex-end" }}>
        <Button
          sx={{
            textTransform: "none",
            lineHeight: 1.5,
            borderRadius: 2,
            mr: 1,
          }}
          className="w-60 py-2 "
          color="inherit"
          onClick={handleAddAnnouncement}
        >
          <Typography
            variant="body1"
            color="#760C9B"
            sx={{ fontWeight: 600, fontSize: "1.1rem" }}
          >
            Cancel
          </Typography>
        </Button>

        <Box
          sx={{
            background: "linear-gradient(to right, #760C9BB8, #5844ACE5)",
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
              background: "linear-gradient(to right, #760C9BB8, #5844ACE5)",
            }}
            className="w-60 py-2 "
          >
            <Typography
              variant="body1"
              color="primary.contrastText"
              sx={{ fontWeight: 500, fontSize: "1.1rem" }}
            >
              Add{" "}
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
