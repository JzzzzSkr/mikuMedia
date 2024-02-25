import React from 'react';
import './Footer.scss'
import Left from './left/Left';
import Right from './right/Right';

const Footer = () => {
    return (
        <div className='footerWrapper'>
            <Left/>
            <Right/>
        </div>
    );
}

export default Footer;
