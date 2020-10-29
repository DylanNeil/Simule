import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "./simpleButton";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
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
  },
});

function EventCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title="Futurama"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {/* Good News Everyone! Futurama Trivia Night */}
            {props.title}
          </Typography>
          <Typography variant="subtitle1" component="h4">
            {props.date}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.text}

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default EventCard;
