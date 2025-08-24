import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRetweet } from "react-icons/fa6";
import { GoPersonFill } from "react-icons/go";
import {
  IoBookmark,
  IoBookmarkOutline,
  IoChatbubbleEllipsesOutline,
  IoStatsChart,
} from "react-icons/io5";
import { MdOutlineFileUpload } from "react-icons/md";
import api from "../services/api";
import type {
  AuthResponse,
  CommentsResponse,
  Comment as CommentType,
  TweetFormData,
  Tweet as TweetType,
  User,
} from "../types/auth";
import { timeAgo } from "../utils/timeAgo";
import Comment from "./Comment";

type TweetProps = {
  tweet: TweetType;
  handleButtonMenu: (menu: string) => void;
  handleUser: (user: User) => void;
};

const Tweet = ({ tweet, handleButtonMenu, handleUser }: TweetProps) => {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<CommentType[]>([]);
  const [selfUser, setSelfUser] = useState<User>();
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

  const handleTweetLikeSubmit = async () => {
    try {
      console.log(tweet.id);
      await api.post<AuthResponse>(`tweets/${tweet.id}/like/`);
      window.location.reload();
    } catch (error) {
      alert("Conteúdo inválido");
      console.error("error:", error);
    }
  };

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post<AuthResponse>(`tweets/${tweet.id}/comments/`, formData);

    fetchComments()
    } catch (error) {
      alert("Conteúdo inválido");
      console.error("error:", error);
    }
  };

  const fetchComments = async () => {
    try {
      const response = await api.get<CommentsResponse>(
        `tweets/${tweet.id}/comments/`
      );
      console.log(response.data);

      setComments(response.data.results);
    } catch (err) {
      console.error(err);
    }
  };

  const handleTweetBookmarkSubmit = async () => {
    try {
      console.log(tweet.id);
      await api.post<AuthResponse>(`tweets/${tweet.id}/bookmark/`);
      window.location.reload();
    } catch (error) {
      alert("Conteúdo inválido");
      console.error("error:", error);
    }
  };
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
        const parsedUser = JSON.parse(storedUser);

        setSelfUser(parsedUser);
      }

    fetchComments();
  }, [tweet.id]);

  return (
    <>
      <div className="text-white">
        <div className="p-5 w-full border-b-1 border-neutral-700">
          <div className="flex">
            {tweet.user.profile_picture ? (
              <img
                src={tweet.user.profile_picture}
                alt="X Logo"
                className="w-12 h-12 rounded-full p-0.5"
              />
            ) : (
              <span className="w-12 h-12 bg-neutral-400 rounded-full flex items-center justify-center text-neutral-700 cursor-pointer">
                <GoPersonFill className=" w-12 h-9" />
              </span>
            )}
            <div className="ml-4 w-full">
              <h3
                onClick={() => {
                  if (handleButtonMenu) {
                    handleButtonMenu("ANOTHERPROFILE");
                  }
                  handleUser && handleUser(tweet.user);
                }}
                className="font-bold cursor-pointer"
              >
                {tweet.user.first_name} {tweet.user.last_name}
                <span className="text-neutral-500 mx-2">
                  @{tweet.user.username}
                </span>{" "}
                <span className="text-neutral-500">
                  {timeAgo(tweet.created_at)}
                </span>
              </h3>
              <h2 className="mb-7 cursor-pointer">{tweet.content}</h2>
              <div className="flex text-neutral-500 justify-between">
                <div className="flex gap-14">
                  <span
                    onClick={() => {
                      (showComments == true
                        ? setShowComments(false)
                        : setShowComments(true),
                        fetchComments());
                    }}
                    className="flex cursor-pointer hover:text-primary_blue"
                  >
                    <IoChatbubbleEllipsesOutline className="w-6 h-6 mr-1" />{" "}
                    {comments?.length}
                  </span>
                  <span className="flex cursor-pointer hover:text-primary_blue">
                    <FaRetweet className="w-6 h-6 mr-1" /> 0
                  </span>
                  <span
                    onClick={handleTweetLikeSubmit}
                    className="flex cursor-pointer hover:text-primary_blue"
                  >
                    {tweet.is_liked ? (
                      <AiFillHeart className="w-6 h-6 mr-1 text-red-600" />
                    ) : (
                      <AiOutlineHeart className="w-6 h-6 mr-1" />
                    )}{" "}
                    {tweet.likes.length}
                  </span>
                  <span className="flex cursor-pointer hover:text-primary_blue">
                    <IoStatsChart className="w-6 h-6 mr-1" /> 0
                  </span>
                </div>
                <div className="flex gap-2">
                  {tweet.is_bookmarked ? (
                    <IoBookmark
                      onClick={handleTweetBookmarkSubmit}
                      className="w-6 h-6 mr-1 text-yellow-500 cursor-pointer hover:text-primary_blue"
                    />
                  ) : (
                    <IoBookmarkOutline
                      onClick={handleTweetBookmarkSubmit}
                      className="w-6 h-6 mr-1 cursor-pointer hover:text-primary_blue"
                    />
                  )}
                  <MdOutlineFileUpload className="cursor-pointer w-6 h-6 hover:text-primary_blue" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showComments && (
        <>
          <div className=" text-white p-5 text-2xl border-b-1 border-neutral-700">
            <div className="flex gap-8">
              {selfUser?.profile_picture ? (
                <img
                  src={`https://brunops52.pythonanywhere.com/${selfUser.profile_picture}`}
                  alt="X Logo"
                  className="w-12 h-12 rounded-full p-0.5"
                />
                ) : (
                  <span className="w-12 h-12 bg-neutral-400 rounded-full flex items-center justify-center text-neutral-700 cursor-pointer">
                    <GoPersonFill className=" w-12 h-9" />
                  </span>
                )}
              <textarea
                value={formData.content}
                name="content"
                onChange={handleChange}
                className="w-full border-none resize-none overflow-hidden focus:outline-none"
                style={{ height: "auto", minHeight: "40px" }}
                placeholder="O que está acontecendo?"
              />
              <button
                onClick={handleCommentSubmit}
                className={` text-black text-xl font-bold py-1 px-3.5 rounded-full cursor-pointer ${!formData.content ? "bg-neutral-600" : "bg-white"} transition-colors`}
              >
                Postar
              </button>
            </div>
          </div>
          {comments.length > 0 &&
            comments.map((c) => (
              <Comment
                content={c.content}
                user={c.user}
                img={c.user.profile_picture ? c.user.profile_picture : ""}
                time={timeAgo(c.created_at)}
                key={c.id}
              />
            ))}
        </>
      )}
    </>
  );
};

export default Tweet;
