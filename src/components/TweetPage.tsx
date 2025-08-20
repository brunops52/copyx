import { MdOutlineFileUpload } from "react-icons/md";
import { IoBookmarkOutline, IoStatsChart } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRetweet } from "react-icons/fa";
import { GoPersonFill } from "react-icons/go";
import { useState } from "react";
import Comment from "./Comment";

type TweetPageProps = {
  user: string;
  account: string;
  time: string;
  content: string;
  comments: {
    user: string;
    content: string;
    time: string;
  }[];
  retweets: number;
  likes: number;
  views: number;
  handleButtonMenu: (menu: string) => void;
};

const TweetPage = ({
  user,
  account,
  time,
  content,
  comments,
  retweets,
  likes,
  views,
  handleButtonMenu,
}: TweetPageProps) => {
  const [tweetText, setTweetText] = useState("");

  return (
    <>
      <div className="w-full h-full min-h-screen border-x-1 border-neutral-700 text-white font-bold relative">
        <div className="w-full py-5 bg-black/70 text-center place-items-center border-b-1 border-neutral-700  sticky top-0 left-0">
          <h2>Post</h2>
        </div>
        <div className="text-white">
          <div className="p-5 w-full border-b-1 border-neutral-700">
            <div className="flex">
              <span className="w-12 h-12 bg-neutral-400 rounded-full flex items-center justify-center text-neutral-700 cursor-pointer">
                <GoPersonFill className=" w-12 h-9" />
              </span>
              <div className="ml-4">
                <h3
                  onClick={() => {
                    if (handleButtonMenu) {
                      handleButtonMenu("ANOTHERPROFILE");
                    }
                  }}
                  className="font-bold cursor-pointer"
                >
                  {user}
                  <span className="text-neutral-500 mx-2">@{account}</span>{" "}
                  <span className="text-neutral-500">{time}</span>
                </h3>
                <h2
                  onClick={() => {
                    if (handleButtonMenu) {
                      handleButtonMenu("ANOTHERPROFILE");
                    }
                  }}
                  className="mb-7"
                >
                  {content}
                </h2>
                <div className="flex items-center justify-between gap-7 text-neutral-500">
                  <span className="flex cursor-pointer hover:text-primary_blue">
                    <FaRetweet className="w-6 h-6" /> {retweets}k
                  </span>
                  <span className="flex cursor-pointer hover:text-primary_blue">
                    <AiOutlineHeart className="w-6 h-6" /> {likes}k
                  </span>
                  <span className="flex cursor-pointer hover:text-primary_blue">
                    <IoStatsChart className="w-6 h-6" /> {views}k
                  </span>
                  <div className="flex items-center gap-2">
                    <IoBookmarkOutline className="cursor-pointer w-6 h-6 hover:text-primary_blue" />
                    <MdOutlineFileUpload className="cursor-pointer w-6 h-6 hover:text-primary_blue" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" text-white p-5 text-2xl border-b-1 border-neutral-700">
          <div className="flex gap-8">
            <span className="w-12 h-12 bg-neutral-400 rounded-full flex items-center justify-center text-neutral-700">
              <GoPersonFill className=" w-12 h-9" />
            </span>
            <input
              value={tweetText}
              onChange={(e) => setTweetText(e.target.value)}
              className="w-full border-none resize-none overflow-hidden focus:outline-none"
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = "auto";
                target.style.height = target.scrollHeight + "px";
              }}
              placeholder="Postar sua resposta"
            />
            <button
              className={` text-black text-xl font-bold py-2 px-3.5 rounded-full cursor-pointer ${!tweetText ? "bg-neutral-600" : "bg-white"} transition-colors`}
            >
              Postar
            </button>
          </div>
        </div>
        {comments.map((singleNotification, index) => (
          <Comment
            key={index}
            img={singleNotification.user}
            content={singleNotification.content}
            time={singleNotification.time}
          />
        ))}
      </div>
    </>
  );
};

export default TweetPage;
