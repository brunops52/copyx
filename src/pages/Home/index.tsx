import { useState } from "react";

import { GoPersonFill } from "react-icons/go";
import { AiOutlineFileImage, AiOutlineFileGif, AiOutlineCalendar, AiOutlineSmile, AiOutlineEnvironment, AiOutlineHeart     } from "react-icons/ai";
import { IoChatbubbleEllipsesOutline, IoStatsChart, IoBookmarkOutline, IoBookmark    } from "react-icons/io5";
import { FaRetweet } from "react-icons/fa6";
import { MdOutlineFileUpload } from "react-icons/md";




const Home = () => {
    const [showFollowing, setShowFollowing] = useState(true);
    const [showForYou, setShowForYou] = useState(false);
    const [text, setText] = useState('');

    return (
        <div className=' h-full min-h-screen flex bg-black'>
            <h1 className='w-full max-w-[353px] bg-black'>Hello World 1</h1>
            <div className=" w-full border-x-1 border-neutral-700">
                <div className="grid grid-cols-2 w-full max-h-16 bg-black text-neutral-500 font-bold place-items-center border-b-1 border-neutral-700">
                    <button onClick={() => (setShowForYou(true), setShowFollowing(false))} className="cursor-pointer w-full h-full">
                        <span className={`inline-block   ${showForYou ? 'border-b-4 border-primary_blue py-4 text-white' : ''}`}>
                            Pare você
                        </span>
                    </button>
                    <button onClick={() => (setShowFollowing(true), setShowForYou(false))} className="cursor-pointer w-full h-full">
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
                        <button className="bg-neutral-600 text-black text-xl font-bold py-2 px-3.5 rounded-full hover:bg-blue-600 transition-colors">
                            Postar
                        </button>
                    </div>
                </div>
                <div className="text-white">
                    <div className="p-5 w-full border-b-1 border-neutral-700">
                        <div className="flex">
                            <span className="w-12 h-12 bg-neutral-400 rounded-full flex items-center justify-center text-neutral-700">
                                <GoPersonFill className=" w-12 h-9"/>
                            </span>
                            <div className="ml-4">
                                <h3 className="font-bold">
                                    Nome Sobrenome
                                    <span className="text-neutral-500 mx-2">@conta</span>  <span className="text-neutral-500">22h</span>
                                </h3>
                                <h2 className="mb-7">
                                    Pra quem não me conhece e passou a me seguir faz pouco tempo, eu me chamo Vinícius, sou designer freelance
                                     (ainda cursando, mas quase completando) e eu levo MUITO a sério meu trabalho. Tiro meu pouco sustento disso, 
                                     por vezes levo horas e me dedico ao máximo pra isso (+)
                                </h2>
                                <div className="flex items-center justify-between gap-7 text-neutral-500">
                                    <IoChatbubbleEllipsesOutline className="cursor-pointer w-6 h-6"/>
                                    <FaRetweet className="cursor-pointer w-6 h-6"/>
                                    <AiOutlineHeart className="cursor-pointer w-6 h-6"/>
                                    <IoStatsChart  className="cursor-pointer w-6 h-6"/>
                                    <div className="flex items-center gap-2">
                                        <IoBookmarkOutline className="cursor-pointer w-6 h-6"/>
                                        <MdOutlineFileUpload className="cursor-pointer w-6 h-6"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='w-full max-w-[416px] bg-black'>Hello World 3</h1>
        </div>
    )
  }

export default Home