import React from "react";
import ButtonSocial from "../../button/ButtonSocial";
import ButtonSubmit from "../../button/ButtonSubmit";
import Input from "../../input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

const LoginContent = () => {
    const navigate = useNavigate();
    return (
        <div >
          <h1 className='font-bold text-[28px] mb-5  text-[#fff]'>Welcome</h1>
          <p className="mb-5 text-[#fff]">Please login your account to continue!</p>
          <ButtonSocial text="Continue with Google">
            <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
          </ButtonSocial>
          <ButtonSocial text="Continue with Facebook" >
          <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
          </ButtonSocial>
          <p className="item-center w-[75%] text-center text-[#fff]">Or Login with Email</p>
          <Input label="Email" type="email" placeholder="Please enter your email..." ></Input>
          <Input label="Password" type="password" placeholder="Please enter your password..." ></Input> 
          <p className="text-right block w-[75%] cursor-pointer mb-4 text-[#fff]">Forget password ? </p>
          <ButtonSubmit text="Login" className='text-center'></ButtonSubmit>
          <p className="text-center block w-[75%] cursor-pointer mt-4 text-[#fff]">Don't have account? <span className="cursor-pointer font-bold text-[#fff] " onClick={() => navigate("/signup")}>Sign up</span></p>
      </div>
    );
};

export default LoginContent;