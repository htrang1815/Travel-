import { faHeart, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { joinPlace } from "../../../../realtimeCommunication/socketConnection";
import { getProject } from "../../../../store/project/slice";
import {
  setSaveFavourite,
  setShowShare,
} from "../../../../store/showModal/showSlice";
import domain from "../../../../utils/common";
import useAuthStateChanged from "../../../../hooks/useAuthStateChange";

const ShareDetail = ({ className }) => {
  const { projectId } = useParams();

  const dispatch = useDispatch();
  const { savefavourite } = useSelector((state) => state.show);
  // console.log("savefavourite", savefavourite);
  const { user } = useAuthStateChanged();
  const check =
    user.bookmark.filter((el) => el._id === projectId).length > 0
      ? true
      : false;

  useEffect(() => {
    dispatch(setSaveFavourite(check));
  }, [check, dispatch]);

  const handleSaveFavourite = async () => {
    const isFavorite = await axios.post(`${domain}/api/v1/users/favourite`, {
      userId: user._id,
      placeId: projectId,
    });

    dispatch(setSaveFavourite(isFavorite.data.isFavorite));
  };
  const handleRemoveFavourite = async () => {
    const isFavorite = await axios.post(
      `${domain}/api/v1/users/remove-favourite`,
      {
        userId: user._id,
        placeId: projectId,
      }
    );

    dispatch(setSaveFavourite(isFavorite.data.isFavorite));
  };
  useEffect(() => {
    joinPlace(projectId);
  }, [projectId]);

  useEffect(() => {
    dispatch(getProject(projectId));
  }, [dispatch, projectId]);
  return (
    <>
      <div className={`save&share flex justify-end ${className}`}>
        <button
          className={`save px-[10px] py-[5px] text-[14px] border border-solid border-[#ffbc4b] rounded-lg hover-button mr-[10px] ${
            savefavourite
              ? "bg-primary text-[#111] hover:bg-[#111] hover:text-primary"
              : "text-primary"
          }`}
          onClick={savefavourite ? handleRemoveFavourite : handleSaveFavourite}
        >
          <FontAwesomeIcon
            className=" mr-[5px]"
            icon={faHeart}
          ></FontAwesomeIcon>
          {savefavourite ? "Saved" : "Save"}
        </button>

        <button
          className=" share px-[10px] py-[5px] text-primary text-[14px] border border-solid border-[#ffbc4b] rounded-lg hover-button"
          onClick={() => {
            dispatch(setShowShare(true));
          }}
        >
          <FontAwesomeIcon
            className=" mr-[5px]"
            icon={faShareNodes}
          ></FontAwesomeIcon>
          Share
        </button>
      </div>
    </>
  );
};

export default ShareDetail;
