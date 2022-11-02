import React from "react";
import ButtonSocial from "../../button/ButtonSocial";
import ButtonSubmit from "../../button/ButtonSubmit";
import Input from "../../input/Input";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";

const SignupContent = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full pr-[25%] ">
      <h1 className="font-bold text-[28px] mb-5 text-primary ">
        Welcome
      </h1>
      <p className="mb-5">Please sign up your account to continue!</p>
      <div className="">
        <ButtonSocial text="Continue with Google" className="w-full block ">
          <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
        </ButtonSocial>
        <ButtonSocial text="Continue with Facebook" className="w-full block">
          <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
        </ButtonSocial>
      </div>
      <div className="w-full">
        <p className="item-center text-center text-[#fff]">Or Login with Email</p>
        <Input
          label="User Name"
          type="text"
          placeholder="Please enter your user name..."
        ></Input>
        <Input
          label="Email"
          type="email"
          placeholder="Please enter your email..."
        ></Input>
        <Input
          label="Date of Birth"
          type="date"
          placeholder="Please enter your date of birth..."
          lang="en"
        ></Input>
        <Input
          label="Password"
          type="password"
          placeholder="Please enter your password..."
        ></Input>
        <Input
          label="Reconfirm Password"
          type="password"
          placeholder="Please re-enter your password..."
        ></Input>
      </div>
      <div className="text-center">
        <ButtonSubmit  text="Sign up"></ButtonSubmit>
      </div>
      <p className="text-center block text-[#fff] cursor-pointer mt-4">
        Already have account?{" "}
        <span
          className="cursor-pointer font-bold text-primary"
          onClick={() => navigate("/login")}
        >
          Sign up
        </span>
      </p>
    </div>
  );
};

export default SignupContent;
