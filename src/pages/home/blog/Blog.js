import React from 'react';
import BlogItem from './BlogItem';
import blog1 from '../../../assets/images/blogs/blog-1.jpg';
import blog2 from '../../../assets/images/blogs/blog-2.jpg';
import blog3 from '../../../assets/images/blogs/blog-3.jpg';

const Blog = () => {
    return (
        <div className='px-[9%] py-[30px]'>
            <div className='text-center mb-[20px]'>
                <span className='text-primary text-[20px]'>Blogs & Posts</span>
                <h1 className='text-[40px] text-[#fff] font-[700]'>We untold stories</h1>
            </div>
            <div className='grid-blog'>
                <BlogItem pic={blog1}></BlogItem>
                <BlogItem pic={blog2}></BlogItem>
                <BlogItem pic={blog3}></BlogItem>
            </div>
        </div>
    );
};

export default Blog;