import React from 'react';
import ContactInfo from './ContactInfo';
import NewLetters from './NewLetters';
import QuickLink from './QuickLink';
import Social from './Social';

const Footer = ({className}) => {
    return (
        <div className={`px-[9%] py-[30px] grid-footer ${className}`}>
            <Social></Social>
            <QuickLink></QuickLink>
            <ContactInfo></ContactInfo>
            <NewLetters></NewLetters>
        </div>
    );
};

export default Footer;