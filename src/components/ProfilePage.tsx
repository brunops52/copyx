import { AiFillLock } from "react-icons/ai"
import { FaRegCalendarAlt } from "react-icons/fa"
import { GoPersonFill } from "react-icons/go"

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

const ProfilePage = () => {

    return (
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
                                <GoPersonFill className=" w-32 h-32"/>
                            </div>
                            
                        )}
                        <button className="bg-black py-2 px-7 rounded-full border-2 border-neutral-700 cursor-pointer hover:bg-neutral-900">Editar perfil</button>
                    </div>
                    <div className="w-full py-1.5 sticky top-0 left-0 px-5">
                        <h2 className="text-xl flex items-center">{profile.name}  <AiFillLock  className="ml-2"/></h2>
                        <span className="text-xs text-neutral-500 items-center">@{profile.profileAccount}</span>
                        <p className="mt-3.5">{profile.profileDescription}</p>
                        <p className="text-xs text-neutral-500 flex items-center mt-3"><FaRegCalendarAlt className="mr-2"/> Ingressou em {profile.month} de {profile.year} </p>
                        <p className="text-xs text-neutral-500 flex items-center mt-3"><span className="text-white mr-1">{profile.following} </span> Seguindo <span className="text-white mr-1 ml-4">{profile.followers} </span> Seguidores </p>
                    </div>
                </div>
            </div>
    )
  }

  export default ProfilePage