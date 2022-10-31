import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import HomePage from "./pages/home/HomePage";
import ProjectsPage from "./pages/projects/ProjectsPage";

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
      </Routes>
    </div>
  );
};

export default Router;
