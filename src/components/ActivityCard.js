import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  makeStyles,
  Typography,
  Box,
  Button,
} from "@material-ui/core";
import React, { useState } from "react";
import { addToBoard } from "../redux/TravelBoard/travelboard-actions";
import { connect } from "react-redux";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    width: "100%",
    margin: 20,
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    minWidth: 300,
  },
  typography: {
    fontSize: 14,
    fontWeight: 900,
    marginRight: 30,
  },
}));

const ActivityCard = ({ actList, addToBoard }) => {
  const [clickedFav, setClickedFav] = useState(false);
  const classes = useStyles();
  const imgSrc = actList.pictures[0];

  const addToTravelboard = () => {
    setClickedFav(!clickedFav);
    addToBoard(actList);
  };
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={imgSrc}
        title={actList.name}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h6">
            {actList.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {actList.shortDescription}
          </Typography>
          <Box display={"flex"} alignItems={"center"} mt={2}>
            <Typography className={classes.typography}>
              Price:&nbsp;{actList.price.amount}&nbsp;
              {actList.price.currencyCode}{" "}
            </Typography>
            <Typography className={classes.typography}>
              Rating:&nbsp;{actList.rating}
            </Typography>
          </Box>
          <CardActions>
            <IconButton
              aria-label="add to travelborad"
              onClick={addToTravelboard}
            >
              {clickedFav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
            <Button size="small" color="primary">
              <a href={actList.bookingLink}>Book Here!</a>
            </Button>
          </CardActions>
        </CardContent>
      </div>
    </Card>
  );
};

export default connect(null, { addToBoard })(ActivityCard);
