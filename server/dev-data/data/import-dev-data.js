const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Project = require("../../models/projectModel");
const Guide = require("../../models/guideModel");

dotenv.config({ path: "./config.env" });

// A. Kết nôí vào Mongo Compass

// B. Read Json File
const project = JSON.parse(
  fs.readFileSync(`${__dirname}/project.json`, "utf-8")
);
const guide = JSON.parse(fs.readFileSync(`${__dirname}/guide.json`, "utf-8"));

project.forEach((el) => {
  console.log(el.images);
});

// C. IMPORT DATA INTO DB
const importData = async () => {
  try {
    await mongoose.connect(process.env.MONGO).then(() => {
      console.log("DB connection successful!");
    });
    await Project.create(project);
    console.log("Data successfully loaded!");
    await Guide.create(guide);
    console.log("Guide loaded");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// // D. DELETE ALL DB
const deleteData = async () => {
  try {
    await mongoose.connect(process.env.MONGO).then(() => {
      console.log("DB connection successful!");
    });
    await Project.deleteMany();
    console.log("Data successfully deleted!");
    
    await Guide.deleteMany();
    console.log("Data successfully deleted!");
    
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

// // E. Khởi động hàm

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
