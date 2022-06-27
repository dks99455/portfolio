import React, { useState } from "react";
import {
  Drawer,
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  ListItemIcon,
  Avatar,
  Divider,
  List,
  Typography,
  Box
} from "@mui/material";
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail
} from "@mui/icons-material";

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home"
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume"
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio"
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts"
  }
]

const Navbar = () => {
  const [bar, setBar] = useState({
    right: false
  })

  const toggleSlider = (slider, open) => () => {
    setBar({...bar, [slider]: open})
  }

//CSS STYLES
  const useStyle = {
    menuSliderContainer: {
      width: 250,
      background: "#511",
      height: "100%"
    },
    avatar: {
      display: "block",
      margin: "0.5rem auto"
// adjust avatar icon
    },
    listItem: {
      color: "tan"
    }
  }

  const sideList = slider => (
    <Box sx={useStyle.menuSliderContainer} component="div" onClick={toggleSlider(slider, false)}>
      <Avatar sx={useStyle.avatar} src="" alt="Hey that's me!" />
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
        <ListItem button key={key}>
          <ListItemIcon sx={useStyle.listItem}>{lsItem.listIcon}</ListItemIcon>
          <ListItemText sx={useStyle.listItem} primary={lsItem.listText} />
        </ListItem>
      ))}
      </List>
    </Box>
  )

  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#222"}}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <ArrowBack style={{ color: "tomato" }}/>
            </IconButton>
            <Typography variant="h5">Portfolio</Typography>
            <Drawer anchor="right" open={bar.right} onClose={toggleSlider("right", false)}>
              {sideList("right")}
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Navbar;