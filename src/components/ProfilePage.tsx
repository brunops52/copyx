import { useEffect, useRef, useState } from "react";
import { AiFillLock } from "react-icons/ai";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GoPersonFill } from "react-icons/go";
import Tweet from "./Tweet";
import { IoClose } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import type {
  User,
  UserDetailResponse,
  Tweet as TweetType,
  UserResponse,
} from "../types/auth";
import api from "../services/api";
import ShowRelations from "./ShowRelations";

type ProfilePageProps = {
  handleButtonMenu: (menu: string) => void;
  handleUser: (user: User) => void;
};

const ProfilePage = ({ handleButtonMenu, handleUser }: ProfilePageProps) => {
  const [showlikedPosts, setShowlikedPosts] = useState(true);
  const [showPosts, setShowposts] = useState(false);
  const [showModalEditProfile, setShowModalEditProfile] = useState(false);
  const [showModalEditPass, setShowModalEditPass] = useState(false);
  const [bioText, setBioText] = useState("");
  const [firstNameText, setFirstNameText] = useState("");
  const [lastNameText, setLastNameText] = useState("");
  const [selfUser, setSelfUser] = useState<User>();
  const [selfTweets, setSelfTweets] = useState<TweetType[]>();
  const [selfLikeds, setSelfLikeds] = useState<TweetType[]>();
  const [showFolllowersFollowing, setShowFolllowersFollowing] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);
  const [showFollowers, setShowFollowers] = useState(true);
  const [following, setFollowing] = useState<User[]>();
  const [followers, setFollowers] = useState<User[]>();
  const fileInputCoverRef = useRef<HTMLInputElement | null>(null);
  const fileInputProfileRef = useRef<HTMLInputElement | null>(null);
  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [coverPic, setCoverPic] = useState<File | null>(null);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");

  const handleButtonCoverClick = () => {
    fileInputCoverRef.current?.click();
  };
  const handleButtonProfileClick = () => {
    fileInputProfileRef.current?.click();
  };

  const colectProfilePic = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProfilePic(file);
    }
  };
  const colectCoverPic = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setCoverPic(file);
    }
  };

  const handleFileChange = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !coverPic &&
      !profilePic &&
      !bioText &&
      !firstNameText &&
      !lastNameText
    ) {
      alert("Nenhuma alteração detectada!");
      return;
    }

    const formData = new FormData();
    coverPic && formData.append("cover_photo", coverPic);
    profilePic && formData.append("profile_picture", profilePic);
    bioText && formData.append("bio", bioText);
    firstNameText && formData.append("first_name", firstNameText);
    lastNameText && formData.append("last_name", lastNameText);

    try {
      await api.put("profile/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        const response = await api.get<UserDetailResponse>(
          `users/${parsedUser.id}/profile/`
        );

        setSelfUser(response.data);

        localStorage.setItem("user", JSON.stringify(response.data));
      }

      alert("Alteração realizada com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar:", error);
      alert("Erro ao atualizar");
    }
  };

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword != confirmPassword) {
      alert("As senha não coincidem");
      return;
    }

    const formData = new FormData();
    oldPassword && formData.append("old_password", oldPassword);
    newPassword && formData.append("new_password", newPassword);

    try {
      await api.put("change-password/", formData);

      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        const response = await api.get<UserDetailResponse>(
          `users/${parsedUser.id}/profile/`
        );

        setSelfUser(response.data);

        localStorage.setItem("user", JSON.stringify(response.data));
      }
      (setShowModalEditPass(false), alert("Alteração realizada com sucesso!"));
    } catch (error) {
      console.error("Erro ao atualizar senha:", error);
      alert("Erro ao atualizar a senha");
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const response = await api.get<UserDetailResponse>(
          `users/${JSON.parse(storedUser).id}/profile/`
        );
        setSelfUser(response.data);
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    if (!selfUser?.id) return;

    const fetchTweets = async () => {
      try {
        const response = await api.get<UserDetailResponse>(
          `users/${selfUser.id}/profile/`
        );
        setSelfTweets(response.data.tweets);
        setSelfLikeds(response.data.liked_tweets);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchFollowing = async () => {
      try {
        const response = await api.get<UserResponse>(
          `users/${selfUser.id}/following/`
        );
        setFollowing(response.data.results);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchFollowers = async () => {
      try {
        const response = await api.get<UserResponse>(
          `users/${selfUser.id}/followers/` // corrigido!
        );
        setFollowers(response.data.results);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTweets();
    fetchFollowing();
    fetchFollowers();
  }, [selfUser]);

  return (
    <>
      {showModalEditProfile && (
        <div className="fixed inset-0 z-50 overflow-y-auto h-screen flex items-center justify-center bg-gray-700/60 text-white font-bold">
          <form
            onSubmit={handleFileChange}
            className="bg-black w-full max-w-[467px] relative rounded-2xl"
          >
            <div className="flex items-center p-3.5">
              <IoClose
                onClick={() => setShowModalEditProfile(false)}
                className="cursor-pointer"
                size={24}
              />
              <h2 className="text-2xl ml-7">Editar perfil</h2>
              <button
                type="submit"
                className="py-1 px-4 text-black bg-white rounded-full ml-auto cursor-pointer"
              >
                Salvar
              </button>
            </div>
            <div className="flex flex-col text-white font-bold">
              <div className="w-full">
                <div className="relative">
                  {selfUser?.cover_photo ? (
                    <>
                      <img
                        src={`${selfUser.cover_photo}`}
                        alt="X Logo"
                        className="w-full h-32 bg-cover bg-center object-cover"
                      />
                    </>
                  ) : (
                    <>
                      <div className="w-full h-32 bg-neutral-700 flex items-center justify-center" />
                    </>
                  )}
                  <button
                    type="button"
                    onClick={handleButtonCoverClick}
                    className="absolute left-[45%] top-[45%] text-black border-2 border-black p-2 bg-neutral-600/30 rounded-full cursor-pointer"
                  >
                    <MdEdit />
                  </button>
                  <input
                    type="file"
                    ref={fileInputCoverRef}
                    className="hidden"
                    accept="image/*"
                    onChange={colectCoverPic}
                  />
                </div>
                <div className="flex items-center justify-between px-5 ">
                  <div className="relative">
                    {selfUser?.profile_picture ? (
                      <>
                        <img
                          src={`${selfUser.profile_picture}`}
                          className="w-20 h-20 bg-cover bg-center object-cover mt-[-72px] rounded-full border-4 border-black mb-1.5"
                        />
                      </>
                    ) : (
                      <>
                        <div className=" w-20 h-20 rounded-full mt-[-37px] bg-neutral-600 flex items-center justify-center border-4 border-black mb-1.5">
                          <GoPersonFill className=" w-16 h-16 mb-2" />
                        </div>
                      </>
                    )}
                    <button
                      type="button"
                      onClick={handleButtonProfileClick}
                      className="absolute top-[-45px] left-[30%] text-black border-2 border-black p-2 bg-neutral-600/30 rounded-full cursor-pointer"
                    >
                      <MdEdit />
                    </button>
                    <input
                      type="file"
                      ref={fileInputProfileRef}
                      className="hidden"
                      accept="image/*"
                      onChange={colectProfilePic}
                    />
                  </div>
                </div>
                <div className="w-full py-1.5 sticky top-0 left-0 px-5">
                  <div className=" mb-4 flex gap-4">
                    <div className="border-2 border-neutral-700 p-2">
                      <h4 className="text-xs text-neutral-500">
                        Primeiro nome
                      </h4>
                      <input
                        placeholder={selfUser?.first_name}
                        value={firstNameText}
                        onChange={(e) => setFirstNameText(e.target.value)}
                        className="w-full border-white resize-none overflow-hidden focus:outline-none"
                        type="text"
                      />
                    </div>
                    <div className="border-2 border-neutral-700 p-2">
                      <h4 className="text-xs text-neutral-500">Último nome</h4>
                      <input
                        placeholder={selfUser?.last_name}
                        value={lastNameText}
                        onChange={(e) => setLastNameText(e.target.value)}
                        className="w-full border-white resize-none overflow-hidden focus:outline-none"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="border-2 border-neutral-700 p-2">
                    <h4 className="text-xs text-neutral-500">Bio</h4>
                    <textarea
                      placeholder={selfUser?.bio ? selfUser?.bio : ""}
                      value={bioText}
                      onChange={(e) => setBioText(e.target.value)}
                      className="w-full border-white resize-none overflow-hidden focus:outline-none max-h-12 min-h-full"
                      onInput={(e) => {
                        const target = e.target as HTMLTextAreaElement;
                        target.style.height = "auto";
                        target.style.height = target.scrollHeight + "px";
                      }}
                    />
                  </div>
                  <div className="flex items-center justify-center w-full my-6">
                    <button
                      type="button"
                      onClick={() => {
                        (setShowModalEditPass(true),
                          setShowModalEditProfile(false));
                      }}
                      className="py-1 px-6 border-2 border-neutral-700 rounded-full cursor-pointer"
                    >
                      Alterar senha
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
      {showModalEditPass && (
        <form
          onSubmit={handlePasswordChange}
          className="fixed inset-0 z-50 overflow-y-auto h-screen flex items-center justify-center bg-gray-700/60 text-white"
        >
          <div className="p-4 bg-black w-full max-w-[252px] rounded-2xl">
            <div className="flex flex-col text-white font-bold px-6">
              <h3 className="text-2xl mb-8">Alterar senha</h3>
              <input
                placeholder="Senha Atual"
                className="mb-2.5 border-[0.1px] border-white rounded-sm p-2 w-full focus:outline-none focus:border-primary_blue focus:border-2 focus:placeholder:text-primary_blue"
                type="password"
                name="currentPassword"
                onChange={(e) => setOldPassword(e.target.value)}
              />
              <input
                placeholder="Nova senha"
                className="mb-2.5 border-[0.1px] border-white rounded-sm p-2 w-full focus:outline-none focus:border-primary_blue focus:border-2 focus:placeholder:text-primary_blue"
                type="password"
                name="newPassword"
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <input
                placeholder="Confirme a senha"
                className="border-[0.1px] border-white rounded-sm p-2 w-full focus:outline-none focus:border-primary_blue focus:border-2 focus:placeholder:text-primary_blue"
                type="password"
                name="confirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <div className="grid grid-cols-2 gap-4 mt-6">
                <button
                  type="submit"
                  className=" bg-white text-black py-1 w-full rounded-4xl hover:bg-neutral-300 cursor-pointer"
                >
                  Salvar
                </button>
                <button
                  type="button"
                  onClick={() => {
                    (setShowModalEditPass(false),
                      setOldPassword(""),
                      setNewPassword,
                      setConfirmPassword(""));
                  }}
                  className=" text-white bg-black py-1 w-full border-2 rounded-4xl hover:bg-neutral-800 cursor-pointer"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
      <div className="w-full h-full min-h-screen border-x-1 border-neutral-700 text-white font-bold relative">
        <div
          onClick={() => setShowFolllowersFollowing(false)}
          className="cursor-pointer w-full py-1.5 px-14 bg-black/70 border-b-1 border-neutral-700  sticky top-0 left-0"
        >
          <h2 className="text-xl flex items-center">
            {selfUser?.first_name} {selfUser?.last_name}{" "}
            <AiFillLock className="ml-2" />
          </h2>
          <span className="text-xs text-neutral-500">
            {selfTweets?.length} Posts
          </span>
        </div>
        {showFolllowersFollowing ? (
          <>
            <div className="grid grid-cols-2 w-full max-h-16 bg-black/70 text-neutral-500 font-bold place-items-center border-b-1 border-neutral-700  sticky top-0 left-0">
              <button
                onClick={() => (
                  setShowFollowers(true),
                  setShowFollowing(false)
                )}
                className="cursor-pointer w-full h-full hover:bg-neutral-900 transition-colors"
              >
                <span
                  className={`inline-block  ${showFollowers ? "border-b-4 border-primary_blue py-4 text-white" : ""}`}
                >
                  Seguidores
                </span>
              </button>
              <button
                onClick={() => (
                  setShowFollowing(true),
                  setShowFollowers(false)
                )}
                className="cursor-pointer w-full h-full hover:bg-neutral-900 transition-colors"
              >
                <span
                  className={`inline-block   ${showFollowing ? "border-b-4 border-primary_blue py-4 text-white" : ""}`}
                >
                  Seguindo
                </span>
              </button>
            </div>
            <div>
              {showFollowers ? (
                <>
                  {followers &&
                    followers.map((singleUser, index) => (
                      <ShowRelations user={singleUser} key={index} />
                    ))}
                </>
              ) : (
                <>
                  {following &&
                    following.map((singleUser, index) => (
                      <ShowRelations user={singleUser} key={index} />
                    ))}
                </>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="w-full">
              {selfUser?.cover_photo ? (
                <img
                  src={`${selfUser.cover_photo}`}
                  alt="X Logo"
                  className="w-full h-48 bg-cover bg-center object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-neutral-700 flex items-center justify-center" />
              )}
              <div className="flex items-center justify-between px-5">
                {selfUser?.profile_picture ? (
                  <img
                    src={`${selfUser.profile_picture}`}
                    alt="X Logo"
                    className="w-36 h-36 bg-cover bg-center object-cover mt-[-72px] rounded-full border-4 border-black mb-1.5"
                  />
                ) : (
                  <div className="w-36 h-36 rounded-full mt-[-72px] bg-neutral-600 flex items-center justify-center border-4 border-black mb-1.5">
                    <GoPersonFill className=" w-32 h-32 mb-4" />
                  </div>
                )}
                <button
                  onClick={() => {
                    setShowModalEditProfile(true);
                  }}
                  className="bg-black py-2 px-7 rounded-full border-2 border-neutral-700 cursor-pointer hover:bg-neutral-900"
                >
                  Editar perfil
                </button>
              </div>
              <div className="w-full py-1.5 sticky top-0 left-0 px-5">
                <h2 className="text-xl flex items-center">
                  {selfUser?.first_name} {selfUser?.last_name}{" "}
                  <AiFillLock className="ml-2" />
                </h2>
                <span className="text-xs text-neutral-500 items-center">
                  @{selfUser?.username}
                </span>
                <p className="mt-3.5 break-words">{selfUser?.bio}</p>
                <p className="text-xs text-neutral-500 flex items-center mt-3">
                  <span
                    onClick={() => (
                      setShowFolllowersFollowing(true),
                      setShowFollowing(true),
                      setShowFollowers(false)
                    )}
                    className="text-white mr-1 cursor-pointer"
                  >
                    {selfUser?.following_count} Seguindo
                  </span>{" "}
                  <span
                    onClick={() => (
                      setShowFolllowersFollowing(true),
                      setShowFollowers(true),
                      setShowFollowing(false)
                    )}
                    className="text-white mr-1 ml-4 cursor-pointer"
                  >
                    {selfUser?.followers_count} Seguidores{" "}
                  </span>{" "}
                </p>
              </div>
              <div className="grid grid-cols-2 w-full max-h-16 bg-black/70 text-neutral-500 font-bold place-items-center border-b-1 border-neutral-700  sticky top-0 left-0">
                <button
                  onClick={() => (setShowposts(true), setShowlikedPosts(false))}
                  className="cursor-pointer w-full h-full hover:bg-neutral-900 transition-colors"
                >
                  <span
                    className={`inline-block  ${showPosts ? "border-b-4 border-primary_blue py-4 text-white" : ""}`}
                  >
                    Posts
                  </span>
                </button>
                <button
                  onClick={() => (setShowlikedPosts(true), setShowposts(false))}
                  className="cursor-pointer w-full h-full hover:bg-neutral-900 transition-colors"
                >
                  <span
                    className={`inline-block   ${showlikedPosts ? "border-b-4 border-primary_blue py-4 text-white" : ""}`}
                  >
                    Curtidas
                  </span>
                </button>
              </div>
            </div>
            {showlikedPosts ? (
              <>
                {selfLikeds &&
                  selfLikeds.map((singleTweet, index) => (
                    <Tweet
                      key={index}
                      tweet={singleTweet}
                      handleButtonMenu={handleButtonMenu}
                      handleUser={handleUser}
                    />
                  ))}
              </>
            ) : (
              <>
                {selfTweets &&
                  selfTweets.map((singleTweet, index) => (
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
        )}
      </div>
    </>
  );
};

export default ProfilePage;
