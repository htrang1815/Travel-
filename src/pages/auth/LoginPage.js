import React from 'react';
import AuthLeft from '../../components/layout/auth/AuthLeft';
import AuthRight from '../../components/layout/auth/AuthRight';
import LoginContent from '../../components/layout/auth/LoginContent';

const LoginPage = () => {
    return (
        <div className='flex items-start justify-center px-10 py-24 bg-auth  h-screen'>
            <AuthLeft></AuthLeft>
            <AuthRight>
                <LoginContent></LoginContent>
            </AuthRight>
        </div>
    );
};

export default LoginPage;