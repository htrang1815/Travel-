import * as React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch, useSelector } from "react-redux";
import { setRating } from "../../store/review/reviewSlice";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

export default function HoverRating() {
  const {rating} = useSelector((state) => state.review);
  // console.log(rating);
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const dispatch = useDispatch();
  // console.log("rating",rating);
  // console.log("value",value);

  return (
    <Box
      sx={{
        width: 200,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Rating
        name="hover-feedback"
        // defaultValue={rating}
        value={rating || value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          // console.log(newValue);
          dispatch(setRating(newValue));
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : rating || value]}</Box>
      )}
    </Box>
  );
}
