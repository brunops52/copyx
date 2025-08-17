
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Login from "./pages/Login"
import Home from "./pages/Home"
import TweetList from './components/TweetList';



const App: React.FC = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tweets" element={<TweetList />} />
      </Routes>
    </Router>
  )
}

export default App
