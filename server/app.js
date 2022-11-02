const express = require("express");
const morgan = require("morgan");

const cors = require("cors");
const cookieParser = require("cookie-parser");

const userRoutes = require("./routes/userRoutes");
const globalErrorHandler = require("./controllers/errorController");
const AppError = require("./utils/appError");

// => morgan giúp cta có thể xem đc kết quả của request ngay trên console.log

// 1. Tạo ứng dụng express

const app = express();

// 1.5. CORS (Để frontend và backend có thể kết nối vs nhau)

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

// 2. Để data dc gửi sang client sẽ đc chuyển
// đổi sang kiểu json()

app.use(express.json());

// A. MIDDLEWARES
app.use(morgan("dev"));

// B. CookieParser => Để có quyền truy cập vào Cookie
app.use(cookieParser());

// C. ROUTES
app.use("/api/v1/users", userRoutes);

// D. Bắt lỗi các routes ko dc xử lý
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

// E. Error Handling Middleware
app.use(globalErrorHandler);
module.exports = app;
