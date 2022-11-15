import React from "react";
import { useDispatch } from "react-redux";
import ButtonBack from "../../../../components/button/ButtonBack";
import { setShowContactGuide } from "../../../../store/showModal/showSlice";
import ShareDetail from "../../projectdetail/contentdetail/ShareDetail";

const ControlDetail = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="py-[10px] px-[5%]">
        <div className="mt-[110px]">
          <div className="flex items-center justify-between mb-[20px]">
            <ButtonBack
              text="back to home"
              className="rounded-[12px] px-[10px] py-[5px] items-center "
              classNamediv="mb-0"
            ></ButtonBack>
            <div className="flex">
              <ShareDetail className='guide-share mr-[10px]'></ShareDetail>
              <button
                type="submit"
                className="text-primary px-[10px] py-[5px] border border-solid border-[#ffbc4b] rounded-lg hover-button"
                onClick={()=>{
                  dispatch(setShowContactGuide(true))
                  console.log("click")
                }}
              >
                Contact me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlDetail;
