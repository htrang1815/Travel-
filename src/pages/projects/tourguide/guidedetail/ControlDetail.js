import React from "react";
import ButtonBack from "../../../../components/button/ButtonBack";
import ButtonBook from "../../../../components/button/ButtonBook";
import ShareDetail from "../../projectdetail/contentdetail/ShareDetail";

const ControlDetail = () => {
  return (
    <div>
      <div className="py-[10px] px-[5%]">
        <div className="mt-[110px]">
          <div className="flex items-center justify-between mb-[20px]">
            <ButtonBack 
              text="back to home"
              className="rounded-[12px] px-[10px] py-[5px] items-center "
              classNamediv='mb-0'
            ></ButtonBack>
            <ShareDetail></ShareDetail>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlDetail;
