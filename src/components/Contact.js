import React from "react";
import {
  TextField,
  Typography,
  Button,
  Grid,
  Box
} from "@mui/material";
import Navbar from "./Navbar";

const Contact = () => {

  return (
    <Box component="div">
      <Grid container justify="center">
        <Box component="form">
          <Typography variant="h5">
            Contact Me
          </Typography>
          <TextField
          fullWidth={true}
          label="Name"
          variant="outlined"
          />
        </Box>
      </Grid>
    </Box>
  )
}

export default Contact;