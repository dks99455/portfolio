import React from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from "@mui/material";
import placeholder from "../images/placeholder.png";

const Itemcard = (props) => {
  const { useStyle } = props;

  return (
    <Grid item xs={12} sm={8} md={6}>
      <Card sx={useStyle.cardContainer}>
        <CardActionArea>
          <CardMedia
          component="img"
          alt="Project Placeholder Text"
          height="140"
          image={placeholder} />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Project Placeholder Text
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Project Description Placeholder Text
              </Typography>
            </CardContent>
            <CardActions>
              <Button component="span" size="small" color="primary" onClick={(ev) => {
                ev.stopPropagation();
                console.log("share")
              }}>
                Share
              </Button>
              <Button component="span" size="small" color="primary" onClick={(ev) => {
                ev.stopPropagation();
                console.log("livedemo")
              }}>
                Live Demo
              </Button>
            </CardActions>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default Itemcard;