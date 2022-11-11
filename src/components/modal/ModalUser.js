import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowModalUser } from "../../store/showModal/showSlice";
import ReactDOM from "react-dom";

const ModalUser = ({ children }) => {
  const { showModalUser } = useSelector((state) => state.show);
  console.log(showModalUser);
  const dispatch = useDispatch();
  return ReactDOM.createPortal(
    <div
      className={`fixed top-0 bottom-0 right-0 left-0 z-[1010] visible opacity-100 transition ease-in duration-200 ${
        showModalUser ? "" : "opacity-0 invisible"
      } modal-review `}
    >
      <div
        className="absolute w-full h-full bg-[rgba(0,0,0,0.68)] z-[499]"
        onClick={() => {
          dispatch(setShowModalUser(false));
        }}
      ></div>
      {children}
    </div>,
    document.querySelector("body")
  );
};

export default ModalUser;
