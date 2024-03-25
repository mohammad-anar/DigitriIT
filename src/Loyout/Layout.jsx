import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const Layout = () => {
  return (
    <div className="bg-white">
      <Navbar></Navbar>
      <div>
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
