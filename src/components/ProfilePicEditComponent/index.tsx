import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface ProfilePicEditComponentProps {
  handleCloseEditDP?: () => void;
}

export default function ProfilePicEditComponent({
  handleCloseEditDP,
}: ProfilePicEditComponentProps) {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings" onClick={handleCloseEditDP}>
            <CloseIcon sx={{ color: "#808080" }} />
          </IconButton>
        }
        subheader="Edit Photo"
      />
      <CardMedia
        component="img"
        sx={{ width: 500, height: 500 }}
        image="/images/educator1.jpg"
        alt="Paella dish"
      />

      <CardActions disableSpacing sx={{ py: 5, px: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Button
              color="info"
              size="medium"
              variant="outlined"
              sx={{
                textTransform: "none",
                lineHeight: 1.5,
                borderRadius: 2,
                backgroundColor: "primary.main",
              }}
              className="py-2 w-24"
            >
              <Typography
                variant="body1"
                color="primary.main"
                sx={{ fontWeight: 500, fontSize: "0.8rem" }}
              >
                Change
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={5}>
            <Button
              color="info"
              size="medium"
              variant="outlined"
              sx={{
                textTransform: "none",
                lineHeight: 1.5,
                borderRadius: 2,
                backgroundColor: "primary.main",
              }}
              className="py-2 w-24"
            >
              <Typography
                variant="body1"
                color="primary.main"
                sx={{ fontWeight: 500, fontSize: "0.8rem" }}
              >
                Delete
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                borderRadius: 2,
                backgroundColor: "primary.main",
              }}
              className="w-auto "
            >
              <Button
                color="info"
                size="medium"
                variant="contained"
                sx={{
                  textTransform: "none",
                  lineHeight: 1.5,
                  borderRadius: 2,
                  backgroundColor: "primary.main",
                }}
                className="w-full py-2"
              >
                <Typography
                  variant="body1"
                  color="primary.contrastText"
                  sx={{ fontWeight: 500, fontSize: "0.8rem" }}
                >
                  Save Photo
                </Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
