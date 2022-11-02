import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faChevronRight } from '@fortawesome/free-solid-svg-icons'; 
import ButtonFilter from '../../../components/button/ButtonSearch';
import Filter from './Filter';

const Search = () => {
    return (
        <div className='w-full py-[30px] px-[9%]  rounded-[10px] '>
            <div className='bg-[#222] py-[20px] px-[10px] rounded-[10px]'>

                <div className=' flex items-center gap-[15px] justify-between'>
                    <div className='relative w-full'>
                        <input type="text" placeholder='Search Places' className='w-full py-[12px] px-[14px] rounded-[50px] text-[#aaa] border-[2px] border-solid border-[#ffbc4b] transform-none text-[16px]  hover-input'/>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='text-[22px] cursor-pointer text-[#aaa] absolute right-[3%] top-[50%] translate-y-[-50%]'></FontAwesomeIcon>
                    </div>
                        <ButtonFilter className='w-full max-w-[150px]' text='Filter'></ButtonFilter>
                </div>
                <div className='relative'>
                    <div className='mt-[20px] overflow-hidden whitespace-nowrap '>
                        <Filter text='All'></Filter>
                        <Filter text='Recommened'></Filter>
                        <Filter text='Most Popular'></Filter>
                        <Filter text='Most Visited'></Filter>
                        <Filter text='Nature & Adventure'></Filter>
                        <Filter text='Nature & Adventure'></Filter>
                        <Filter text='Day trips'></Filter>
                        <Filter text='Boat tour'></Filter>
                        <Filter text='Boat tour'></Filter>
                        <Filter text='Transpostations'></Filter>
                        <Filter text='Transpostations'></Filter>
                    </div>
                    <FontAwesomeIcon icon={faChevronRight} className='text-[14px] cursor-pointer text-[#111] p-1 w-[30px] h-[30px] rounded-full bg-primary absolute right-[0] top-[50%] translate-x-[50%] translate-y-[-50%] '></FontAwesomeIcon>
                </div>
            </div>
        </div>
    );
};

export default Search;