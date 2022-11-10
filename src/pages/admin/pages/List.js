import React from "react";
import { Route, Routes } from "react-router-dom";
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
import { userInputs, placeInputs, hotelInputs } from "../formSource";

const List = () => {
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
                inputs={userInputs}
                title="user"
              >
                Hello
              </Datatable>
            }
          ></Route>
          <Route
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
          ></Route>
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
          <Route
            path="/comments"
            element={
              <Datatable
                columns={commentColumns}
                rows={commentRows}
              ></Datatable>
            }
          ></Route>
        </Routes>
      </div>
    </div>
  );
};

export default List;
