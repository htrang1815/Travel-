import React from "react";
import CollapsibleDetail from "../../projectdetail/contentdetail/accordion/CollapsibleDetail";

const DescribeGuide = ({guideName , className}) => {
  return (
    <div className={`${className}`}>
      <CollapsibleDetail
        header={`About ${guideName}`}
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quia debitis aliquam distinctio nostrum a minus ipsa quos, fugiat nobis quasi voluptate eum id tempora repellat sunt repellendus, eaque assumenda."
      ></CollapsibleDetail>
      <CollapsibleDetail
        header="What you will experience"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quia debitis aliquam distinctio nostrum a minus ipsa quos, fugiat nobis quasi voluptate eum id tempora repellat sunt repellendus, eaque assumenda."
      ></CollapsibleDetail>
      <CollapsibleDetail
        header="why you can choose me ?"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quia debitis aliquam distinctio nostrum a minus ipsa quos, fugiat nobis quasi voluptate eum id tempora repellat sunt repellendus, eaque assumenda."
      ></CollapsibleDetail>
      <CollapsibleDetail
        header="Additional Info"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quia debitis aliquam distinctio nostrum a minus ipsa quos, fugiat nobis quasi voluptate eum id tempora repellat sunt repellendus, eaque assumenda."
      ></CollapsibleDetail>
    </div>
  );
};

export default DescribeGuide;
