import React from 'react';
import BlogLatest from './blogs/BlogLatest';
import Header from './header/Header';
import PopularProject from './popular-project/PopularProject';
import Slider from './slider/Slider';


const HomePage = () => {
    return (
        <div className='bg-[#111] p-0 m-0 overflow-x-hidden '>
            <Header></Header>
            <Slider></Slider>
            <BlogLatest></BlogLatest>
            {/* <PopularProject></PopularProject> */}
        </div>
    );
};

export default HomePage;