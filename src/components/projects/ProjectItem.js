import React from "react";
import projectImg from "../../assets/images/projects/about-img.jpg";
import ButtonDetailProjects from "../button/ButtonDetailProject";


const ProjectItem = () => {
  return (
    <div className="bg-[#222] rounded-[10px] overflow-hidden">
      <div className="w-full h-[200px]">
        <img src={projectImg} alt="" className="object-cover w-full h-full" />
      </div>
      <div className="text-[#fff] p-[20px] text-center">
        <h3 className="text-[20px] font-[700]">Mu Cang Chai</h3>
        <p className="py-[10px] px-0 text-[14px] leading-[28px] text-wrap">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At, iste
          autem, molestiae assumenda possimus rerum doloremque suscipit
          veritatis facilis perferendis aspernatur temporibus ratione accusamus
          omnis quaerat sint enim repudiandae harum?
        </p>
        <span className="block py-[10px] px-0">478$ / Person</span>
        <ButtonDetailProjects text="Read More"></ButtonDetailProjects>
      </div>
    </div>
  );
};

export default ProjectItem;
