import { useState } from "react";
import LeftAside from "../../components/LeftAside";
import RightAside from "../../components/RightAside";
import TweetsPage from "../../components/TweetsPage";
import ExplorePage from "../../components/ExplorePage";

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
                        return <div className="w-full h-full min-h-screen border-x-1 border-neutral-700 text-white font-bold">
                            <div className="w-full py-5 bg-black/70 text-center place-items-center border-b-1 border-neutral-700  sticky top-0 left-0">
                                <h2>Notificações</h2>
                            </div>
                        </div>;
                    default:
                        return <TweetsPage />;
                }
            })()}
            <RightAside/>
        </div>
    )
  }

export default Home