import React from 'react';
import Header from "../home/header/Header";
import ContactForm from './ContactForm';

const ContactPage = () => {
    return (
        <div className='bg-bg-contact h-[100vh] bg-center bg-no-repeat bg-cover overflow-hidden'>
           <Header></Header>
           <ContactForm></ContactForm>
        </div>
    );
};

export default ContactPage;