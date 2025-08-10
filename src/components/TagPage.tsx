import Tweet from './Tweet';

type TagPageProps = {
    handleButtonMenu: (menu: string) => void;
};

const TagPage = ({handleButtonMenu}:TagPageProps) => {
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
                        handleButtonMenu={handleButtonMenu}
                    />
                ))}
            </div>
        </>
    )
  }

  export default TagPage