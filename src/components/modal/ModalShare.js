import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
  faTumblr,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { setShowShare } from "../../store/showModal/showSlice";

const ModalShare = ({ urlHref = "" }) => {
  const { showShare } = useSelector((state) => state.show);

  const dispatch = useDispatch();

  return ReactDOM.createPortal(
    <div
      className={`fixed top-0 bottom-0 right-0 left-0 z-[1010] flex justify-center items-center visible opacity-100 transition ease-in duration-200 ${
        showShare ? "" : "opacity-0 invisible"
      }`}
    >
      <div className="absolute w-full h-full bg-[rgba(0,0,0,0.5)] z-[1010]"></div>
      <div className="max-w-[600px] w-full absolute  z-[1020] rounded-lg">
        <div className="bg-[rgba(17,17,17,1)] w-[full]  rounded-[20px] px-[40px] py-[30px] relative">
          <h3 className="text-primary text-[18px] font-[600] mb-[25px]">
            Share this place
          </h3>
          <div
            onClick={() => {
              dispatch(setShowShare(false));
            }}
          >
            <FontAwesomeIcon
              icon={faXmark}
              className="absolute top-[30px] right-[40px] text-primary text-[24px] font-[600] cursor-pointer"
            ></FontAwesomeIcon>
          </div>
          <div>
            <div className="social w-full flex items-center justify-between px-2 mb-[25px]">
              <a
                href="#"
                className="h-[50px] flex items-center justify-center w-[50px] leading-[40px] rounded-[50%] text-[17px] text-center border-[2px] border-solid border-[#ffbc4b] mr-[5px] inline-block hover-social text-primary"
              >
                <FontAwesomeIcon
                  icon={faTumblr}
                  className=" 
                     font-[400] "
                />
              </a>
              <a
                href="#"
                className="h-[50px] flex items-center justify-center w-[50px] leading-[40px] rounded-[50%] text-[17px] text-center border-[2px] border-solid border-[#ffbc4b] mr-[5px] inline-block hover-social text-primary"
              >
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className=" 
                     font-[400] "
                />
              </a>
              <a
                href="#"
                className="h-[50px] flex items-center justify-center w-[50px] leading-[40px] rounded-[50%] text-[17px] text-center border-[2px] border-solid border-[#ffbc4b] mr-[5px] inline-block hover-social text-primary"
              >
                <FontAwesomeIcon
                  icon={faPinterest}
                  className=" 
                     font-[400] "
                />
              </a>
              <a
                href="#"
                className="h-[50px] flex items-center justify-center w-[50px] leading-[40px] rounded-[50%] text-[17px] text-center border-[2px] border-solid border-[#ffbc4b] mr-[5px] inline-block hover-social text-primary"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className=" 
                     font-[400] "
                />
              </a>
              <a
                href="#"
                className="h-[50px] flex items-center justify-center w-[50px] leading-[40px] rounded-[50%] text-[17px] text-center border-[2px] border-solid border-[#ffbc4b] mr-[5px] inline-block hover-social text-primary"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className=" 
                     font-[400] "
                />
              </a>
              <a
                href="#"
                className="h-[50px] flex items-center justify-center w-[50px] leading-[40px] rounded-[50%] text-[17px] text-center border-[2px] border-solid border-[#ffbc4b] mr-[5px] inline-block hover-social text-primary"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className=" 
                     font-[400] "
                />
              </a>
            </div>
          </div>
          <div>
            <span className="text-primary font-[500] text-[14px] mb-[15px] block">
              Or copy link
            </span>
            <div className="border border-solid border-[#ffbc4b] rounded-[15px] w-full h-[50px] flex items-center justify-between">
              <div className="overflow-hidden p-2">
                <span className="text-[#fff] normal-case">
                  http://localhost:3000/project/6364a2d2a532cd18b6ce1c95
                </span>
              </div>
              <button className="text-primary p-4">Copy</button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default ModalShare;
