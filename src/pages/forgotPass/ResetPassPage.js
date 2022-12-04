import React from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ResetLayout from "./ResetLayout";
import Input from "../../components/input/Input";
import domain from "../../utils/common";
const ResetPasswordPage = () => {
  let navigate = useNavigate();

  const schema = yup.object({
    password: yup
      .string()
      .required("Please enter your password.")
      .min(8, "Your password must have at least 8 characters."),
    passwordConfirm: yup
      .string()
      .required("Please enter confirm password.")
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
    console.log(values);
    if (isValid) {
      try {
        await axios.patch(
          `${domain}/api/v1/users/resetPassword/${values.resetToken}`,
          {
            password: values.password,
            passwordConfirm: values.passwordConfirm,
          }
        );
        navigate("/login");
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
          id="password"
          type="password"
          placeholder="Enter your password"
          text="password"
          control={control}
        ></Input>
        <p className="mt-2 text-[#942121] font-semibold">
          {errors.password?.message}
        </p>
        <Input
          id="passwordConfirm"
          type="password"
          placeholder="Enter your confirm password"
          text="Confirm password"
          control={control}
        ></Input>
        <p className="mt-2 text-[#942121] font-semibold">
          {errors.confirmPassword?.message}
        </p>
        <Input
          id="resetToken"
          placeholder="Enter your reset token"
          text="Reset token"
          control={control}
        ></Input>
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

export default ResetPasswordPage;
