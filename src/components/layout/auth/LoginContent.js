import React from "react";
import ButtonSocial from "../../button/ButtonSocial";
import ButtonSubmit from "../../button/ButtonSubmit";
import Input from "../../input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

const LoginContent = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full pr-[25%]">
      <h1 className="font-bold text-[28px] mb-5  text-primary">Welcome</h1>
      <p className="mb-5 text-[#fff]">Please login your account to continue!</p>
      <div className="">
        <ButtonSocial text="Continue with Google" className="w-full block ">
          <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
        </ButtonSocial>
        <ButtonSocial text="Continue with Facebook" className="w-full block">
          <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
        </ButtonSocial>
      </div>
      <div className="w-full">
        <p className="item-center text-center text-[#fff]">
          Or Login with Email
        </p>
        <Input
          label="Email"
          type="email"
          placeholder="Please enter your email..."
        ></Input>
        <Input
          label="Password"
          type="password"
          placeholder="Please enter your password..."
        ></Input>
        <p className="text-right block cursor-pointer mb-4 text-[#fff]">
          Forget password ?{" "}
        </p>
      </div>
      <div className="text-center">
        <ButtonSubmit text="Login" ></ButtonSubmit>
      </div>
      <p className="text-center block cursor-pointer mt-4 text-[#fff]">
        Don't have account?{" "}
        <span
          className="cursor-pointer font-bold text-primary "
          onClick={() => navigate("/signup")}
        >
          Sign up
        </span>
      </p>
    </div>
  );
};

export default LoginContent;
