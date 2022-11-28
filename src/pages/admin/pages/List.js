import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
// import { getAllReview } from "../../../store/allreview/slice";
import { getUserProfile } from "../../../store/userProfile/slice";
import Datatable from "../components/Datatable";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import {
  commentColumns,
  commentRows,
  placeColumns,
  placeRows,
  userColumns,
  userRows,
} from "../datatablesources";
import { userInputs } from "../formSource";

const List = () => {
  const { userProfile } = useSelector((state) => state.userProfile);
  const { reviewList } = useSelector((state) => state.reviewList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile());
    // dispatch(getAllReview());
  }, [dispatch]);

  const userRows = userProfile?.map((el) => {
    return {
      id: el._id,
      name: el.name,
      email: el.email,
      typeAccount: el.typeAccount,
      avatarUrl: el.avatarUrl,
      address: el.address,
      dateOfBirth: moment(el.dateOfBirth).format("DD/MM/YYYY"),
      phone: el.phone,
      role: el.role,
    };
  });
    console.log(reviewList);
  // const reviewRows = allreview?.map((el) => {
  //   return {
  //     id: el._id,
  //     review: el.review,
  //     rating: el.rating,
  //     user: el.user,
  //     guide: el.guide,
  //     place: el.place,
  //     createdAt: moment(el.createdAt).format("DD/MM/YYYY"),
  //   };
  // });


  return (
    <div className="list flex w-full ">
      {/* <Router></Router> */}
      <Sidebar />
      <div className="listContainer  flex-[6_6_0%]">
        <Navbar />
        {/* <Datatable columns={columns} /> */}
        <Routes>
          <Route
            path="/users"
            element={
              <Datatable
                columns={userColumns}
                rows={userRows}
                title="user"
                inputs={userInputs}
              ></Datatable>
            }
          ></Route>
          {/* <Route
            path="/places"
            element={
              <Datatable
                columns={placeColumns}
                rows={placeRows}
                inputs={placeInputs}
                title="places"
              >
                Hello
              </Datatable>
            }
          ></Route> */}
          {/*<Route
            path="/guides"
            element={<Datatable >blogs</Datatable>}
          ></Route>
          <Route
            path="/booking"
            element={<Datatable >guides</Datatable>}
          ></Route>
          <Route
            path="/blogs"
            element={<Datatable >guides</Datatable>}
          ></Route> */}
          {/* <Route
            path="/comments"
            element={
              <Datatable
                columns={commentColumns}
                rows={commentRows}
                inputs={placeInputs}
                title="places"
              ></Datatable>
            }
          ></Route> */}
        </Routes>
      </div>
    </div>
  );
};

export default List;
