import React, { useState } from "react";
import axios from "axios";
import domain from "../../../utils/common";

const NewLetters = () => {
  const [email, setEmail] = useState("");
  const handleSendEmail = async () => {
    try {
      const res = await axios.post(`${domain}/api/v1/email/sendwelcome`, {
        email: email,
      });
    } catch (err) {
      console.log(err);
    }
    // console.log(res);
  };
  return (
    <div className="py-[10px] px-0">
      <h3 className="text-[22px] text-[#fff] py-[10px] px-0 font-[700]">
        newsletter
      </h3>
      <p className="text-[14px] text-[#aaa] py-[10px] px-0 leading-[28px]">
        subscribe for latest updates
      </p>
      <form action="">
        <input
          type="email"
          name=""
          placeholder="enter your email"
          className="w-full hover-input rounded-[50px] border-[2px] border-solid border-[#ffbc4b] bg-none text-[15px] transform-none text-[#aaa] mb-[10px] py-[12px] px-[14px] normal-case"
          id=""
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <button
          type="submit"
          //   value="subscribe"
          className="mt-[10px] inline-block py-[10px] px-[30px] text-[17px] text-primary cursor-pointer border-solid border-[#ffbc4b] bg-none hover-btnsubscribe rounded-[50px]"
          onSubmit={handleSendEmail}
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewLetters;
