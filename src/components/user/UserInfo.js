import React from 'react';
import avt1 from '../../assets/images/guides/pic-2.png'
import UserAvata from './UserAvata';

const UserInfo = () => {
    return (
        <div className='flex items-center'>
            <UserAvata className='mr-[10px]'></UserAvata>
            <span>William Copper</span>
        </div>
    );
};

export default UserInfo;