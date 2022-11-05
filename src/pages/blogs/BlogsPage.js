import React from "react";
import Header from "../home/header/Header";
import AdminPick from "./AdminPick";
import PosterBLog from "./PosterBLog";

const BlogsPage = () => {
  return (
    <div className="bg-[#111] m-0">
      <Header></Header>
      <PosterBLog></PosterBLog>
      <AdminPick></AdminPick>
    </div>
  );
};

export default BlogsPage;
