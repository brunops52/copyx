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

const Home = () => {
    const [toRender, setToRender] = useState("POST");

    const handleButtonMenu = (menuOption: string) => {
        setToRender(menuOption);
    };

    const tweet = {
             user: "nome sobren...",
             account: "conta", 
             time: "22", 
             content: "Pra quem não me conhece e passou a me seguir faz pouco tempo, eu me chamo Vinícius, sou designer freelance (ainda cursando, mas quase completando) e eu levo MUITO a sério meu trabalho. Tiro meu pouco sustento disso, por vezes levo horas e me dedico ao máximo pra isso (+)", 
             comments: 10000, 
             retweets: 10000, 
             likes: 10000, 
             views: 10000 
        }

    return (
        <div className=' h-full min-h-screen flex bg-black '>
            <LeftAside handleButtonMenu={handleButtonMenu}/>
            {(() => {
                switch (toRender) {
                    case "HOME":
                        return <TweetsPage handleButtonMenu={handleButtonMenu} />;
                    case "EXPLORE":
                        return (
                            <ExplorePage/>
                        )
                    case "NOTIFICATION":
                        return (
                            <NotificationPage/>
                        )
                    case "TAG":
                        return (
                            <TagPage handleButtonMenu={handleButtonMenu}/>
                        )
                    case "PROFILE":
                        return (
                            <ProfilePage handleButtonMenu={handleButtonMenu}/>
                        )
                    case "ANOTHERPROFILE":
                        return (
                            <AnotherProfilePage handleButtonMenu={handleButtonMenu}/>
                        )
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
                            handleButtonMenu={handleButtonMenu}/>
                        )
                    default:
                        return <TweetsPage handleButtonMenu={handleButtonMenu} />;
                }
            })()}
            <RightAside/>
        </div>
    )
  }

export default Home