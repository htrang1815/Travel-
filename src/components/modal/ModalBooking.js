import {
  faCalendarDay,
  faLocationDot,
  faStar,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { React, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import Moment from "react-moment";
import { useParams } from "react-router-dom";
import { getProject } from "../../store/project/slice";
import { Rating } from "@mui/material";
import { setShowModalBooking } from "../../store/showModal/showSlice";
import ButtonBook from "../button/ButtonBook";

const ModalBooking = () => {
  const { showModalBooking } = useSelector((state) => state.show);
  const { project } = useSelector((state) => state.project);
  const { projectId } = useParams();
  const [number, setNumber] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProject(projectId));
    setNumber(0);
  }, [dispatch, projectId]);
  //   console.log(project);

  return ReactDOM.createPortal(
    <div
      className={`fixed top-0 bottom-0 right-0 left-0 z-[1010] flex justify-center items-center visible opacity-100 transition ease-in duration-200 ${
        showModalBooking ? "" : "opacity-0 invisible"
      } modal-review `}
    >
      <div
        className="absolute w-full h-full bg-[rgba(0,0,0,0.68)] z-[499]"
        onClick={() => {
          dispatch(setShowModalBooking(false));
        }}
      ></div>
      <div className=" bg-[#fff] w-[60%] m-h-[35%] z-[500]">
        <div className="flex gap-[30px] p-[20px]">
          <div className="w-[60%]">
            <div className={`rounded-[10px] overflow-hidden hover-item`}>
              <div className="w-full img">
                <img
                  src={project?.images && project?.images[0]}
                  alt=""
                  className="object-cover w-full h-full cursor-pointer"
                />
              </div>
              <div className="text-[#111] p-[20px] flex flex-col placecontent">
                <div className="grow ">
                  <div className="flex justify-between items-center mb-4 ">
                    <div className="flex text-primary">
                      <Rating
                        className="text-primary text-[14px] mr-[5px]"
                        readOnly
                        icon={
                          <FontAwesomeIcon
                            icon={faStar}
                            color="#ffbc4a"
                          ></FontAwesomeIcon>
                        }
                        emptyIcon={
                          <FontAwesomeIcon
                            icon={faStar}
                            color="#aaaaaa"
                          ></FontAwesomeIcon>
                        }
                        style={{
                          color: "#ffbc4a",
                          fontSize: "20",
                        }}
                        defaultValue={project?.ratingAverage || 0}
                        precision={0.5}
                      ></Rating>
                      <span className="text-[14px] font-[600] mr-[5px]">
                        {project?.ratingAverage}
                      </span>
                      <span className="text-[14px] text-[#111]">
                        ({project?.ratingsQuantity})
                      </span>
                    </div>
                    <span className="text-[14px] text-[#111]">
                      {project?.maxGroupSize}+Guides
                    </span>
                  </div>
                  <h3 className="text-[16px] text-[#111] font-[600] mb-4 text-wrap-title">
                    {project?.name}
                  </h3>
                  <span className="text-14px block mb-4 text-[#111]">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="text-primary mr-3"
                    ></FontAwesomeIcon>
                    {project?.startLocation?.description}
                  </span>
                  <span className="text-14px block mb-4 text-[#111]">
                    <FontAwesomeIcon
                      icon={faCalendarDay}
                      className="text-primary mr-3"
                    ></FontAwesomeIcon>
                    <Moment format="YYYY/MM/DD">{project?.createdAt}</Moment>
                  </span>
                  <span className="block font-[500] mb-4 text-[#111]">
                    $ {project?.price}.00{" "}
                  </span>
                </div>
                <div className="text-center block flex-none"></div>
              </div>
            </div>
          </div>
          <div className="p-[20px] flex gap-[40px] justify-center flex-col">
            <div className="wrapper h-[32px] min-w-[180px] flex items-center justify-center bg-primary rounded-[12px] shadow-lg">
              <span
                className="minus h-[32px] cursor-pointer"
                onClick={() => {
                  number > 1 && setNumber(number - 1);
                }}
              >
                -
              </span>
              <span className="num h-[32px]">{number}</span>
              <span
                className={`plus h-[32px] cursor-pointer`}
                onClick={() => {
                  project?.maxGroupSize > number && setNumber(number + 1);
                  console.log(project?.maxGroupSize, number);
                }}
              >
                +
              </span>
            </div>
            <div className="text-[#111] text-[28px]">
              Total : $ {project?.price * number}.00{" "}
            </div>
            <div className="items-center">
              <ButtonBook text="Payment" number={number}></ButtonBook>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default ModalBooking;
