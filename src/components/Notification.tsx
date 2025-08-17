import { GoPersonFill } from "react-icons/go";

type NotificationProps = {
img: string;
content: string;
time: string;
user: string;
};
const Notification = ({ 
    img, 
    content,
    time,
    user
}: NotificationProps) => {
        
console.log(img)
    return (
            
            <div className="flex w-full p-5 gap-4 bg-black/70 border-b-1 border-neutral-700 items-center">
                {Number(img) < 10 ? (
                    <div className="w12 h-12 p-0.5 rounded-full bg-neutral-600 flex items-center justify-center border-4 border-black mb-1.5">
                        <GoPersonFill className=" w-8 h-8"/>
                    </div>
                ) : (
                    <img 
                    src={img}
                    alt="X Logo" 
                    className="w-12 h-12 rounded-full p-0.5"
                />
                    
                )}
                
                <h2 className="text-white">
                    {content == 'follow' && (`${user} Acabou de seguir você.`)}
                    {content == 'like' && (`${user} Curtiu o seu tweet.`)}
                    {content == 'comment' && (`${user} Comentou no seu tweet.`)}
                    {content == 'mention' && (`${user} Mencionou você em um tweet.`)}     
                </h2>
                <span className='min-w-fit ml-auto'>{time}</span>
            </div>
    )
  }

  export default Notification