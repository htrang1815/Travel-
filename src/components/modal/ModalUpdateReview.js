import React from "react";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { setShowModalUpdateReview } from "../../store/showModal/showSlice";
// import { setShowModalAlert } from "../../store/showModal/showSlice";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import imgdefault from "../../assets/images/reviews/imgdefault.jpg";
import axios from "axios";
import domain from "../../utils/common";
import { setLoadingButtonReview } from "../../store/loading/loadingSlice";
import {
  setAlertContent,
  setShowAlert,
  setType,
} from "../../store/alert/alertSlice";
import useGetImageUrl from "../../hooks/useGetImageUrl";
import Textarea from "../input/Textarea";
import BasicRating from "../icon/ReviewStar";
import { setRating } from "../../store/review/reviewSlice";
import { updateReview } from "../../realtimeCommunication/socketConnection";
import useAuthStateChanged from "../../hooks/useAuthStateChange";

const ModalUpdateReview = () => {
  const { user } = useAuthStateChanged();
  const { imageCover, getImageUrl } = useGetImageUrl();
  const { reviewUpdateUser } = useSelector((state) => state.review);
  const { showModalUpdateReview } = useSelector((state) => state.show);
  // const { showAlert, alertContent, type } = useSelector((state) => state.alert);
  const { rating } = useSelector((state) => state.review);

  const { loadingButtonReview } = useSelector((state) => state.loading);
  // console.log("modal", rating);
  // console.log("reviewmodal", reviewUpdateUser);

  console.log("image update", imageCover);
  // const { projectId, guideId } = useParams();

  const dispatch = useDispatch();

  const schema = yup.object({
    review: yup
      .string()
      // .required("Please enter your review")
      .min(30, "Your review must have at least 30 characters."),
  });

  const {
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    control,
    // reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    //mode: onChange để sử dụng đc thằng isValid (ko nó sẽ mãi mãi là false)
  });

  // useEffect(() => {
  // console.log(reviewUpdateUser.review)
  // reset({
  //   review: reviewUpdateUser.review,
  // })
  // console.log(review)
  // }, []);

  const handleUpdateReview = async (review) => {
    console.log("asdasdasd", imageCover);
    try {
      if (rating && rating !== 0) {
        const updatereview = await axios.patch(
          `${domain}/api/v1/reviews/${reviewUpdateUser._id}`,
          {
            review: review.review,
            rating: rating,
            image: imageCover,
          }
        );
        dispatch(setShowModalUpdateReview(false));
        console.log(updatereview);
      } else {
        dispatch(setShowAlert(true));
        dispatch(setAlertContent("You must rating"));
        dispatch(setType("fail"));
      }
    } catch (err) {
      console.log(err);
    }
  };

  return ReactDOM.createPortal(
    <div
      className={`fixed top-0 bottom-0 right-0 left-0 z-[1010] flex justify-center items-center visible opacity-100 transition ease-in duration-200 ${
        showModalUpdateReview ? "" : "opacity-0 invisible"
      } modal-review `}
    >
      <div
        className="absolute w-full h-full bg-[rgba(0,0,0,0.2)] z-[499]"
        onClick={() => {
          dispatch(setShowModalUpdateReview(false));
        }}
      ></div>
      <div className=" bg-[#fff] w-[40%] m-h-[35%] z-[500]">
        <form
          className="py-[20px] px-[30px] flex flex-col items-center justify-center"
          onSubmit={handleSubmit(handleUpdateReview)}
        >
          <BasicRating rating={reviewUpdateUser.rating}></BasicRating>
          <div className="w-full relative">
            <Textarea
              id="review"
              label="Your review"
              rows="5"
              placeholder="Write your review"
              className="p-8 pr-[30%] w-full h-full"
              classNameLabel="text-[#111]"
              value={reviewUpdateUser?.review}
              control={control}
            ></Textarea>
            <p className="text-[#f77171] font-semibold mb-[10px]">
              {errors.review?.message}
            </p>
            <img
              // src={imageCover || reviewUpdateUser?.image || imgdefault}
              src={imageCover}
              alt=""
              className="absolute w-[20%] h-[50%] object-cover right-[25px] top-[30%]"
            />
            <input
              type="file"
              accept="image/*"
              id="banner-upload"
              onChange={(e) => {
                dispatch(setLoadingButtonReview(true));
                getImageUrl(e);
              }}
              hidden
            ></input>
            <label
              htmlFor="banner-upload"
              className="absolute bottom-[20px] right-[20px] w-[40px] h-[40px] rounded-[50%] flex justify-center items-center cursor-pointer"
            >
              <FontAwesomeIcon
                icon={faUpload}
                className="text-[24px] bg-[#111111a6] p-2 rounded-[4px] font-[700] text-primary"
              ></FontAwesomeIcon>
            </label>
          </div>

          <button
            type="submit"
            className="text-primary border border-solid border-primary  px-4 py-3 rounded-[10px] w-[30%] hover-button cursor-pointer"
            disabled={loadingButtonReview ? true : false}
          >
            {loadingButtonReview ? (
              <div className="w-10 h-10 rounded-full border-[#ffbc4a] border-solid border-t-[transparent] border-b-[transparent] animate-spin mx-auto loadingsend"></div>
            ) : (
              "Update"
            )}
          </button>
        </form>
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default ModalUpdateReview;
