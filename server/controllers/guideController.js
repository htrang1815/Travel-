const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const Guide = require("../models/guideModel");

exports.getAllGuide = catchAsync(async (req, res) => {
    const guides = await Guide.find();
    res.status(200).json({
      status: "success",
      results: guides.length,
      data: {
        guides,
      },
    });
  });

  exports.createGuide = catchAsync(async (req, res) => {
    const newGuide = await Guide.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        guides: newGuide,
      },
    });
  });

  