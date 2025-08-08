import { useState } from "react";

import { GoPersonFill } from "react-icons/go";
import { AiOutlineFileImage, AiOutlineFileGif, AiOutlineCalendar, AiOutlineSmile, AiOutlineEnvironment    } from "react-icons/ai";

const Home = () => {
    const [showFollowing, setShowFollowing] = useState(true);
    const [showForYou, setShowForYou] = useState(false);
    const [text, setText] = useState('');

    return (
        <div className=' h-screen flex'>
            <h1 className='w-full max-w-[353px] bg-black'>Hello World 1</h1>
            <div className=" w-full bg-black border-x-1 border-neutral-700">
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
                <div className="bg-black text-white p-5 text-2xl border-b-1 border-neutral-700">
                    <div className="flex gap-8 mb-5">
                        <span className="w-12 h-12 bg-neutral-400 rounded-full flex items-center justify-center text-neutral-700">
                            <GoPersonFill className=" w-9 h-9"/>
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
            </div>
            <h1 className='w-full max-w-[416px] bg-black'>Hello World 3</h1>
        </div>
    )
  }

export default Home