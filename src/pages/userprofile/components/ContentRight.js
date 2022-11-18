import React from "react";
import ButtonLoadMore from "../../../components/button/ButtonLoadMore";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import GuideSaveItem from "./item/GuideSaveItem";
import MyBlogItem from "./item/MyBlogItem";
import MyReviewItem from "./item/MyReviewItem";
import PlaceSaveItem from "./item/PlaceSaveItem";
import { useSelector } from "react-redux";
import useAuthStateChanged from "../../../hooks/useAuthStateChange";

const ContentRight = () => {
  const { user } = useAuthStateChanged();
  // console.log(user.bookmark);
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
              {user?.bookmark.map((place) => (
                <PlaceSaveItem
                  key={user?.bookmark._id}
                  data={place}
                ></PlaceSaveItem>
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
              <MyBlogItem></MyBlogItem>
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
              <MyBlogItem></MyBlogItem>
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
            <div className="myreview mt-[30px] grid grid-cols-1 grid-flow-row gap-8 ">
              <MyReviewItem></MyReviewItem>
              <MyReviewItem></MyReviewItem>
              <MyReviewItem></MyReviewItem>
              <MyReviewItem></MyReviewItem>
              <MyReviewItem></MyReviewItem>
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

      {/* <div className="content__header "> */}
      {/* <div className="content__menu flex justify-around w-full py-8"> */}
      {/* menu */}
      {/* <a href="#">Place save</a>
          <a href="#">Place save</a>
          <a href="#">Booking</a>
          <a href="#">Reviews</a>
          <a href="#">Blogs</a> */}
      {/* </div> */}
      {/* </div> */}
      {/* <div className="content__bottom">
        <div className="place-saving grid grid-cols-3 grid-flow-row gap-8 ">
          <ProjectItem></ProjectItem>
          <ProjectItem></ProjectItem>
          <ProjectItem></ProjectItem>
          <ProjectItem></ProjectItem>
          <ProjectItem></ProjectItem>
        </div>
      </div> */}
    </div>
  );
};

export default ContentRight;
