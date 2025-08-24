import { GoPersonFill } from "react-icons/go";
import type { User } from "../types/auth";

type CommentProps = {
  img: string;
  content: string;
  time: string;
  user: User
};
const Comment = ({ img, content, time, user }: CommentProps) => {
  return (
    <div className="flex w-full p-5 gap-4 bg-black/70 border-b-1 border-neutral-700 items-center text-white">
      {img ? (
        <img src={img} alt="X Logo" className="w-12 h-12 rounded-full p-0.5" />
      ) : (
        <span className="w-12 h-12 bg-neutral-400 rounded-full flex items-center justify-center text-neutral-700">
          <GoPersonFill className=" w-12 h-9" />
        </span>
      )}
      <div>
        <h2>{user.first_name} {user.last_name}</h2>
        <h3>{content}</h3>
      </div>
      <span className="min-w-fit ml-auto">{time}</span>
    </div>
  );
};

export default Comment;
