import React from "react";
import {
  Box,
  Typography,
  Breadcrumbs,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
import { NoSsr } from "@mui/base/NoSsr";

function createData(id: string, name: string) {
  return { id, name };
}

const rows = [
  createData("0123", "John Smith"),
  createData("0123", "John Smith"),
  createData("0123", "John Smith"),
  createData("0123", "John Smith"),
  createData("0123", "John Smith"),
  createData("0123", "John Smith"),
];

export default function StudentParticipants() {
  return (
    <Box py={5} px={10}>
      <NoSsr>
        <div role="presentation">
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
            <Link color="inherit" href="/educator-details[me]">
              <Typography
                variant="body1"
                color="#7C7C7C"
                fontSize={15}
                fontWeight={300}
              >
                <Box fontWeight="bold" display="inline">
                  Biology - &nbsp;
                </Box>
                Anastasi Shelly
              </Typography>
            </Link>
            <Box sx={{ backgroundColor: "#2E72B31A" }} p={1}>
              <Typography
                sx={{ display: "flex", alignItems: "center" }}
                color="primary.main"
              >
                Student Details
              </Typography>
            </Box>
          </Breadcrumbs>
        </div>
        <Box py={2}>
          <Typography
            variant="h5"
            color="primary.main"
            sx={{ fontWeight: 600, fontSize: 22, my: 2 }}
          >
            Student Details
          </Typography>
          <Box width="40%">
            <TableContainer component={Paper}>
              <Table size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        borderBottom: "none",
                        backgroundColor: "#2E72B31A",
                        textAlign: "center",
                      }}
                    >
                      <Typography
                        variant="body1"
                        color="primary.dark"
                        sx={{ fontWeight: 600, fontSize: 16 }}
                      >
                        Student ID
                      </Typography>
                    </TableCell>

                    <TableCell
                      sx={{
                        borderBottom: "none",
                        backgroundColor: "#2E72B31A",
                        textAlign: "center",
                      }}
                      align="right"
                    >
                      <Typography
                        variant="body1"
                        color="primary.dark"
                        sx={{ fontWeight: 600, fontSize: 16 }}
                      >
                        Name
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ borderBottom: "none", textAlign: "center" }}
                      >
                        {row.id}
                      </TableCell>{" "}
                      <TableCell
                        align="right"
                        sx={{ borderBottom: "none", textAlign: "center" }}
                      >
                        {row.name}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </NoSsr>
    </Box>
  );
}
