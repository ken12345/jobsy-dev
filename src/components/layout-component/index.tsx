import { Outlet } from "react-router";
import Header from "../header-component";
import './layout.css'
const Layout = () => {

  return(
    <>
    <Header></Header>
    <div className="layout">
      <Outlet />
    </div>
     
    </>
  )
}

export default Layout;