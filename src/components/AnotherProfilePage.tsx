import { useState } from "react"
import { AiFillLock } from "react-icons/ai"
import { FaRegCalendarAlt } from "react-icons/fa"
import { GoPersonFill } from "react-icons/go"
import Tweet from "./Tweet"

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

const profile = {
    name: "Nome Sobrenome",
    posts: 0,
    coverProfile: "",
    profilePicture: "",
    profileAccount: "conta",
    profileDescription: "Descrição da bio",
    month: "08",
    year: "2025",
    following: 0,
    followers: 0,
}

type AnotherProfilePageProps = {
    handleButtonMenu: (menu: string) => void;
};

const AnotherProfilePage = ({handleButtonMenu}:AnotherProfilePageProps) => {
        const [showlikedPosts, setShowlikedPosts] = useState(true);
        const [showPosts, setShowposts] = useState(false);
    return (
        <>
            <div className="w-full h-full min-h-screen border-x-1 border-neutral-700 text-white font-bold relative">
                <div className="w-full py-1.5 px-14 bg-black/70 border-b-1 border-neutral-700  sticky top-0 left-0">
                    <h2 className="text-xl flex items-center">{profile.name}  <AiFillLock  className="ml-2"/></h2>
                    <span className="text-xs text-neutral-500">{profile.posts} Posts</span>
                </div>
                <div className="w-full">
                    {profile.coverProfile ? (
                        <img 
                            src={profile.coverProfile}
                            alt="X Logo" 
                            className="w-full h-48 bg-cover bg-center object-cover" />) : (
                        <div className="w-full h-48 bg-neutral-700 flex items-center justify-center"/>
                    )}
                    <div className="flex items-center justify-between px-5">
                        {profile.profilePicture ? (
                            <img 
                                src={profile.profilePicture}
                                alt="X Logo" 
                                className="w-36 h-36 bg-cover bg-center object-cover mt-[-72px] rounded-full border-4 border-black mb-1.5" />) : (
                            <div className="w-36 h-36 rounded-full mt-[-72px] bg-neutral-600 flex items-center justify-center border-4 border-black mb-1.5">
                                <GoPersonFill className=" w-32 h-32 mb-4"/>
                            </div>
                            
                        )}
                        <button className="bg-black py-2 px-7 rounded-full border-2 border-neutral-700 cursor-pointer hover:bg-neutral-900">Seguir</button>
                    </div>
                    <div className="w-full py-1.5 sticky top-0 left-0 px-5">
                        <h2 className="text-xl flex items-center">{profile.name}  <AiFillLock  className="ml-2"/></h2>
                        <span className="text-xs text-neutral-500 items-center">@{profile.profileAccount}</span>
                        <p className="mt-3.5">{profile.profileDescription}</p>
                        <p className="text-xs text-neutral-500 flex items-center mt-3"><FaRegCalendarAlt className="mr-2"/> Ingressou em {profile.month} de {profile.year} </p>
                        <p className="text-xs text-neutral-500 flex items-center mt-3"><span className="text-white mr-1">{profile.following} </span> Seguindo <span className="text-white mr-1 ml-4">{profile.followers} </span> Seguidores </p>
                    </div>
                    <div className="grid grid-cols-2 w-full max-h-16 bg-black/70 text-neutral-500 font-bold place-items-center border-b-1 border-neutral-700  sticky top-0 left-0">
                        <button onClick={() => (setShowposts(true), setShowlikedPosts(false))} className="cursor-pointer w-full h-full hover:bg-neutral-900 transition-colors">
                            <span className={`inline-block  ${showPosts ? 'border-b-4 border-primary_blue py-4 text-white' : ''}`}>
                                Posts
                            </span>
                        </button>
                        <button onClick={() => (setShowlikedPosts(true), setShowposts(false))} className="cursor-pointer w-full h-full hover:bg-neutral-900 transition-colors">
                            <span className={`inline-block   ${showlikedPosts ? 'border-b-4 border-primary_blue py-4 text-white' : ''}`}>
                                Curtidas
                            </span>
                        </button>
                    </div>
                </div>
                {showlikedPosts  ? (
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
        </>
    )
  }
export default AnotherProfilePage
