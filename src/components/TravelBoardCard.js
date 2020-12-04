import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 220,
    margin: 20,
  },
  typo: {
    fontSize: 15,
    textAlign: "left",
  },
}));

const TravelBoardCard = ({ actList }) => {
  const classes = useStyles();
  const imgSrc = actList.pictures[0];
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
          <Typography className={classes.typo}>{actList.name}</Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {actList.price.amount}&nbsp;
            {actList.price.currencyCode}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TravelBoardCard;
