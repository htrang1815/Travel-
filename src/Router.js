import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import AboutUs from "./pages/aboutus/AboutUs";
import AdminPage from "./pages/admin/AdminPage";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import BlogDetail from "./pages/blogs/BlogDetail";
import BlogsPage from "./pages/blogs/BlogsPage";
import UpdateBlogPage from "./pages/blogs/updateblog/UpdateBlog";
import WriteBlog from "./pages/blogs/writeblog/WriteBlog";
import BookingSuccessful from "./pages/booking/BookingSuccessful";
import ContactPage from "./pages/contact/ContactPage";
import ForgotPasswordPage from "./pages/forgotPass/ForgotPassPage";
import ResetPasswordPage from "./pages/forgotPass/ResetPassPage";
import GuidePage from "./pages/guides/GuidePage";
import HomePage from "./pages/home/HomePage";
import ProjectDetails from "./pages/projects/ProjectDetails";
import ProjectsPage from "./pages/projects/ProjectsPage";
import GuideDetail from "./pages/projects/tourguide/GuideDetail";

import UserProfilePage from "./pages/userprofile/UserProfilePage";
import { getIsLogin } from "./store/auth/slice";

const Router = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLogin, user } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getIsLogin());
    // if (!isLogin) {
    //   navigate("/home");
    // }
  }, [dispatch, navigate, isLogin]);
  return (
    <div>
      <Routes>
        {/* Đường dẫn / sẽ tự động dc chuyển sang /home */}
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="/home" element={<HomePage></HomePage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/signup" element={<SignupPage></SignupPage>}></Route>
        <Route
          path="/forgotpass"
          element={<ForgotPasswordPage></ForgotPasswordPage>}
        ></Route>
        <Route
          path="/resetpass"
          element={<ResetPasswordPage></ResetPasswordPage>}
        ></Route>
        {isLogin && (
          <>
            <Route
              path="/project"
              element={<ProjectsPage></ProjectsPage>}
            ></Route>
            <Route path="/blog" element={<BlogsPage></BlogsPage>}></Route>
            <Route
              path="/blog/:blogId"
              element={<BlogDetail></BlogDetail>}
            ></Route>
            <Route
              path="/blog/writeblog"
              element={<WriteBlog></WriteBlog>}
            ></Route>
            <Route path="/about" element={<AboutUs></AboutUs>}></Route>
            <Route path="/guide" element={<GuidePage></GuidePage>}></Route>
            <Route
              path="/guide/:guideId"
              element={<GuideDetail></GuideDetail>}
            ></Route>
            <Route
              path="/contact"
              element={<ContactPage></ContactPage>}
            ></Route>
            <Route
              path="/project/:projectId"
              element={<ProjectDetails></ProjectDetails>}
            ></Route>
            {user.role === "admin" && (
              <Route path="/admin/*" element={<AdminPage></AdminPage>}></Route>
            )}
            <Route
              path="/userprofile/:userId"
              element={<UserProfilePage></UserProfilePage>}
            ></Route>
            <Route
              path="/success"
              element={<BookingSuccessful></BookingSuccessful>}
            ></Route>
            <Route
              path="/updateblog/:blogId"
              element={<UpdateBlogPage></UpdateBlogPage>}
            ></Route>
          </>
        )}
      </Routes>
    </div>
  );
};

export default Router;
