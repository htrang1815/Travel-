import React from 'react';
import Header from './header/Header';
import PopularProject from './popular-project/PopularProject';
import Slider from './slider/Slider';


const HomePage = () => {
    return (
        <div className='bg-[#fff2d7]'>
            <Header></Header>
            <Slider></Slider>
            <PopularProject></PopularProject>
        </div>
    );
};

export default HomePage;