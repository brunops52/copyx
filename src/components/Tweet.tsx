import { GoPersonFill } from "react-icons/go";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { IoChatbubbleEllipsesOutline, IoStatsChart, IoBookmarkOutline, IoBookmark  } from "react-icons/io5";
import { FaRetweet } from "react-icons/fa6";
import { MdOutlineFileUpload } from "react-icons/md";
import type { Tweet as TweetType, AuthResponse, User } from '../types/auth';
import api from '../services/api';
import { timeAgo } from "../utils/timeAgo";




type TweetProps = {
    tweet: TweetType
    handleButtonMenu: (menu: string) => void;
    handleUser: (user: User) => void;
};


const Tweet = ({ 
    tweet,
    handleButtonMenu,
    handleUser 
}: TweetProps) => {

    const handleTweetLikeSubmit = async () => {
        try {
            console.log(tweet.id)
            await api.post<AuthResponse>(`tweets/${tweet.id}/like/`);
            window.location.reload();
        } catch (error) {
            alert('Conteúdo inválido');
            console.error('error:', error);
        }
    };

    const handleTweetBookmarkSubmit = async () => {
        try {
            console.log(tweet.id)
            await api.post<AuthResponse>(`tweets/${tweet.id}/bookmark/`);
            window.location.reload();
        } catch (error) {
            alert('Conteúdo inválido');
            console.error('error:', error);
        }
    };

    return (
        <div className="text-white">
            <div className="p-5 w-full border-b-1 border-neutral-700">
                <div className="flex">
                    <span className="w-12 h-12 bg-neutral-400 rounded-full flex items-center justify-center text-neutral-700 cursor-pointer">
                        <GoPersonFill className=" w-12 h-9"/>
                    </span>
                    <div className="ml-4 w-full">
                        <h3  onClick={() => {if (handleButtonMenu) {handleButtonMenu("ANOTHERPROFILE")}handleUser && handleUser(tweet.user) }} className="font-bold cursor-pointer">
                            {tweet.user.first_name}
                            <span className="text-neutral-500 mx-2">@{tweet.user.username}</span>  <span className="text-neutral-500">{timeAgo(tweet.created_at)}</span>
                        </h3>
                        <h2 onClick={() => {if (handleButtonMenu) {handleButtonMenu("POST")} }} className="mb-7 cursor-pointer">
                            {tweet.content}
                        </h2>
                        <div className="flex text-neutral-500 justify-between">
                            <div className="flex gap-14">
                                <span onClick={() => {if (handleButtonMenu) {handleButtonMenu("POST")} }} className="flex cursor-pointer hover:text-primary_blue"><IoChatbubbleEllipsesOutline className="w-6 h-6 mr-1"/> {tweet.mentions.length}</span>
                                <span className="flex cursor-pointer hover:text-primary_blue"><FaRetweet className="w-6 h-6 mr-1"/> 0</span>
                                <span onClick={handleTweetLikeSubmit} className="flex cursor-pointer hover:text-primary_blue">{tweet.is_liked ? (<AiFillHeart className="w-6 h-6 mr-1 text-red-600"/>) : (<AiOutlineHeart className="w-6 h-6 mr-1"/>)} {tweet.likes.length}</span>
                                <span className="flex cursor-pointer hover:text-primary_blue"><IoStatsChart className="w-6 h-6 mr-1"/> 0</span>
                            </div>
                            <div className="flex gap-2">
                                {tweet.is_bookmarked ? (<IoBookmark onClick={handleTweetBookmarkSubmit} className="w-6 h-6 mr-1 text-yellow-500 cursor-pointer hover:text-primary_blue"/>) : (<IoBookmarkOutline onClick={handleTweetBookmarkSubmit} className="w-6 h-6 mr-1 cursor-pointer hover:text-primary_blue"/>)}
                                <MdOutlineFileUpload className="cursor-pointer w-6 h-6 hover:text-primary_blue"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }

  export default Tweet