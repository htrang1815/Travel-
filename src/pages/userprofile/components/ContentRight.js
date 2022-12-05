import React, { useEffect, useState } from "react";
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
// import { joinUser } from "../../../realtimeCommunication/socketConnection";

const ContentRight = () => {
  const { user } = useAuthStateChanged();
  // console.log(user.bookmark);
  const dispatch = useDispatch();
  const { myblog } = useSelector((state) => state.myblog);
  const { myreview } = useSelector((state) => state.myreview);

  useEffect(() => {
    dispatch(getMyBlog(user._id));
    dispatch(getMyReview(user._id));
  }, [dispatch, user._id]);
  const itemsPerPage = 6;

  const datablog = myblog;
  const lengthBlog = datablog.length - 1;
  const [itemBlog, setitemBlog] = useState(0);
  const endBlog = itemBlog + itemsPerPage;
  const currentBlogItems = datablog.slice(0, endBlog);
  const handleBlogClick = (event) => {
    const newOffset = itemBlog + itemsPerPage;
    setitemBlog(newOffset);
  };

  const datareview = myreview;
  const lengthReview = datareview.length - 1;
  const [itemReview, setitemReview] = useState(0);
  const endReview = itemReview + itemsPerPage;
  const currentReviewItems = datareview.slice(0, endReview);
  const handleReviewClick = (event) => {
    const newOffset = itemReview + itemsPerPage;
    setitemReview(newOffset);
  };

  const databookmark = user?.bookmark;
  const lengthBookmark = databookmark.length - 1;
  const [itemBookmark, setitemBookmark] = useState(0);
  const endBookmark = itemBookmark + itemsPerPage;
  const currentBookmarkItems = databookmark.slice(0, endBookmark);
  const handleBookmarkClick = (event) => {
    const newOffset = itemBookmark + itemsPerPage;
    setitemBookmark(newOffset);
  };
  // console.log(lengthBookmark, endBookmark);

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
              {currentBookmarkItems.map((place, index) => (
                <PlaceSaveItem key={index} data={place}></PlaceSaveItem>
              ))}
              {/* <PlaceSaveItem></PlaceSaveItem>
              <PlaceSaveItem></PlaceSaveItem>
              <PlaceSaveItem></PlaceSaveItem>
              <PlaceSaveItem></PlaceSaveItem> */}
            </div>
            {lengthBookmark > endBookmark && (
              <div className="text-center" onClick={handleBookmarkClick}>
                <ButtonLoadMore
                  text="Load More"
                  className="text-primary mt-[30px]"
                ></ButtonLoadMore>
              </div>
            )}
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
              {/* <ButtonLoadMore
                text="Load More"
                className="text-primary mt-[30px]"
              ></ButtonLoadMore> */}
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div>
            <div className="myblog mt-[30px] grid grid-cols-1 grid-flow-row gap-8 ">
              {currentBlogItems?.map((blog) => (
                <MyBlogItem key={blog?._id} data={blog}></MyBlogItem>
              ))}
            </div>
            {lengthBlog > endBlog && (
              <div className="text-center" onClick={handleBlogClick}>
                <ButtonLoadMore
                  text="Load More"
                  className="text-primary mt-[30px]"
                ></ButtonLoadMore>
              </div>
            )}
          </div>
        </TabPanel>

        <TabPanel>
          <div>
            <div className="myreview mt-[30px] grid grid-cols-1 grid-flow-row gap-8 ">
              {currentReviewItems?.map((review, index) => (
                <MyReviewItem
                  key={review?._id}
                  data={review}
                  index={index}
                ></MyReviewItem>
              ))}
            </div>
            {lengthReview > endReview && (
              <div className="text-center" onClick={handleReviewClick}>
                <ButtonLoadMore
                  text="Load More"
                  className="text-primary mt-[30px]"
                ></ButtonLoadMore>
              </div>
            )}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ContentRight;
