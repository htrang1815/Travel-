import React from "react";
import { useDispatch } from "react-redux";
import { setShowModalReview } from "../../../../../store/showModal/showSlice";

const InputRiews = ({className}) => {
  const dispatch = useDispatch();
  return (
    <div className={`mb-[30px] ${className}`}>
      {/* <div className='flex gap-6'>
                <input type="text" placeholder='Enter your review' className='w-full py-[10px] px-[12px] rounded-[50px] text-[#aaa] border-[2px] border-solid border-[#ffbc4b] transform-none text-[14px]  hover-input'/>
            </div> */}
      <button
        className={`text-primary hover-button py-[10px] text-[14px] px-[32px] rounded-[25px] border-[2px] border-solid border-[#ffbc4b] `}
        onClick={() => {
          dispatch(setShowModalReview(true));
        }}
      >
        Write a review
      </button>
    </div>
  );
};

export default InputRiews;
