import Lottie from "lottie-react";
import contact_image from "../assets/contact-lottie.json";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
const Contact = () => {
  return (
    <div className="mb-40">
      <div>
        <div className="my-12 py-6 px-5 max-w-[600px] mx-auto text-center">
          <h1 className="text-5xl leading-[132%] md:text-6xl font-semibold mb-4">
            Stay Connected with Us
          </h1>
          <p className="text-sm md:text-md">
            Consectetur adipiscing elit sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Utenim minim veniam quis nostrud
            exercitation.
          </p>
        </div>
        <div>
          <div className="flex flex-col lg:flex-row items-center px-5">
            <div className="w-full lg:w-1/2">
              {/* social  */}
              <div>
                <div className="mb-10 text-center pb-5 border-b-2">
                  <h1 className="text-4xl mb-4">Leave Your Message</h1>
                  <p className="px-12">
                    Consectetur adipiscing elit sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
              <form className="max-w-[600px] mx-auto">
                <div className="mb-5">
                  <label
                    className="text-md font-medium ml-1 mb-2 text-black block"
                    htmlFor="#name"
                  >
                    Name
                  </label>
                  <input
                    className="text-sm bg-gray-100 rounded-full  border px-5 py-3 outline-none focus:border-gray-500 w-full"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-5">
                  <label
                    className="text-md font-medium mb-2 text-black block"
                    htmlFor="#email"
                  >
                    Email
                  </label>
                  <input
                    className="text-sm bg-gray-100 rounded-full  border px-5 py-3 outline-none focus:border-gray-500 w-full"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your Email"
                  />
                </div>
                <div>
                  <label
                    className="text-md font-medium mb-2 text-black block"
                    htmlFor="#message"
                  >
                    Message
                  </label>
                  <textarea
                    className="text-sm bg-gray-100 rounded-3xl resize-none border px-5 py-3 outline-none focus:border-gray-500 w-full"
                    name="message"
                    id="message"
                    rows="5"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
                <input
                  className="btn btn-md bg-blue-600 text-white mt-5"
                  type="submit"
                  value={"Submit"}
                />
              </form>
            </div>
            <div className="w-full lg:w-1/2">
              <Lottie animationData={contact_image} />
              <div className="flex flex-col md:flex-row items-center gap-5 pl-0 md:pl-40 md:-mt-40 relative z-10">
                <h3 className="text-2xl font-medium">Our Social Media: </h3>
                <div className="flex items-center gap-4 justify-center text-blue-600 mt-0 md:mt-10 my-10">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
