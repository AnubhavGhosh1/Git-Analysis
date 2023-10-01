import React from 'react';
import { AiFillGithub,AiFillYoutube,AiFillLinkedin,AiOutlineInstagram,AiOutlineCode } from 'react-icons/ai';

function Footer(props) {
    return (
        <div className='w-screen flex justify-center'>
            <div className='lg:w-5/12 h-[6rem] mt-[5rem] mb-[0.2rem] bg-white relative bottom-0 rounded-md flex justify-between items-center min-[359px]:mb-[0rem]'>
            <p className='ml-10 lg:w-[5rem] lg:text-xl font-semibold flex gap-x-4 items-center min-[359px]:text-sm min-[359px]:w-[4rem]'><AiOutlineCode size={60}/> Find me at </p>
                <div className='ml-1'>
                   <a href="https://github.com/Anubhav-Ghosh1"><AiFillGithub size={60}/></a>
                </div>
                <div className=''>
                   <a href="https://www.youtube.com/@AnubhavGhosh03"><AiFillYoutube size={60} color='red'/></a>
                </div>
                <div className='ml-4'>
                   <a href="https://www.linkedin.com/in/anubhav-ghosh11/"><AiFillLinkedin size={60} color='0072b1 '/></a>
                </div>
                <div className='mr-10'>
                   <a href="https://www.instagram.com/guywhocodess"><AiOutlineInstagram size={60} color='#d62976' /></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;