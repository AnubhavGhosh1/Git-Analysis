import { useContext, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import { Context } from "./context/Context";
import SearchPannel from "./components/SearchPannel";
import Footer from "./components/Footer";
import UserInfo from "./components/UserInfo";

function App() {
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
  useEffect(() => {
    fetchData(user);
    console.log(userProfile);
  }, []);
  return (
    <div className="bg-[#f1f5f8] w-screen h-screen overflow-x-hidden">
      <Header />
      {console.log(following)}
      <div className="mt-4">
        <SearchPannel />
        <UserInfo/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
