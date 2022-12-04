import React from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ResetLayout from "./ResetLayout";
import Input from "../../components/input/Input";
import domain from "../../utils/common";
const ForgotPasswordPage = () => {
  let navigate = useNavigate();
  const schema = yup.object({
    email: yup
      .string()
      .required("Please enter your email address.")
      .email("Invalid email."),
  });

  const {
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    control,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmitHandler = async (values) => {
    if (isValid) {
      try {
        const res = await axios.post(`${domain}/api/v1/users/forgotPassword`, {
          email: values.email,
        });

        if (res) {
          navigate("/resetpass");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <ResetLayout
      icon=""
      header="Forgot password?"
      subHeader="No worries, we'll send you reset instructions."
    >
      <form className="mt-[20px]" onSubmit={handleSubmit(onSubmitHandler)}>
        <Input
          id="email"
          placeholder="Enter your email"
          text="Email"
          control={control}
        ></Input>
        <p className="mt-2 text-[#942121] font-semibold">
          {errors.email?.message}
        </p>
        <button type="submit" className="mt-4">
          {isSubmitting ? (
            <div className="w-10 h-10 rounded-full border-4 border-white border-t-transparent border-b-transparent animate-spin"></div>
          ) : (
            "Reset Password"
          )}
        </button>
      </form>
    </ResetLayout>
  );
};

export default ForgotPasswordPage;
