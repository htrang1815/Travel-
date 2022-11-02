import React from "react";
import axios from "axios";

import ButtonSocial from "../../button/ButtonSocial";
import ButtonSubmit from "../../button/ButtonSubmit";
import Input from "../../input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import domain from "../../../utils/common";

const LoginContent = () => {
  const navigate = useNavigate();
  const schema = yup.object({
    email: yup
      .string()
      .required("Please enter your email address.")
      .email("Invalid email."),
    password: yup
      .string()
      .required("Please enter your password.")
      .min(8, "Your password must have at least 8 characters."),
  });

  const {
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    control,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    //mode: onChange để sử dụng đc thằng isValid (ko nó sẽ mãi mãi là false)
  });

  const onSubmitHandler = async (values) => {
    if (isValid) {
      try {
        const user = await axios.post(`${domain}/api/v1/users/login`, {
          email: values.email,
          password: values.password,
        });

        console.log(user);

        if (user) {
          navigate("/home");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

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
      <form className="w-full" onSubmit={handleSubmit(onSubmitHandler)}>
        <p className="item-center text-center text-[#fff]">
          Or Login with Email
        </p>
        <Input
          label="Email"
          id="email"
          type="email"
          placeholder="Please enter your email..."
          control={control}
        ></Input>
        <p className="text-[#f77171] font-semibold mb-[10px]">
          {errors.email?.message}
        </p>
        <Input
          label="Password"
          id="password"
          type="password"
          placeholder="Please enter your password..."
          control={control}
        ></Input>
        <p className="text-[#f77171] font-semibold mb-[10px]">
          {errors.password?.message}
        </p>
        <p className="text-right block cursor-pointer mb-4 text-[#fff]">
          Forget password ?{" "}
        </p>
        <div className="text-center">
          <ButtonSubmit>
            {isSubmitting ? (
              <div className="w-10 h-10 rounded-full border-[#ffffff] border-solid border-t-[transparent] border-b-[transparent] animate-spin mx-auto"></div>
            ) : (
              "Login"
            )}
          </ButtonSubmit>
        </div>
      </form>
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
