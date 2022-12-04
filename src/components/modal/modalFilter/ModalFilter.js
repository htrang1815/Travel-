import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { setShowFilter } from "../../../store/showModal/showSlice";
import FilterLenght from "./filter/FilterLenght";
import FilterPrice from "./filter/FilterPrice";
import FilterDeparture from "./filter/FilterDepartureDate";
import {
  getDateFilter,
  getLenght,
  getPrice,
} from "../../../store/filterSearch/filterSearch";
import axios from "axios";
import domain from "../../../utils/common";
import {
  getProjectList,
  setProjectList,
} from "../../../store/projectList/slice";

const ModalFilter = () => {
  const { showFilter } = useSelector((state) => state.show);
  const { lenght, price, date, name } = useSelector(
    (state) => state.filterSearch
  );
  // const { projectList } = useSelector((state) => state.projectList);
  const dispatch = useDispatch();
  // console.log(lenght, price, date);

  // useEffect(() => {
  //   dispatch(getLenght());
  //   dispatch(getPrice());
  //   dispatch(setProjectList());
  //   dispatch(setShowFilter());
  // }, [dispatch]);

  const handleFilter = async () => {
    // console.log({
    //   price: price,
    //   lenght: lenght,
    //   name: name,
    //   date: date,
    // });
    try {
      const res = await axios.post(`${domain}/api/v1/projects/filter`, {
        price: price,
        lenght: lenght,
        name: name,
        date: date,
      });

      // console.log(res.data.data.projects);
      // console.log(price, name, lenght, date);

      setShowFilter(false);
      dispatch(setProjectList(res.data.data.projects));
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(lenght, price, date, name);

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
          <button
            className="text-[16px] px-[30px] py-[8px] text-[#111] border border-solid border-[#111] rounded-md hover-btn"
            onClick={handleFilter}
          >
            Result
          </button>
        </div>
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default ModalFilter;
