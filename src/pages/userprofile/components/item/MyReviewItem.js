import {
  faPenToSquare,
  faSquareMinus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ReviewItem from "../../../projects/projectdetail/contentdetail/review/ReviewItem";
import pic1 from "../../../../assets/images/reviews/pic-1.png";

import { removeMyReview } from "../../../../realtimeCommunication/socketConnection";
import { setShowModalUpdateReview } from "../../../../store/showModal/showSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  setRating,
  setReviewUpdateUser,
} from "../../../../store/review/reviewSlice";
import useAuthStateChanged from "../../../../hooks/useAuthStateChange";

const MyReviewItem = ({ data, index }) => {
  const dispatch = useDispatch();

  const { rating } = useSelector((state) => state.review);
  const { getMyReview } = useSelector((state) => state.myreview);
  const handleDeleteMyReview = async () => {
    // const myreview = await axios.delete(`${domain}/api/v1/reviews/${data._id}`);
    removeMyReview({ userId: data.user._id, reviewId: data._id });
  };
  const { user } = useAuthStateChanged();
  // useEffect(() => {
  //   dispatch(getMyReview(user._id));
  //   console.log(getMyReview(user._id))
  // }, [dispatch, user._id]);
  return (
    <>
      <div className="relative">
        <ReviewItem review={data} pic={pic1}></ReviewItem>
        <div className="flex absolute top-[10px] right-[10px]">
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="text-[18px] text-primary block pr-[20px] cursor-pointer"
            onClick={() => {
              dispatch(setReviewUpdateUser(data));
              dispatch(setShowModalUpdateReview(true));
              dispatch(setRating(data.rating));
            }}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faSquareMinus}
            className="text-[18px] text-[#fc3f3f] block pr-[20px] cursor-pointer"
            onClick={handleDeleteMyReview}
          ></FontAwesomeIcon>
        </div>
      </div>
    </>
  );
};

export default MyReviewItem;
