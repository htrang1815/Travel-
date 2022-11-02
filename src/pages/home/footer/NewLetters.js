import React from 'react';

const NewLetters = () => {
    return (
        <div className="py-[10px] px-0">
            <h3 className='text-[22px] text-[#fff] py-[10px] px-0 font-[700]'>newsletter</h3>
            <p className='text-[14px] text-[#aaa] py-[10px] px-0 leading-[28px]'>subscribe for latest updates</p>
            <form action="">
                <input type="email" name="" placeholder="enter your email" className='w-full hover-input rounded-[50px] border-[2px] border-solid border-[#ffbc4b] bg-none text-[15px] transform-none text-[#aaa] mb-[10px] py-[12px] px-[14px]' id=""></input>
                <input type="submit" value="subscribe" className="mt-[10px] inline-block py-[10px] px-[30px] text-[17px] text-primary cursor-pointer border-solid border-[#ffbc4b] bg-none hover-btnsubscribe rounded-[50px]"></input>
            </form>
        </div>
    );
};

export default NewLetters;