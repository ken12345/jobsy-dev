import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from './pages/home';
// import About from "./pages/about";
// import User from "./pages/user";
import Layout from "./components/layout";

function App() {

  const x = ;

  return (
    <>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/admin" element={<Layout />} >
          <Route path="/admin/home" element={<Home />}></Route>
        </Route>

      </Routes>
    </>
  )
}

export default App
