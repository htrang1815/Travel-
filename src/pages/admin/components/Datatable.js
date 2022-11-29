import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { setShowAddNew } from "../../../store/showModal/showSlice";
import ModalNewUser from "./modal/ModalNewUser";
import useFetch from "../../../hooks/useFetch";
import { getUserProfile } from "../../../store/userProfile/slice";
import moment from "moment";
import axios from "axios";
import { Link } from "react-router-dom";
import domain from "../../../utils/common";

const Datatable = ({ columns, rows, inputs, title, path }) => {
  // const [list, setList] = useState();
  // const { data, loading, error } = useFetch(``);
  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${domain}/api/v1/${path}/${id}`);
      // setList(list.filter((item) => item._id !== id));
    } catch (err) {}
  };
  const handleBlock = async (id) => {
    try {
      await axios.patch(`${domain}/api/v1/${path}/${id}`, {
        status: "block",
      });
      // console.log()
    } catch (err) {}
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            {path === "userprofile" && (
              <div
                className="blockButton"
                onClick={() => {
                  handleBlock(params.row.id);
                }}
              >
                Block
              </div>
            )}
            <div
              className="deleteButton"
              onClick={
                () => handleDelete(params.row.id)
                // console.log("click delete", params.row.id)
              }
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
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
            columns={columns.concat(actionColumn)}
            rows={rows}
            // checkboxSelection
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
        <ModalNewUser inputs={inputs} title={title} path={path}></ModalNewUser>
      </div>
    </>
  );
};

export default Datatable;
