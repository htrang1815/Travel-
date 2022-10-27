import React from 'react';
import ContactInfo from './ContactInfo';
import NewLetters from './NewLetters';
import QuickLink from './QuickLink';
import Social from './Social';

const Footer = () => {
    return (
        <div className='px-[9%] py-[30px] grid-footer'>
            <Social></Social>
            <QuickLink></QuickLink>
            <ContactInfo></ContactInfo>
            <NewLetters></NewLetters>
        </div>
    );
};

export default Footer;