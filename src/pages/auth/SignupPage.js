import React from "react";
import AuthLeft from "../../components/layout/auth/AuthLeft";
import AuthRight from "../../components/layout/auth/AuthRight";
import SignupContent from "../../components/layout/auth/SignupContent";

const SignupPage = () => {
  return (
    <div>
      <div className="flex items-start justify-center px-10 py-24 bg-auth h-screen overflow-hidden">
        <AuthLeft></AuthLeft>
        <AuthRight className="overflow-y-scroll snap-none">
          <SignupContent></SignupContent>
        </AuthRight>
      </div>
    </div>
  );
};

export default SignupPage;
