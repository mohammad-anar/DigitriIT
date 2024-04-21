import logo from "../../assets/images/Digitri it-min.png";
import { FaArrowRight } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="max-h-[60px]">
      <div className="navbar bg-white border-b border-slate-200 mr-5 lg:px-5 max-h-[80px]">
        <div className="navbar-start max-w-[200px]">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden mr-2"
            >
              <RiMenu2Line size={36} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-vertical gap-5 min-h-screen z-50 dropdown-content mt-5 relative shadow bg-base-100 rounded-box w-72 p-10 -ml-2"
            >
              <div>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-blue-500 text-sm font-medium"
                      : "text-[#2e2e2e] text-sm font-medium hover:text-blue-600 duration-300"
                  }
                >
                  Home
                </NavLink>
              </div>
              <div>
                <div className="dropdown dropdown-right">
                  <div tabIndex={0} role="button" >
                    <NavLink
                      to="/services"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "text-blue-500 text-sm font-medium"
                          : "text-[#2e2e2e] text-sm font-medium hover:text-blue-600 duration-300"
                      }
                    >
                      Services
                    </NavLink>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu mt-1 delay-200 duration-300 p-10 gap-5 bg-base-100 rounded-box w-72 border-b-4 border-blue-600 shadow-xl
                    "
                  >
                    <NavLink
                      to="/facebookads"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "text-blue-500 text-sm font-medium"
                          : "text-[#2e2e2e] text-sm font-medium hover:text-blue-600 duration-200 border-b-2 hover:border-b-2 border-transparent hover:border-blue-600"
                      }
                    >
                      Facebook Ads
                    </NavLink>
                    <NavLink
                      to="/webseo"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "text-blue-500 text-sm font-medium"
                          : "text-[#2e2e2e] text-sm font-medium hover:text-blue-600 duration-200 border-b-2 hover:border-b-2 border-transparent hover:border-blue-600"
                      }
                    >
                      Website SEO
                    </NavLink>
                    <NavLink
                      to="/youtubemarketing"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "text-blue-500 text-sm font-medium"
                          : "text-[#2e2e2e] text-sm font-medium hover:text-blue-600 duration-200 border-b-2 hover:border-b-2 border-transparent hover:border-blue-600"
                      }
                    >
                      YouTube Marketing
                    </NavLink>
                    <NavLink
                      to="/seoservices"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "text-blue-500 text-sm font-medium"
                          : "text-[#2e2e2e] text-sm font-medium hover:text-blue-600 duration-200 border-b-2 hover:border-b-2 border-transparent hover:border-blue-600"
                      }
                    >
                      SEO Services
                    </NavLink>
                    <NavLink
                      to="/seoservices"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "text-blue-500 text-sm font-medium"
                          : "text-[#2e2e2e] text-sm font-medium hover:text-blue-600 duration-200 border-b-2 hover:border-b-2 border-transparent hover:border-blue-600"
                      }
                    >
                      SEO Services
                    </NavLink>
                    <NavLink
                      to="/seoservices"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "text-blue-500 text-sm font-medium"
                          : "text-[#2e2e2e] text-sm font-medium hover:text-blue-600 duration-200 border-b-2 hover:border-b-2 border-transparent hover:border-blue-600"
                      }
                    >
                      SEO Services
                    </NavLink>
                  </ul>
                </div>
              </div>
              <div>
                <NavLink
                  to="/blog"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-blue-500 text-sm font-medium"
                      : "text-[#2e2e2e] text-sm font-medium hover:text-blue-600 duration-300"
                  }
                >
                  Blog
                </NavLink>
              </div>
              <div className="hover:border-b-2 text-blue-600 border-b-2 border-transparent duration-300 hover:border-blue-600">
                <NavLink
                  to="/about"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-blue-500 text-sm font-medium"
                      : "text-[#2e2e2e] text-sm font-medium hover:text-blue-600 duration-300"
                  }
                >
                  About
                </NavLink>
              </div>
              <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-blue-500 text-sm font-medium"
                    : "text-[#2e2e2e] text-sm font-medium hover:text-blue-600 duration-300"
                }
              >
                Contact
              </NavLink>
            </ul>
          </div>
          <div className="hidden lg:block">
            <img className="w-[180px] -ml-6" src={logo} alt="Logo" />
          </div>
        </div>

        <div className="navbar-end flex-1">
          <div className="navbar-center lg:hidden hidden sm:block absolute -top-5 left-1/2 -translate-x-1/2">
            <img className="w-[180px] -ml-6" src={logo} alt="Logo" />
          </div>
          <ul className="menu menu-horizontal text-[#2e2e2e] px-1 hidden lg:flex gap-5">
            <div>
              <div className="hover:border-b-2 text-blue-600 border-b-2 border-transparent duration-300 hover:border-blue-600">
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-blue-500 text-sm font-medium border-b-2 border-blue-600 pb-px"
                      : "text-[#2e2e2e] text-sm font-medium"
                  }
                >
                  Home
                </NavLink>
              </div>
            </div>
            <div className="hover:border-b-2 text-blue-600 border-b-2 border-transparent duration-300 hover:border-blue-600">
              <NavLink
                to="/services"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                     ? "text-blue-500 text-sm font-medium border-b-2 border-blue-600 pb-px"
                      : "text-[#2e2e2e] text-sm font-medium"
                }
              >
                <div className="dropdown dropdown-hover">
                  <div tabIndex={0} role="button" className="text-[#2e2e2e]">
                    Services
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu mt-1 delay-200 duration-300 p-10 gap-5 bg-base-100 rounded-box w-72 border-b-4 border-blue-600 shadow-xl
                    "
                  >
                    <NavLink
                      to="/facebookads"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "text-blue-500 text-lg font-medium"
                          : "text-[#2e2e2e] text-lg font-medium hover:text-blue-600 duration-200 border-b-2 hover:border-b-2 border-transparent hover:border-blue-600"
                      }
                    >
                      Facebook Ads
                    </NavLink>
                    <NavLink
                      to="/webseo"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "text-blue-500 text-lg font-medium"
                          : "text-[#2e2e2e] text-lg font-medium hover:text-blue-600 duration-200 border-b-2 hover:border-b-2 border-transparent hover:border-blue-600"
                      }
                    >
                      Website SEO
                    </NavLink>
                    <NavLink
                      to="/youtubemarketing"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "text-blue-500 text-lg font-medium"
                          : "text-[#2e2e2e] text-lg font-medium hover:text-blue-600 duration-200 border-b-2 hover:border-b-2 border-transparent hover:border-blue-600"
                      }
                    >
                      YouTube Marketing
                    </NavLink>
                    <NavLink
                      to="/seoservices"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "text-blue-500 text-lg font-medium"
                          : "text-[#2e2e2e] text-lg font-medium hover:text-blue-600 duration-200 border-b-2 hover:border-b-2 border-transparent hover:border-blue-600"
                      }
                    >
                      SEO Services
                    </NavLink>
                    <NavLink
                      to="/seoservices"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "text-blue-500 text-lg font-medium"
                          : "text-[#2e2e2e] text-lg font-medium hover:text-blue-600 duration-200 border-b-2 hover:border-b-2 border-transparent hover:border-blue-600"
                      }
                    >
                      SEO Services
                    </NavLink>
                    <NavLink
                      to="/seoservices"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "text-blue-500 text-lg font-medium"
                          : "text-[#2e2e2e] text-lg font-medium hover:text-blue-600 duration-200 border-b-2 hover:border-b-2 border-transparent hover:border-blue-600"
                      }
                    >
                      SEO Services
                    </NavLink>
                  </ul>
                </div>
              </NavLink>
            </div>
            <div className="hover:border-b-2 text-blue-600 border-b-2 border-transparent duration-300 hover:border-blue-600">
              <NavLink
                to="/blog"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                     ? "text-blue-500 text-sm font-medium border-b-2 border-blue-600 pb-px"
                      : "text-[#2e2e2e] text-sm font-medium"
                }
              >
                Blog
              </NavLink>
            </div>
            <div className="hover:border-b-2 text-blue-600 border-b-2 border-transparent duration-300 hover:border-blue-600">
              <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                     ? "text-blue-500 text-sm font-medium border-b-2 border-blue-600 pb-px"
                      : "text-[#2e2e2e] text-sm font-medium"
                }
              >
                About
              </NavLink>
            </div>
            <div className="hover:border-b-2 text-blue-600 border-b-2 border-transparent duration-300 hover:border-blue-600">
              <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                     ? "text-blue-500 text-sm font-medium border-b-2 border-blue-600 pb-px"
                      : "text-[#2e2e2e] text-sm font-medium"
                }
              >
                Contact
              </NavLink>
            </div>
          </ul>
          <div className="-ml-5 sm:ml-20 relative flex items-center min-w-[178px] w-[200px]">
            <div className="p-3 bg-[#233DFF] absolute top-0 left-0 flex items-center justify-center text-white rounded-full -mr-[40px] -rotate-45 w-[40px] h-[40px]">
              <FaArrowRight />
            </div>
            <div className=" btn btn-sm w-full max-w-[160px] items-center text-sm flex-nowrap rounded-full px-6 py-3 bg-[#233DFF] h-[40px] text-white border-none sm:hover:ml-[39px] transition-all duration-300 hover:bg-[#233DFF] relative z-10 ">
              <a className="text-sm">Contact Us</a>
              <div>
                <IoLogoWhatsapp />
              </div>
            </div>
            <div className=" p-3 bg-[#233DFF] absolute top-0 right-0 flex items-center justify-center text-white rounded-full -rotate-45 w-[40px] h-[40px]">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
