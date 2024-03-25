import logo from "../../assets/images/Digitri it-min.png";
import { FaArrowRight } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="max-h-[102px]">
      <div className="navbar bg-white border-b border-slate-200 mr-5">
        <div className="navbar-start max-w-[200px]">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <img className="" src={logo} alt="Logo" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <div>
            <img className="w-40" src={logo} alt="Logo" />
          </div>
        </div>
        <div className="navbar-end flex-1">
          <ul className="menu menu-horizontal text-[#2e2e2e] px-1 hidden lg:flex">
            <li className="text-lg font-medium">
              <a>Home</a>
            </li>
            <li className="text-lg font-medium">
              <a>Services</a>
            </li>
            <li className="text-lg font-medium">
              <a>Blog</a>
            </li>
            <li className="text-lg font-medium">
              <a>About</a>
            </li>
            <li className="text-lg font-medium">
              <a>Contact</a>
            </li>
          </ul>
          <div className="ml-20 relative flex items-center w-[224px]">
            <div className="p-4 bg-[#233DFF] absolute top-0 left-0 flex items-center justify-center text-white rounded-full -mr-[50px] -rotate-45 w-[50px] h-[50px]">
              <FaArrowRight />
            </div>
            <a className="btn rounded-full px-6 py-3 text-lg bg-[#233DFF] h-[50px] text-white border-none hover:ml-[49px] transition-all duration-300 hover:bg-[#233DFF] relative z-10 ">
              Contact Us 
              <IoLogoWhatsapp/>
            </a>
            <div className=" p-4 bg-[#233DFF] absolute top-0 right-0 flex items-center justify-center text-white rounded-full -rotate-45 w-[50px] h-[50px]">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
