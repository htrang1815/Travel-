import React from "react";
import { useSelector } from "react-redux";
import CollapsibleDetail from "../../projectdetail/contentdetail/accordion/CollapsibleDetail";

const DescribeGuide = ({ guideName, className }) => {
  const { guide } = useSelector((state) => state.guide);
  return (
    <div className={`${className}`}>
      <CollapsibleDetail
        header={`About ${guide?.name}`}
        content={guide?.summary}
      ></CollapsibleDetail>
      <CollapsibleDetail
        header="What you will experience"
        content={guide?.experience}
      ></CollapsibleDetail>
      <CollapsibleDetail
        header="why you can choose me ?"
        content={guide?.reason}
      ></CollapsibleDetail>
      <CollapsibleDetail
        header="Additional Info"
        content={
          <>
            <div className="mt-[8px]">
              <div>Phone: </div>
              <div className="ml-[4%]">{guide?.contact?.phone}</div>
            </div>
            <div className="mt-[8px]">
              <div>Email: </div>
              <div className="ml-[4%] normal-case">{guide?.contact?.email}</div>
            </div>
            <div className="mt-[8px]">
              <div>Facebook: </div>
              <div className="ml-[4%]">
                <a
                  href={guide?.contact?.facebook}
                  target="_blank"
                  className="normal-case hover:text-primary"
                >
                  {guide?.contact?.facebook}
                </a>
              </div>
            </div>
            <div className="mt-[8px]">
              <div>Instagram: </div>
              <div className="ml-[4%]">
                <a
                  href={guide?.contact?.instagram}
                  target="_blank"
                  className="normal-case hover:text-primary"
                >
                  {guide?.contact?.instagram}
                </a>
              </div>
            </div>
          </>
        }
      ></CollapsibleDetail>
    </div>
  );
};

export default DescribeGuide;
