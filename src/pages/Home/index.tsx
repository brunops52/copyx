import { useState } from "react";
import LeftAside from "../../components/LeftAside";
import RightAside from "../../components/RightAside";
import TweetsPage from "../../components/TweetsPage";
import { AiOutlineSearch } from "react-icons/ai";

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
                            <div className=" w-full h-full min-h-screen border-x-1 border-neutral-700 relative text-white">
                                <div className="px-6 py-2 pb-10 border-b-1 border-neutral-700">
                                    <div className="border-1 border-neutral-700 rounded-full p-3 flex items-center gap-3">
                                        <AiOutlineSearch   className="w-7 h-7 text-neutral-500"/>
                                        <input placeholder="Buscar" type="text" className="focus:outline-0"/>
                                    </div>
                                </div>
                            </div>
                        )
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