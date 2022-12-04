import React from "react";
import CollapsibleDetail from "./accordion/CollapsibleDetail";
import { useSelector } from "react-redux";

const DescribeDetail = () => {
  const { project } = useSelector((state) => state.project);
  // console.log(project);
  return (
    <div className="describe">
      <CollapsibleDetail
        header="About the place"
        content={project?.summary}
      ></CollapsibleDetail>
      <CollapsibleDetail
        header="What you will experience"
        content={project?.experience}
      ></CollapsibleDetail>
      <CollapsibleDetail
        header="schedule"
        content={
          <div>
            {project?.locations?.map((location) => (
              <div key={location._id}>
                <span>Day {location.day}: </span>
                <span>Explore {location.description}</span>
              </div>
            ))}
          </div>
        }
      ></CollapsibleDetail>
      <CollapsibleDetail
        header="Whats incloud"
        content={
          <>
            <div className="mt-[8px]">
              <div>Accomodation: </div>
              <div className="ml-[4%]">{project?.include?.accomodation}</div>
            </div>
            <div className="mt-[8px]">
              <div>Meals: </div>
              <div className="ml-[4%]">{project?.include?.meals}</div>
            </div>
            <div className="mt-[8px]">
              <div>Transport: </div>
              <div className="ml-[4%]">{project?.include?.transport}</div>
            </div>
          </>
        }
      ></CollapsibleDetail>
    </div>
  );
};

export default DescribeDetail;
