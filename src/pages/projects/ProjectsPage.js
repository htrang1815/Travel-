import React from 'react';
import Header from '../home/header/Header';
import Poster from './poster/Poster';
import './project.scss';
import '../../index.scss';
import Search from './search/Search';
import Filter from './search/Filter';



const ProjectsPage = () => {
    return (
        <div className="bg-[#111] p-0 m-0 overflow-x-hidden ">
            <Header></Header>
            <Poster></Poster>
            <Search></Search>
            <Filter></Filter>
        </div>
    );
};

export default ProjectsPage;