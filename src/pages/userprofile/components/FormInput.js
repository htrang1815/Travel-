import React, { useEffect, useState } from "react";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import useAuthStateChanged from "../../../hooks/useAuthStateChange";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import Input from "../../../components/input/Input";
import moment from "moment";
import useGetImageUrl from "../../../hooks/useGetImageUrl";
import domain from "../../../utils/common";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../store/auth/slice";
import { updateUser } from "../../../realtimeCommunication/socketConnection";

const FormInput = () => {
  const { user } = useAuthStateChanged();
  // const { user } = useSelector((state) => state.auth);
  // const userId = user._id;
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(setUser());
  // }, [dispatch]);
  // console.log(user);
  const schema = yup.object();

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
  useEffect(() => {
    reset({
      email: user.email,
      name: user.name,
      phone: user.phone,
      address: user.address,
    });
  }, []);
  const [dateOfBirth, setDateOfBirth] = useState(Date.now);

  const { imageCover, getImageUrl } = useGetImageUrl();

  // console.log(dateOfBirth);
  const onSubmitHandler = async (values) => {
    try {
      const userupdate = await axios.patch(
        `${domain}/api/v1/userprofile/${user._id}`,
        {
          name: values.name,
          avatarUrl: imageCover || user.avatarUrl,
          dateOfBirth: new Date(dateOfBirth).toISOString(),
          phone: values.phone,
          address: values.address,
        }
      );
      // updateUser(values, imageCover, dateOfBirth);
      // console.log("userupdate");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="text-primary min-h-[80vh] mb-[10px]">
      <div
        className={`new w-full flex top-[65px] right-[50%] translate-x-[50%] fixed z-[1020] bg-[#fff] flex-col   `}
      >
        <div className="top ">
          <h1>Edit my Info</h1>
        </div>
        <div className="bottom max-h-[60vh] h-full pb-[50px]">
          <div className="left">
            <img src={imageCover || user?.avatarUrl} alt="" />
          </div>
          <div className="right">
            <form
              className=" h-full pr-[5px]"
              onSubmit={handleSubmit(onSubmitHandler)}
            >
              <div className=" avatar cursor-pointer">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={getImageUrl}
                  style={{ display: "none" }}
                />
              </div>
              <Input
                label="email"
                id="email"
                type="email"
                placeholder="Email"
                control={control}
                className="formInput"
                disabled={true}
              ></Input>
              {/* <p className="text-[#f77171] font-semibold mb-[10px]">
                {errors.email?.message}
              </p> */}
              <Input
                label="name"
                id="name"
                type="text"
                placeholder="Name"
                control={control}
                className="formInput"
              ></Input>
              {/* <p className="text-[#f77171] font-semibold mb-[10px]">
                {errors.name?.message}
              </p> */}
              <div className="formInput">
                <label htmlFor="dateOfBirth">Date of Birth</label>
                <input
                  type="date"
                  // value = "2013-02-02"
                  defaultValue={
                    moment(user.dateOfBirth).format("YYYY-MM-DD") || dateOfBirth
                  }
                  name="dateOfBirth"
                  id="dateOfBirth"
                  placeholder="Date of birth"
                  onChange={(e) => {
                    setDateOfBirth(e.target.value);
                  }}
                ></input>
              </div>
              {/* <Input
                label="Date of birth"
                id="dateOfBirth"
                // type="date"
                placeholder="Date of birth"
                control={control}
                className="formInput"
              ></Input> */}

              <Input
                label="phone"
                id="phone"
                type="text"
                placeholder="Phone"
                control={control}
                className="formInput"
              ></Input>
              {/* <p className="text-[#f77171] font-semibold mb-[10px]">
                {errors.phone?.message}
              </p> */}
              <Input
                label="address"
                id="address"
                type="text"
                placeholder="Address"
                control={control}
                className="formInput"
              ></Input>
              {/* <p className="text-[#f77171] font-semibold mb-[10px]">
                {errors.address?.message}
              </p> */}
              <div className="text-center w-[40%] ">
                <button
                  type="submit"
                  className="text-primary border-primary hover-button"
                >
                  Save Changed
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
  );
};

export default FormInput;
