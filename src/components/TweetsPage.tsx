import { useState } from "react";

import { GoPersonFill } from "react-icons/go";
import { 
    AiOutlineFileImage, 
    AiOutlineFileGif, 
    AiOutlineCalendar, 
    AiOutlineSmile, 
    AiOutlineEnvironment, 
    AiOutlineHeart } from "react-icons/ai";
import { IoChatbubbleEllipsesOutline, IoStatsChart, IoBookmarkOutline } from "react-icons/io5";
import { FaRetweet } from "react-icons/fa6";
import { MdOutlineFileUpload } from "react-icons/md";
import Tweet from "./Tweet";

const TweetsPage = () => {
    const [showFollowing, setShowFollowing] = useState(true);
    const [showForYou, setShowForYou] = useState(false);
    const [tweetText, setTweetText] = useState('');
    return (
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
                                value={tweetText}
                                onChange={(e) => setTweetText(e.target.value)}
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
                            <button className={` text-black text-xl font-bold py-2 px-3.5 rounded-full cursor-pointer ${!tweetText ? 'bg-neutral-600' : 'bg-white'} transition-colors`}>
                                Postar
                            </button>
                        </div>
                    </div>
                    {showFollowing  ? (
                        <>
                            <Tweet />
                        </>
                    ): (
                        <>
                            <Tweet />
                            <Tweet />
                            <Tweet />
                            <Tweet />
                            <Tweet />
                        </>
                    )}
                </div>
    )
  }

  export default TweetsPage