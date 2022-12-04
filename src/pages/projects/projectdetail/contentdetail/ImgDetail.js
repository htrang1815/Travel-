import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setPhoto,
  setShowMorePhoto,
} from "../../../../store/showModal/showSlice";

const ImgDetail = () => {
  const { project } = useSelector((state) => state.project);

  const dispatch = useDispatch();

  return (
    <div className="w-full grid  grid-detail grid-flow-col gap-y-[10px] gap-x-[20px] mb-[30px]">
      <img
        className="object-cover w-full h-full rounded-lg col-span-2 row-start-1 row-end-7 "
        src={project?.images && project?.images[0]}
        alt=""
      />
      <img
        className="object-cover w-full h-full rounded-lg row-start-1 row-end-4"
        src={project?.images && project?.images[1]}
        alt=""
      />
      <img
        className="object-cover w-full h-full rounded-lg row-start-4 row-end-6"
        src={project?.images && project?.images[2]}
        alt=""
      />
      <button
        className="row-start-6 row-end-7 bg-primary rounded-lg"
        onClick={() => {
          dispatch(setShowMorePhoto(true));
          dispatch(setPhoto(project?.images));
        }}
      >
        More {`${project?.images?.length - 3}`} photos
      </button>
    </div>
  );
};

export default ImgDetail;
