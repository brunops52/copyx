import { useState, useEffect } from "react";

import { GoPersonFill } from "react-icons/go";
import {
  AiOutlineFileImage,
  AiOutlineFileGif,
  AiOutlineCalendar,
  AiOutlineSmile,
  AiOutlineEnvironment,
} from "react-icons/ai";
import Tweet from "./Tweet";
import api from "../services/api";
import type {
  TweetFormData,
  Tweet as TweetType,
  TweetsResponse,
  AuthResponse,
  User,
} from "../types/auth";

type TweetsPageProps = {
  handleButtonMenu: (menu: string) => void;
  handleUser: (user: User) => void;
};

const TweetsPage = ({ handleButtonMenu, handleUser }: TweetsPageProps) => {
  const [showFollowing, setShowFollowing] = useState(true);
  const [showForYou, setShowForYou] = useState(false);
  const [tweets, setTweets] = useState<TweetType[]>();
  const [timeline, setTimeline] = useState<TweetType[]>();

  const [formData, setFormData] = useState<TweetFormData>({
    content: "",
    image: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const fetchTweets = async () => {
    try {
      const response = await api.get<TweetsResponse>("tweets/");
      console.log("response.data:", response.data);
      setTweets(response.data.results);
    } catch (err) {
      console.error(err);
    }
  };
  const fetchTimeline = async () => {
    try {
      const response = await api.get<TweetsResponse>("timeline/");
      console.log("response.data:", response.data);
      setTimeline(response.data.results);
    } catch (err) {
      console.error(err);
    }
  };

  const handleTweetSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post<AuthResponse>("tweets/", formData);

      fetchTweets();
      fetchTimeline();
    } catch (error) {
      alert("Conteúdo inválido");
      console.error("error:", error);
    }
  };

  useEffect(() => {
    fetchTweets();
    fetchTimeline();
  }, []);

  return (
    <div className=" w-full border-x-1 border-neutral-700 relative">
      <div className="grid grid-cols-2 w-full max-h-16 bg-black/70 text-neutral-500 font-bold place-items-center border-b-1 border-neutral-700  sticky top-0 left-0">
        <button
          onClick={() => (setShowForYou(true), setShowFollowing(false))}
          className="cursor-pointer w-full h-full hover:bg-neutral-900 transition-colors"
        >
          <span
            className={`inline-block  ${showForYou ? "border-b-4 border-primary_blue py-4 text-white" : ""}`}
          >
            Pare você
          </span>
        </button>
        <button
          onClick={() => (setShowFollowing(true), setShowForYou(false))}
          className="cursor-pointer w-full h-full hover:bg-neutral-900 transition-colors"
        >
          <span
            className={`inline-block   ${showFollowing ? "border-b-4 border-primary_blue py-4 text-white" : ""}`}
          >
            Seguindo
          </span>
        </button>
      </div>
      <form
        onSubmit={handleTweetSubmit}
        className=" text-white p-5 text-2xl border-b-1 border-neutral-700"
      >
        <div className="flex gap-8 mb-5">
          <span className="w-12 h-12 bg-neutral-400 rounded-full flex items-center justify-center text-neutral-700">
            <GoPersonFill className=" w-12 h-9" />
          </span>
          <textarea
            value={formData.content}
            name="content"
            onChange={handleChange}
            className="w-full border-none resize-none overflow-hidden focus:outline-none"
            style={{ height: "auto", minHeight: "40px" }}
            placeholder="O que está acontecendo?"
          />
        </div>
        <div className="flex justify-between">
          <div className="flex items-center justify-between gap-7 ml-24 text-primary_blue">
            <AiOutlineFileImage className="cursor-pointer" />
            <AiOutlineFileGif className="cursor-pointer" />
            <AiOutlineCalendar className="cursor-pointer" />
            <AiOutlineSmile className="cursor-pointer" />
            <AiOutlineEnvironment className="cursor-pointer" />
          </div>
          <button
            className={` text-black text-xl font-bold py-2 px-3.5 rounded-full cursor-pointer ${!formData.content ? "bg-neutral-600" : "bg-white"} transition-colors`}
          >
            Postar
          </button>
        </div>
      </form>
      {showFollowing ? (
        <>
          {tweets &&
            tweets.map((singleTweet, index) => (
              <Tweet
                key={index}
                tweet={singleTweet}
                handleButtonMenu={handleButtonMenu}
                handleUser={handleUser}
              />
            ))}
        </>
      ) : (
        <>
          {timeline &&
            timeline.map((singleTweet, index) => (
              <Tweet
                key={index}
                tweet={singleTweet}
                handleButtonMenu={handleButtonMenu}
                handleUser={handleUser}
              />
            ))}
        </>
      )}
    </div>
  );
};

export default TweetsPage;
