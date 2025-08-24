import { useState } from "react";

import AnotherProfilePage from "../../components/AnotherProfilePage";
import ExplorePage from "../../components/ExplorePage";
import LeftAside from "../../components/LeftAside";
import NotificationPage from "../../components/NotificationPage";
import ProfilePage from "../../components/ProfilePage";
import RightAside from "../../components/RightAside";
import TagPage from "../../components/TagPage";
import TweetsPage from "../../components/TweetsPage";
import type {  User } from "../../types/auth";

const Home = () => {
  const [toRender, setToRender] = useState("HOME");
  const [user, setUser] = useState<User>({
    id: 0,
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    bio: "",
    profile_picture: "",
    cover_photo: "",
    followers_count: 0,
    following_count: 0,
  });

  const handleUser = (user: User) => {
    setUser(user);
  };


  const handleButtonMenu = (menuOption: string) => {
    setToRender(menuOption);
  };

  return (
    <div className=" h-full min-h-screen flex bg-black ">
      <LeftAside handleButtonMenu={handleButtonMenu} />
      {(() => {
        switch (toRender) {
          case "HOME":
            return (
              <TweetsPage
                handleUser={handleUser}
                handleButtonMenu={handleButtonMenu}
              />
            );
          case "EXPLORE":
            return <ExplorePage />;
          case "NOTIFICATION":
            return <NotificationPage />;
          case "TAG":
            return (
              <TagPage
                handleUser={handleUser}
                handleButtonMenu={handleButtonMenu}
              />
            );
          case "PROFILE":
            return (
              <ProfilePage
                handleUser={handleUser}
                handleButtonMenu={handleButtonMenu}
              />
            );
          case "ANOTHERPROFILE":
            return (
              <AnotherProfilePage
                user={user}
                handleUser={handleUser}
                handleButtonMenu={handleButtonMenu}
              />
            );
          default:
            return (
              <TweetsPage
                handleUser={handleUser}
                handleButtonMenu={handleButtonMenu}
              />
            );
        }
      })()}
      <RightAside />
    </div>
  );
};

export default Home;
