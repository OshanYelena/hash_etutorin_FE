import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Card,
  CardContent,
  Rating,
  Checkbox,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { useRouter } from "next/navigation";

const oneTimeTag = "/images/one-time-tag.png";
const weeklyTag = "/images/weekly-tag.png";

interface CourseCardProps {
  courseImg: string;
  avatarImg: string;
  courseName: string;
  grade: string;
  educatorName: string;
  rating: number;
  noOfRatings?: number;
  description: string;
  tag?: string;
  classId: String
}

export default function CourseCard({
  courseImg,
  avatarImg,
  courseName,
  grade,
  educatorName,
  rating,
  noOfRatings,
  description,
  tag,
  classId
}: CourseCardProps) {
  const router = useRouter();
  const [addedTag, setAddedTag] = useState("");

  const handleOpenCourse = () => {
    router.push(`/subject/${classId}`);
  };

  useEffect(() => {
    console.log(typeof(tag))
    if (tag === "one_time") {
      setAddedTag(oneTimeTag);
    } else if (tag === "weekly") {
      setAddedTag(weeklyTag);
    }
  }, [tag]);

  return (
    <div role="button" onClick={handleOpenCourse}>
      <Card sx={{ width: "100%", height: 500, boxShadow: 10 }}>
        <Box textAlign="end" pr={3} pt={1}>
          <Checkbox
            icon={
              <FavoriteBorder
                sx={{
                  color: "secondary.semiDark",
                }}
              />
            }
            checkedIcon={
              <Favorite
                sx={{
                  color: "#669DD3",
                }}
              />
            }
          />
        </Box>
        <Box display="flex" justifyContent="center">
          <Box width={300} height={300}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${courseImg})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              {(tag === "one-time" || tag === "weekly") && (
                <Box display="flex" justifyContent="flex-end">
                  <img src={addedTag} alt="Img" width="181px" height="104px" />
                </Box>
              )}
            </Box>
          </Box>
        </Box>

        <CardContent sx={{ px: 3 }}>
          <Box display="flex" justifyContent="space-between">
            <Box>
              <Typography
                variant="h6"
                color="primary.darkBlue"
                sx={{ fontWeight: 800 }}
              >
                {courseName}
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 800,
                  fontSize: 16,
                  background:
                    "-webkit-linear-gradient(45deg, #280C9B, #FF00E6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {grade}
              </Typography>
              <Typography variant="body1" color="primary.main" fontSize={12}>
                {description.length <= 50
                  ? description
                  : description.slice(0, 50) + "..."}
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="space-between"
              width={120}
            >
              <Avatar
                alt="Display picture"
                src={avatarImg}
                sx={{
                  width: 100,
                  height: 100,
                  border: 5,
                  borderColor: "#fff",
                  mt: -8,
                }}
              />
              <Typography
                variant="body1"
                fontStyle="italic"
                color="#000000A6"
                fontSize={15}
                fontWeight={600}
              >
                {educatorName}
              </Typography>

              <Typography
                variant="body1"
                gutterBottom
                color="000000A6"
                fontSize={12}
              >
                <Rating
                  name="rating"
                  defaultValue={rating}
                  readOnly
                  icon={
                    <StarIcon
                      fontSize="inherit"
                      sx={{
                        color: "#FFC978",
                        width: 15,
                        height: 15,
                      }}
                    />
                  }
                  emptyIcon={
                    <StarIcon
                      fontSize="inherit"
                      sx={{
                        color: "secondary.semiDark",
                        width: 15,
                        height: 15,
                      }}
                    />
                  }
                  size="small"
                />
                <Box display="inline">({noOfRatings || 0})</Box>
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}
