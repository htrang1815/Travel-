import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import React from 'react';
import ReactDOM from "react-dom";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import useGetImageUrl from '../../../../hooks/useGetImageUrl';
import domain from '../../../../utils/common';
import * as yup from "yup";
import Input from '../../../../components/input/Input';

const ModalNewPlaces = ({path, title, inputs}) => {
    const dispatch = useDispatch();
  const { showAddNew } = useSelector((state) => state.show);
  const { imageCover, getImageUrl } = useGetImageUrl();
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
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    //mode: onChange để sử dụng đc thằng isValid (ko nó sẽ mãi mãi là false)
  });
  console.log(path);
  const onSubmitHandler = async (values) => {
    // console.log(values);
    try {
      const adduser = await axios.post(`${domain}/api/v1/${path}`, {
        name: values.username,
        email: values.email,
        dateOfBirth: Date(values.date),
        password: values.password,
        passwordConfirm: values.passwordConfirm,
        avatarUrl: imageCover,
        role: values.role,
      });
      // updateUser(values, user._id, imageCover, dateOfBirth);
    //   dispatch(setShowAddNew(false));
      // console.log("adduser");
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(path);

  return ReactDOM.createPortal(
    <div
      className={`fixed top-0 bottom-0 right-0 left-0 z-[1010] flex justify-center items-center visible opacity-100 transition ease-in duration-200 
    ${showAddNew ? "" : "opacity-0 invisible"}`}
    >
      <div
        className="absolute w-full h-full top-0 right-0 left-0 bg-[rgba(0,0,0,0.68)] z-[1010]"
        onClick={(e) => {
        //   dispatch(setShowAddNew(false));
          // console.log(e.target);
        }}
      ></div>
      <div className="text-primary min-h-[80vh] mb-[10px]">
        <div
          className={`new w-full flex top-[65px] right-[50%] translate-x-[50%] fixed z-[1020] bg-[#fff] flex-col   `}
        >
          <div className="top ">
            <h1>Add new {title}</h1>
          </div>

          <div className="bottom max-h-[60vh] h-full pb-[50px] overflow-y-auto ">
            {path === "userprofile" && (
              <div className="left">
                <img
                  src={
                    imageCover ||
                    "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                  }
                  alt=""
                />
              </div>
            )}
            <div className="right">
              <form
                className=" h-full pr-[5px]"
                onSubmit={handleSubmit(onSubmitHandler)}
              >

                {inputs.map((input) => (
                  <>
                    <Input
                      key={input.id}
                      label={input.label}
                      id={input.id}
                      type={input.type}
                      placeholder={input.placeholder}
                      control={control}
                      className="formInput"
                      errors={errors[input["id"]]?.message}
                    ></Input>
                  </>
                ))}
                <div className="text-center w-[40%] ">
                  <button
                    type="submit"
                    className="text-primary border-primary hover-button"
                  >
                    Add
                  </button>
                </div>
              </form>
              {/* <input
              type='date'
              value = "2013-02-02">

              </input> */}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default ModalNewPlaces;