import React from "react";
import Input from "../../components/input/Input";

import { useForm } from "react-hook-form";
import ButtonContact from "../../components/button/ButtonContact";
import Textarea from "../../components/input/Textarea";

const ContactForm = () => {
  const { control } = useForm();
  return (
    <div className="px-[9%] py-[100px] h-full flex justify-center items-center mt-[20px]">
      <div className="bg-[#222] w-[90%] h-full bg-opacity-70 rounded-[50px] p-[5%] pt-[6%] pb-[2%] relative">
        <h2 className="text-[#fff] text-[30px] font-[600] tracking-wider absolute top-[2.5%]">
          CONTACT US
        </h2>
        <div className="mt-[10px] w-[50%] h-full mr-[15px]">
          <Input
            className="p-2"
            label="First name"
            type="text"
            id="firstname"
            control={control}
          ></Input>
          <Input
            className="p-2"
            label="Last name"
            type="text"
            id="lastname"
            control={control}
          ></Input>
          <Input
            className="p-2"
            label="Email"
            type="email"
            id="email"
            control={control}
          ></Input>
          <Textarea
            className="px-8 py-4"
            label="Message"
            id="message"
            rows="4"
          ></Textarea>
          <div className="text-center">
            <ButtonContact className="mt-[20px]  ">Send</ButtonContact>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ContactForm;
