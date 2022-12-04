import React from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { setShowAddNew } from "../../../../store/showModal/showSlice";
import useGetImageUrl from "../../../../hooks/useGetImageUrl";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../../../components/input/Input";
import axios from "axios";
import domain from "../../../../utils/common";
import { async } from "@firebase/util";
import { setGuideList } from "../../../../store/guideList/slice";

const ModalNewGuide = ({ inputs, title, path }) => {
  const dispatch = useDispatch();
  const { showAddNew } = useSelector((state) => state.show);
  const { imageCover, getImageUrl } = useGetImageUrl();
  const schema = yup.object({
    // username: yup.string().required("Please enter your username."),
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
    //mode: onChange để sử dụng đc thằng isValid (ko nó sẽ mãi mãi là false)
  });
  const onSubmit = async (values) => {
    console.log(values);
    try {
      await axios.post(`${domain}/api/v1/${path}`, {
        name: values.name,
        "contact.email": values.email,
        experience: values.experience,
        summary: values.summary,
        "contact.facebook": values.facebook,
        "contact.instagram": values.instagram,
        language: values.language,
        "contact.phone": values.phone,
        avatarUrl: imageCover,
      });
      const res = await axios.get(`${domain}/api/v1/${path}`);
      // updateUser(values, user._id, imageCover, dateOfBirth);
      dispatch(setShowAddNew(false));
      dispatch(setGuideList(res.data.guides));
      // console.log("adduser");
    } catch (err) {
      console.log(err);
    }
  };
  const onInvalid = (errors) => {
    console.log(errors);
  };
  return ReactDOM.createPortal(
    <div
      className={`fixed top-0 bottom-0 right-0 left-0 z-[1010] flex justify-center items-center visible opacity-100 transition ease-in duration-200 
        ${showAddNew ? "" : "opacity-0 invisible"}`}
    >
      <div
        className="absolute w-full h-full top-0 right-0 left-0 bg-[rgba(0,0,0,0.68)] z-[1010]"
        onClick={(e) => {
          dispatch(setShowAddNew(false));
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
            <div className="left">
              <img
                src={
                  imageCover ||
                  "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                alt=""
              />
            </div>
            <div className="right">
              <form
                className=" h-full pr-[5px]"
                onSubmit={handleSubmit(onSubmit, onInvalid)}
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
                    onClick={console.log("click")}
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default ModalNewGuide;
