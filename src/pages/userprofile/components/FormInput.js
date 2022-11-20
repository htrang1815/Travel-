import React, { useState } from "react";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import useAuthStateChanged from "../../../hooks/useAuthStateChange";
import lodash from "lodash";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const FormInput = () => {
  const { user } = useAuthStateChanged();

  const schema = yup.object({
    name: yup.string().required("Please enter your name"),
    dateOfBirth: yup.date().min("1969-11-13", "Date is too early"),
    phone: yup.string().min(10, "too short")
    .max(10, "too long"),
    address : yup.string()
  });

  const [infoUser, setInfoUser] = useState({
    name: `${user?.name}`,
    dateOfBirth: `${user?.dateOfBirth}`,
    phone: `${user?.phone || ""}`,
  });
  // console.log(infoUser);

  const inputs = [
    {
      id: "name",
      label: "Name",
      type: "text",
      // placeholder: "John Doe",
      value: `${user?.name}`,
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      // placeholder: "john_doe@gmail.com",
      // value : `${user?.email}`
    },
    {
      id: "dateOfBirth",
      label: "Date of birth",
      type: "date",
      // placeholder: "18/01/2001",
      // value : `${user?.dateOfBirth}`
    },
    {
      id: "phone",
      label: "Phone",
      type: "text",
      // placeholder: "18/01/2001",
      // value : `${user?.phone || ""}`
    },
  ];
  const handelChange = lodash.debounce((e) => {});

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
            <img
              src={
                "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form className=" h-full pr-[5px]">
              <div className="formInput ">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) =>
                    // setFile(e.target.files[0])
                    {}
                  }
                  style={{ display: "none" }}
                />
              </div>

              <div className="formInput">
                <label>Email</label>
                <input
                  type="text"
                  id="email"
                  value={user.email}
                  disabled={true}
                  className="normal-case text-[#a1a0a0]"
                />
              </div>
              <div className="formInput">
                <label>Name</label>
                <input
                  type="text"
                  id="name"
                  defaultValue={user.name}
                  onChange={(e) => {
                    setInfoUser({
                      ...infoUser,
                      name: e.target.value,
                    });
                    console.log(infoUser);
                  }}
                />
              </div>
              <div className="formInput">
                <label>Phone</label>
                <input
                  type="text"
                  id="name"
                  // value={}
                  onChange={(e) => {
                    setInfoUser({
                      ...infoUser,
                      name: e.target.value,
                    });
                    console.log(infoUser);
                  }}
                />
              </div>
              <div className="formInput">
                <label>Date of birth</label>
                <input
                  type="date"
                  id="dateOfBirth"
                  // value={}
                  onChange={(e) => {
                    setInfoUser({
                      ...infoUser,
                      dateOfBirth: e.target.value,
                    });
                    console.log(infoUser);
                  }}
                />
              </div>
              <div className="formInput">
                <label>Date of birth</label>
                <input
                  type="date"
                  id="dateOfBirth"
                  // value={}
                  onChange={(e) => {
                    setInfoUser({
                      ...infoUser,
                      dateOfBirth: e.target.value,
                    });
                    console.log(infoUser);
                  }}
                />
              </div>
              <button
                onClick={() => {}}
                className="text-primary border-primary hover-button"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormInput;
