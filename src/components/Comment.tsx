import { GoPersonFill } from "react-icons/go";

type CommentProps = {
  img: string;
  content: string;
  time: string;
};
const Comment = ({ img, content, time }: CommentProps) => {
  return (
    <div className="flex w-full p-5 gap-4 bg-black/70 border-b-1 border-neutral-700 items-center">
      {img ? (
        <img src={img} alt="X Logo" className="w-12 h-12 rounded-full p-0.5" />
      ) : (
        <span className="w-12 h-12 bg-neutral-400 rounded-full flex items-center justify-center text-neutral-700">
          <GoPersonFill className=" w-12 h-9" />
        </span>
      )}
      <h2>{content}</h2>
      <span className="min-w-fit ml-auto">{time}</span>
    </div>
  );
};

export default Comment;
