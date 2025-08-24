import { useEffect, useState } from "react";
import api from "../services/api";
import type {
  Bookmarks,
  BookmarksResponse,
  User
} from "../types/auth";
import Tweet from "./Tweet";

type TagPageProps = {
  handleButtonMenu: (menu: string) => void;
  handleUser: (user: User) => void;
};

const TagPage = ({ handleButtonMenu, handleUser }: TagPageProps) => {
  const [tweets, setTweets] = useState<Bookmarks[]>();

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await api.get<BookmarksResponse>("bookmarks/");
        console.log("response.data:", response.data);
        setTweets(response.data.results);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTweets();
  }, []);

  return (
    <>
      <div className="w-full h-full min-h-screen border-x-1 border-neutral-700 text-white font-bold relative">
        <div className="w-full py-5 bg-black/70 text-center place-items-center border-b-1 border-neutral-700  sticky top-0 left-0">
          <h2>Itens Salvos</h2>
        </div>

        {tweets &&
          tweets.map((singleTweet, index) => (
            <Tweet
              key={index}
              tweet={singleTweet.tweet}
              handleButtonMenu={handleButtonMenu}
              handleUser={handleUser}
            />
          ))}
      </div>
    </>
  );
};

export default TagPage;
