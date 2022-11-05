import React from "react";
import ReactDOM from "react-dom";
import place1 from "../../assets/images/detailproject/NY1.jpeg";

const ModalBox = ({ show = true }) => {
  return ReactDOM.createPortal(
    <div
      className={`fixed top-0 bottom-0 right-0 left-0 z-[1010] flex justify-center items-center visible opacity-100 transition ease-in duration-200 ${
        show ? "" : "opacity-0 invisible"
      }`}
    >
      <div className="absolute w-full h-full bg-[rgba(0,0,0,0.68)] z-[1010]"></div>
      <div className="max-w-[600px] w-full absolute bg-white z-[1020] rounded-lg">
        <div >
          <img src={place1} alt="" />
        </div>
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default ModalBox;
