import React from 'react';
import ButtonSubmit from '../../../components/button/ButtonSubmit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'; 

const Search = () => {
    return (
        <div>
            <div className='w-[80%] mx-auto my-[10px] bg-[#222] rounded-[10px] py-[30px] px-[20px] flex items-center gap-[15px] justify-between'>
                <input type="text" placeholder='Search Places' className='w-full py-[12px] px-[14px] rounded-[50px] text-[#aaa] border-[2px] border-solid border-[#ffbc4b] transform-none text-[16px]'/>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='text-[24px] '></FontAwesomeIcon>
                <ButtonSubmit className='w-full max-w-[200px]' text='Find Now'></ButtonSubmit>
            </div>
        </div>
    );
};

export default Search;