import Tweet from './Tweet';

const TagPage = () => {
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
    ];

    return (
        <>
            <div className="w-full h-full min-h-screen border-x-1 border-neutral-700 text-white font-bold relative">
                <div className="w-full py-5 bg-black/70 text-center place-items-center border-b-1 border-neutral-700  sticky top-0 left-0">
                    <h2>Itens Salvos</h2>
                </div>
                
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
                    />
                ))}
            </div>
        </>
    )
  }

  export default TagPage