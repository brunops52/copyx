import { GoPersonFill } from "react-icons/go";
import type { AuthResponse, IsFollowingResponse, User } from "../types/auth";
import { useEffect, useState } from "react";
import api from "../services/api";

type ShowRelationProps = {
  user: User;
};

const ShowRelations = (user: ShowRelationProps) => {
  const [isFollowing, setIsFollowing] = useState<boolean>();
  const [selfUser, setSelfUser] = useState<User>();

  const handleFollowSubmit = async () => {
    try {
      if (selfUser?.id != user.user.id)
        await api.post<AuthResponse>(`users/${user.user.id}/follow/`);
      window.location.reload();
    } catch (error) {
      console.error("error:", error);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          setSelfUser(JSON.parse(storedUser) as User);
        }
      } catch (error) {
        console.error("error:", error);
      }
    };

    const fetchIsFollowing = async () => {
      try {
        const response = await api.get<IsFollowingResponse>(
          `users/${user.user.id}/check-following/`
        );
        console.log("response.data:", response.data);
        setIsFollowing(response.data.is_following);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUser();
    fetchIsFollowing();
  }, []);

  return (
    <div className="flex w-full py-5 px-12 gap-4 bg-black/70 border-b-1 border-neutral-700 items-center">
      {user.user.profile_picture ? (
        <img
          src="https://brunops52.pythonanywhere.com/media/profile_pics/original.png"
          alt="X Logo"
          className="w-14 h-14 rounded-full p-0.5"
        />
      ) : (
        <div className="w-14 h-14 rounded-full bg-neutral-600 flex items-center justify-center border-4 border-black mb-1.5">
          <GoPersonFill className=" w-10 h-10 " />
        </div>
      )}
      <div>
        <h2>
          {user.user.first_name} {user.user.last_name}
        </h2>
        <p>{user.user.bio}</p>
      </div>
      {selfUser?.id != user.user.id ? (
        <>
          {isFollowing ? (
            <>
              <button
                onClick={handleFollowSubmit}
                className="bg-black rounded-full border-1 border-neutral-500 py-1.5 px-4 ml-auto cursor-pointer"
              >
                Seguindo
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleFollowSubmit}
                className="bg-white rounded-full text-black py-1.5 px-4 ml-auto cursor-pointer"
              >
                Seguir
              </button>
            </>
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ShowRelations;
