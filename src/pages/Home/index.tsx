import { useState } from "react";
import LeftAside from "../../components/LeftAside";
import RightAside from "../../components/RightAside";
import TweetsPage from "../../components/TweetsPage";
import ExplorePage from "../../components/ExplorePage";
import NotificationPage from "../../components/NotificationPage";
import TagPage from "../../components/TagPage";
import ProfilePage from "../../components/ProfilePage";
import AnotherProfilePage from "../../components/AnotherProfilePage";

const Home = () => {
    const [toRender, setToRender] = useState("HOME");

    const handleButtonMenu = (menuOption: string) => {
        setToRender(menuOption);
    };
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
                            <AnotherProfilePage/>
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