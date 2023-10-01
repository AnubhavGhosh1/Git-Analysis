import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../context/Context";

function SearchPannel() {
  const [find, setFind] = useState(false);
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
    remainingRequest
  } = useContext(Context);

  const [formData, setFormData] = useState({ userName: "" });

  function changeHandler(e) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  }

  function submitHandler() {
    console.log(formData.userName);
    setUser(formData.userName);
    try {
      fetchData(formData.userName);
    } catch (error) {
      console.log();
    }
  }

  return (
    <div className="w-full lg:h-[4rem] flex lg:justify-center min-[359px]:flex-row min-[359px]:h-[3rem]">
      <div className="bg-white lg:w-8/12 flex items-center rounded-lg relative drop-shadow-sm min-[359px]:w-[100%] min-[359px]:ml-2">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="pr-4 pl-4"></FontAwesomeIcon>
          <input
            className="lg:text-lg min-[359px]:text-sm"
            type="text"
            placeholder="Enter Github User"
            value={formData.userName}
            name="userName"
            onChange={changeHandler}
          />
          <button onClick={submitHandler} className="flex lg:h-[3rem] lg:justify-center lg:items-center bg-[#37bcc8] text-white lg:p-3 lg:rounded-lg lg:font-semibold lg:text-lg hover:bg-[#88ebf2] absolute right-0 mr-2 min-[359px]:h-[2rem] min-[359px]:rounded-full min-[359px]:p-2 min-[359px]:items-center">Search</button>
      </div>
      <div className="lg:mt-4 lg:ml-5 min-[359px]:relative min-[359px]:text-md min-[359px]:ml-4">
        <h3 className="lg:text-2xl text-[#617d98]">Requests : 60 / {remainingRequest}</h3>
      </div>
    </div>
  );
}

export default SearchPannel;
