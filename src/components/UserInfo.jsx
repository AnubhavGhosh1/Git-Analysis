import React, { useContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { Context } from '../context/Context';
import { AiOutlineLink } from 'react-icons/ai';
import Followers from './Followers';
import "./UserInfo.css"
function UserInfo() {
    const {
        user,
        userProfile,
        name,
        repo,
        follower,
        following,
        gits,
        bio,
        company,
        location,
        blog,
        html_url
    } = useContext(Context);
    return (
        <div className='w-screen lg:mt-9 min-[359px]:mt-5'>
            {/* Top pannel */}
            <div className='flex lg:flex-row min-[359px]:flex-col ml-14 gap-x-4 lg:w-11/12 justify-center mt-4 drop-shadow-md lg:mt-0 min-[359px]:mt-2'>
                <div className='flex p-4 lg:w-3/12 lg:ml-2 bg-white rounded-md min-[359px]:w-11/12 min-[359px]:-ml-2'>
                    {/* Repos */}
                    <span className="pink mr-4"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 12 16" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg></span>
                    <div>
                        <p className='text-2xl font-semibold'>{repo}</p>
                        <p>Repos</p>
                    </div>
                </div>

                <div className='flex p-4 lg:w-3/12 lg:ml-2 bg-white rounded-md drop-shadow-md min-[359px]:w-11/12 lg:mt-0 min-[359px]:mt-2 min-[359px]:-ml-2'>
                    {/* Followers */}
                    <span className="green mr-4"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></span>
                    <div>
                        <p className='text-2xl font-semibold'>{follower}</p>
                        <p>Followers</p>
                    </div>
                </div>

                <div className='flex p-4 lg:w-3/12 lg:ml-2 bg-white rounded-md drop-shadow-md min-[359px]:w-11/12 lg:mt-0 min-[359px]:mt-2 min-[359px]:-ml-2'>
                    {/* Following */}
                    <span className="purple mr-4"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg></span>
                    <div>
                        <p className='text-2xl font-semibold'>{following}</p>
                        <p>Following</p>
                    </div>
                </div>

                <div className='flex p-4 lg:w-3/12 lg:ml-2 bg-white rounded-md drop-shadow-md min-[359px]:w-11/12 lg:mt-0 min-[359px]:mt-2 min-[359px]:-ml-2'>
                    {/* Gits */}
                    <span className="yellow mr-4"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 12 16" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.5 5L10 7.5 7.5 10l-.75-.75L8.5 7.5 6.75 5.75 7.5 5zm-3 0L2 7.5 4.5 10l.75-.75L3.5 7.5l1.75-1.75L4.5 5zM0 13V2c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v11c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1zm1 0h10V2H1v11z"></path></svg></span>
                    <div>
                        <p className='text-2xl font-semibold'>{gits}</p>
                        <p>Gits</p>
                    </div>
                </div>
            </div>

            <div className='flex lg:w-full lg:h-full justify-center items-center mt-10'>
                <div  className='bg-white lg:w-8/12 p-9 rounded-lg drop-shadow-xl min-[359px]:w-11/12'>
                    {/* user info */}
                    <div className='flex lg:flex-row min-[359px]:flex-col '>
                        <img src={userProfile} className='rounded-full mr-4 min-[359px]:w-[6rem] min-[359px]:h-[6rem]' width={90} alt="" srcset="" />
                        <div className='mt-5 min-[359px]:relative'>
                            {/* name */}
                            <p className='font-semibold lg:text-xl min-[359px]:text-md lg:top-0 min-[359px]:relative min-[359px]:top-[-1rem]'>{name}</p>
                            <p className='lg:top-0 min-[359px]:relative min-[359px]:top-[-1rem]'>@<span>{user}</span></p>
                        </div>
                        <button className='lg:ml-10 lg:justify-center mt-7 rounded-xl lg:h-10 lg:w-[7rem] text-center border border-[#52d1da] text-[#52d1da] hover:bg-[#37bcc8] transition-all ease-in hover:text-white min-[359px]:h-[2rem] min-[359px]:p-2 min-[359px]:flex min-[359px]:items-center min-[359px]:w-[4rem]'><a href={html_url}>Follow</a></button>
                    </div>

                    {/* bio */}
                    <div>
                        <div className='text-md mt-2 ml-4'>
                        {/* Bio */}
                        <p>{bio}</p>
                        </div>

                        <div>
                            <div className='flex gap-x-2 mt-1 items-center'>
                                <svg className='ml-4' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"></path></svg>
                                <p>{company}</p>
                            </div>
                        
                        </div>
                            <div className='flex gap-x-2 mt-1 items-center'>
                                <svg className='ml-4' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg>
                                <p>{location}</p>
                            </div>
                        <div>

                        </div>
                            <div className='flex gap-x-2 mt-1 items-center'>
                                <AiOutlineLink className='ml-4 mt'/>
                                <a href={blog}>{blog}</a>
                            </div>
                        <div>

                        </div>
                    </div>

                </div>

                <div>
                    {/* Follower list */}
                    {/* <Followers></Followers> */}
                </div>
            </div>
        </div>
    );
}

export default UserInfo;