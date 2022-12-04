import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch } from "react-redux";
import { setShowAddNew } from "../../../store/showModal/showSlice";
import ModalNewUser from "./modal/ModalNewUser";
import axios from "axios";
import { Link } from "react-router-dom";
import domain from "../../../utils/common";
import ModalNewGuide from "./modal/ModalNewGuide";
import { adminDelete } from "../../../realtimeCommunication/socketConnection";
import useAuthStateChanged from "../../../hooks/useAuthStateChange";

const Datatable = ({ columns, rows, inputs, title, path }) => {
  // const { userProfile } = useSelector((state) => state.userProfile);
  // const { loadingButtonReview } = useSelector((state) => state.loading);
  // const { reviewList } = useSelector((state) => state.reviewList);
  // const { blogList } = useSelector((state) => state.blogList);
  // const { guideList } = useSelector((state) => state.guideList);
  // const { projectList } = useSelector((state) => state.projectList);

  const dispatch = useDispatch();
  const { user } = useAuthStateChanged();
  // console.log(user);

  const userId = user._id;

  const handleDelete = async (id) => {
    try {
      // dispatch(setLoadingButtonReview(true));
      // await axios.delete(`${domain}/api/v1/${path}/${id}`);
      // const res = await axios.get(`${domain}/api/v1/${path}`);
      // console.log(res);
      // if (path === "userprofile") {
      //   setUserProfile(res.data.data);
      // }
      const data = {
        userId: userId,
        path: path,
        id: id,
      };
      adminDelete(data);
      // setList(list.filter((item) => item._id !== id));
    } catch (err) {
      console.log(err);
    }
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
                () => {
                  handleDelete(params.row.id);
                }

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
  // console.log(path);
  const arrpath = ["userprofile", "guides", "projects"];
  return (
    <>
      <div className={`datatable `}>
        {arrpath.includes(path) && (
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
        )}
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
        {path === "userprofile" && (
          <ModalNewUser
            inputs={inputs}
            title={title}
            path={path}
          ></ModalNewUser>
        )}
        {path === "guides" && (
          <ModalNewGuide
            inputs={inputs}
            title={title}
            path={path}
          ></ModalNewGuide>
        )}
      </div>
    </>
  );
};

export default Datatable;
