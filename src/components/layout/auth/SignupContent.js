import React from "react";
import axios from "axios";

import ButtonSocial from "../../button/ButtonSocial";
import ButtonSubmit from "../../button/ButtonSubmit";
import Input from "../../input/Input";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useForm } from "react-hook-form";
import domain from "../../../utils/common";

import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../../../firebase.config";

const SignupContent = () => {
  const navigate = useNavigate();

  const schema = yup.object({
    username: yup.string().required("Please enter your username."),
    email: yup
      .string()
      .required("Please enter your email address.")
      .email("Invalid email."),
    password: yup
      .string()
      .required("Please enter your password.")
      .min(8, "Your password must have at least 8 characters."),
    passwordConfirm: yup
      .string()
      .required("Please enter your confirm password.")
      .oneOf(
        [yup.ref("password"), null],
        "Please make sure your password match."
      ),
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
        const user = await axios.post(`${domain}/api/v1/users/signup`, {
          name: values.username,
          email: values.email,
          dateOfBirth: Date(values.date),
          password: values.password,
          passwordConfirm: values.passwordConfirm,
        });

        if (user) {
          navigate("/login");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const response = await signInWithPopup(auth, provider);
      const user = response?.user;
      console.log(user);

      const newUser = await axios.post(
        `${domain}/api/v1/users/signInWithGoogle`,
        {
          email: user.email,
          typeAccount: "google",
          avatarUrl: user.photoURL,
          name: user.displayName,
        }
      );

      if (newUser) {
        navigate("/home");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const signInWithFacebook = async () => {
    try {
      const provider = new FacebookAuthProvider();
      const response = await signInWithPopup(auth, provider);
      const user = response.user;
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full pr-[25%] ">
      <h1 className="font-bold text-[28px] mb-5 text-primary ">Welcome</h1>
      <p className="mb-5">Please sign up your account to continue!</p>
      <div className="">
        <ButtonSocial
          text="Continue with Google"
          className="w-full block "
          handleSignIn={signInWithGoogle}
        >
          <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
        </ButtonSocial>
        <ButtonSocial
          text="Continue with Facebook"
          className="w-full block"
          handleSignIn={signInWithFacebook}
        >
          <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
        </ButtonSocial>
      </div>
      <form className="w-full" onSubmit={handleSubmit(onSubmitHandler)}>
        <p className="item-center text-center text-[#fff]">
          Or Login with Email
        </p>
        <Input
          label="User Name"
          id="username"
          type="text"
          placeholder="Please enter your user name..."
          control={control}
        ></Input>
        <p className="text-[#f77171] font-semibold mb-[10px]">
          {errors.username?.message}
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
          label="Date of Birth"
          type="date"
          id="date"
          placeholder="Please enter your date of birth..."
          lang="en"
          control={control}
        ></Input>
        <p className="text-[#f77171] font-semibold mb-[10px]"></p>
        <Input
          label="Password"
          type="password"
          id="password"
          placeholder="Please enter your password..."
          control={control}
        ></Input>
        <p className="text-[#f77171] font-semibold mb-[10px]">
          {errors.password?.message}
        </p>
        <Input
          label="Reconfirm Password"
          type="password"
          id="passwordConfirm"
          placeholder="Please re-enter your password..."
          control={control}
        ></Input>
        <p className="text-[#f77171] font-semibold mb-[10px]">
          {errors.passwordConfirm?.message}
        </p>
        <div className="text-center">
          <ButtonSubmit>Sign up</ButtonSubmit>
        </div>
      </form>
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
