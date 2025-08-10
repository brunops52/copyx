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
             comments: [     
                            {
                                user: '/src/assets/LOGO_X.svg',
                                content: 'comentario teste',
                                time: '30 de jul'
                            },
                            {
                                user: 'https://media.licdn.com/dms/image/v2/D4E03AQH6CzfgKuAXXw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1699646804140?e=1757548800&v=beta&t=Vm1k6H39yAIon7sVUdBNLZ7OaXaKkTuZu08-aB7-17o',
                                content: 'comentario teste 2',
                                time: '30 de jul'
                            }
                        ],
             retweets: 10000, 
             likes: 10000, 
             views: 10000 
        },
        {
             user: "nome sobren...",
             account: "conta", 
             time: "22", 
             content: "Pra quem não me conhece e passou a me seguir faz pouco tempo, eu me chamo Vinícius, sou designer freelance (ainda cursando, mas quase completando) e eu levo MUITO a sério meu trabalho. Tiro meu pouco sustento disso, por vezes levo horas e me dedico ao máximo pra isso (+)", 
             comments: [     
                            {
                                user: '/src/assets/LOGO_X.svg',
                                content: 'comentario teste',
                                time: '30 de jul'
                            },
                            {
                                user: 'https://media.licdn.com/dms/image/v2/D4E03AQH6CzfgKuAXXw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1699646804140?e=1757548800&v=beta&t=Vm1k6H39yAIon7sVUdBNLZ7OaXaKkTuZu08-aB7-17o',
                                content: 'comentario teste 2',
                                time: '30 de jul'
                            }
                        ],
             retweets: 10000, 
             likes: 10000, 
             views: 10000 
        },
        {
             user: "nome sobren...",
             account: "conta", 
             time: "22", 
             content: "Pra quem não me conhece e passou a me seguir faz pouco tempo, eu me chamo Vinícius, sou designer freelance (ainda cursando, mas quase completando) e eu levo MUITO a sério meu trabalho. Tiro meu pouco sustento disso, por vezes levo horas e me dedico ao máximo pra isso (+)", 
             comments: [     
                            {
                                user: '/src/assets/LOGO_X.svg',
                                content: 'comentario teste',
                                time: '30 de jul'
                            },
                            {
                                user: 'https://media.licdn.com/dms/image/v2/D4E03AQH6CzfgKuAXXw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1699646804140?e=1757548800&v=beta&t=Vm1k6H39yAIon7sVUdBNLZ7OaXaKkTuZu08-aB7-17o',
                                content: 'comentario teste 2',
                                time: '30 de jul'
                            }
                        ],
             retweets: 10000, 
             likes: 10000, 
             views: 10000 
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