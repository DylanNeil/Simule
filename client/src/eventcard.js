import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    textAlign: 'left',
    transition: '0.3s',
    '&:hover':{
      transform: 'scale(1.02)',
      transition: '0.3s'
    }
  },
  media: {
    height: 140,
  },
});

function EventCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.scitecheuropa.eu/wp-content/uploads/2019/07/ClaudioVentrella.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Good News Everyone! Futurama Trivia Night
          </Typography>
          <Typography variant="subtitle1" component="h4">
           01/01/3021
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Alright, let's mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew.
            Anyone who laughs is a communist! Isn't it true that you have been paid for your testimony?
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
