import React from "react";
import ButtonSocial from "../../button/ButtonSocial";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import ButtonSubmit from "../../button/ButtonSubmit";
import Input from "../../input/Input";
import { useNavigate } from "react-router-dom";

const LoginContent = () => {
    const navigate = useNavigate();
    return (
        <div >
          <h1 className='font-bold text-[28px] mb-5 absolute top-[-4px]'>Welcome</h1>
          <p className="mb-5">Please login your account to continue!</p>
          <ButtonSocial text="Continue with Google">
            <GoogleIcon className="text-[#ef414d]"></GoogleIcon>
          </ButtonSocial>
          <ButtonSocial text="Continue with Facebook" >
            <FacebookIcon className="text-[27px] text-[#039be5]"></FacebookIcon>
          </ButtonSocial>
          <p className="item-center w-[75%] text-center">Or Login with Email</p>
          <Input label="Email" type="email" placeholder="Please enter your email..." ></Input>
          <Input label="Password" type="password" placeholder="Please enter your password..." ></Input> 
          <p className="text-right block w-[75%] cursor-pointer mb-4">Forget password ? </p>
          <ButtonSubmit text="Login"></ButtonSubmit>
          <p className="text-center block w-[75%] cursor-pointer mt-4">Don't have account? <span className="cursor-pointer font-bold" onClick={() => navigate("/signup")}>Sign up</span></p>
      </div>
    );
};

export default LoginContent;