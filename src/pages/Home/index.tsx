import { useState } from "react";

const Home = () => {
    const [showFollowing, setShowFollowing] = useState(true);
    const [showForYou, setShowForYou] = useState(false);

    return (
        <div className=' h-screen flex'>
            <h1 className='w-full max-w-[353px] bg-black'>Hello World 1</h1>
            <div className="flex 1 w-full bg-black border-x-1 border-neutral-700">
                <div className="grid grid-cols-2 w-full max-h-16 bg-black text-neutral-500 font-bold place-items-center border-b-1 border-neutral-700">
                    <button onClick={() => (setShowForYou(true), setShowFollowing(false))} className="cursor-pointer w-full h-full">
                        <span className={`inline-block   ${showForYou ? 'border-b-4 border-primary_blue py-4 text-white' : ''}`}>
                            Pare você
                        </span>
                    </button>
                    <button onClick={() => (setShowFollowing(true), setShowForYou(false))} className="cursor-pointer w-full h-full">
                        <span className={`inline-block   ${showFollowing ? 'border-b-4 border-primary_blue py-4 text-white' : ''}`}>
                            Seguindo
                        </span>
                    </button>
                </div>
            </div>
            <h1 className='w-full max-w-[416px] bg-black'>Hello World 3</h1>
        </div>
    )
  }

export default Home