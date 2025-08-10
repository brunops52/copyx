import { useState } from "react";
import LeftAside from "../../components/LeftAside";
import RightAside from "../../components/RightAside";
import TweetsPage from "../../components/TweetsPage";
import ExplorePage from "../../components/ExplorePage";
import NotificationPage from "../../components/NotificationPage";

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
                        return <TweetsPage />;
                    case "EXPLORE":
                        return (
                            <ExplorePage/>
                        )
                    case "NOTIFICATION":
                        return (
                            <NotificationPage/>
                        )
                    default:
                        return <TweetsPage />;
                }
            })()}
            <RightAside/>
        </div>
    )
  }

export default Home