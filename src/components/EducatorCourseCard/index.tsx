import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import { useRouter } from "next/navigation";

const oneTimeTag = "/images/one-time-tag.png";
const weeklyTag = "/images/weekly-tag.png";

interface CourseCardProps {
  courseImg: string;
  courseName: string;
  grade: string;
  description: string;
  tag?: string;
}

export default function EducatorCourseCard({
  courseImg,
  courseName,
  grade,
  description,
  tag,
}: CourseCardProps) {
  const router = useRouter();
  const [addedTag, setAddedTag] = useState("");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenViewMore = () => {
    setAnchorEl(null);
    router.push("/educator-lesson-details");
  };

  useEffect(() => {
    if (tag === "one-time") {
      setAddedTag(oneTimeTag);
    } else if (tag === "weekly") {
      setAddedTag(weeklyTag);
    }
  }, [tag]);

  return (
    <div role="button">
      <Card sx={{ width: "100%", height: 400, boxShadow: 10 }}>
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
              {/* {(tag === "one-time" || tag === "weekly") && (
              <Box display="flex" justifyContent="flex-end">
                <img src={addedTag} alt="Img" width="181px" height="104px" />
              </Box>
            )} */}
              <Box display="flex" justifyContent="flex-end" pt={2} pr={2}>
                <Box
                  sx={{
                    backgroundColor: "#00000040",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  className="rounded-full"
                  width={30}
                  height={30}
                >
                  <IconButton onClick={handleClick}>
                    <MoreVertRoundedIcon sx={{ color: "#fff" }} />
                  </IconButton>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem
                      onClick={handleClose}
                      sx={{
                        "&.MuiMenuItem-root:hover": {
                          backgroundColor: "#2E72B31A",
                          color: "primary.main",
                        },
                        "&.Mui-selected": {
                          backgroundColor: "#2E72B31A",
                          color: "primary.main",
                        },
                        "&.Mui-selected:hover": {
                          backgroundColor: "#2E72B31A",
                        },
                        color: "#808080",
                        px: 5,
                      }}
                    >
                      <Typography variant="body1">
                        Edit Class Details
                      </Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={handleOpenViewMore}
                      sx={{
                        "&.MuiMenuItem-root:hover": {
                          backgroundColor: "#2E72B31A",
                          color: "primary.main",
                        },
                        "&.Mui-selected": {
                          backgroundColor: "#2E72B31A",
                          color: "primary.main",
                        },
                        "&.Mui-selected:hover": {
                          backgroundColor: "#2E72B31A",
                        },
                        color: "#808080",
                        px: 5,
                      }}
                    >
                      <Typography variant="body1">View More</Typography>
                    </MenuItem>
                  </Menu>
                </Box>
              </Box>
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
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  fontSize: 16,
                  background:
                    "-webkit-linear-gradient(45deg, #280C9B, #FF00E6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {grade}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}
