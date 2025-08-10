import { useState } from "react"
import { AiFillLock } from "react-icons/ai"
import { FaRegCalendarAlt } from "react-icons/fa"
import { GoPersonFill } from "react-icons/go"
import Tweet from "./Tweet"
import { IoClose } from "react-icons/io5"
import { MdEdit } from "react-icons/md"

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
        },{
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
        },{
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

type ProfilePageProps = {
    handleButtonMenu: (menu: string) => void;
};

const ProfilePage = ({handleButtonMenu}:ProfilePageProps) => {
        const [showlikedPosts, setShowlikedPosts] = useState(true);
        const [showPosts, setShowposts] = useState(false);
        const [showModalEditProfile, setShowModalEditProfile] = useState(false);
        const [showModalEditPass, setShowModalEditPass] = useState(false);
        const [bioText, setBioText] = useState(profile.profileDescription);
        const [nameText, setNameText] = useState(profile.name);


    return (
        <>
            {
                showModalEditProfile && (
                    <div className='fixed inset-0 z-50 overflow-y-auto h-screen flex items-center justify-center bg-gray-700/60 text-white font-bold'>
                        <div className='bg-black w-full max-w-[467px] relative rounded-2xl'>
                            <div className='flex items-center p-3.5'>
                                <IoClose onClick={() => setShowModalEditProfile(false)} className='cursor-pointer' size={24}/>
                                <h2 className='text-2xl ml-7'>Editar perfil</h2>
                                <button className="py-1 px-4 text-black bg-white rounded-full ml-auto cursor-pointer">Salvar</button>
                            </div>
                            <div className='flex flex-col text-white font-bold'>
                                <div className="w-full">
                                    <div className="relative">
                                        {profile.coverProfile ? (
                                            <>
                                                <img 
                                                    src={profile.coverProfile}
                                                    alt="X Logo" 
                                                    className="w-full h-32 bg-cover bg-center object-cover" />
                                            </>
                                            ) : (
                                            <>
                                                <div className="w-full h-32 bg-neutral-700 flex items-center justify-center"/>
                                            </>
                                        )}
                                        <button className="absolute left-[45%] top-[45%] text-black border-2 border-black p-2 bg-neutral-600/30 rounded-full cursor-pointer">
                                            <MdEdit/> 
                                        </button>
                                    </div>
                                    <div className="flex items-center justify-between px-5 ">
                                        <div className="relative">
                                            {profile.profilePicture ? (
                                                <>
                                                    <img 
                                                        src={profile.profilePicture}
                                                        className="w-20 h-20 bg-cover bg-center object-cover mt-[-72px] rounded-full border-4 border-black mb-1.5" /> 
                                                        alt="X Logo" 
                                                </>
                                                    ) : (
                                                <>
                                                    <div className=" w-20 h-20 rounded-full mt-[-37px] bg-neutral-600 flex items-center justify-center border-4 border-black mb-1.5">
                                                        <GoPersonFill className=" w-16 h-16 mb-2"/>
                                                    </div>
                                                </>
                                            )}                                    
                                            <button className="absolute top-[-12px] left-[30%] text-black border-2 border-black p-2 bg-neutral-600/30 rounded-full cursor-pointer">
                                                <MdEdit/> 
                                            </button>
                                        </div>
                                    </div>
                                    <div className="w-full py-1.5 sticky top-0 left-0 px-5">
                                        <div className="border-2 border-neutral-700 p-2 mb-4">
                                            <h4 className="text-xs text-neutral-500">Nome</h4>
                                            <input value={nameText}
                                                onChange={(e) => setNameText(e.target.value)} 
                                            className="w-full border-white resize-none overflow-hidden focus:outline-none" type="text" />
                                        </div>
                                        <div className="border-2 border-neutral-700 p-2">
                                            <h4 className="text-xs text-neutral-500">Bio</h4>
                                            <textarea
                                                value={bioText}
                                                onChange={(e) => setBioText(e.target.value)}
                                                className="w-full border-white resize-none overflow-hidden focus:outline-none max-h-12 min-h-full"
                                                onInput={(e) => {
                                                    const target = e.target as HTMLTextAreaElement;
                                                    target.style.height = 'auto';
                                                    target.style.height = target.scrollHeight + 'px';
                                                }}
                                            />
                                        </div>
                                        <div className="flex items-center justify-center w-full my-6">
                                            <button onClick={() => {setShowModalEditPass(true)}} className="py-1 px-6 border-2 border-neutral-700 rounded-full cursor-pointer">Alterar senha</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            {
                showModalEditPass && (
                    <div className='fixed inset-0 z-50 overflow-y-auto h-screen flex items-center justify-center bg-gray-700/60 text-white'>
                        <div className='p-4 bg-black w-full max-w-[252px] rounded-2xl'>
                            <div className='flex flex-col text-white font-bold px-6'>
                                <h3 className='text-2xl mb-8'>Alterar senha</h3>
                                <input placeholder='Senha Atual'  className='mb-2.5 border-[0.1px] border-white rounded-sm p-2 w-full focus:outline-none focus:border-primary_blue focus:border-2 focus:placeholder:text-primary_blue' type="password" name="currentPassword" />
                                <input placeholder='Senha Atual'  className='mb-2.5 border-[0.1px] border-white rounded-sm p-2 w-full focus:outline-none focus:border-primary_blue focus:border-2 focus:placeholder:text-primary_blue' type="password" name="currentPassword" />
                                <input placeholder='Senha Atual'  className='border-[0.1px] border-white rounded-sm p-2 w-full focus:outline-none focus:border-primary_blue focus:border-2 focus:placeholder:text-primary_blue' type="password" name="currentPassword" />
                                <div className="grid grid-cols-2 gap-4 mt-6">
                                    <button onClick={() => {setShowModalEditPass(false)}} className=' bg-white text-black py-1 w-full rounded-4xl hover:bg-neutral-300 cursor-pointer'>Salvar</button>
                                    <button onClick={() => {setShowModalEditPass(false)}} className=' text-white bg-black py-1 w-full border-2 rounded-4xl hover:bg-neutral-800 cursor-pointer'>Cancelar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
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
                        <button onClick={() => {setShowModalEditProfile(true)}} className="bg-black py-2 px-7 rounded-full border-2 border-neutral-700 cursor-pointer hover:bg-neutral-900">Editar perfil</button>
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

  export default ProfilePage