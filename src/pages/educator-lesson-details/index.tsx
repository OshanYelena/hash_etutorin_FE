import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Breadcrumbs,
  Button,
  Pagination,
  PaginationItem,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
import Image from "next/image";
import ResourceCard from "@/components/ResourceCard";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ClassHistoryCard from "@/components/ClassHistoryCard";
import AddIcon from "@mui/icons-material/Add";
import AddResourceComponent from "@/components/AddResourceComponent";
import AnnouncementSection from "@/components/AnnouncementSection";
import { useRouter } from "next/navigation";
import { NoSsr } from "@mui/base/NoSsr";

function BackButton() {
  return (
    <ArrowBackIosNewRoundedIcon
      sx={{ color: "primary.main", width: 15, height: 15 }}
    />
  );
}

function NextButton() {
  return (
    <ArrowForwardIosRoundedIcon
      sx={{ color: "primary.main", width: 15, height: 15 }}
    />
  );
}

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const paginationPageSize = 4;

export default function EducatorLessonDetails() {
  const router = useRouter();
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: paginationPageSize,
  });

  const [resources, setResources] = useState<ResourcesProps[]>([]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    const from = (page - 1) * paginationPageSize;
    const to = (page - 1) * paginationPageSize + paginationPageSize;

    setPagination({ ...pagination, from: from, to: to });
  };

  const handleOpenStudentList = () => {
    router.push("/student-participants");
  };

  const handleJoinSession = () => {
    router.push("/join-session");
  };

  useEffect(() => {
    setPagination({ ...pagination, count: Resources.length });
    setResources(Resources.slice(pagination.from, pagination.to));
  }, [pagination.from, pagination.to]);

  return (
    <Box sx={{ backgroundColor: "#fff" }}>
      <NoSsr>
        <Box py={5}>
          <Box px={10}>
            <div role="presentation" onClick={handleClick}>
              <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/">
                  <HomeIcon
                    sx={{ color: "#ADADADE5", width: 25, height: 25 }}
                    fontSize="inherit"
                  />
                </Link>
                <Link color="inherit" href="/educator-details[me]">
                  <Typography
                    variant="body1"
                    color="#7C7C7C"
                    fontSize={15}
                    fontWeight={300}
                  >
                    My Profile
                  </Typography>
                </Link>
                <Box sx={{ backgroundColor: "#2E72B31A" }} p={1}>
                  <Typography
                    sx={{ display: "flex", alignItems: "center" }}
                    color="primary.main"
                  >
                    <Box fontWeight="bold" display="inline">
                      Biology - &nbsp;
                    </Box>
                    Anastasi Shelly
                  </Typography>
                </Box>
              </Breadcrumbs>
            </div>
          </Box>
          <Box py={3} px={10}>
            <Grid container columnSpacing={2}>
              <Grid item xs={2}>
                <Box pr={2}>
                  <Image
                    src="/images/science2.jpg"
                    alt="Img"
                    width={200}
                    height={150}
                  />
                </Box>
              </Grid>
              <Grid item xs={5}>
                <Box pt={1} px={1}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontWeight: 700, fontSize: "1.8rem" }}
                    color="primary.main"
                  >
                    0234 | Biology&nbsp;
                    <Box fontWeight="bold" color="#760C9BCC" display="inline">
                      | Grade 12
                    </Box>
                  </Typography>
                  <Box display="flex" alignItems="center" pt={2} pb={2} pr={20}>
                    <Button
                      size="medium"
                      variant="outlined"
                      sx={{
                        textTransform: "none",
                        lineHeight: 1.5,
                        borderRadius: 3,
                      }}
                      className=" w-full py-2"
                      onClick={handleOpenStudentList}
                    >
                      <Typography
                        variant="body1"
                        color="primary.man"
                        sx={{ fontWeight: 500 }}
                      >
                        Student Details
                      </Typography>
                    </Button>
                  </Box>
                  <Box display="flex" alignItems="center" pt={1} pb={2} pr={20}>
                    <Box
                      sx={{
                        borderRadius: 3,
                        backgroundColor: "primary.main",
                      }}
                      className="w-full"
                    >
                      <Button
                        size="medium"
                        variant="contained"
                        color="info"
                        onClick={handleJoinSession}
                        sx={{
                          textTransform: "none",
                          lineHeight: 1.5,
                          borderRadius: 3,
                          backgroundColor: "primary.main",
                        }}
                        className=" w-full py-2"
                      >
                        <Typography
                          variant="body1"
                          color="primary.contrastText"
                          sx={{ fontWeight: 500 }}
                        >
                          Join to the Session
                        </Typography>
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={5}>
                <Box
                  sx={{
                    background: "linear-gradient(to right, #238DF2, #280C9B)",
                  }}
                  py={2}
                  px={4}
                >
                  <Typography
                    variant="body1"
                    gutterBottom
                    color="primary.contrastText"
                    sx={{ fontWeight: 500 }}
                  >
                    Date
                  </Typography>
                  <Typography
                    variant="h6"
                    gutterBottom
                    color="primary.contrastText"
                    sx={{ fontWeight: 700, fontSize: "1.8rem", pl: 5 }}
                  >
                    12. 06. 2023 - Monday
                  </Typography>
                  <Grid container spacing={2} sx={{ pt: 2, pb: 1 }}>
                    <Grid item xs={4}>
                      <Box
                        sx={{
                          backgroundColor: "#FFFFFF4D",
                        }}
                        textAlign="center"
                        py={1}
                      >
                        <Typography
                          variant="h6"
                          color="primary.contrastText"
                          fontWeight={700}
                          fontSize="1rem"
                        >
                          <Box sx={{ fontSize: "1.5rem" }} display="inline">
                            21
                          </Box>{" "}
                          Days
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Box
                        sx={{
                          backgroundColor: "#FFFFFF4D",
                        }}
                        textAlign="center"
                        py={1}
                      >
                        <Typography
                          variant="h6"
                          color="primary.contrastText"
                          fontWeight={700}
                          fontSize="1rem"
                        >
                          <Box sx={{ fontSize: "1.5rem" }} display="inline">
                            09
                          </Box>{" "}
                          Hours
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Box
                        sx={{
                          backgroundColor: "#FFFFFF4D",
                        }}
                        textAlign="center"
                        py={1}
                      >
                        <Typography
                          variant="h6"
                          color="primary.contrastText"
                          fontWeight={700}
                          fontSize="1rem"
                        >
                          <Box sx={{ fontSize: "1.5rem" }} display="inline">
                            31
                          </Box>{" "}
                          Minutes
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Add new Announcement section */}
          <AnnouncementSection />

          {/* Resources Section */}
          <Box py={3} px={10}>
            <Typography
              variant="h5"
              gutterBottom
              color="primary.main"
              pb={2}
              sx={{ fontWeight: 700, fontSize: "1.8rem" }}
            >
              Resources
            </Typography>

            <AddResourceComponent />

            <Box
              sx={{
                borderRadius: 2,
                background: "linear-gradient(to right, #2E72B3E5, #280C9BE5)",
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
                  background: "linear-gradient(to right, #2E72B3E5, #280C9BE5)",
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
                  Add More
                </Typography>
              </Button>
            </Box>

            {/* {resources.map((resource, index) => (
            <Box key={index} mb={2}>
              <ResourceCard
                id={resource.id}
                title={resource.title}
                date={resource.date}
              />
            </Box>
          ))}
          <Box sx={{ pt: 2 }} display="flex" justifyContent="flex-end">
            <Pagination
              renderItem={(item) => (
                <PaginationItem
                  slots={{ previous: BackButton, next: NextButton }}
                  {...item}
                />
              )}
              sx={{
                color: "primary.main",
                button: { color: "primary.main", borderColor: "primary.main" },
                "& li .Mui-selected": {
                  color: "primary.contrastText",
                  backgroundColor: "primary.main",
                },
                "& li .Mui-selected:hover": {
                  backgroundColor: "info.main",
                },
              }}
              count={Math.ceil(pagination.count / paginationPageSize)}
              onChange={handlePageChange}
              variant="outlined"
              shape="rounded"
              color="primary"
            />
          </Box> */}
          </Box>

          {/* Class History Section */}
          <Box py={3} px={10}>
            <Typography
              variant="h5"
              gutterBottom
              color="#760C9B"
              pb={2}
              sx={{ fontWeight: 600, fontSize: "1.8rem" }}
            >
              Class History
            </Typography>
            <Box
              sx={{
                overflow: "hidden",
                overflowY: "scroll",
                "::-webkit-scrollbar": {
                  width: "0.6rem",
                },

                "::-webkit-scrollbar-thumb": {
                  backgroundColor: "#ADADADB2",

                  borderRadius: 5,
                },
              }}
              height={700}
              pr={2}
              pt={2}
            >
              {ClassHistoryList.map((item, index) => (
                <Box key={index} mb={2}>
                  <ClassHistoryCard
                    date={item.date}
                    day={item.day}
                    title={item.title}
                    time={item.time}
                    description={item.description}
                    image={item.image}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </NoSsr>
    </Box>
  );
}

interface ResourcesProps {
  id: number;
  title: string;
  date: string;
}
const Resources: ResourcesProps[] = [
  {
    id: 1,
    title: "Theories of Nationalism.pdf",
    date: "18.06.2023 Thursday",
  },
  {
    id: 2,
    title: "Theories of Nationalism.pdf",
    date: "18.06.2023 Thursday",
  },
  {
    id: 3,
    title: "Theories of Nationalism.pdf",
    date: "18.06.2023 Thursday",
  },
  {
    id: 4,
    title: "Theories of Nationalism.pdf",
    date: "18.06.2023 Thursday",
  },
  {
    id: 5,
    title: "Theories of Nationalism.pdf",
    date: "18.06.2023 Thursday",
  },
  {
    id: 6,
    title: "Theories of Nationalism.pdf",
    date: "18.06.2023 Thursday",
  },
  {
    id: 7,
    title: "Theories of Nationalism.pdf",
    date: "18.06.2023 Thursday",
  },
];

interface ClassHistoyProps {
  date: string;
  day: string;
  title: string;
  time: string;
  description: string;
  image: string;
}

const ClassHistoryList: ClassHistoyProps[] = [
  {
    date: "Aug 23",
    day: "Monday",
    title: "Theories of Nationalism",
    time: "10:00 am - 11:00 am",
    description:
      "Lorem ipsum dolor sit amet consectetur. Augue lacus aenean sollicitudin ultrices iaculis non. Aliquam netus morbi enim eget egestas eleifend nisi. In nullam lectus nibh cras rhoncus quis.",
    image: "/images/science2.jpg",
  },
  {
    date: "Aug 23",
    day: "Monday",
    title: "Theories of Nationalism",
    time: "10:00 am - 11:00 am",
    description:
      "Lorem ipsum dolor sit amet consectetur. Augue lacus aenean sollicitudin ultrices iaculis non. Aliquam netus morbi enim eget egestas eleifend nisi. In nullam lectus nibh cras rhoncus quis.",
    image: "/images/science2.jpg",
  },
  {
    date: "Aug 23",
    day: "Monday",
    title: "Theories of Nationalism",
    time: "10:00 am - 11:00 am",
    description:
      "Lorem ipsum dolor sit amet consectetur. Augue lacus aenean sollicitudin ultrices iaculis non. Aliquam netus morbi enim eget egestas eleifend nisi. In nullam lectus nibh cras rhoncus quis.",
    image: "/images/science2.jpg",
  },
  {
    date: "Aug 23",
    day: "Monday",
    title: "Theories of Nationalism",
    time: "10:00 am - 11:00 am",
    description:
      "Lorem ipsum dolor sit amet consectetur. Augue lacus aenean sollicitudin ultrices iaculis non. Aliquam netus morbi enim eget egestas eleifend nisi. In nullam lectus nibh cras rhoncus quis.",
    image: "/images/science2.jpg",
  },
  {
    date: "Aug 23",
    day: "Monday",
    title: "Theories of Nationalism",
    time: "10:00 am - 11:00 am",
    description:
      "Lorem ipsum dolor sit amet consectetur. Augue lacus aenean sollicitudin ultrices iaculis non. Aliquam netus morbi enim eget egestas eleifend nisi. In nullam lectus nibh cras rhoncus quis.",
    image: "/images/science2.jpg",
  },
];
