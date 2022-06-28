import React from "react";
import {
  Typography,
  Avatar,
  Grid,
  Box
} from "@mui/material";
import Typed from "react-typed";

const Header = () => {

  //CSS STYLES
  const useStyle = {
    avatar: {
      width: "5rem",
      height: "5rem",
      margin: "1rem auto"
    },
    title: {
      color: "tomato"
    },
    subtitle: {
      color: "tan",
      marginBottom: "3rem"
    },
    typedContainer: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate( -50%, -50%)",
      width: "100vw",
      textAlign: "center",
      zIndex: 1
    }
  }

  return (
    <Box sx={useStyle.typedContainer} >
      <Grid container justify="center">
        <Avatar  sx={useStyle.avatar} src="" alt="That's me!" />
      </Grid>
      <Typography sx={useStyle.title} variant="h4">
        <Typed strings={["David Sung"]} typeSpeed={40} />
      </Typography>
      <br />
      <Typography sx={useStyle.subtitle} variant="h5">
        <Typed
        strings={["Web Design", "Web Development", "Full Stack"]}
        typeSpeed={40}
        backSpeed={60}
        loop
      />
      </Typography>
    </Box>
  )
}

export default Header;