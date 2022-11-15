import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { setShowContactGuide } from "../../store/showModal/showSlice";
import ButtonContact from "../button/ButtonContact";
import Textarea from "../input/Textarea";

const ModalContactGuide = () => {
  const { showContactGuide } = useSelector((state) => state.show);
  // console.log(showContactGuide);
  const dispatch = useDispatch();
  const { guide } = useSelector((state) => state.guide);
  return ReactDOM.createPortal(
    <div
      className={`contactguide fixed top-0 bottom-0 right-0 left-0 z-[1010] flex justify-center items-center h-auto visible opacity-100 transition ease-in duration-200  ${
        showContactGuide ? "" : "opacity-0 invisible"
      }`}
    >
      <div
        className="absolute w-full h-full bg-[rgba(0,0,0,0.5)] z-[499] "
        onClick={() => {
          dispatch(setShowContactGuide(false));
        }}
      ></div>
      <div className="bg-[rgba(17,17,17,1)] w-[40%]  rounded-[20px] px-[40px] py-[30px] relative z-[500]">
        <h3 className="text-primary text-[18px] font-[600] mb-[25px]">
          Contact me with :
        </h3>
        <div className="flex items-center gap-[20px] mb-[20px] w-[50%]">
          <div className="h-[50px] flex items-center justify-center w-[50px] leading-[40px] rounded-[50%] text-[17px] text-center border-[2px] border-solid border-[#ffbc4b] mr-[5px]  hover-social text-primary">
            <a href={guide?.contact?.facebook} target="_blank">
              <FontAwesomeIcon
                icon={faFacebookF}
                className="icon text-primary text-[24px] font-[600] cursor-pointer"
              ></FontAwesomeIcon>
            </a>
          </div>
          <div className="h-[50px] flex items-center justify-center w-[50px] leading-[40px] rounded-[50%] text-[17px] text-center border-[2px] border-solid border-[#ffbc4b] mr-[5px]  hover-social text-primary">
            <a href={guide?.contact?.facebook} target="_blank">
              <FontAwesomeIcon
                icon={faInstagram}
                className="icon text-primary text-[24px] font-[600] cursor-pointer"
              ></FontAwesomeIcon>
            </a>
          </div>
        </div>
        <div>
          <span className="mb-[15px]">Or send email</span>
          <textarea
            rows="5"
            placeholder="Enter your content"
            className={`w-full hover-input rounded-lgborder-[2px] border-solid border-[#ffbc4b] bg-none text-[14px] transform-none text-[#aaa] my-[10px] p-3 normal-case resize-none scrollcss`}
          ></textarea>
          <div className="text-center">
          <ButtonContact className="overflow-hidden  ">Send</ButtonContact>

          </div>
        </div>
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default ModalContactGuide;
