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
  Snackbar,
} from "@material-ui/core";
import React, { useState } from "react";
import { addToBoard } from "../redux/TravelBoard/travelboard-actions";
import { connect } from "react-redux";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MuiAlert from "@material-ui/lab/Alert";

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    margin: 20,
    position: "relative",
  },
  "& > * + *": {
    marginTop: theme.spacing(2),
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
  snackbar: {
    position: "absolute",
    top: 0,
  },
}));

const ActivityCard = ({ actList, addToBoard, setInvisible }) => {
  const [clickedFav, setClickedFav] = useState(false);
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const imgSrc = actList.pictures[0];

  const addToTravelboard = () => {
    setClickedFav(!clickedFav);
    setOpen(true);
    addToBoard(actList);
    setInvisible(false);
  };

  const removeFromTravelboard = () => {
    setClickedFav(!clickedFav);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
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
              onDoubleClick={removeFromTravelboard}
            >
              {clickedFav ? (
                <FavoriteIcon color="secondary" />
              ) : (
                <FavoriteBorderIcon />
              )}
            </IconButton>
            <Snackbar
              open={open}
              autoHideDuration={1000}
              onClose={handleClose}
              className={classes.snackbar}
            >
              {clickedFav ? (
                <Alert onClose={handleClose} severity="success">
                  Added to your TravelBoard!
                </Alert>
              ) : (
                <Alert onClose={handleClose} severity="warning">
                  Removed from your TravelBoard!
                </Alert>
              )}
            </Snackbar>
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
