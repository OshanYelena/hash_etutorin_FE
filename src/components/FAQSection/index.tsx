import React from "react";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

export default function FAQSection() {
  const [expanded1, setExpanded1] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const [expanded3, setExpanded3] = React.useState(false);
  const [expanded4, setExpanded4] = React.useState(false);

  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };

  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };

  const handleExpandClick3 = () => {
    setExpanded3(!expanded3);
  };

  const handleExpandClick4 = () => {
    setExpanded4(!expanded4);
  };
  return (
    <Box>
      <Typography
        variant="h5"
        color="primary.main"
        className="uppercase"
        pt={5}
        sx={{ fontWeight: 700, fontSize: "1.5rem" }}
      >
        FAQ
      </Typography>
      {/* FAQ 1 */}
      <Box>
        <Grid container spacing={2} sx={{ pt: 1, alignItems: "center" }}>
          <Grid item xs={11}>
            <Typography variant="body1" color="#00000099" fontSize={18}>
              Do I have to pay extra for commercial use license?
            </Typography>
          </Grid>
          <Grid item xs={1}>
            {expanded1 ? (
              <IconButton onClick={handleExpandClick1}>
                <KeyboardArrowUpRoundedIcon
                  fontSize="inherit"
                  sx={{
                    color: "#000000",
                    width: 30,
                    height: 30,
                  }}
                />
              </IconButton>
            ) : (
              <IconButton onClick={handleExpandClick1}>
                <KeyboardArrowDownRoundedIcon
                  fontSize="inherit"
                  sx={{
                    color: "#00000080",
                    width: 30,
                    height: 30,
                  }}
                />
              </IconButton>
            )}
          </Grid>
        </Grid>
        {expanded1 && (
          <Typography
            variant="body1"
            color="primary.dark"
            fontSize={18}
            fontWeight={600}
            pl={2}
          >
            Lorem ipsum dolor sit amet consectetu
          </Typography>
        )}
      </Box>
      {/* FAQ 2 */}
      <Box>
        <Grid container spacing={2} sx={{ pt: 1, alignItems: "center" }}>
          <Grid item xs={11}>
            <Typography variant="body1" color="#00000099" fontSize={18}>
              Do I have to pay extra for commercial use license?
            </Typography>
          </Grid>
          <Grid item xs={1}>
            {expanded2 ? (
              <IconButton onClick={handleExpandClick2}>
                <KeyboardArrowUpRoundedIcon
                  fontSize="inherit"
                  sx={{
                    color: "#000000",
                    width: 30,
                    height: 30,
                  }}
                />
              </IconButton>
            ) : (
              <IconButton onClick={handleExpandClick2}>
                <KeyboardArrowDownRoundedIcon
                  fontSize="inherit"
                  sx={{
                    color: "#00000080",
                    width: 30,
                    height: 30,
                  }}
                />
              </IconButton>
            )}
          </Grid>
        </Grid>
        {expanded2 && (
          <Typography
            variant="body1"
            color="primary.dark"
            fontSize={18}
            fontWeight={600}
            pl={2}
          >
            Lorem ipsum dolor sit amet consectetu
          </Typography>
        )}
      </Box>
      {/* FAQ 3 */}
      <Box>
        <Grid container spacing={2} sx={{ pt: 1, alignItems: "center" }}>
          <Grid item xs={11}>
            <Typography variant="body1" color="#00000099" fontSize={18}>
              Do I have to pay extra for commercial use license?
            </Typography>
          </Grid>
          <Grid item xs={1}>
            {expanded3 ? (
              <IconButton onClick={handleExpandClick3}>
                <KeyboardArrowUpRoundedIcon
                  fontSize="inherit"
                  sx={{
                    color: "#000000",
                    width: 30,
                    height: 30,
                  }}
                />
              </IconButton>
            ) : (
              <IconButton onClick={handleExpandClick3}>
                <KeyboardArrowDownRoundedIcon
                  fontSize="inherit"
                  sx={{
                    color: "#00000080",
                    width: 30,
                    height: 30,
                  }}
                />
              </IconButton>
            )}
          </Grid>
        </Grid>
        {expanded3 && (
          <Typography
            variant="body1"
            color="primary.dark"
            fontSize={18}
            fontWeight={600}
            pl={2}
          >
            Lorem ipsum dolor sit amet consectetu
          </Typography>
        )}
      </Box>
      {/* FAQ 4 */}
      <Box>
        <Grid container spacing={2} sx={{ pt: 1, alignItems: "center" }}>
          <Grid item xs={11}>
            <Typography variant="body1" color="#00000099" fontSize={18}>
              Do I have to pay extra for commercial use license?
            </Typography>
          </Grid>
          <Grid item xs={1}>
            {expanded4 ? (
              <IconButton onClick={handleExpandClick4}>
                <KeyboardArrowUpRoundedIcon
                  fontSize="inherit"
                  sx={{
                    color: "#000000",
                    width: 30,
                    height: 30,
                  }}
                />
              </IconButton>
            ) : (
              <IconButton onClick={handleExpandClick4}>
                <KeyboardArrowDownRoundedIcon
                  fontSize="inherit"
                  sx={{
                    color: "#00000080",
                    width: 30,
                    height: 30,
                  }}
                />
              </IconButton>
            )}
          </Grid>
        </Grid>
        {expanded4 && (
          <Typography
            variant="body1"
            color="primary.dark"
            fontSize={18}
            fontWeight={600}
            pl={2}
          >
            Lorem ipsum dolor sit amet consectetu
          </Typography>
        )}
      </Box>
    </Box>
  );
}
