import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass,  } from '@fortawesome/free-solid-svg-icons'; 
import ButtonFilter from '../../../components/button/ButtonFilter';
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
            </div>
        </div>
    );
};

export default Search;