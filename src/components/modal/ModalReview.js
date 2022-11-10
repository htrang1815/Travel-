import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { React } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { setShowModalReview } from "../../store/showModal/showSlice";
import BasicRating from "../icon/ReviewStar";
import Textarea from "../input/Textarea";

const ModalReview = () => {
  const { showModalReview } = useSelector((state) => state.show);
  console.log(showModalReview);
  const dispatch = useDispatch();
  return ReactDOM.createPortal(
    <div
      className={`fixed top-0 bottom-0 right-0 left-0 z-[1010] flex justify-center items-center visible opacity-100 transition ease-in duration-200 ${
        showModalReview ? "" : "opacity-0 invisible"
      } modal-review `}
    >
      <div
        className="absolute w-full h-full bg-[rgba(0,0,0,0.68)] z-[499]"
        onClick={() => {
          dispatch(setShowModalReview(false));
        }}
      ></div>
      <div className=" bg-[#fff] w-[40%] m-h-[35%] z-[500]">
        <div className="py-[20px] px-[30px] flex flex-col items-center justify-center">
          <BasicRating></BasicRating>
          <div className="w-full relative">
            <Textarea
              label="Your review"
              type="text"
              rows="5"
              placeholder="Write your review"
              className="p-8 pr-[30%] w-full h-full"
              classNameLabel="text-[#111]"
            ></Textarea>
            <img
              src="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="absolute w-[20%] h-[50%] object-cover right-[25px] top-[30%]"
            />
            <input
              type="file"
              accept="image/*"
              id="banner-upload"
              hidden
            ></input>
            <label
              htmlFor="banner-upload"
              className="absolute bottom-[20px] right-[20px] w-[40px] h-[40px] rounded-[50%] flex justify-center items-center cursor-pointer"
            >
              <FontAwesomeIcon
                icon={faUpload}
                className="text-[24px] bg-[#111111a6] p-2 rounded-[4px] font-[700] text-primary"
              ></FontAwesomeIcon>
            </label>
          </div>

          <button
            className="text-primary border border-solid border-primary  px-4 py-3 rounded-[10px] w-[30%]
           hover-button"
          >
            Send
          </button>
        </div>
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default ModalReview;
