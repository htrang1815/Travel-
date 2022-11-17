import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactDOM from "react-dom";
import { setShowModalAlert } from "../../store/showModal/showSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { setShowAlert } from "../../store/alert/alertSlice";

const ModalAlert = () => {
  const { showAlert, alertContent, type } = useSelector((state) => state.alert);
//   console.log(showModalAlert);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return ReactDOM.createPortal(
    <div
      className={`fixed top-0 bottom-0 right-0 left-0 z-[1010] flex justify-center items-center visible opacity-100 transition ease-in duration-200
        ${showAlert && type === "fail" ? "" : "opacity-0 invisible"} `}
    >
      <div
        className="absolute w-full h-full bg-[rgba(0,0,0,0.68)] z-[500]"
        onClick={() => {
          dispatch(setShowAlert(false));
          console.log("click");
        }}
      ></div>
      <div className="absolute max-w-[40%] w-full h-[50vh] bg-[#111] bg-opacity-95 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg p-10 pt-12 gap-8 flex flex-col items-center justify-center z-[500]">
        <FontAwesomeIcon
          icon={faXmark}
          className="text-[#ff3333] text-[40px] font-[600] border-[8px] border-solid border-[#ff3333] rounded-full p-3 flex-grow"
        ></FontAwesomeIcon>
        <h1 className="text-primary text-[28px] font-[700] ">Opps!</h1>
        <span className="block text-[#fff] text-[16px] normal-case">
          {alertContent}
        </span>
        <button
          className="block mb-5 p-4 rounded-lg text-[#111] bg-primary w-full text-[16px] font-[500]"
          onClick={() => {
            navigate("/home");
          }}
        >
          Back to home
        </button>
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default ModalAlert;
