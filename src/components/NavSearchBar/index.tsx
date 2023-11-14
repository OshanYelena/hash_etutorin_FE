import * as React from "react";
import {
  useAutocomplete,
  AutocompleteGetTagProps,
} from "@mui/base/useAutocomplete";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import { autocompleteClasses } from "@mui/material/Autocomplete";
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputBase,
  Typography,
} from "@mui/material";
import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: 3,
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#137cbd",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#106ba3",
  },
});

const Root = styled("div")(
  ({ theme }) => `
  color: ${
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,.85)"
  };
  font-size: 14px;
`
);

const Label = styled("label")`
  padding: 0 0 4px;
  line-height: 1.5;
  display: block;
`;

const InputWrapper = styled("div")(
  ({ theme }) => `
  width: 600px;
  border-radius: 5px;
  padding: 1px;
  display: flex;
  flex-wrap: wrap;
  & input {
    color: ${
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.65)"
        : "rgba(0,0,0,.85)"
    };
    height: 30px;
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
  }
`
);

interface TagProps extends ReturnType<AutocompleteGetTagProps> {
  label: string;
}

function Tag(props: TagProps) {
  const { label, onDelete, ...other } = props;
  return (
    <div {...other}>
      <span>{label}</span>
      <CloseIcon
        onClick={onDelete}
        sx={{ color: "#404040", width: 25, height: 25 }}
      />
    </div>
  );
}

const StyledTag = styled(Tag)<TagProps>(
  ({ theme }) => `
  display: flex;
  align-items: center;
  height: 24px;
  margin: 2px;
  line-height: 22px;
  background-color: #E8E6E6F2;
  border-radius: 5px;
  box-sizing: content-box;
  padding: 0 4px 0 10px;
  outline: 0;
  overflow: hidden;
  color: #444444;
  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & svg {
    font-size: 12px;
    cursor: pointer;
    padding: 4px;
  }
`
);

const Listbox = styled("ul")(
  ({ theme }) => `
  width: 700px;
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
  overflow: auto;
  max-height: 700px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;
  margin-left: -30px;
  & li {
    padding: 5px 12px;
    display: flex;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    background-color: ${theme.palette.mode === "dark" ? "#2b2b2b" : "#fafafa"};
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & li.${autocompleteClasses.focused} {
    background-color: ${theme.palette.mode === "dark" ? "#003b57" : "#e6f7ff"};
    cursor: pointer;

    & svg {
      color: currentColor;
    }
  }
`
);

interface GradesProps {
  id: number;
  grade: string;
}

interface SubjectsProps {
  id: number;
  subject: string;
}

const Grades: GradesProps[] = [
  {
    id: 1,
    grade: "Grade 1",
  },
  {
    id: 2,
    grade: "Grade 2",
  },
  {
    id: 3,
    grade: "Grade 3",
  },
  {
    id: 4,
    grade: "Grade 4",
  },
  {
    id: 5,
    grade: "Grade 5",
  },
  {
    id: 6,
    grade: "Grade 6",
  },
  {
    id: 7,
    grade: "Grade 7",
  },
  {
    id: 8,
    grade: "Grade 8",
  },
  {
    id: 9,
    grade: "Grade 9",
  },
  {
    id: 10,
    grade: "Grade 10",
  },
  {
    id: 11,
    grade: "Grade 11",
  },
  {
    id: 12,
    grade: "Grade 12",
  },
  {
    id: 13,
    grade: "Grade 13",
  },
  {
    id: 14,
    grade: "Grade 14",
  },
  {
    id: 15,
    grade: "Grade 15",
  },
];

const SubjectsList: SubjectsProps[] = [
  {
    id: 1,
    subject: "Sinhala",
  },
  {
    id: 2,
    subject: "History",
  },
  {
    id: 3,
    subject: "English",
  },
  {
    id: 4,
    subject: "Maths",
  },
  {
    id: 5,
    subject: "Science",
  },
  {
    id: 6,
    subject: "Sinhala",
  },
  {
    id: 7,
    subject: "History",
  },
  {
    id: 8,
    subject: "English",
  },
  {
    id: 9,
    subject: "Maths",
  },
  {
    id: 10,
    subject: "Science",
  },
  {
    id: 11,
    subject: "Sinhala",
  },
  {
    id: 12,
    subject: "History",
  },
  {
    id: 13,
    subject: "English",
  },
  {
    id: 14,
    subject: "Maths",
  },
  {
    id: 15,
    subject: "Science",
  },
];

export default function NavSearchBar() {
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: "search-bar",
    defaultValue: [Grades[1]],
    multiple: true,
    options: Grades,
    getOptionLabel: (option) => option.grade,
  });

  return (
    <Root sx={{ ml: 5 }}>
      <div {...getRootProps()}>
        <Box
          display="flex"
          px={1}
          border={2}
          borderRadius={3}
          color="#2E72B3"
          ref={setAnchorEl}
          className={focused ? "focused" : ""}
        >
          <InputWrapper ref={setAnchorEl} className={focused ? "focused" : ""}>
            {value.map((option: GradesProps, index: number) => (
              // eslint-disable-next-line react/jsx-key
              <StyledTag label={option.grade} {...getTagProps({ index })} />
            ))}
            <input {...getInputProps()} />
          </InputWrapper>
        </Box>
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          <Box px={5} pt={5} pb={2}>
            <Box pb={2}>
              <Typography
                variant="h5"
                gutterBottom
                color="primary.main"
                sx={{ fontWeight: 700, fontSize: "1.5rem" }}
              >
                Grades
              </Typography>
              <Grid container spacing={0.5} columns={{ xs: 4, sm: 8, md: 12 }}>
                {(groupedOptions as typeof Grades).map(
                  ({ id, grade }, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                      <Checkbox
                        sx={{
                          "&:hover": { bgcolor: "transparent" },
                        }}
                        disableRipple
                        color="default"
                        checkedIcon={<BpCheckedIcon />}
                        icon={<BpIcon />}
                        inputProps={{ "aria-label": "Checkbox demo" }}
                      />
                      {grade}
                    </Grid>
                  )
                )}
              </Grid>
              <Box display="flex" justifyContent="flex-end" mr={9}>
                <Button
                  size="small"
                  aria-label="Join"
                  sx={{
                    textTransform: "none",
                    lineHeight: 1.5,
                    color: "primary.main",
                    mt: 1.5,
                    mx: 1,
                    height: 30,
                  }}
                >
                  <Typography
                    variant="body1"
                    noWrap
                    sx={{ color: "primary.main", fontWeight: 600 }}
                  >
                    Show more
                  </Typography>
                </Button>
              </Box>
            </Box>
            <Box pb={2}>
              <Typography
                variant="h5"
                gutterBottom
                color="primary.main"
                sx={{ fontWeight: 700, fontSize: "1.5rem" }}
              >
                Subjects
              </Typography>
              <Grid container spacing={0.5} columns={{ xs: 4, sm: 8, md: 12 }}>
                {SubjectsList.map(({ id, subject }, index) => (
                  <Grid item xs={2} sm={4} md={4} key={index}>
                    <Checkbox
                      sx={{
                        "&:hover": { bgcolor: "transparent" },
                      }}
                      disableRipple
                      color="default"
                      checkedIcon={<BpCheckedIcon />}
                      icon={<BpIcon />}
                      inputProps={{ "aria-label": "Checkbox demo" }}
                    />
                    {subject}
                  </Grid>
                ))}
              </Grid>
              <Box display="flex" justifyContent="flex-end" mr={9}>
                <Button
                  size="small"
                  aria-label="Join"
                  sx={{
                    textTransform: "none",
                    lineHeight: 1.5,
                    color: "primary.main",
                    mt: 1.5,
                    mx: 1,
                    height: 30,
                  }}
                >
                  <Typography
                    variant="body1"
                    noWrap
                    sx={{ color: "primary.main", fontWeight: 600 }}
                  >
                    Show more
                  </Typography>
                </Button>
              </Box>
            </Box>
            {/* {(groupedOptions as typeof top100Films).map((option, index) => (
              <li key={index} {...getOptionProps({ option, index })}>
                <span>{option.title}</span>
                <CheckIcon fontSize="small" sx={{ color: "primary.dark" }} />
              </li>
            ))} */}
            <Box display="flex" justifyContent="space-between" pt={1}>
              <Button
                size="small"
                aria-label="Join"
                sx={{
                  textTransform: "none",
                  lineHeight: 1.5,
                  color: "#3E3E3EBF",
                  mt: 1.5,
                  mx: 1,
                  height: 30,
                }}
              >
                <Typography
                  variant="body1"
                  noWrap
                  sx={{ color: "#3E3E3EBF", fontWeight: 600 }}
                  className="underline"
                >
                  Clear All
                </Typography>
              </Button>
              <Box
                sx={{
                  borderRadius: 3,
                  backgroundColor: "primary.darkBlue",
                }}
                className="w-32 "
              >
                <Button
                  color="success"
                  size="small"
                  variant="contained"
                  href="#poularcourses"
                  sx={{
                    textTransform: "none",
                    lineHeight: 1.5,
                    borderRadius: 3,
                    backgroundColor: "primary.darkBlue",
                  }}
                  className="w-32 py-2"
                >
                  <Typography
                    variant="body1"
                    color="primary.contrastText"
                    sx={{ fontWeight: 600 }}
                  >
                    Show All
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Box>
        </Listbox>
      ) : null}
    </Root>
  );
}

interface FilmOptionType {
  title: string;
  year: number;
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "Terminator 2: Judgment Day", year: 1991 },
  { title: "Back to the Future", year: 1985 },
  { title: "Whiplash", year: 2014 },
  { title: "Gladiator", year: 2000 },
  { title: "Memento", year: 2000 },
  { title: "The Prestige", year: 2006 },
  { title: "The Lion King", year: 1994 },
  { title: "Apocalypse Now", year: 1979 },
  { title: "Alien", year: 1979 },
  { title: "Sunset Boulevard", year: 1950 },
  {
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { title: "The Great Dictator", year: 1940 },
  { title: "Cinema Paradiso", year: 1988 },
  { title: "The Lives of Others", year: 2006 },
  { title: "Grave of the Fireflies", year: 1988 },
  { title: "Paths of Glory", year: 1957 },
  { title: "Django Unchained", year: 2012 },
  { title: "The Shining", year: 1980 },
  { title: "WALL·E", year: 2008 },
  { title: "American Beauty", year: 1999 },
  { title: "The Dark Knight Rises", year: 2012 },
  { title: "Princess Mononoke", year: 1997 },
  { title: "Aliens", year: 1986 },
  { title: "Oldboy", year: 2003 },
  { title: "Once Upon a Time in America", year: 1984 },
  { title: "Witness for the Prosecution", year: 1957 },
  { title: "Das Boot", year: 1981 },
  { title: "Citizen Kane", year: 1941 },
  { title: "North by Northwest", year: 1959 },
  { title: "Vertigo", year: 1958 },
  {
    title: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { title: "Reservoir Dogs", year: 1992 },
  { title: "Braveheart", year: 1995 },
  { title: "M", year: 1931 },
  { title: "Requiem for a Dream", year: 2000 },
  { title: "Amélie", year: 2001 },
  { title: "A Clockwork Orange", year: 1971 },
  { title: "Like Stars on Earth", year: 2007 },
  { title: "Taxi Driver", year: 1976 },
  { title: "Lawrence of Arabia", year: 1962 },
  { title: "Double Indemnity", year: 1944 },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { title: "Amadeus", year: 1984 },
  { title: "To Kill a Mockingbird", year: 1962 },
  { title: "Toy Story 3", year: 2010 },
  { title: "Logan", year: 2017 },
  { title: "Full Metal Jacket", year: 1987 },
  { title: "Dangal", year: 2016 },
  { title: "The Sting", year: 1973 },
  { title: "2001: A Space Odyssey", year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: "Toy Story", year: 1995 },
  { title: "Bicycle Thieves", year: 1948 },
  { title: "The Kid", year: 1921 },
  { title: "Inglourious Basterds", year: 2009 },
  { title: "Snatch", year: 2000 },
  { title: "3 Idiots", year: 2009 },
  { title: "Monty Python and the Holy Grail", year: 1975 },
];
