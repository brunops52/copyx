import { 
    AiOutlineHome,
    AiFillHome, 
    AiOutlineSearch,
    AiOutlineBell,
    AiFillBell,
    AiOutlineTag,
    AiFillTag,
    AiOutlineUser,
    AiFillLock } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { GoPersonFill } from "react-icons/go";
import { FaSearch, FaUser } from "react-icons/fa";



import logo from '../assets/LOGO_X.svg';
import { useState } from "react";

type LeftAsideProps = {
    handleButtonMenu: (menu: string) => void;
};

const LeftAside = ({handleButtonMenu}: LeftAsideProps) => {
        const [selecteButton, setSelecteButton] = useState("HOME");

    return (
        <aside className='w-full max-w-[353px] px-12 pt-5 pb-14 text-white sticky left-0 top-0 h-screen '>
                <img 
                    src={logo} 
                    alt="X Logo" 
                    className="w-9"
                />
                <button onClick={() => {handleButtonMenu("HOME"), setSelecteButton("HOME")}} className={`flex items-center gap-7 transition-colors cursor-pointer hover:bg-neutral-900 p-3 rounded-full mt-10 ${selecteButton === "HOME" ? "font-bold" : ""}`}>
                    {selecteButton === "HOME" ?
                        <AiFillHome className="w-9 h-9"/>
                        :
                        <AiOutlineHome   className="w-9 h-9"/>
                    }
                    <span className="text-white text-2xl">
                        Página Inicial
                    </span>
                </button>
                <button onClick={() => {handleButtonMenu("EXPLORE"), setSelecteButton("EXPLORE")}} className={`flex items-center gap-7 transition-colors cursor-pointer hover:bg-neutral-900 p-3 rounded-full mt-10 ${selecteButton === "EXPLORE" ? "font-bold" : ""}`}>
                    {selecteButton === "EXPLORE" ?
                        <FaSearch className="w-9 h-9"/>
                        :
                        <AiOutlineSearch   className="w-9 h-9"/>
                    }
                    <span className="text-white text-2xl">
                        Explorar
                    </span>
                </button>
                <button onClick={() => {handleButtonMenu("NOTIFICATION"), setSelecteButton("NOTIFICATION")}} className={`flex items-center gap-7 transition-colors cursor-pointer hover:bg-neutral-900 p-3 rounded-full mt-10 ${selecteButton === "NOTIFICATION" ? "font-bold" : ""}`}>
                    {selecteButton === "NOTIFICATION" ?
                        <AiFillBell className="w-9 h-9"/>
                        :
                        <AiOutlineBell   className="w-9 h-9"/>
                    }
                    <span className="text-white text-2xl">
                        Notificações
                    </span>
                </button>
                <button onClick={() => {handleButtonMenu("HOME"), setSelecteButton("TAG")}} className={`flex items-center gap-7 transition-colors cursor-pointer hover:bg-neutral-900 p-3 rounded-full mt-10 ${selecteButton === "TAG" ? "font-bold" : ""}`}>
                    {selecteButton === "TAG" ?
                        <AiFillTag className="w-9 h-9"/>
                        :
                        <AiOutlineTag  className="w-9 h-9"/>    
                    }
                    <span className="text-white text-2xl">
                        Itens salvos
                    </span>
                </button>
                <button onClick={() => {handleButtonMenu("HOME"), setSelecteButton("PROFILE")}} className={`flex items-center gap-7 transition-colors cursor-pointer hover:bg-neutral-900 p-3 rounded-full mt-10 ${selecteButton === "PROFILE" ? "font-bold" : ""}`}>
                    {selecteButton === "PROFILE" ?
                        <FaUser className="w-9 h-9"/>
                        :
                        <AiOutlineUser  className="w-7 h-7"/>
                    }
                    <span className="text-white text-2xl">
                        Perfil
                    </span>
                </button>
                <div className="flex mt-10 cursor-pointer hover:bg-neutral-900 p-3 rounded-full">
                    <span className="w-12 h-12 bg-neutral-400 rounded-full flex items-center justify-center text-neutral-700">
                                <GoPersonFill className=" w-12 h-9"/>
                    </span>
                    <div className="ml-4">
                        <h3 className="font-bold flex items-center text-white">
                            Nome Sobr... <AiFillLock  className="ml-1"/> <BsThreeDots className="ml-1"/>
                        </h3>
                        <span className="text-neutral-500 mx-2">@conta</span>
                    </div>
                </div>
            </aside>
    )
  }

  export default LeftAside