const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  review: {
    type: String,
    required: [true, "Review can not be empty"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Review must belong to a user"],
  },
  place: {
    type: mongoose.Schema.ObjectId,
    ref: "Project",
  },
  image: { type: String },
});

reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "name avatarUrl",
  }).populate({
    path: "Project",
    select: "_id",
  });
  next();
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
