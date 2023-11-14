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
import AddIcon from "@mui/icons-material/Add";

interface LimitedTextareaProps {
  value: string;
  limit: number;
  rows?: number;
  placeholder?: string;
  onChange: (
    text: string
  ) => void | ((event: React.ChangeEvent<HTMLInputElement>) => void);
}

const LimitedTextarea = ({
  value,
  limit,
  placeholder,
  rows,
  onChange,
}: LimitedTextareaProps) => {
  const [content, setContent] = React.useState(value.slice(0, limit));

  const setFormattedContent = React.useCallback(
    (text: string) => {
      const formattedText = text.slice(0, limit);
      setContent(formattedText);
      onChange(formattedText);
    },
    [limit, onChange]
  );

  return (
    <Box sx={{ width: "100%" }}>
      <InputBase
        multiline
        rows={rows}
        sx={{ flex: 1, fontSize: 16 }}
        onChange={(event) => setFormattedContent(event.target.value)}
        value={value}
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

interface FAQProps {
  question: string;
  answer: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Is that any example vedio or something, please share?",
    answer: "Lorem ipsum dolor sit amet consectetu.",
  },
  {
    question: "Is that any example vedio or something, please share?",
    answer: "Lorem ipsum dolor sit amet consectetu.",
  },
];

export default function CreateClassDesFAQSection() {
  const [alignment, setAlignment] = useState("left");
  const [formats, setFormats] = useState(() => ["normal"]);
  const [addFAQ, setAddFAQ] = useState(false);
  const [FAQListUpdated, setFAQListUpdated] = useState<FAQProps[]>(FAQList);
  const [faq, setFAQ] = useState({ question: "", answer: "" });
  const [description, setDescription] = useState("");

  const handleAddFAQ = () => {
    if (faq.question && faq.answer) {
      setFAQListUpdated([...FAQList, faq]);
      setFAQ({ question: "", answer: "" });
      toggleAddFAQ();
    }
  };

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

  const toggleAddFAQ = () => {
    setAddFAQ(!addFAQ);
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
    <Box py={5}>
      <Typography
        variant="h5"
        color="primary.darkBlue"
        sx={{ fontWeight: 600, fontSize: 22 }}
      >
        Description
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
        }}
      >
        <LimitedTextarea
          limit={1000}
          value={description}
          rows={6}
          onChange={(text: string) => setDescription(text)}
        />
      </Box>
      <Box py={5}>
        <Typography
          variant="h5"
          color="primary.darkBlue"
          sx={{ fontWeight: 600, fontSize: 22 }}
        >
          Frequently Ask Questions
        </Typography>
        <Typography
          variant="body1"
          color="primary.dark"
          sx={{ fontSize: 16, py: 2 }}
          className="tracking-wide"
        >
          Organize your go-to freelancers and favorite services into custom
          lists you can easily access and share with your team.
        </Typography>
        {FAQListUpdated.map((item, index) => (
          <Box
            key={index}
            sx={{
              borderColor: "#969696",
              border: 1,
              borderRadius: 2.5,
              px: 5,
              py: 3,
              mb: 2,
            }}
          >
            <Typography
              variant="body1"
              color="#000000BF"
              sx={{ fontSize: 18, fontWeight: 700 }}
              className="tracking-wide"
            >
              {item.question}
            </Typography>
            <Typography
              variant="body1"
              color="#808080"
              sx={{ fontSize: 16, py: 1, px: 5 }}
              className="tracking-wide"
            >
              {item.answer}
            </Typography>
          </Box>
        ))}

        {!addFAQ && (
          <Box
            sx={{
              borderRadius: 2,
              backgroundColor: "primary.main",
            }}
            className="w-64 "
            mt={5}
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
              onClick={toggleAddFAQ}
              className="w-64 py-2"
              endIcon={<AddIcon sx={{ color: "#fff", ml: 15 }} />}
            >
              <Typography
                variant="body1"
                color="primary.contrastText"
                sx={{ fontWeight: 500, fontSize: "0.8rem" }}
              >
                Add Frequent
              </Typography>
            </Button>
          </Box>
        )}
        {addFAQ && (
          <Box sx={{ backgroundColor: "#E2E2E6", py: 2, px: 5, mt: 5 }}>
            <Box
              sx={{
                my: 3,
                py: 1,
                px: 2,
                borderRadius: 2.5,
                color: "#808080",
                width: "100%",
                backgroundColor: "#fff",
              }}
            >
              <LimitedTextarea
                limit={400}
                value={faq.question}
                placeholder="Add a Question"
                rows={3}
                onChange={(text: string) => setFAQ({ ...faq, question: text })}
              />
            </Box>
            <Box
              sx={{
                mb: 3,
                mt: 5,
                py: 1,
                px: 2,
                borderRadius: 2.5,
                color: "#808080",
                width: "100%",
                backgroundColor: "#fff",
              }}
            >
              <LimitedTextarea
                limit={400}
                value={faq.answer}
                placeholder="Add a Answer"
                rows={5}
                onChange={(text: string) => setFAQ({ ...faq, answer: text })}
              />
            </Box>
            <Box display="flex" justifyContent="flex-end">
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  sx={{
                    textTransform: "none",
                    lineHeight: 1.5,
                    backgroundColor: "primary.main",
                    mr: 1,
                  }}
                  className="w-60 py-2 rounded-full"
                  color="inherit"
                  onClick={toggleAddFAQ}
                >
                  <Typography
                    variant="body1"
                    color="primary.main"
                    sx={{ fontWeight: 600, fontSize: "0.9rem" }}
                  >
                    Cancel
                  </Typography>
                </Button>

                <Box
                  sx={{
                    backgroundColor: "primary.main",
                    borderRadius: 2,
                  }}
                  className="w-60 "
                >
                  <Button
                    color="info"
                    size="medium"
                    variant="contained"
                    onClick={handleAddFAQ}
                    sx={{
                      textTransform: "none",
                      lineHeight: 1.5,
                      backgroundColor: "primary.main",
                      borderRadius: 2,
                    }}
                    className="w-60 py-2 "
                  >
                    <Typography
                      variant="body1"
                      color="primary.contrastText"
                      sx={{ fontWeight: 500, fontSize: "0.9rem" }}
                    >
                      Add
                    </Typography>
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}
