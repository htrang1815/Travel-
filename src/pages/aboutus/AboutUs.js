import React from "react";
import AdvanceItem from "../home/advance/AdvanceItem";
import Footer from "../home/footer/Footer";
import Header from "../home/header/Header";

const AboutUs = () => {
  return (
    <div className='bg-[#111] '>
      <Header></Header>
      <div>
        <div className="my-0 mx-auto mt-[68px] w-[90%] min-h-[80vh] bg-bg-poster-about rounded-[10px]  relative flex items-center justify-center bg-no-repeat bg-cover">
          <div className="absolute text-[24px] w-[600px] p-0 m-0 mr-[50px] capitalize text-center">
            <h3 className="text-[70px] text-shadow font-[700] text-primary">About us </h3>
            <span className="text-[18px] normal-case text-[#111]">
              For explorers everywhere.
            </span>
          </div>
        </div>
        <div className="">
          <div className=" px-[20%] py-[60px]">
            <p className="text-[18px] mb-[20px]">
              We believe that travel is for everyone. It helps us learn about
              ourselves and the world around us.
            </p>
            <p className="text-[18px] mb-[20px]">
              Our goal is to help more people from more backgrounds experience
              the joy of exploration. Because we believe this builds a kinder,
              more inclusive, more open-minded world.
            </p>
            <p className="text-[18px] mb-[20px]">
              Like you, travel is in our DNA. At Lonely Planet, we believe
              travel opens the door to the greatest, most unforgettable
              experiences life can offer. And we have learned that the best
              travel is about putting yourself out there, about leaving behind
              the everyday, about immersing yourself, rather than just seeing
              the sights.
            </p>
            <p className="text-[18px] mb-[20px]">
              As travelers, you're on a journey, and at Lonely Planet, we're on
              one, too. Over the last two years, travel has transformed. We're
              thinking deeply not just about how we travel but why we travel and
              how to best serve travelers on their journey – and we approach our
              50th year with a passion and commitment to helping others do it,
              too.
            </p>
          </div>
        </div>
      </div>
      <div className='px-[9%] py-[30px] mb-[20px]'>
            <div className='text-center mb-[20px]'>
                <h1 className='text-[40px] text-primary font-[700]'>What makes us different?</h1>
            </div>
            <div className='grid grid-cols gap-[15px]'>
                <AdvanceItem icon="faArrowUpFromBracket"></AdvanceItem>
            </div>
        </div>
      <Footer className="bg-[#222]"></Footer>
    </div>
  );
};

export default AboutUs;
