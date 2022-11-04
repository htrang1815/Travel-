import React, { useState } from "react";
import AccordionContent from "./AccordionContent";
import AccordionHeader from "./AccordionHeader";
import Collapsible from "react-collapsible";

const CollapsibleDetail = ({ header, content }) => {
  const [show, setShow] = useState(false);
  //   const [icon, setIcon] = useState(faChevronDown);
  return (
    <div className="abouttheplace mb-[20px] cursor-pointer">
      <div className="w-full h-[1px] bg-primary opacity-75 mb-[15px]"></div>
      <Collapsible
        trigger={
          <>
            <AccordionHeader show={show}>{header}</AccordionHeader>
          </>
        }
        onTriggerOpening={() => {
          setShow(true);
        }}
        onTriggerClosing={() => {
          setShow(false);
        }}
      >
        <AccordionContent>{content}</AccordionContent>
      </Collapsible>
    </div>
  );
};

export default CollapsibleDetail;
