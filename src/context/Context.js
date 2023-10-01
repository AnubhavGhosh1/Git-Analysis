import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const Context = createContext();


export default function ContextFunction({children}) {
    
    const [user,setUser] = useState("Anubhav-Ghosh1");
    const [name,setName] = useState();
    const [repo,setRepo] = useState(0);
    const [follower,setFollower] = useState(0);
    const [following,setFollowing] = useState(0);
    const [gits,setGits] = useState(0);
    const [followerList,setFollowerList] = useState([]);
    const [userProfile,setUserProfile] = useState();
    const [profileUrl,setProfileUrl] = useState();
    const [bio,setBio] = useState();
    const [company,setCompany] = useState();
    const [location,setLocation] = useState();
    const [blog,setUserLink] = useState();
    const [html_url,setHtml_url] = useState();
    const [remainingRequest,setRemainingRequest] = useState();
    const [followers, setFollowers] = useState();

    const fetchData = async function fetch1 (userName)
    {
        try{
            let response = await axios(`https://api.github.com/users/${userName}`);
            // const response = (await fetch(`https://api.github.com/users/${userName}`)).json;
            let {avatar_url,bio,blog,
                followers,followers_url,following,
                login,name,public_gists,public_repos,url,location,company,html_url
            } = response.data;
            // console.log(avatar_url);
            setUser(login);
            setName(name);
            setUserProfile(avatar_url);
            setRepo(public_repos);
            setFollower(followers);
            setFollowing(following);
            setFollowerList(followers_url)
            setProfileUrl(url);
            setGits(public_gists);
            setBio(bio);
            setCompany(company);
            setLocation(location);
            setUserLink(blog);
            setHtml_url(html_url);
            checkRequests();

            await Promise.allSettled([
                axios(`https://api.github.com/users/${login}/repos?per_page=100`),
                axios(`${followers_url}?per_page=100`),
            ]).then((results)=>{
                try {
                    setFollowers(followers.value.data);
                } catch (error) {
                    
                }
            })
            checkRequests();
        }
        catch(e)
        {
            console.log("A")
            console.log(e)
        }

    }

    const checkRequests = () => {
        axios(`https://api.github.com/rate_limit`)
          .then(({ data }) => {
            let {
              rate: { remaining },
            } = data;
    
            // for testing the error msg
            // remaining = 0;
    
            // Normal Toggle Error msg
            setRemainingRequest(remaining);
            if (remaining === 0) {
              alert("Sorry, you have exceeded your hourly rate limit!");
            }
          })
          .catch((err) => console.log(err));
      };
      useEffect(checkRequests, []);

    const value = {
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
        company,
        location,
        blog,
        html_url,
        remainingRequest,
        followers
    };
    
    return <Context.Provider value={value}>{children}</Context.Provider>;
}
