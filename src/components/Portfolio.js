import React from "react";
import Navbar from "./Navbar";
import {
  Box,
  Grid
} from "@mui/material";
import Itemcard from "./Itemcard";

const Portfolio = () => {
  const useStyle = {
    mainContainer: {
      background: "#233",
      height: "100%"
    },
    cardContainer: {
      maxWidth: 345,
      margin: "5rem auto"
    }
  }

  return (
    <Box component="div" sx={useStyle.mainContainer}>
      <Navbar />
      <Grid container justify="center">
        <Itemcard useStyle={useStyle} /> {/* This one will be the Hic Svnt Dracones */}
        <Itemcard useStyle={useStyle} /> {/* This one will be a new project */}
      </Grid>
    </Box>
  )
}

export default Portfolio;