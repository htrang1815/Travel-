import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { getBlogList } from "../../../store/blogList/slice";
import { getGuideList } from "../../../store/guideList/slice";
import { getProjectList } from "../../../store/projectList/slice";
import { getReviewList } from "../../../store/reviewList/slice";
// import { getAllReview } from "../../../store/allreview/slice";
import { getUserProfile } from "../../../store/userProfile/slice";
import Datatable from "../components/Datatable";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import {
  reviewColumns,
  guideColumns,
  userColumns,
  blogColumns,
  placeColumns,
} from "../datatablesources";
import { userInputs, placeInputs } from "../formSource";

const List = () => {
  const { userProfile } = useSelector((state) => state.userProfile);
  const { reviewList } = useSelector((state) => state.reviewList);
  const { blogList } = useSelector((state) => state.blogList);
  const { guideList } = useSelector((state) => state.guideList);
  const { projectList } = useSelector((state) => state.projectList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile());
    dispatch(getReviewList());
    dispatch(getBlogList());
    dispatch(getGuideList());
    dispatch(getProjectList());
  }, [dispatch]);

  // console.log(reviewList);

  const userRows = userProfile?.map((el) => {
    return {
      id: el._id,
      name: el.name,
      email: el.email,
      typeAccount: el.typeAccount,
      status: el.status,
      avatarUrl: el.avatarUrl,
      address: el.address,
      dateOfBirth: moment(el.dateOfBirth).format("DD/MM/YYYY"),
      phone: el.phone,
      role: el.role,
    };
  });

  const guideRows = guideList?.map((el) => {
    return {
      id: el._id,
      name: el.name,
      experience: el.experience,
      phone: el.contact.phone,
      email: el.contact.email,
      avatarUrl: el.avatarUrl,
      language: el.language,
      //     dateOfBirth: moment(el.dateOfBirth).format("DD/MM/YYYY"),
      place: el.place,
      address: el.address,
    };
  });

  const projectRows = projectList?.map((el) => {
    return {
      id: el._id,
      name: el.name,
      guides: el.guides?._id,
      duration: el.duration,
      experience: el.experience,
      images: el.images,
      accomodation: el.include.accomodation,
      meals: el.include.meals,
      transport: el.include.transport,
      price: el.price,
      ratingAverage: el.ratingAverage,
      ratingsQuantity: el.ratingsQuantity,
      maxGroupSize: el.maxGroupSize,
      //     dateOfBirth: moment(el.dateOfBirth).format("DD/MM/YYYY"),
      place: el.place,
      address: el.address,
    };
  });

  const reviewRows = reviewList?.map((el) => {
    return {
      id: el._id,
      review: el.review,
      rating: el.rating,
      user: el.user._id,
      guide: el.guide?._id,
      place: el.place?._id,
      createdAt: moment(el.createdAt).format("DD/MM/YYYY"),
    };
  });

  const blogRows = blogList?.map((el) => {
    return {
      id: el._id,
      article: el.article,
      title: el.title,
      user: el.user?._id,
      publishedAt: moment(el.publishedAt).format("DD/MM/YYYY"),
    };
  });

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
                path="userprofile"
              ></Datatable>
            }
          ></Route>
          <Route
            path="/reviews"
            element={
              <Datatable
                columns={reviewColumns}
                rows={reviewRows}
                inputs={userInputs}
                title="reviews"
                path="reviews"
              ></Datatable>
            }
          ></Route>
          <Route
            path="/blogs"
            element={
              <Datatable
                columns={blogColumns}
                rows={blogRows}
                inputs={userInputs}
                title="blogs"
                path="blogs"
              >
                blogs
              </Datatable>
            }
          ></Route>
          <Route
            path="/guides"
            element={
              <Datatable
                columns={guideColumns}
                rows={guideRows}
                inputs={userInputs}
                title="guides"
                path="guides"
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
                rows={projectRows}
                inputs={placeInputs}
                title="places"
                path="projects"
              >
                places
              </Datatable>
            }
          ></Route>
          {/*<Route
            path="/blogs"
            element={<Datatable >guides</Datatable>}
          ></Route> */}
        </Routes>
      </div>
    </div>
  );
};

export default List;
