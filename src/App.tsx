import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from './pages/home';
import About from "./pages/about";
import User from "./pages/user";

function App() {
  return (
    <>
      <Routes>
         <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<User />} />
      </Routes> 
    </>
  )
}

export default App
