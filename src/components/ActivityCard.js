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
import {
  addToBoard,
  removeFromBoard,
} from "../redux/TravelBoard/travelboard-actions";
import { connect, useSelector } from "react-redux";
import FavoriteIcon from "@material-ui/icons/Favorite";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

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
    fontSize: 16,
    fontWeight: 900,
    marginRight: 30,
    color: "#282d36",
  },
  snackbar: {
    position: "absolute",
    top: 0,
  },
  book: {
    fontSize: 14,
    fontWeight: 900,
    color: "#0a4e75",
  },
  star: {
    color: "#282d36",
  },
}));

const ActivityCard = ({
  actId,
  actList,
  addToBoard,
  removeFromBoard,
  setOpenSuccess,
  setOpenWarning,
}) => {
  const actObj = useSelector((state) =>
    state.board.board.find((act) => act.id === actId)
  );
  const [count, setCount] = useState(1); //to remove fav on another click
  const classes = useStyles();
  const imgSrc = actList.pictures[0];

  const addToTravelboard = () => {
    setCount(count + 1);
    console.log(count);
    if (count % 2 === 0) {
      removeFromBoard(actList.id);
      setOpenWarning(true);
    } else {
      addToBoard(actList);
      setOpenSuccess(true);
    }
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
              {actList.price.amount}&nbsp;
              {actList.price.currencyCode}
            </Typography>
            <Box display={"flex"} alignItems={"center"}>
              <StarBorderIcon className={classes.star} />
              <Typography className={classes.typography}>
                &nbsp;{parseFloat(actList.rating).toFixed(1)}
              </Typography>
            </Box>
          </Box>
          <CardActions>
            <IconButton
              aria-label="add to travelborad"
              onClick={addToTravelboard}
            >
              {actObj ? (
                <FavoriteIcon color="secondary" />
              ) : (
                <FavoriteBorderIcon />
              )}
            </IconButton>
            <Button size="small">
              <a href={actList.bookingLink} className={classes.book}>
                Book Here!
              </a>
            </Button>
          </CardActions>
        </CardContent>
      </div>
    </Card>
  );
};

export default connect(null, { addToBoard, removeFromBoard })(ActivityCard);
