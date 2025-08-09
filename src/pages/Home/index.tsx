import LeftAside from "../../components/LeftAside";
import RightAside from "../../components/RightAside";
import TweetsPage from "../../components/TweetsPage";

const Home = () => {
    return (
        <div className=' h-full min-h-screen flex bg-black'>
            <LeftAside/>
            <TweetsPage/>
            <RightAside/>
        </div>
    )
  }

export default Home