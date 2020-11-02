import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import location from "./img/location.svg";


const useStyles = makeStyles({
    root: {
      minWidth: 400,
      textAlign: "left",
      transition: "0.3s",
      lineclamp: "3",
      "&:hover": {
        transform: "scale(1.005)",
        transition: "0.3s",
      },
    },
    media: {
      height: 140,
      width:100,
    },
  });
  
  function Displayevents(props) {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography variant="subtitle1" color="textSecondary" component="h4">
              {props.date}
            </Typography>
            <Typography variant="body1" color="textPrimary" component="h1">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
           <img src={location} /> {props.location}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
  
  export default Displayevents;
  