import { faSquareMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import ProjectItem from "../../../../components/projects/ProjectItem";
import { useDispatch, useSelector } from "react-redux";
import { setSaveFavourite } from "../../../../store/showModal/showSlice";
import useAuthStateChange from "../../../../hooks/useAuthStateChange";
import domain from "../../../../utils/common";
import axios from "axios";
import { removeFavourite } from "../../../../realtimeCommunication/socketConnection";

const PlaceSaveItem = ({ data }) => {
  const dispatch = useDispatch();
  const { user } = useAuthStateChange();
  const handleRemoveFavourite = async () => {
    const isFavorite = await axios.post(
      `${domain}/api/v1/users/remove-favourite`,
      {
        userId: user._id,
        placeId: data._id,
      }
    );
    removeFavourite({userId: user._id,
      placeId: data._id,})
  };

  return (
    <div className="relative" id="place-saving">
      <ProjectItem projectData={data}></ProjectItem>
      <div className="flex absolute top-[10px] right-[10px]">
        <FontAwesomeIcon
          icon={faSquareMinus}
          className="text-[18px] text-[#fc3f3f] block pr-[20px] cursor-pointer"
          onClick={() => {
            console.log(data._id);
            handleRemoveFavourite();
            console.log(data._id);
          }}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default PlaceSaveItem;
