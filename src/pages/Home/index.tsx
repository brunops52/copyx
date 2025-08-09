import { useState } from "react";
import LeftAside from "../../components/LeftAside";
import RightAside from "../../components/RightAside";
import TweetsPage from "../../components/TweetsPage";

const Home = () => {
    const [toRender, setToRender] = useState("HOME");

    const handleButtonMenu = (menuOption: string) => {
        setToRender(menuOption);
    };
    return (
        <div className=' h-full min-h-screen flex bg-black'>
            <LeftAside handleButtonMenu={handleButtonMenu}/>
            {(() => {
                switch (toRender) {
                    case "HOME":
                        return <TweetsPage />;
                    case "c":
                        return <div className="flex-1 flex justify-center items-center text-white">This is the C page</div>;
                    case "b":
                        return <div className="flex-1 flex justify-center items-center text-white">Welcome to the Home Page</div>;
                    default:
                        return <TweetsPage />;
                }
            })()}
            <RightAside/>
        </div>
    )
  }

export default Home