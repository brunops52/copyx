<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Login from "./pages/Login"
import Home from "./pages/Home"
import TweetList from './components/TweetList';
=======
import Home from "./pages/Home"
import Login from "./pages/Login"
>>>>>>> 0cb8c4cb8becea8843841d74e9d699104a8c0f5c



const App: React.FC = () => {

  return (
<<<<<<< HEAD
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tweets" element={<TweetList />} />
      </Routes>
    </Router>
=======
    <>
      <Login />
    </>
>>>>>>> 0cb8c4cb8becea8843841d74e9d699104a8c0f5c
  )
}

export default App
