import { AiOutlineSearch } from "react-icons/ai"


const ExplorePage = () => {

    return (
        <div className=" w-full h-full min-h-screen border-x-1 border-neutral-700 relative text-white">
            <div className="px-6 py-2 pb-10 border-b-1 border-neutral-700">
                <div className="border-1 border-neutral-700 rounded-full p-3 flex items-center gap-3">
                    <AiOutlineSearch   className="w-7 h-7 text-neutral-500"/>
                    <input placeholder="Buscar" type="text" className="focus:outline-0"/>
                </div>
            </div>
        </div>
        
    )
  }

  export default ExplorePage