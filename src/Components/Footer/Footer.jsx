import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import footer_logo from "../../assets/images/Digitri IT  white-min.png";
import { FaPaperPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-black text-white pt-20">
      <aside className="-mt-10">
        <img src={footer_logo} alt="" />
        <p className="ml-12 max-w-[300px] opacity-80">
          We are here to help you with numerous types of Digital Marketing
          Services.
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">Service</a>
        <a className="link link-hover">Blog</a>
        <a className="link link-hover">About</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav>
        <h6 className="footer-title">Projects</h6>
        <a className="link link-hover">Our Team</a>
        <a className="link link-hover">Facts</a>
        <a className="link link-hover">Customers</a>
      </nav>

      <nav>
        <h6 className="footer-title">Get in touch</h6>
        <div className="-ml-1">
          <form>
            <div className="bg-white flex items-stretch justify-between rounded-2xl overflow-hidden max-w-100%">
            <input type="email" placeholder="example@gmail.com" className="text-black p-4 py-2 w-[80%]"/>
            <button className="text-white bg-blue-600 p-4 h-full w-[20%]"><FaPaperPlane values="color: #000"/></button>
            </div>
          </form>
        </div>
        <h6 className="footer-title mt-4">Follow Us</h6>
        <div className="flex items-center gap-4 justify-center mt-5 text-blue-600">
                  <div className="bg-white p-2 rounded-full inline-block border hover:border-white hover:bg-transparent duration-300 cursor-pointer shadow-2xl shadow-red-600">
                    <FaFacebookF size={20} />
                  </div>
                  <div className="bg-white p-2 rounded-full inline-block border hover:border-white hover:bg-transparent duration-300 cursor-pointer">
                    <FaInstagram size={20} />
                  </div>
                  <div className="bg-white p-2 rounded-full inline-block border hover:border-white hover:bg-transparent duration-300 cursor-pointer">
                    <FaTwitter size={20} />
                  </div>
                  <div className="bg-white p-2 rounded-full inline-block border hover:border-white hover:bg-transparent duration-300 cursor-pointer">
                    <FaLinkedinIn size={20} />
                  </div>
                </div>
      </nav>
    </footer>
  );
};

export default Footer;
