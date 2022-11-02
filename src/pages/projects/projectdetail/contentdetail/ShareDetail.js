import { faHeart, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ShareDetail = () => {
    return (
        <div className="save&share flex justify-end">
            <button className="save px-[10px] py-[5px] text-primary text-[14px] border border-solid border-[#ffbc4b] rounded-lg hover-button mr-[10px]">
                <FontAwesomeIcon className=" mr-[5px]" icon={faHeart}></FontAwesomeIcon>
                Save
            </button>
            <button className=" share px-[10px] py-[5px] text-primary text-[14px] border border-solid border-[#ffbc4b] rounded-lg hover-button">
                <FontAwesomeIcon className=" mr-[5px]" icon={faShareNodes}></FontAwesomeIcon>
                Share
            </button>
            
        </div>
    );
};

export default ShareDetail;