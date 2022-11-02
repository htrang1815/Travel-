import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const AccordionHeader = ({ children, show = false }) => {
  return (
    <div className="mb-[10px] flex items-center justify-between">
      <h3 className="text-primary text-[16px] font-[500] ">{children}</h3>
      {show ? (
        <FontAwesomeIcon
          icon={faChevronDown}
          className="text-primary text-[16px] font-[500] "
        ></FontAwesomeIcon>
      ) : (
        <FontAwesomeIcon
          icon={faChevronUp}
          className="text-primary text-[16px] font-[500] "
        ></FontAwesomeIcon>
      )}
    </div>
  );
};

export default AccordionHeader;
