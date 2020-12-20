import { Box, Button, Card, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import LocationOn from "@material-ui/icons/LocationOn";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 300,
    margin: 20,
    padding: 20,
  },
  locationIcon: {
    marginRight: 5,
    fontSize: 20,
  },
  typo: {
    fontSize: 18,
    fontWeight: 600,
    marginLeft: 10,
    color: "#282d36",
  },
  tag: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
  },
}));

const PointOfInterestCard = ({ intList }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Box display={"flex"} alignItems={"center"} mb={1}>
        <LocationOn color="secondary" />
        <Typography className={classes.typo}>{intList.name}</Typography>
      </Box>
      <Box className={classes.tag}>
        {intList.tags.map((tag) => (
          <Button size="small">{tag}</Button>
        ))}
      </Box>
    </Card>
  );
};

export default PointOfInterestCard;
