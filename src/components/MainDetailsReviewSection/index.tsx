import React, { useState } from "react";
import { Box, Grid, Typography, Avatar, Rating, Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

interface ReviewProps {
  name: string;
  image: string;
  rating: number;
  review: string;
}
const Reviews: ReviewProps[] = [
  {
    name: "Lorem Ipsum",
    image: "/images/student2.png",
    rating: 3,
    review:
      "dolor sit amet consectetur. Augue lacus aenean sollicitudin ultrices iaculis non.",
  },
  {
    name: "Lorem Ipsum",
    image: "/images/teacher1.png",
    rating: 3,
    review:
      "dolor sit amet consectetur. Augue lacus aenean sollicitudin ultrices iaculis non.",
  },
  {
    name: "Lorem Ipsum",
    image: "/images/teacher3.png",
    rating: 3,
    review:
      "dolor sit amet consectetur. Augue lacus aenean sollicitudin ultrices iaculis non.",
  },
  {
    name: "Lorem Ipsum",
    image: "/images/student2.png",
    rating: 3,
    review:
      "dolor sit amet consectetur. Augue lacus aenean sollicitudin ultrices iaculis non.",
  },
  {
    name: "Lorem Ipsum",
    image: "/images/teacher3.png",
    rating: 3,
    review:
      "dolor sit amet consectetur. Augue lacus aenean sollicitudin ultrices iaculis non.",
  },
];

export default function MainDetailsReviewSection() {
  const [shownReviewList, setShownReviewList] = useState<ReviewProps[]>(
    Reviews.slice(0, 3)
  );
  const [showAllReviews, setShowAllReviews] = useState(false);

  const handleClick = () => {
    if (showAllReviews) {
      setShownReviewList(Reviews.slice(0, 3));
    } else {
      setShownReviewList(Reviews);
    }

    setShowAllReviews(!showAllReviews);
  };

  return (
    <Box px={3}>
      <Typography
        variant="h5"
        color="primary.main"
        pt={5}
        sx={{ fontWeight: 700, fontSize: "1.5rem" }}
      >
        Reviews
      </Typography>
      <Typography py={2} variant="body1" color="primary.dark" fontSize={18}>
        <Box display="inline" fontWeight="bold">
          210
        </Box>{" "}
        Reviews for this class
      </Typography>

      {shownReviewList.map((item, index) => (
        <Box py={2} mb={2} key={index}>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Avatar
                alt="Display picture"
                src={item.image}
                sx={{
                  width: 70,
                  height: 70,
                }}
              />
            </Grid>
            <Grid item xs={10}>
              <Typography
                variant="body1"
                color="primary.dark"
                fontSize={18}
                fontWeight={600}
              >
                {item.name}
              </Typography>
              <Rating
                name="rating"
                defaultValue={item.rating}
                readOnly
                icon={
                  <StarIcon
                    fontSize="inherit"
                    sx={{
                      color: "#FFC978",
                      width: 20,
                      height: 20,
                    }}
                  />
                }
                emptyIcon={
                  <StarIcon
                    fontSize="inherit"
                    sx={{
                      color: "secondary.semiDark",
                      width: 20,
                      height: 20,
                    }}
                  />
                }
              />
              <Typography
                variant="body1"
                pt={0.5}
                color="primary.dark"
                fontSize={16}
              >
                {item.review}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      ))}

      <Box display="flex" justifyContent="flex-end">
        <Button
          color="info"
          size="medium"
          sx={{
            textTransform: "none",
          }}
          onClick={handleClick}
        >
          <Typography
            variant="body1"
            color="primary.main"
            sx={{ fontWeight: 500, fontSize: "1.1rem" }}
          >
            {showAllReviews ? "See less" : "See all"}
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}
