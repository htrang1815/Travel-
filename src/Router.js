import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AboutUs from "./pages/aboutus/AboutUs";
import AdminPage from "./pages/admin/AdminPage";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import BlogsPage from "./pages/blogs/BlogsPage";
import WriteBlog from "./pages/blogs/writeblog/WriteBlog";
import ContactPage from "./pages/contact/ContactPage";
import GuidePage from "./pages/guides/GuidePage";
import HomePage from "./pages/home/HomePage";
import ProjectDetails from "./pages/projects/ProjectDetails";
import ProjectsPage from "./pages/projects/ProjectsPage";
import GuideDetail from "./pages/projects/tourguide/GuideDetail";

const Router = () => {
  return (
    <div>
      <Routes>
        {/* Đường dẫn / sẽ tự động dc chuyển sang /home */}
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="/home" element={<HomePage></HomePage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/signup" element={<SignupPage></SignupPage>}></Route>
        <Route path="/project" element={<ProjectsPage></ProjectsPage>}></Route>
        <Route path="/blog" element={<BlogsPage></BlogsPage>}></Route>
        <Route path="/blog/writeblog" element={<WriteBlog></WriteBlog>}></Route>
        <Route path="/about" element={<AboutUs></AboutUs>}></Route>
        <Route path="/guide" element={<GuidePage></GuidePage>}></Route>
        <Route
          path="/guide/:guideId"
          element={<GuideDetail></GuideDetail>}
        ></Route>
        <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
        <Route
          path="/project/:projectId"
          element={<ProjectDetails></ProjectDetails>}
        ></Route>
        <Route path="/admin/*" element={<AdminPage></AdminPage>}></Route>
      </Routes>
    </div>
  );
};

export default Router;
