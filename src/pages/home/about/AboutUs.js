import React, { useState } from "react";
import ButtonBlogs from "../../../components/button/ButtonBlogs";
import videoblog from "../../../assets/videos/Sea - 6399.mp4";
import videoblog1 from "../../../assets/videos/about-vid-2.mp4";
import videoblog2 from "../../../assets/videos/about-vid-3.mp4";

const AboutUs = () => {
  const aboutItem = [
    {
      id: 0,
      video: videoblog,
      title: "Nature's Majesty Awaits You",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem culpa quo in cumque saepe quaerat earum ducimus exercitationem iusto reiciendis quas velit, dolorum soluta sunt repudiandae voluptatibus, perspiciatis officiis nulla?",
    },
    {
      id: 1,
      video: videoblog1,
      title: "Nature's Majesty Awaits ",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem culpa quo in cumque saepe quaerat earum ducimus exercitationem iusto reiciendis quas velit, dolorum soluta sunt repudiandae voluptatibus, perspiciatis officiis nulla?",
    },
    {
      id: 2,
      video: videoblog2,
      title: "Nature's Majesty",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem culpa quo in cumque saepe quaerat earum ducimus exercitationem iusto reiciendis quas velit, dolorum soluta sunt repudiandae voluptatibus, perspiciatis officiis nulla?",
    },
  ];
  const [id, setId] = useState(0);
  const ob = aboutItem[id];
  return (
    <div className="flex flex-row items-center gap-5 mt-[50px] py-[30px] px-[9%] transition-about">
      <div className="mr-[10px]">
        <video
          src={ob.video}
          muted
          autoPlay
          loop
          className="w-full rounded-[10px] object-contain"
        ></video>
        <div className="text-center px-0 py-[20px] block ">
          <span
            className={id===0 ? `inline-block w-5 h-5 rounded-full m-[7px]  cursor-pointer hover-controlblogs bg-primary` : `inline-block w-5 h-5 rounded-full m-[7px]  cursor-pointer hover-controlblogs bg-[#fff]`}
            onClick={(e) => {
              setId(0);
            }}
          ></span>
          <span
            className={id===1 ? `inline-block w-5 h-5 rounded-full m-[7px]  cursor-pointer hover-controlblogs bg-primary` : `inline-block w-5 h-5 rounded-full m-[7px]  cursor-pointer hover-controlblogs bg-[#fff]`}
            onClick={(e) => {
              setId(1);
            }}
          ></span>
          <span
            className={id===2 ? `inline-block w-5 h-5 rounded-full m-[7px]  cursor-pointer hover-controlblogs bg-primary` : `inline-block w-5 h-5 rounded-full m-[7px]  cursor-pointer hover-controlblogs bg-[#fff]`}
            onClick={(e) => {
              setId(2);
            }}
          ></span>
        </div>
      </div>
      <div className="mb-[50px]">
        <span className="text-primary text-[20px]">Why choose us ?</span>
        <h3 className="text-[#fff] text-[40px] mt-[5px] font-[700]">
          {ob.title}
        </h3>
        <p className="text-[#aaa] text-[14px] py-[10px] leading-[28px]">
          {ob.content}
        </p>
        <ButtonBlogs className="mt-[10px]" text="Read More"></ButtonBlogs>
      </div>
    </div>
  );
};

export default AboutUs;
