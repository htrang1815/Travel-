import React, { useEffect, useRef, useState } from "react";
import lodash from "lodash";

import Header from "../../home/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import imgdefault from "../../../assets/images/blogs/imgdedault.jpeg";
import Footer from "../../home/footer/Footer";
import { storage } from "../../../firebase.config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import useGetImageUrl from "../../../hooks/useGetImageUrl";
import axios from "axios";
import domain from "../../../utils/common";
import useAuthStateChanged from "../../../hooks/useAuthStateChange";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const WriteBlog = () => {
  const [images, setImages] = useState([]);
  const [urls, setUrls] = useState([]);
  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");

  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const { imageCover, getImageUrl } = useGetImageUrl();
  const { user } = useAuthStateChanged();
  const navigate = useNavigate();

  const addImage = (urls) => {
    const curPos = articleRef.current.selectionStart;
    const urlImg = `img(${urls})`;

    articleRef.current.value =
      articleRef.current.value.slice(0, curPos) +
      urlImg +
      articleRef.current.value.slice(curPos);
  };
  const { imageCover: imgBlog, getImageUrl: getImgBlog } =
    useGetImageUrl(addImage);

  const articleRef = useRef();
  const handleTitle = lodash.debounce((e) => {
    setTitle(e.target.value);
  }, 500);

  const handleContent = lodash.debounce((e) => {
    setArticle(e.target.value);
  }, 500);

  const publishBlog = async () => {
    // console.log("hello");
    if (title.length > 0 && article.length > 0 && imageCover.length > 0) {
      const blog = await axios.post(`${domain}/api/v1/blogs`, {
        title,
        article,
        user: user._id,
        bannerImage: imageCover,
      });
      console.log("blog");
      const blogId = blog.data.data.blogs;
      navigate(`/blog/${blogId._id}`);
    }
  };
  console.log(Date.now);

  return (
    <div className="bg-[#111] ">
      <Header></Header>
      <div className="bg-[#111] w-full pt-[78px] h-[400px] px-[5%] ">
        <div className=" w-full h-full text-primary  bg-cover bg-center relative ">
          <img
            src={imageCover || imgdefault}
            alt=""
            className="w-full h-full object-cover rounded-[20px]"
          />
          <input
            type="file"
            accept="image/*"
            id="banner-upload"
            hidden
            onChange={getImageUrl}
          ></input>
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
        <input
          type="text"
          placeholder="Blog title ... "
          className="block w-full min-h-[100px] h-auto outline-none text-[50px] font-[600] resize-none border-none pb-[10px] rounded-[10px] bg-[#111] text-primary hover:text-primary normal-case mt-[20px] snap-none scroll-textarea"
          onChange={handleTitle}
        ></input>
        <span className="normal-case pb-[20px] italic">Puslished at - </span>
        <textarea
          type="text"
          placeholder="Start writing here ... "
          className="block w-full min-h-[600px] 0 outline-none resize-none border-none p-[10px] rounded-[10px] mt-4 leading-[30px] font-[500] pb-[100px] whitespace-pre-wrap normal-case scroll-textarea"
          onChange={handleContent}
          ref={articleRef}
        ></textarea>

        {urls && urls.length > 0 && (
          <div className="mt-[10px] pb-[80px] ">
            <p>Images of blog</p>
            <div className="bg-[#fff] rounded-[10px] p-[20px] grid grid-cols-10 gap-[10px]">
              {urls.map((url, i) => (
                <img
                  key={i}
                  src={url}
                  alt=""
                  className="w-[100px] h-[100px] object-cover rounded-lg"
                ></img>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="fixed bottom-0 left-[50%] ml-[-60px] w-auto h-[60px] z-20 flex justify-center items-center ">
        <button
          className="bg-primary text-[#111] mr-5 text-[14px] py-3 px-6 rounded-[10px] normal-case"
          onClick={publishBlog}
        >
          Publish
        </button>
        <input
          type="file"
          accept="image/*"
          id="image-upload"
          className="normal-case"
          multiple
          hidden
          // onChange={getImagePath}
          onChange={getImgBlog}
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
