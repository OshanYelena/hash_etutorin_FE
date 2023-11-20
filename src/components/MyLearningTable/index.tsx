import * as React from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Typography from "@mui/material/Typography";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { visuallyHidden } from "@mui/utils";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import UnfoldMoreRoundedIcon from "@mui/icons-material/UnfoldMoreRounded";
import DonutLargeRoundedIcon from "@mui/icons-material/DonutLargeRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import { useRouter } from "next/navigation";

interface Data {
  teacher_name: string;
  grade: string;
  subject: string;
  date: string;
  time: string;
  status: string;
}

function createData(
  teacher_name: string,
  grade: string,
  subject: string,
  date: string,
  time: string,
  status: string
): Data {
  return {
    teacher_name,
    grade,
    subject,
    date,
    time,
    status,
  };
}

const rows = [
  createData(
    "Anne Shelly",
    "Grade 12",
    "Biology",
    "Monday",
    "2.00 PM",
    "Pending"
  ),
  createData(
    "Anne Shelly",
    "Grade 12",
    "Biology",
    "Monday",
    "2.00 PM",
    "Completed"
  ),
  createData(
    "Anne Shelly",
    "Grade 12",
    "Biology",
    "Monday",
    "2.00 PM",
    "Pending"
  ),
  createData(
    "Anne Shelly",
    "Grade 12",
    "Biology",
    "Monday",
    "2.00 PM",
    "Ongoing"
  ),
  createData(
    "Anne Shelly",
    "Grade 12",
    "Biology",
    "Monday",
    "2.00 PM",
    "Ongoing"
  ),
  createData(
    "Anne Shelly",
    "Grade 12",
    "Biology",
    "Monday",
    "2.00 PM",
    "Pending"
  ),
  createData(
    "Anne Shelly",
    "Grade 12",
    "Biology",
    "Monday",
    "2.00 PM",
    "Completed"
  ),
  createData(
    "Anne Shelly",
    "Grade 12",
    "Biology",
    "Monday",
    "2.00 PM",
    "Pending"
  ),
  createData(
    "Anne Shelly",
    "Grade 12",
    "Biology",
    "Monday",
    "2.00 PM",
    "Ongoing"
  ),
  createData(
    "Anne Shelly",
    "Grade 12",
    "Biology",
    "Monday",
    "2.00 PM",
    "Ongoing"
  ),
  createData(
    "Anne Shelly",
    "Grade 12",
    "Biology",
    "Monday",
    "2.00 PM",
    "Completed"
  ),
  createData(
    "Anne Shelly",
    "Grade 12",
    "Biology",
    "Monday",
    "2.00 PM",
    "Pending"
  ),
  createData(
    "Anne Shelly",
    "Grade 12",
    "Biology",
    "Monday",
    "2.00 PM",
    "Completed"
  ),
  createData(
    "Anne Shelly",
    "Grade 12",
    "Biology",
    "Monday",
    "2.00 PM",
    "Completed"
  ),
  createData(
    "Anne Shelly",
    "Grade 12",
    "Biology",
    "Monday",
    "2.00 PM",
    "Completed"
  ),
  createData(
    "Anne Shelly",
    "Grade 12",
    "Biology",
    "Monday",
    "2.00 PM",
    "Pending"
  ),
  createData(
    "Anne Shelly",
    "Grade 12",
    "Biology",
    "Monday",
    "2.00 PM",
    "Completed"
  ),
  createData(
    "Anne Shelly",
    "Grade 12",
    "Biology",
    "Monday",
    "2.00 PM",
    "Pending"
  ),
  createData(
    "Anne Shelly",
    "Grade 12",
    "Biology",
    "Monday",
    "2.00 PM",
    "Ongoing"
  ),
  createData(
    "Anne Shelly",
    "Grade 12",
    "Biology",
    "Monday",
    "2.00 PM",
    "Ongoing"
  ),
  createData(
    "Anne Shelly",
    "Grade 12",
    "Biology",
    "Monday",
    "2.00 PM",
    "Pending"
  ),
  createData(
    "Anne Shelly",
    "Grade 12",
    "Biology",
    "Monday",
    "2.00 PM",
    "Completed"
  ),
  createData(
    "Anne Shelly",
    "Grade 12",
    "Biology",
    "Monday",
    "2.00 PM",
    "Pending"
  ),
  createData(
    "Anne Shelly",
    "Grade 12",
    "Biology",
    "Monday",
    "2.00 PM",
    "Ongoing"
  ),
  createData(
    "Anne Shelly",
    "Grade 12",
    "Biology",
    "Monday",
    "2.00 PM",
    "Ongoing"
  ),
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "teacher_name",
    numeric: false,
    disablePadding: true,
    label: "Teacher's Name",
  },
  {
    id: "grade",
    numeric: true,
    disablePadding: false,
    label: "Grade",
  },
  {
    id: "subject",
    numeric: true,
    disablePadding: false,
    label: "Subject",
  },
  {
    id: "date",
    numeric: true,
    disablePadding: false,
    label: "Date",
  },
  {
    id: "time",
    numeric: true,
    disablePadding: false,
    label: "Time",
  },
  {
    id: "status",
    numeric: true,
    disablePadding: false,
    label: "Status",
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox" sx={{ borderBottom: "none" }} />
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="center"
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ borderBottom: "none" }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              <Box width={headCell.id === "teacher_name" ? 170 : 150}>
                <Typography
                  fontWeight={700}
                  component="div"
                  color="#000000D9"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {headCell.label}{" "}
                  <Box
                    flexDirection="column"
                    display="flex"
                    sx={{ marginLeft: "4px" }}
                  >
                    <KeyboardArrowUpRoundedIcon
                      sx={{
                        color: "#00000066",
                        width: 20,
                        height: 20,
                      }}
                    />
                    <KeyboardArrowDownRoundedIcon
                      sx={{
                        color: "#00000066",
                        width: 20,
                        height: 20,
                        mt: -1,
                      }}
                    />
                  </Box>{" "}
                </Typography>
              </Box>
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell padding="checkbox" sx={{ borderBottom: "none" }} />
      </TableRow>
    </TableHead>
  );
}

interface MyLearning {
  courses: any;
}

export default function MyLearningTable({ courses }: MyLearning) {
  const router = useRouter();
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("grade");
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = courses.map((n:any) => n.class_ids);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );

  const handleMyLearning = () => {
    router.push("/my-learning-read-more");
  };

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <TableContainer
        sx={{
          border: 1,
          borderColor: "#0000001A",
          borderRadius: 2,
          py: 2,
          mb: 2,
        }}
      >
        <Table
          sx={{ minWidth: 750, px: 10 }}
          size="small"
          aria-labelledby="tableTitle"
        >
          <EnhancedTableHead
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={rows.length}
          />
          <TableBody>
            {visibleRows.map((row, index) => {
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <TableRow
                  hover
                  onClick={(event) => handleClick(event, row.teacher_name)}
                  role="checkbox"
                  tabIndex={-1}
                  key={row.teacher_name}
                  sx={{ cursor: "pointer" }}
                >
                  <TableCell padding="checkbox" sx={{ borderBottom: "none" }} />
                  <TableCell
                    component="th"
                    id={labelId}
                    scope="row"
                    padding="checkbox"
                    sx={{ borderBottom: "none" }}
                  >
                    <Box width={170}>{row.teacher_name}</Box>
                  </TableCell>
                  <TableCell align="center" sx={{ borderBottom: "none" }}>
                    <Box width={150}>{row.grade}</Box>
                  </TableCell>
                  <TableCell align="center" sx={{ borderBottom: "none" }}>
                    <Box width={150}>{row.subject}</Box>
                  </TableCell>
                  <TableCell align="center" sx={{ borderBottom: "none" }}>
                    <Box width={150}>{row.date}</Box>
                  </TableCell>
                  <TableCell align="center" sx={{ borderBottom: "none" }}>
                    <Box width={150}>{row.time}</Box>
                  </TableCell>
                  <TableCell align="center" sx={{ borderBottom: "none" }}>
                    <Box width={150} display="flex" justifyContent="center">
                      <Box
                        sx={{
                          backgroundColor:
                            row.status === "Pending"
                              ? "#96969633"
                              : row.status === "Completed"
                              ? "#00CB1426"
                              : "#498BCD26",
                        }}
                        width={150}
                        py={1}
                        textAlign="left"
                      >
                        <Typography
                          fontWeight={700}
                          component="div"
                          color={
                            row.status === "Pending"
                              ? "#969696"
                              : row.status === "Completed"
                              ? "#00CB14"
                              : "#2E72B3"
                          }
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {row.status === "Pending" ? (
                            <AccessTimeRoundedIcon
                              sx={{
                                color: "#969696",
                                width: 20,
                                height: 20,
                                mr: 0.5,
                              }}
                            />
                          ) : row.status === "Completed" ? (
                            <CheckCircleRoundedIcon
                              sx={{
                                color: "#00CB14",
                                width: 20,
                                height: 20,
                                mr: 0.5,
                              }}
                            />
                          ) : (
                            <DonutLargeRoundedIcon
                              sx={{
                                color: "#2E72B3",
                                width: 20,
                                height: 20,
                                mr: 0.5,
                              }}
                            />
                          )}
                          {row.status}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell padding="checkbox" sx={{ borderBottom: "none" }}>
                    <Tooltip title="See more">
                      <IconButton onClick={handleMyLearning}>
                        <MoreVertRoundedIcon
                          sx={{
                            color: "#000000BF",
                            width: 20,
                            height: 20,
                          }}
                        />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: 53 * emptyRows,
                }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[10]}
        component="div"
        count={rows.length}
        rowsPerPage={10}
        page={page}
        onPageChange={handleChangePage}
        backIconButtonProps={{
          "aria-label": "previous page",
          color: "primary",
          className: "bg-[#2E72B3] mr-2 hover:bg-[#0284c7]",
        }}
        nextIconButtonProps={{
          "aria-label": "next page",
          className: "bg-[#2E72B3] mr-2 hover:bg-[#0284c7]",
        }}
      />
    </Box>
  );
}
