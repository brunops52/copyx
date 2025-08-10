import { useState } from "react";

import { GoPersonFill } from "react-icons/go";
import { 
    AiOutlineFileImage, 
    AiOutlineFileGif, 
    AiOutlineCalendar, 
    AiOutlineSmile, 
    AiOutlineEnvironment } from "react-icons/ai";
import Tweet from "./Tweet";

type TweetsPageProps = {
    handleButtonMenu: (menu: string) => void;
};

const TweetsPage = ({handleButtonMenu}: TweetsPageProps) => {
    const [showFollowing, setShowFollowing] = useState(true);
    const [showForYou, setShowForYou] = useState(false);
    const [tweetText, setTweetText] = useState('');


    const tweet = [
        {
             user: "nome sobren...",
             account: "conta", 
             time: "22", 
             content: "Pra quem não me conhece e passou a me seguir faz pouco tempo, eu me chamo Vinícius, sou designer freelance (ainda cursando, mas quase completando) e eu levo MUITO a sério meu trabalho. Tiro meu pouco sustento disso, por vezes levo horas e me dedico ao máximo pra isso (+)", 
             comments: 10000, 
             retweets: 10000, 
             likes: 10000, 
             views: 10000 
        },
        {
            user: "nome sobren...",
            account: "conta",
            time: "22m",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            comments: 124,
            retweets: 56,
            likes: 890,
            views: 4500
        },
        {
            user: "nome sobren...",
            account: "conta",
            time: "1h",
            content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            comments: 89,
            retweets: 23,
            likes: 456,
            views: 3200
        },
        {
            user: "nome sobren...",
            account: "conta",
            time: "3h",
            content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
            comments: 210,
            retweets: 78,
            likes: 1200,
            views: 7800
        },
        {
            user: "nome sobren...",
            account: "conta",
            time: "5h",
            content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
            comments: 45,
            retweets: 12,
            likes: 340,
            views: 2100
        },
        {
            user: "nome sobren...",
            account: "conta",
            time: "1d",
            content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.",
            comments: 312,
            retweets: 145,
            likes: 2300,
            views: 12500
        }
    ];

    return (
                <div className=" w-full border-x-1 border-neutral-700 relative">
                    <div className="grid grid-cols-2 w-full max-h-16 bg-black/70 text-neutral-500 font-bold place-items-center border-b-1 border-neutral-700  sticky top-0 left-0">
                        <button onClick={() => (setShowForYou(true), setShowFollowing(false))} className="cursor-pointer w-full h-full hover:bg-neutral-900 transition-colors">
                            <span className={`inline-block  ${showForYou ? 'border-b-4 border-primary_blue py-4 text-white' : ''}`}>
                                Pare você
                            </span>
                        </button>
                        <button onClick={() => (setShowFollowing(true), setShowForYou(false))} className="cursor-pointer w-full h-full hover:bg-neutral-900 transition-colors">
                            <span className={`inline-block   ${showFollowing ? 'border-b-4 border-primary_blue py-4 text-white' : ''}`}>
                                Seguindo
                            </span>
                        </button>
                    </div>
                    <div className=" text-white p-5 text-2xl border-b-1 border-neutral-700">
                        <div className="flex gap-8 mb-5">
                            <span className="w-12 h-12 bg-neutral-400 rounded-full flex items-center justify-center text-neutral-700">
                                <GoPersonFill className=" w-12 h-9"/>
                            </span>
                            <textarea
                                value={tweetText}
                                onChange={(e) => setTweetText(e.target.value)}
                                className="w-full border-none resize-none overflow-hidden focus:outline-none"
                                style={{ height: 'auto', minHeight: '40px' }}
                                onInput={(e) => {
                                    const target = e.target as HTMLTextAreaElement;
                                    target.style.height = 'auto';
                                    target.style.height = target.scrollHeight + 'px';
                                }}
                                placeholder="O que está acontecendo?"
                            />
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-center justify-between gap-7 ml-24 text-primary_blue">
                                <AiOutlineFileImage className="cursor-pointer"/>
                                <AiOutlineFileGif className="cursor-pointer"/>
                                <AiOutlineCalendar className="cursor-pointer"/>
                                <AiOutlineSmile className="cursor-pointer"/>
                                <AiOutlineEnvironment className="cursor-pointer"/>
                            </div>
                            <button className={` text-black text-xl font-bold py-2 px-3.5 rounded-full cursor-pointer ${!tweetText ? 'bg-neutral-600' : 'bg-white'} transition-colors`}>
                                Postar
                            </button>
                        </div>
                    </div>
                    {showFollowing  ? (
                        <>
                            {tweet.map((singleTweet, index) => (
                                <Tweet
                                    key={index}
                                    user={singleTweet.user}
                                    account={singleTweet.account}
                                    time={singleTweet.time}
                                    content={singleTweet.content}
                                    comments={singleTweet.comments}
                                    retweets={singleTweet.retweets}
                                    likes={singleTweet.likes}
                                    views={singleTweet.views}
                                    handleButtonMenu={handleButtonMenu}
                                />
                            ))}
                        </>
                    ): (
                        <>
                        <Tweet
                            user={tweet[0].user}
                            account={tweet[0].account}
                            time={tweet[0].time}
                            content={tweet[0].content}
                            comments={tweet[0].comments}
                            retweets={tweet[0].retweets}
                            likes={tweet[0].likes}
                            views={tweet[0].views}
                            handleButtonMenu={handleButtonMenu}
                        />
                        </>
                    )}
                </div>
    )
  }

  export default TweetsPage