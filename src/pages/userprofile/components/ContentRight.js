import React, { useEffect } from "react";
import ButtonLoadMore from "../../../components/button/ButtonLoadMore";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import GuideSaveItem from "./item/GuideSaveItem";
import MyBlogItem from "./item/MyBlogItem";
import MyReviewItem from "./item/MyReviewItem";
import PlaceSaveItem from "./item/PlaceSaveItem";
import { useDispatch, useSelector } from "react-redux";
import useAuthStateChanged from "../../../hooks/useAuthStateChange";
import { getMyBlog } from "../../../store/myblog/slice";
import { getMyReview } from "../../../store/myreview/slice";
import { joinUser } from "../../../realtimeCommunication/socketConnection";

const ContentRight = () => {
  const { user } = useAuthStateChanged();
  // console.log(user.bookmark);
  const dispatch = useDispatch();
  const { myblog } = useSelector((state) => state.myblog);
  const { myreview } = useSelector((state) => state.myreview);

  // useEffect(() => {
  //   joinUser(user._id);
  // }, [user._id]);

  useEffect(() => {
    dispatch(getMyBlog(user._id));
    dispatch(getMyReview(user._id));
  }, [dispatch, user._id]);
  // console.log("myreview", myreview)
  return (
    <div className="content-right w-[75%] p-[40px] pt-0 bg-[#222] rounded-lg">
      <Tabs>
        <TabList className="flex items-center justify-between text-primary text-[16px]">
          <Tab>Place save</Tab>
          <Tab>Booking</Tab>
          <Tab>My blog</Tab>
          <Tab>My review</Tab>
        </TabList>

        <TabPanel>
          <div>
            <div className="place-saving mt-[30px] grid grid-cols-1 grid-flow-row gap-8 ">
              {user?.bookmark.map((place, index) => (
                <PlaceSaveItem key={index} data={place}></PlaceSaveItem>
              ))}
              {/* <PlaceSaveItem></PlaceSaveItem>
              <PlaceSaveItem></PlaceSaveItem>
              <PlaceSaveItem></PlaceSaveItem>
              <PlaceSaveItem></PlaceSaveItem> */}
            </div>
            <div className="text-center">
              <ButtonLoadMore
                text="Load More"
                className="text-primary mt-[30px]"
              ></ButtonLoadMore>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div>
            <div className="myblog mt-[30px] grid grid-cols-1 grid-flow-row gap-8 ">
              {/* {myblog?.map((blog) => {
              <MyBlogItem  key={blog?._id} data={blog}></MyBlogItem>

            })} */}
              <MyBlogItem></MyBlogItem>
              <MyBlogItem></MyBlogItem>
              <MyBlogItem></MyBlogItem>
            </div>
            <div className="text-center">
              <ButtonLoadMore
                text="Load More"
                className="text-primary mt-[30px]"
              ></ButtonLoadMore>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div>
            <div className="myblog mt-[30px] grid grid-cols-1 grid-flow-row gap-8 ">
              {myblog?.map((blog) => (
                <MyBlogItem key={blog?._id} data={blog}></MyBlogItem>
              ))}
            </div>
            <div className="text-center">
              <ButtonLoadMore
                text="Load More"
                className="text-primary mt-[30px]"
              ></ButtonLoadMore>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div>
            <div className="myreview mt-[30px] grid grid-cols-1 grid-flow-row gap-8 ">
              {myreview?.map((review) => (
                <MyReviewItem key={review?._id} data={review}></MyReviewItem>
              ))}
            </div>
            <div className="text-center">
              <ButtonLoadMore
                text="Load More"
                className="text-primary mt-[30px]"
              ></ButtonLoadMore>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ContentRight;
