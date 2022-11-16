import React from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { setShowFilter } from "../../../store/showModal/showSlice";
import FilterLenght from "./filter/FilterLenght";
import FilterPrice from "./filter/FilterPrice";
import FilterDeparture from "./filter/FilterDepartureDate";

const ModalFilter = () => {
  const { showFilter } = useSelector((state) => state.show);
  const dispatch = useDispatch();

  return ReactDOM.createPortal(
    <div
      className={`fixed top-0 bottom-0 right-0 left-0 z-[1010] flex justify-center items-center visible opacity-100 transition ease-in duration-200 ${
        showFilter ? "" : "opacity-0 invisible"
      }`}
    >
      <div
        className="absolute w-full h-full bg-[rgba(0,0,0,0.68)] z-[499]"
        onClick={() => {
          dispatch(setShowFilter(false));
        }}
      ></div>
      <div className=" bg-primary w-max min-h-[45%] z-[500] p-[2%] filter">
        <div>
          <span className="text-[20px] text-[#111] font-[500] mb-[10px]">
            Lenght
          </span>
          <FilterLenght></FilterLenght>
        </div>
        <div>
          <span className="text-[20px] text-[#111] font-[500] mb-[10px]">
            Price
          </span>
          <FilterPrice></FilterPrice>
        </div>
        <div>
          <span className="text-[20px] text-[#111] font-[500] mb-[10px]">
            Departure date
          </span>
          <FilterDeparture></FilterDeparture>
        </div>
        <div className="text-center mt-[15px]">
          <button className="text-[16px] px-[30px] py-[8px] text-[#111] border border-solid border-[#111] rounded-md hover-btn">
            Result
          </button>
        </div>
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default ModalFilter;
