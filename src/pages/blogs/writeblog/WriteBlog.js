import React from "react";
import Header from "../../home/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import imgdefault from "../../../assets/images/blogs/imgdedault.jpeg";
import Footer from "../../home/footer/Footer";

const WriteBlog = () => {
  return (
    <div className="bg-[#111] ">
      <Header></Header>
      <div className="bg-[#111] w-full pt-[78px] h-[400px] px-[5%] ">
        <div className=" w-full h-full text-primary  bg-cover bg-center relative ">
          <img
            src={"" || imgdefault}
            alt=""
            className="w-full h-full object-cover rounded-[20px]"
          />
          <input type="file" accept="image/*" id="banner-upload" hidden></input>
          <label
            htmlFor="banner-upload"
            className="absolute bottom-[20px] right-[20px] w-[40px] h-[40px] rounded-[50%] flex justify-center items-center cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faUpload}
              className="text-[24px] font-[700] bg-[#111] py-3 px-6 rounded-[10px]"
            ></FontAwesomeIcon>
          </label>
        </div>
      </div>
      <div className="w-[80vw] min-w-[400px] block m-auto ">
        <textarea
          type="text"
          placeholder="Blog title ... "
          className="block w-full min-h-[100px] h-auto outline-none text-[50px] font-[600] resize-none border-none pb-[10px] rounded-[10px] bg-[#111] hover:text-primary normal-case mt-[20px] snap-none scroll-textarea"
        ></textarea>
        <span className="normal-case pb-[20px] italic">Puslished at - </span>
        <textarea
          type="text"
          placeholder="Start writing here ... "
          className="block w-full min-h-[600px] 0 outline-none resize-none border-none p-[10px] rounded-[10px] mt-4 leading-[30px] font-[500] pb-[100px] whitespace-pre-wrap normal-case scroll-textarea"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        ></textarea>
      </div>
      <div className="fixed bottom-0 left-[50%] ml-[-60px] w-auto h-[60px] bg-[#fff] z-20 flex justify-center items-center ">
        <button className="bg-primary text-[#111] mr-5 text-[14px] py-3 px-6 rounded-[10px] normal-case ">
          Publish
        </button>
        <input
          type="file"
          accept="image/*"
          id="image-upload"
          className="normal-case"
          hidden
        ></input>
        <label
          htmlFor="image-upload"
          className="normal-case bg-primary py-3 px-6 rounded-[10px] cursor-pointer"
        >
          Upload Image
        </label>
      </div>
    </div>
  );
};

export default WriteBlog;
