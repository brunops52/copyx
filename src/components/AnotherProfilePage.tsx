import { useEffect, useState } from "react"
import { AiFillLock } from "react-icons/ai"
import { GoPersonFill } from "react-icons/go"
import type { AuthResponse, IsFollowingResponse, Tweet as TweetType, User, UserDetailResponse, UserResponse } from "../types/auth"
import api from "../services/api"
import Tweet from "./Tweet"
import { useNavigate } from "react-router-dom";
import ShowRelations from "./ShowRelations"


type AnotherProfilePageProps = {
    handleButtonMenu: (menu: string) => void;
    user: User;
    handleUser: (user: User) => void;
};

const AnotherProfilePage = ({handleButtonMenu, user, handleUser}:AnotherProfilePageProps) => {
    const navigate = useNavigate()
    const [showFolllowersFollowing, setShowFolllowersFollowing] = useState(false);
    const [showlikedPosts, setShowlikedPosts] = useState(true);
    const [showFollowing, setShowFollowing] = useState(false);
    const [showFollowers, setShowFollowers] = useState(true);
    const [showPosts, setShowposts] = useState(false);
    const [selfTweets, setSelfTweets] = useState<TweetType[]>();
    const [selfLikeds, setSelfLikeds] = useState<TweetType[]>();
    const [selfUser, setSelfUser] = useState<User>();
    const [following, setFollowing] = useState<User[]>();
    const [followers, setFollowers] = useState<User[]>();
    const [isFollowing, setIsFollowing] = useState<boolean>()
    

    const handleFollowSubmit = async () => {
        try {
            await api.post<AuthResponse>(`users/${user.id}/follow/`);
            window.location.reload();
        } catch (error) {
            console.error('error:', error);
        }
    };

    useEffect(() => {
        const fetchTweets = async () => {
          try {
            const response = await api.get<UserDetailResponse>(`users/${user.id}/profile/`);
            console.log('response.data:', response.data);
            setSelfTweets(response.data.tweets);
            setSelfLikeds(response.data.liked_tweets)
          } catch (err) {
            console.error(err);
          }
        };
        const fetchfollowing = async () => {
          try {
            const response = await api.get<UserResponse>(`users/${user.id}/following/`);
            console.log('response.data:', response.data);
            setFollowing(response.data.results)
          } catch (err) {
            console.error(err);
          }
        };
        const fetchfollowers = async () => {
          try {
            const response = await api.get<UserResponse>(`users/${user.id}/followes/`);
            console.log('response.data:', response.data);
            setFollowers(response.data.results)
          } catch (err) {
            console.error(err);
          }
        };

        const fetchIsFollowing = async () => {
          try {
            const response = await api.get<IsFollowingResponse>(`users/${user.id}/check-following/`);
            console.log('response.data:', response.data);
            setIsFollowing(response.data.is_following)
          } catch (err) {
            console.error(err);
          }
        };
        
        const redirectUser = async () => {
            try {
                const storedUser = localStorage.getItem("user");
                if (storedUser) {
                setSelfUser(JSON.parse(storedUser) as User);
                }
            } catch (err) {
                console.error("Erro ao carregar usuário do localStorage", err);
            }
            };
        fetchIsFollowing()
        fetchfollowers()
        fetchfollowing()
        redirectUser()
        fetchTweets()
        }, []);
        if (selfUser?.id == user.id) 
            navigate('/Login')
        


    return (
        <>
            <div className="w-full h-full min-h-screen border-x-1 border-neutral-700 text-white font-bold relative">
                <div onClick={() => setShowFolllowersFollowing(false)} className="cursor-pointer w-full py-1.5 px-14 bg-black/70 border-b-1 border-neutral-700  sticky top-0 left-0">
                    <h2 className="text-xl flex items-center">{user.first_name} {user.last_name}  <AiFillLock  className="ml-2"/></h2>
                    <span className="text-xs text-neutral-500">{selfTweets?.length} Posts</span>
                </div>
                {
                    showFolllowersFollowing ? (
                        <>
                        <div className="grid grid-cols-2 w-full max-h-16 bg-black/70 text-neutral-500 font-bold place-items-center border-b-1 border-neutral-700  sticky top-0 left-0">
                            <button onClick={() => (setShowFollowers(true), setShowFollowing(false))} className="cursor-pointer w-full h-full hover:bg-neutral-900 transition-colors">
                                <span className={`inline-block  ${showFollowers ? 'border-b-4 border-primary_blue py-4 text-white' : ''}`}>
                                    Seguidores
                                </span>
                            </button>
                            <button onClick={() => (setShowFollowing(true), setShowFollowers(false))} className="cursor-pointer w-full h-full hover:bg-neutral-900 transition-colors">
                                <span className={`inline-block   ${showFollowing ? 'border-b-4 border-primary_blue py-4 text-white' : ''}`}>
                                    Seguindo
                                </span>
                            </button>
                        </div>
                        <div>
                            {showFollowers  ? (
                                <>
                                    {followers && followers.map((singleUser, index) => (
                                        <ShowRelations  user={singleUser} key={index}/>
                                    ))}
                                </>
                            ): (
                                <>
                                    {following && following.map((singleUser, index) => (
                                        <ShowRelations user={singleUser} key={index}/>
                                    ))}
                                </>
                            )}
                        </div>
                        </>
                    ) : (
                        <>
                            <div className="w-full">
                    {user.cover_photo ? (
                        <img 
                            src={user.cover_photo}
                            alt="X Logo" 
                            className="w-full h-48 bg-cover bg-center object-cover" />) : (
                        <div className="w-full h-48 bg-neutral-700 flex items-center justify-center"/>
                    )}
                    <div className="flex items-center justify-between px-5">
                        {user.profile_picture ? (
                            <img 
                                src='https://brunops52.pythonanywhere.com/media/profile_pics/original.png'
                                alt="X Logo" 
                                className="w-36 h-36 bg-cover bg-center object-cover mt-[-72px] rounded-full border-4 border-black mb-1.5" />) : (
                            <div className="w-36 h-36 rounded-full mt-[-72px] bg-neutral-600 flex items-center justify-center border-4 border-black mb-1.5">
                                <GoPersonFill className=" w-32 h-32 mb-4"/>
                            </div>
                            
                        )}
                        {isFollowing ? (
                            <>
                                <button onClick={handleFollowSubmit} className="bg-black py-2 px-7 rounded-full border-2 border-neutral-700 cursor-pointer hover:bg-neutral-900">Deixar de seguir</button>
                            </>
                        ):(
                            <>
                                <button onClick={handleFollowSubmit} className="bg-white py-2 px-7 rounded-full text-black border-2 border-neutral-700 cursor-pointer hover:bg-neutral-200">Seguir</button>
                            </>
                        )}
                    </div>
                    <div className="w-full py-1.5 sticky top-0 left-0 px-5">
                        <h2 className="text-xl flex items-center">{user.first_name} {user.last_name}  <AiFillLock  className="ml-2"/></h2>
                        <span className="text-xs text-neutral-500 items-center">@{user.username}</span>
                        <p className="mt-3.5">{user.bio}</p>
                        <p className="text-xs text-neutral-500 flex items-center mt-3"><span onClick={() => (setShowFolllowersFollowing(true),setShowFollowing(true),setShowFollowers(false))} className="text-white mr-1 cursor-pointer">{user.following_count} Seguindo</span>  <span onClick={() => (setShowFolllowersFollowing(true),setShowFollowers(true),setShowFollowing(false))} className="text-white mr-1 ml-4 cursor-pointer">{user.followers_count} Seguidores </span> </p>
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
                            {selfLikeds && selfLikeds.map((singleTweet, index) => (
                                <Tweet
                                    key={index}
                                    tweet={singleTweet}
                                    handleButtonMenu={handleButtonMenu}
                                    handleUser={handleUser}
                                />
                            ))}
                        </>
                    ): (
                        <>
                            {selfTweets && selfTweets.map((singleTweet, index) => (
                                <Tweet
                                    key={index}
                                    tweet={singleTweet}
                                    handleButtonMenu={handleButtonMenu}
                                    handleUser={handleUser}
                                />
                            ))}
                        </>
                    )}
                        </>
                    )
                }
            </div>
        </>
    )
  }
export default AnotherProfilePage
