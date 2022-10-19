import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import React from 'react';
import ButtonSocial from '../../button/ButtonSocial';
import ButtonSubmit from '../../button/ButtonSubmit';
import Input from '../../input/Input';
import { useNavigate } from 'react-router-dom';

const SignupContent = () => {
    const navigate = useNavigate();
    return (
        <div>
          <h1 className='font-bold text-[28px] mb-5 absolute top-[-4px]'>Welcome</h1>
          <p className="mb-5">Please sign up your account to continue!</p>
          <ButtonSocial text="Continue with Google">
            <GoogleIcon className="text-[#ef414d]"></GoogleIcon>
          </ButtonSocial>
          <ButtonSocial text="Continue with Facebook" >
            <FacebookIcon className="text-[27px] text-[#039be5]"></FacebookIcon>
          </ButtonSocial>
          <p className="item-center w-[75%] text-center">Or Login with Email</p>  
          <Input label="User Name" type="text" placeholder="Please enter your user name..."></Input>
          <Input label="Email" type="email" placeholder="Please enter your email..."></Input>
          <Input label="Date of Birth" type="date"  placeholder="Please enter your date of birth..." lang="en"></Input>
          <Input label="Password" type="password" placeholder="Please enter your password..."></Input>
          <Input label="Reconfirm Password" type="password" placeholder="Please re-enter your password..."></Input>
          <ButtonSubmit text="Sign up"></ButtonSubmit>
          <p className="text-center block w-[75%] cursor-pointer mt-4">Already have account? <span className="cursor-pointer font-bold" onClick={() => navigate("/login")}>Sign up</span></p>
      </div>
    )
};

export default SignupContent;