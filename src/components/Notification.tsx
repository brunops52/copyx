type NotificationProps = {
img: string;
content: string;
time: string;
};
const Notification = ({ 
    img, 
    content,
    time
}: NotificationProps) => {


    return (
            
            <div className="flex w-full p-5 gap-4 bg-black/70 border-b-1 border-neutral-700 items-center">
                <img 
                    src={img}
                    alt="X Logo" 
                    className="w-12 h-12 rounded-full p-0.5"
                />
                <h2>{content}</h2>
                <span className='min-w-fit ml-auto'>{time}</span>
            </div>
    )
  }

  export default Notification