import { useState } from "react";

import LeftAside from "../../components/LeftAside";
import RightAside from "../../components/RightAside";
import TweetsPage from "../../components/TweetsPage";
import ExplorePage from "../../components/ExplorePage";
import NotificationPage from "../../components/NotificationPage";
import TagPage from "../../components/TagPage";
import ProfilePage from "../../components/ProfilePage";
import AnotherProfilePage from "../../components/AnotherProfilePage";
import TweetPage from "../../components/TweetPage";
import type { User } from "../../types/auth";

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

  const tweet = {
    user: "nome sobren...",
    account: "conta",
    time: "22",
    content:
      "Pra quem não me conhece e passou a me seguir faz pouco tempo, eu me chamo Vinícius, sou designer freelance (ainda cursando, mas quase completando) e eu levo MUITO a sério meu trabalho. Tiro meu pouco sustento disso, por vezes levo horas e me dedico ao máximo pra isso (+)",
    comments: [
      {
        user: "/src/assets/LOGO_X.svg",
        content: "comentario teste",
        time: "30 de jul",
      },
      {
        user: "https://media.licdn.com/dms/image/v2/D4E03AQH6CzfgKuAXXw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1699646804140?e=1757548800&v=beta&t=Vm1k6H39yAIon7sVUdBNLZ7OaXaKkTuZu08-aB7-17o",
        content: "comentario teste 2",
        time: "30 de jul",
      },
    ],
    retweets: 10000,
    likes: 10000,
    views: 10000,
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
          case "POST":
            return (
              <TweetPage
                user={tweet.user}
                account={tweet.account}
                content={tweet.content}
                likes={tweet.likes}
                retweets={tweet.retweets}
                time={tweet.time}
                views={tweet.views}
                comments={tweet.comments}
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
