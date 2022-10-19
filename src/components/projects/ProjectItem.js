import React from 'react';
import projectImg from '../../assets/images/projects/about-img.jpg';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import DateRangeIcon from '@mui/icons-material/DateRange';
import TourIcon from '@mui/icons-material/Tour';
import PersonIcon from '@mui/icons-material/Person';

const ProjectItem = () => {
    return (
        <div className='bg-[#fff] mr-5 rounded-lg p-3 w-[33%] h-[75%] '>
            <div className='w-full mb-4 relative'>
                <img src={projectImg} alt="" className='object-cover w-full h-[250px] rounded-xl left-0 top-0' />
                <span className='bg-[#fefefe] px-4 py-2 rounded-lg text-primary absolute left-[31%] top-[100%] translate-y-[-50%] z-50' >$497 / person</span>
            </div>
            <div className='mt-4 w-full px-4 pt-4'>
                <div className='mb-3 text-center'>
                    <span className='font-bold'>The Vegas Desert</span>
                    <p className='inline-block w-full text-justify leading-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil natus quae ad alias suscipit voluptatibus enim! Ut, eligendi consectetur.</p>
                </div>
                <div  className='grid grid-cols-2 gap-4 mb-3'>
                    <div>
                        <div>
                            <FmdGoodIcon className='mr-3'></FmdGoodIcon>
                            <span>Lasvegas, US</span>
                        </div>
                        <div>
                            <TourIcon className='mr-3'></TourIcon>
                            <span>5 stops</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <DateRangeIcon className='mr-3'></DateRangeIcon>
                            <span>October, 2022</span>
                        </div>
                        <div>
                            <PersonIcon className='mr-3'></PersonIcon>
                            <span>20</span>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <span className='text-[12px]'>Rating 4.5 (10)</span>
                    <button type='submit' className='py-1 px-5 bg-primary font-bold rounded-[12px] mr-2'>Details</button>
                </div>
            </div>

        </div>
    );
};

export default ProjectItem;