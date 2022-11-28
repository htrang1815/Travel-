import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { setShowAddNew } from "../../../store/showModal/showSlice";
import ModalNewUser from "./modal/ModalNewUser";
import useFetch from "../../../hooks/useFetch";
import { getUserProfile } from "../../../store/userProfile/slice";
import moment from "moment";

const Datatable = ({ columns, rows, inputs, title }) => {
  // const [list, setList] = useState();
  // const { data, loading, error } = useFetch(``);
  const dispatch = useDispatch();
  

  // console.log(row);
  return (
    <>
      <div className={`datatable `}>
        <div className="datatableTitle ">
          <button
            className="link"
            onClick={() => {
              dispatch(setShowAddNew(true));
            }}
          >
            Add New
          </button>
        </div>
        <div className="h-[500px] w-full ">
          <DataGrid
            className="datagrid"
            columns={columns}
            rows={rows}
            checkboxSelection
            sx={{
              boxShadow: 2,
              border: 2,
              borderColor: "#ffbc4b",
              "& .MuiDataGrid-cell:hover": {
                color: "primary.main",
              },
              color: "#ffbc4b",
              fontSize: "14px",
            }}
          />
        </div>
        <ModalNewUser inputs={inputs} title={title}></ModalNewUser>
      </div>
    </>
  );
};

export default Datatable;
