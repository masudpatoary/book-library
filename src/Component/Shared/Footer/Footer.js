import React from 'react';
import { RiFacebookCircleFill, BsYoutube } from 'react-icons/ri';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { TiSocialInstagramCircular } from 'react-icons/ti';
import './Footer.local.css'

const Footer = () => {
    return (
        <footer className="footer footer-center mt-auto p-10 bg-primary text-primary-content">

            <div>
                <p className='font-bold text-accent text-center'>Follow Us on</p>
                <div className="grid grid-flow-col gap-4">
                    <a href='#' target="_blank" ><RiFacebookCircleFill className='text-2xl text-accent shadow-md hover-grow rounded-full p-0 m-0'></RiFacebookCircleFill></a>
                    <a href='#' target="_blank" ><AiOutlinePlayCircle className='text-2xl text-accent shadow-md hover-grow rounded-full p-0 m-0'></AiOutlinePlayCircle></a>
                    <a href='#' target="_blank" ><TiSocialInstagramCircular className='text-2xl text-accent shadow-md hover-grow rounded-full p-0 m-0'></TiSocialInstagramCircular></a>
                </div>
            </div>
            <div>
                <p className="font-bold">
                    Islami Alo
                </p>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;