import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ModalAlert from "../../components/modal/ModalAlert";
import { getBlogList } from "../../store/blogList/slice";
import Footer from "../home/footer/Footer";
import Header from "../home/header/Header";
import AdminPick from "./AdminPick";
import ClientPick from "./ClientPick";
import PosterBLog from "./PosterBLog";

const BlogsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogList());
  }, [dispatch]);
  console.log("getBlogList : ", getBlogList());

  return (
    <>
      <div className="bg-[#111] m-0 ">
        <Header></Header>
        <PosterBLog></PosterBLog>
        <AdminPick></AdminPick>
        <ClientPick></ClientPick>
        <Footer className="bg-[#222]"></Footer>
      </div>
    </>
  );
};

export default BlogsPage;
