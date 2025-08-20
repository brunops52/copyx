import React, { useState, useEffect } from "react";
import api from "../services/api";
import type { Tweet, TweetsResponse } from "../types/auth";

const TweetList: React.FC = () => {
  const [tweets, setTweets] = useState<Tweet[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await api.get<TweetsResponse>("tweets/");
        console.log("response.data:", response.data);
        setTweets(response.data.results);
      } catch (err) {
        setError("Erro ao carregar tweets");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTweets();
  }, []);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div>
      <h2 className="text-amber-500">teste</h2>
      {tweets &&
        tweets.map((tweet) => (
          <div
            key={tweet.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              margin: "10px 0",
            }}
          >
            <p>{tweet.content}</p>
            <small>
              Postado por @{tweet.user.username} •{" "}
              {new Date(tweet.created_at).toLocaleString()}
            </small>
            <div>
              ♥️ {tweet.likes} {tweet.is_liked ? "(Você curtiu)" : ""}
            </div>
          </div>
        ))}
    </div>
  );
};

export default TweetList;
