const User = require("../models/userModel");

exports.favouritePlace = async (req, res) => {
  const { userID, placeId } = req.body;
  const user = await User.findById(userID);
  user.bookmark = [...user.bookmark, placeId];

  res.status(200).json({
    status: "success",
    isFavorite: true,
  });
};

exports.removeFavouritePlace = async (req, res) => {
  const { userID, placeId } = req.body;
  const user = await User.findById(userID);
  user.bookmark.filter((place) => place._id !== placeId);
  res.status(200).json({
    status: "success",
    isFavorite: false,
  });
};
