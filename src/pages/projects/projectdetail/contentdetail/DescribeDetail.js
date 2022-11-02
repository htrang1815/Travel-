import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import AccordionHeader from "./accordion/AccordionHeader";
import AccordionContent from "./accordion/AccordionContent";
import CollapsibleDetail from "./accordion/CollapsibleDetail";

const DescribeDetail = () => {
  return (
    <div className="describe">
      <CollapsibleDetail
        header="About the place"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis non minima, ratione mollitia nostrum perspiciatis sed
                inventore voluptate ex adipisci nemo, quidem labore eaque quam
                provident pariatur illum laborum maxime."
      ></CollapsibleDetail>
      <CollapsibleDetail
        header="What you will experience"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis non minima, ratione mollitia nostrum perspiciatis sed
                inventore voluptate ex adipisci nemo, quidem labore eaque quam
                provident pariatur illum laborum maxime."
      ></CollapsibleDetail>
      <CollapsibleDetail
        header="schedule"
        content={
          <p>
            <p>
              Day 1 : Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </p>
            <p>
              Day 2 : Blanditiis non minima, ratione mollitia nostrum
              perspiciatis sed inventore voluptate ex adipisci nemo.{" "}
            </p>
            <p>Day 3 : Quidem labore eaque quam.</p>
            <p>Day 4 : Provident pariatur illum laborum maxime.</p>
            <p>Day 5 : Provident pariatur illum laborum maxime.</p>
          </p>
        }
      ></CollapsibleDetail>
      <CollapsibleDetail
        header="Whats incloud"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis non minima, ratione mollitia nostrum perspiciatis sed
                inventore voluptate ex adipisci nemo, quidem labore eaque quam
                provident pariatur illum laborum maxime.
                "
      ></CollapsibleDetail>
    </div>
  );
};

export default DescribeDetail;
