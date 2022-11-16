import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import lodash from "lodash";

import ButtonFilter from "../../../components/button/ButtonFilter";
import axios from "axios";
import domain from "../../../utils/common";
import { useDispatch } from "react-redux";
import { getProjectList } from "../../../store/projectList/slice";
// import Filter from './Filter';

const Search = () => {
  const dispatch = useDispatch();
  const handleSearch = lodash.debounce(async (e) => {
    e.preventDefault();
    // const result = await axios.get(
    //   `${domain}/api/v1/projects?name=${e.target.value}`
    // );
    // console.log(result.data.data.projects.name);
    console.log(e.target.value);
    dispatch(getProjectList(e.target.value));
  }, 500);
  return (
    <div className="w-full py-[30px] px-[9%]  rounded-[10px] ">
      <div className="bg-[#222] py-[20px] px-[10px] rounded-[10px]">
        <div className=" flex items-center gap-[15px] justify-between">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search Places"
              className="w-full py-[12px] px-[14px] rounded-[50px] text-[#aaa] border-[2px] border-solid border-[#ffbc4b] transform-none text-[16px]  hover-input"
              onChange={handleSearch}
            />
            <FontAwesomeIcon
              //   onClick={handleSearch}
              icon={faMagnifyingGlass}
              className="text-[22px] cursor-pointer text-[#aaa] absolute right-[3%] top-[50%] translate-y-[-50%]"
            ></FontAwesomeIcon>
          </div>
          <ButtonFilter
            className="w-full max-w-[150px]"
            text="Filter"
          ></ButtonFilter>
        </div>
      </div>
    </div>
  );
};

export default Search;
