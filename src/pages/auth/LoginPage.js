import React from 'react';
import Alert from '../../components/common/Alert';
import AuthLeft from '../../components/layout/auth/AuthLeft';
import AuthRight from '../../components/layout/auth/AuthRight';
import LoginContent from '../../components/layout/auth/LoginContent';

const LoginPage = () => {
    return (
        <div className='flex items-start justify-center px-[9%] py-[60px] bg-[#222] h-screen relative'>
            <AuthLeft></AuthLeft>
            <AuthRight>
                <LoginContent></LoginContent>
            </AuthRight>
            {/* <Alert id="1"></Alert> */}
        </div>
    );
};

export default LoginPage;