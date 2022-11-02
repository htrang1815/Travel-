import React from 'react';
import ButtonLoadMore from '../../../components/button/ButtonLoadMore';
import ProjectItem from '../../../components/projects/ProjectItem';

const ProjectList = () => {
    return (
        <div className='py-[30px] px-[9%]'>
            <div className='w-full  grid grid-cols-4 grid-rows-3 gap-[15px]  mb-[30px]'>
                <ProjectItem></ProjectItem>
                <ProjectItem></ProjectItem>
                <ProjectItem></ProjectItem>
                <ProjectItem></ProjectItem>
                <ProjectItem></ProjectItem>
                <ProjectItem></ProjectItem>
                <ProjectItem></ProjectItem>
                <ProjectItem></ProjectItem>    
                <ProjectItem></ProjectItem>    
            </div>
            <div className='text-center'>
                <ButtonLoadMore className = ' text-primary' text='Load More'></ButtonLoadMore>
            </div>
        </div>
    );
};

export default ProjectList;