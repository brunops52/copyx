import { useState } from "react";

import { GoPersonFill } from "react-icons/go";
import { 
    AiOutlineFileImage, 
    AiOutlineFileGif, 
    AiOutlineCalendar, 
    AiOutlineSmile, 
    AiOutlineEnvironment, 
    AiOutlineHeart } from "react-icons/ai";
import { IoChatbubbleEllipsesOutline, IoStatsChart, IoBookmarkOutline, IoBookmark    } from "react-icons/io5";
import { FaRetweet } from "react-icons/fa6";
import { MdOutlineFileUpload } from "react-icons/md";

import LeftAside from "../../components/LeftAside";
import RightAside from "../../components/RightAside";




const Home = () => {
    const [showFollowing, setShowFollowing] = useState(true);
    const [showForYou, setShowForYou] = useState(false);
    const [text, setText] = useState('');

    return (
        <div className=' h-full min-h-screen flex bg-black'>
            <LeftAside/>
            <div className=" w-full border-x-1 border-neutral-700 relative">
                <div className="grid grid-cols-2 w-full max-h-16 bg-black/70 text-neutral-500 font-bold place-items-center border-b-1 border-neutral-700  sticky top-0 left-0">
                    <button onClick={() => (setShowForYou(true), setShowFollowing(false))} className="cursor-pointer w-full h-full hover:bg-neutral-900 transition-colors">
                        <span className={`inline-block  ${showForYou ? 'border-b-4 border-primary_blue py-4 text-white' : ''}`}>
                            Pare você
                        </span>
                    </button>
                    <button onClick={() => (setShowFollowing(true), setShowForYou(false))} className="cursor-pointer w-full h-full hover:bg-neutral-900 transition-colors">
                        <span className={`inline-block   ${showFollowing ? 'border-b-4 border-primary_blue py-4 text-white' : ''}`}>
                            Seguindo
                        </span>
                    </button>
                </div>
                <div className=" text-white p-5 text-2xl border-b-1 border-neutral-700">
                    <div className="flex gap-8 mb-5">
                        <span className="w-12 h-12 bg-neutral-400 rounded-full flex items-center justify-center text-neutral-700">
                            <GoPersonFill className=" w-12 h-9"/>
                        </span>
                        <textarea
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            className="w-full border-none resize-none overflow-hidden focus:outline-none"
                            style={{ height: 'auto', minHeight: '40px' }}
                            onInput={(e) => {
                                const target = e.target as HTMLTextAreaElement;
                                target.style.height = 'auto';
                                target.style.height = target.scrollHeight + 'px';
                            }}
                            placeholder="O que está acontecendo?"
                        />
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-center justify-between gap-7 ml-24 text-primary_blue">
                            <AiOutlineFileImage className="cursor-pointer"/>
                            <AiOutlineFileGif className="cursor-pointer"/>
                            <AiOutlineCalendar className="cursor-pointer"/>
                            <AiOutlineSmile className="cursor-pointer"/>
                            <AiOutlineEnvironment className="cursor-pointer"/>
                        </div>
                        <button className={` text-black text-xl font-bold py-2 px-3.5 rounded-full cursor-pointer ${!text ? 'bg-neutral-600' : 'bg-white'} transition-colors`}>
                            Postar
                        </button>
                    </div>
                </div>
                <div className="text-white">
                    <div className="p-5 w-full border-b-1 border-neutral-700">
                        <div className="flex">
                            <span className="w-12 h-12 bg-neutral-400 rounded-full flex items-center justify-center text-neutral-700 cursor-pointer">
                                <GoPersonFill className=" w-12 h-9"/>
                            </span>
                            <div className="ml-4">
                                <h3 className="font-bold cursor-pointer">
                                    Nome Sobrenome
                                    <span className="text-neutral-500 mx-2">@conta</span>  <span className="text-neutral-500">22h</span>
                                </h3>
                                <h2 className="mb-7">
                                    Pra quem não me conhece e passou a me seguir faz pouco tempo, eu me chamo Vinícius, sou designer freelance
                                     (ainda cursando, mas quase completando) e eu levo MUITO a sério meu trabalho. Tiro meu pouco sustento disso, 
                                     por vezes levo horas e me dedico ao máximo pra isso (+)
                                </h2>
                                <div className="flex items-center justify-between gap-7 text-neutral-500">
                                    <span className="flex cursor-pointer hover:text-primary_blue"><IoChatbubbleEllipsesOutline className="w-6 h-6"/> 10k</span>
                                    <span className="flex cursor-pointer hover:text-primary_blue"><FaRetweet className="w-6 h-6"/> 10k</span>
                                    <span className="flex cursor-pointer hover:text-primary_blue"><AiOutlineHeart className="w-6 h-6"/> 10k</span>
                                    <span className="flex cursor-pointer hover:text-primary_blue"><IoStatsChart className="w-6 h-6"/> 10k</span>
                                    <div className="flex items-center gap-2">
                                        <IoBookmarkOutline className="cursor-pointer w-6 h-6 hover:text-primary_blue"/>
                                        <MdOutlineFileUpload className="cursor-pointer w-6 h-6 hover:text-primary_blue"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <RightAside/>
        </div>
    )
  }

export default Home