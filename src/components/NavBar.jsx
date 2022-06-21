import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from '@mui/material';
import PestControlRodentIcon from '@mui/icons-material/PestControlRodent';
import { Link } from 'react-router-dom';

const NavBar = (props) => {

  return (
    <AppBar position='static'>
      <Toolbar>
        <Stack direction='row' spacing={2}>
          <Link to='/'>
            <Button color='inherit'>Home</Button>
          </Link>
          <Link to='/about'>
            <Button color='inherit'>About</Button>
          </Link>
          <Link to='/portfolio'>
            <Button color='inherit'>Portfolio</Button>
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar;