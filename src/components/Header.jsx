import React ,{useContext} from 'react';
import { Context } from "../context/Context";

function Header(props) {
    const {
        fetchData,
        user,
        setUser,
        userProfile,
        setUserProfile,
        name,
        setName,
        repo,
        setRepo,
        follower,
        setFollower,
        following,
        setFollowing,
        gits,
        setGits,
        followerList,
        setFollowerList,
        profileUrl,
        setProfileUrl,
        bio,
        setBio,
      } = useContext(Context);
    return (
        <div className='w-screen'>
            <div className='text-black bg-white h-[5rem] text-center drop-shadow-sm'>
                <p className='text-3xl font-semibold pt-4'>Git Analysis</p>
            </div>
        </div>
    );
}

export default Header;