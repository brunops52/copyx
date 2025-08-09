import { GoPersonFill } from "react-icons/go";
import { AiOutlineHeart } from "react-icons/ai";
import { IoChatbubbleEllipsesOutline, IoStatsChart, IoBookmarkOutline } from "react-icons/io5";
import { FaRetweet } from "react-icons/fa6";
import { MdOutlineFileUpload } from "react-icons/md";


type TweetProps = {
    user: string;
    account: string;
    time: string;
    content: string;
    comments: number;
    retweets: number;
    likes: number;
    views: number;
};

const Tweet = ({ 
    user, 
    account, 
    time, 
    content, 
    comments, 
    retweets, 
    likes, 
    views 
}: TweetProps) => {

    return (
        <div className="text-white">
            <div className="p-5 w-full border-b-1 border-neutral-700">
                <div className="flex">
                    <span className="w-12 h-12 bg-neutral-400 rounded-full flex items-center justify-center text-neutral-700 cursor-pointer">
                        <GoPersonFill className=" w-12 h-9"/>
                    </span>
                    <div className="ml-4">
                        <h3 className="font-bold cursor-pointer">
                            {user}
                            <span className="text-neutral-500 mx-2">@{account}</span>  <span className="text-neutral-500">{time}</span>
                        </h3>
                        <h2 className="mb-7">
                            {content}
                        </h2>
                        <div className="flex items-center justify-between gap-7 text-neutral-500">
                            <span className="flex cursor-pointer hover:text-primary_blue"><IoChatbubbleEllipsesOutline className="w-6 h-6"/> {comments}k</span>
                            <span className="flex cursor-pointer hover:text-primary_blue"><FaRetweet className="w-6 h-6"/> {retweets}k</span>
                            <span className="flex cursor-pointer hover:text-primary_blue"><AiOutlineHeart className="w-6 h-6"/> {likes}k</span>
                            <span className="flex cursor-pointer hover:text-primary_blue"><IoStatsChart className="w-6 h-6"/> {views}k</span>
                            <div className="flex items-center gap-2">
                                <IoBookmarkOutline className="cursor-pointer w-6 h-6 hover:text-primary_blue"/>
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