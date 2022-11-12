const mongoose = require("mongoose");
const Project = require("./projectModel");

const reviewSchema = new mongoose.Schema(
  {
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
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

reviewSchema.index({ place: 1, user: 1 }, { unique: true });

reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "name avatarUrl",
  }).populate({
    path: "place",
    select: "_id name",
  });
  next();
});

// Tính số sao trung bình

reviewSchema.statics.calcAverageRatings = async function (placeId) {
  const stats = await this.aggregate([
    {
      $match: { place: placeId },
    },
    {
      $group: {
        _id: "$place",
        nRating: { $sum: 1 },
        avgRating: { $avg: "$rating" },
      },
    },
  ]);

  if (stats.length > 0) {
    await Project.findByIdAndUpdate(placeId, {
      ratingsQuantity: stats[0].nRating,
      ratingAverage: stats[0].avgRating,
    });
  } else {
    await Project.findByIdAndUpdate(placeId, {
      ratingsQuantity: 0,
      ratingAverage: 4.5,
    });
  }
};

reviewSchema.post("save", function () {
  this.constructor.calcAverageRatings(this.place);

  // this.constructor: chính là thằng Review
});

// Khi 1 review bị xóa hoặc update cùng phải thay đổi lại rating

reviewSchema.pre(/^findOneAnd/, async function (next) {
  this.r = await this.clone().findOne();
  console.log(this.r);
  next();
});

reviewSchema.post(/^findOneAnd/, async function () {
  await this.r.constructor.calcAverageRatings(this.r.place._id);
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
