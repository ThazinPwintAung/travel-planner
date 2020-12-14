import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import { removeFromBoard } from "../redux/TravelBoard/travelboard-actions";
import { connect } from "react-redux";
import React from "react";
import "./TravelBoardCard.css";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 220,
    margin: 20,
    position: "relative",
  },
  typo: {
    color: "blue",
    fontSize: 15,
    textAlign: "left",
  },
}));

const TravelBoardCard = ({ actList, removeFromBoard }) => {
  const classes = useStyles();
  const imgSrc = actList.pictures[0];

  const handleDelete = () => {
    removeFromBoard(actList.id);
  };
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="120"
          image={imgSrc}
          title={actList.name}
        />
        <CardContent>
          <a href={actList.bookingLink} className={classes.typo}>
            {actList.name}
          </a>
          <Typography variant="subtitle1" color="textSecondary">
            {actList.price.amount}&nbsp;
            {actList.price.currencyCode}
          </Typography>
        </CardContent>
        <CancelIcon className="delete" onClick={handleDelete} />
      </CardActionArea>
    </Card>
  );
};

export default connect(null, { removeFromBoard })(TravelBoardCard);
