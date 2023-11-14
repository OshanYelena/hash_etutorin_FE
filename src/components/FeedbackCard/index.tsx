import React from "react";
import {
  Box,
  Typography,
  CardMedia,
  CardContent,
  Card,
  Rating,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

interface FeedbackCardProps {
  imagePath: string;
  name: string;
  rating: number;
  feedback: string;
}

export default function FeedbackCard({
  imagePath,
  name,
  rating,
  feedback,
}: FeedbackCardProps) {
  return (
    <Card sx={{ maxWidth: 600, display: "flex", p: 5, boxShadow: 10 }}>
      <CardMedia
        component="img"
        height={10}
        image={imagePath}
        alt="Student Image"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent>
          <Box sx={{ textAlign: "end" }} color="primary.dark" pb={2}>
            <Typography
              variant="h6"
              gutterBottom
              color="primary.dark"
              sx={{ fontWeight: 700 }}
            >
              {name}
            </Typography>
            <Rating
              name="rating"
              defaultValue={rating}
              readOnly
              icon={
                <StarIcon
                  fontSize="inherit"
                  sx={{
                    color: "#FFC978",
                  }}
                />
              }
              emptyIcon={
                <StarIcon
                  fontSize="inherit"
                  sx={{
                    color: "secondary.semiDark",
                  }}
                />
              }
            />
          </Box>
          <Box textAlign="start">
            <Typography
              variant="body2"
              fontSize={15}
              color="text.secondary"
              sx={{ lineHeight: 1.5 }}
            >
              {feedback}
            </Typography>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}
