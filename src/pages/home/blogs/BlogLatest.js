import React from 'react';
import ButtonBlogs from '../../../components/button/ButtonBlogs';
import videoblog  from '../../../assets/videos/Sea - 6399.mp4'

const BlogLatest = () => {
    return (
       <div>
            <video src={videoblog} muted auto loop className='w-full rounded-[10px] object-contain'></video>
            <div>
                <span></span>
            </div>
       </div>
    );
};

export default BlogLatest;