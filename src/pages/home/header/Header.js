import React from 'react';
import HikingIcon from '@mui/icons-material/Hiking';
import { Link} from 'react-router-dom';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ButtonSubmit from '../../../components/button/ButtonSubmit';

const ListLink = [
    {
      id: 1,
      to: "#",
      title: "Home",
    },
    {
      id: 2,
      to: "#",
      title: "Projects",
    },
    {
      id: 3,
      to: "#",
      title: "Blogs",
    },
    {
      id: 4,
      to: "#",
      title: "About",
    },
    {
      id: 5,
      to: "#",
      title: "Contact",
    },
];


const Header = () => {
  
    return (
        <div className='h-[64px] fixed py-4 px-20 w-full flex items-center justify-between z-50 bg-header'>
            <div className='flex items-end'>
                    <HikingIcon style={{fontSize:"28px", color: "#FFBC4B"}}></HikingIcon>
                    <h1 className='font-[600] text-[28px]'>Travel.</h1>
            </div>
            <div className='flex list-none items-center'>
                {ListLink.map((link) => (
                <li className="ml-[16px]" key={link.id}>
                    <Link to={link.to}>{link.title}</Link>
                </li>
                ))}
                <BookmarkIcon className='ml-[16px]'></BookmarkIcon>
                <ButtonSubmit className='ml-[16px] py-1 px-5 hover:opacity-50' text="Login" ></ButtonSubmit>
            </div>
        </div>
    );
};

export default Header;