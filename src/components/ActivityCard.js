import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Box,
  Button,
} from "@material-ui/core";
import React, { useState } from "react";
import "./ActivityCard.css";
import {
  addToBoard,
  removeFromBoard,
} from "../redux/TravelBoard/travelboard-actions";
import { connect, useSelector } from "react-redux";
import FavoriteIcon from "@material-ui/icons/Favorite";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

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
    <Card className="Card">
      <CardMedia className="cover" image={imgSrc} title={actList.name} />
      <div className="details">
        <CardContent className="content">
          <Typography component="h6" variant="h6" className="header">
            {actList.name}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className="desc"
          >
            {actList.shortDescription}
          </Typography>
          <Box display={"flex"} alignItems={"center"} mt={2}>
            <Typography className="typography">
              {actList.price.amount}&nbsp;
              {actList.price.currencyCode}
            </Typography>
            <Box display={"flex"} alignItems={"center"}>
              <StarBorderIcon className="star" />
              <Typography className="typography">
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
              <a href={actList.bookingLink} className="book">
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
