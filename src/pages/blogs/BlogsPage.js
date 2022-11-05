import React from "react";
import Footer from "../home/footer/Footer";
import Header from "../home/header/Header";
import AdminPick from "./AdminPick";
import ClientPick from "./ClientPick";
import PosterBLog from "./PosterBLog";

const BlogsPage = () => {
  return (
    <div className="bg-[#111] m-0 ">
      <Header></Header>
      <PosterBLog></PosterBLog>
      <AdminPick></AdminPick>
      <ClientPick></ClientPick>
      <Footer className="bg-[#222]"></Footer>
    </div>
  );
};

export default BlogsPage;
