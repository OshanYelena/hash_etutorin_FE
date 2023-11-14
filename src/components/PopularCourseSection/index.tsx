import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { useRouter } from "next/navigation";

interface CourseImagesProps {
  id: number;
  altText: string;
  path: string;
}

const CourseImages: CourseImagesProps[] = [
  {
    id: 1,
    altText: "english",
    path: "/images/english.png",
  },
  {
    id: 2,
    altText: "sinhala",
    path: "/images/sinhala.png",
  },
  {
    id: 3,
    altText: "media",
    path: "/images/media.png",
  },
  {
    id: 4,
    altText: "arts",
    path: "/images/arts.png",
  },
  {
    id: 5,
    altText: "maths",
    path: "/images/maths.png",
  },
  {
    id: 6,
    altText: "science",
    path: "/images/science.png",
  },
];

export default function PopularCourseSection() {
  const router = useRouter();

  const handleGotoCourse = () => {
    router.push("/course-[subject]/#popular");
  };
  return (
    <Box
      sx={{
        alignItems: "center",
        textAlign: "center",
      }}
      className="h-full"
      px={10}
      pt={5}
    >
      <Typography
        variant="h5"
        gutterBottom
        color="primary.darkBlue"
        className="uppercase"
        pb={2}
        sx={{ fontWeight: 700, fontSize: "1.8rem" }}
      >
        Popular Courses
      </Typography>

      <Box sx={{ flexGrow: 1 }} pb={5}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {CourseImages.map(({ id, altText, path }, index) => (
            <Grid item xs={2} sm={4} md={4} key={index} mt={0.5}>
              <Button onClick={handleGotoCourse}>
                <img className="w-96" src={path} alt={altText} />
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
