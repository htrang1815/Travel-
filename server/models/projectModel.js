const mongoose = require("mongoose");
const slugify = require("slugify");

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A project must have a name"],
    unique: true,
    trim: true,
    maxlength: [
      40,
      "A project name must have less or equal than 40 characters",
    ],
    minlength: [
      10,
      "A project name must have more or equal than 10 characters",
    ],
  },
  slug: String,
  duration: {
    type: Number,
    required: [true, "A project must have a duration"],
  },
  ratingAverage: {
    type: Number,
    default: 4.5,
    min: [1, "Rating must be above 1.0"],
    max: [5, "Rating must be below 5.0"],
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, "A project must have a price"],
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  summary: {
    type: String,
    trim: true,
    required: [true, "A project must have a description"],
  },
  experience: {
    type: String,
    trim: true,
  },
  include: { type: String, trim: true },
  startDates: [Date],
  startLocation: {
    // GeoJSON
    type: {
      type: String,
      default: "Point",
      enum: ["Point"],
    },
    coordinates: [Number],
    address: String,
    description: String,
  },
  locations: [
    {
      type: {
        type: String,
        default: "Point",
        enum: ["Point"],
      },
      coordinates: [Number],
      address: String,
      description: String,
      day: Number,
    },
  ],
  guides: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  ],
});

projectSchema.pre(/^find/, function (next) {
  this.populate({
    path: "guides",
    select: "-__v -passwordChangedAt",
  });
  next();
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
