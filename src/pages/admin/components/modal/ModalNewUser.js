import React from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { setShowAddNew } from "../../../../store/showModal/showSlice";

const ModalNewUser = ({ inputs,title }) => {
  const dispatch = useDispatch();
  const { showAddNew } = useSelector((state) => state.show);

  return ReactDOM.createPortal(
    <div className={`${
        showAddNew ? "" : "opacity-0 invisible"
      } `}>
      <div
        className="absolute w-full h-full top-0 right-0 left-0 bg-[rgba(0,0,0,0.68)] z-[1010]"
        onClick={(e) => {
          dispatch(setShowAddNew(false));
          console.log(e.target);
        }}
      ></div>
      <div
        className={`new w-full flex top-[65px] right-[50%] translate-x-[50%] fixed z-[1020] bg-[#fff] flex-col   `}
      >
        <div className="top ">
          <h1>Add new {title}</h1>
        </div>
        <div className="bottom max-h-[60vh] h-full scrollcss">
          <div className="left">
            <img
              src={
                "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form className="overflow-y-scroll h-full pr-[5px]">
              <div className="formInput ">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) =>
                    // setFile(e.target.files[0])
                    {}
                  }
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    onChange={() => {}}
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.id}
                  />
                </div>
              ))}
              <button onClick={() => {}} className='text-primary border-primary hover-button'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default ModalNewUser;
