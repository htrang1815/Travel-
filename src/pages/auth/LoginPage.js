import React from "react";
import Alert from "../../components/common/Alert";
import AuthLeft from "../../components/layout/auth/AuthLeft";
import AuthRight from "../../components/layout/auth/AuthRight";
import LoginContent from "../../components/layout/auth/LoginContent";
import ModalAlert from "../../components/modal/ModalAlert";

const LoginPage = () => {
  return (
    <>
      <div className="flex items-start justify-center px-[9%] py-[60px] bg-[#222] h-screen relative z-10">
        <AuthLeft></AuthLeft>
        <AuthRight>
          <LoginContent></LoginContent>
        </AuthRight>
      </div>
      <ModalAlert></ModalAlert>
    </>
  );
};

export default LoginPage;
