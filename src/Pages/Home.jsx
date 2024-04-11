import { FaArrowRight } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import facebook_ads_icon from "../assets/images/facebook_ads.png";
import portfolio1 from "../assets/images/portfolio.png";
import My_Image from "../assets/images/Masum Ahmed.png";
import member1 from "../assets/images/Masum Ahmed.png";
// import { FaFacebookF } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";
// import { FaLongArrowAltRight } from "react-icons/fa";

// primary color : #233DFF

const Home = () => {
  return (
    <div>
      {/* hero section */}
      <section id="hero" className="lg:mb-20 ">
        <div className={`h-[89vh] bg-hero-bg`}>
          <div className=" h-full w-full flex items-center">
            <div className=" max-w-[800px] px-5 sm:px-10 lg:px-16">
              <h1 className="md:text-[80px] text-[52px] lg:mt-0 leading-[122%] font-bold max-w-[760px] font-[poppins]">
                Grow Your <span className="text-[#233DFF]">Digital </span>
                Presence with Our Experts
              </h1>
              <p className="text-md sm:text-lg my-8 max-w-[680px]">
                We offer tailored, end-to-end digital marketing solutions to
                help you reach your target audience. We have helped numerous
                clients around the world add true value to their audience.
                <span className="font-medium">
                  
                  Our Motive is to Work Accurately, Efficiently, and
                  Professionally.
                </span>
              </p>

              {/* button */}
              <div className="relative flex items-center w-[232px]">
                <div className="p-4 bg-[#233DFF] absolute top-0 left-0 flex items-center justify-center text-white rounded-full -mr-[55px] -rotate-45 w-[55px] h-[55px]">
                  <FaArrowRight />
                </div>
                <a className="btn rounded-full px-6 py-3 text-lg bg-[#233DFF] h-[55px] text-white border-none hover:ml-[55px] transition-all duration-300 hover:bg-[#233DFF] relative z-10 ">
                  Get Started
                  <FaArrowRightLong />
                </a>
                <div className=" p-4 bg-[#233DFF] absolute top-0 right-0 flex items-center justify-center text-white rounded-full -rotate-45 w-[55px] h-[55px]">
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* service section */}
      <section id="service" className="mt-10 sm:mt-20">
        <div className="min-h-[500px] bg-blue-100 rounded-3xl my-12 relative">
          <button className="rounded-full bg-blue-200 text-center mx-auto block px-4 py-2 border border-gray-100 relative -top-5">
            Our services
          </button>

          {/* services main container */}
          <div className="p-5 md:p-20 text-center pt-5">
            <h1 className="text-3xl sm:text-5xl font-medium mb-5">
              We offer the best Digital Marketing services for your Business
            </h1>
            <p>
              Hey..! We are here to help you with numerous types of Digital
              Marketing Services like Search Engine Optimization, Facebook Ads,
              Google Ads, YouTube Marketing, Social Media Management, Web
              development, Graphic design, Content writing, etc. We have helped
              numerous clients around the world add true value to their
              audience. Our Motive is to Work Accurately, Efficiently, and
              Professionally.
            </p>
            {/* card section ==========*/}
            <div className="sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 flex flex-wrap w-full justify-center items-center">
              {/* card1 */}
              <div
                id="service-card-container"
                className="max-w-[350px] p-6 pt-8 bg-white rounded-xl"
              >
                {/* icon and title  */}
                <div className="flex items-center gap-3 justify-center">
                  <div className="w-12 h-12 object-cover p-2 rounded-full bg-gray-100 bg-opacity-50 border border-blue-300">
                    <img
                      className="w-full h-full object-cover"
                      src={facebook_ads_icon}
                      alt="ads"
                    />
                  </div>
                  <h3 className="text-xl font-medium">Facebook Ads</h3>
                </div>
                <p className="my-5 mt-2 text-justify">
                  Are you running Facebook and Instagram ads for your business?
                  But not getting potential traffic, link clicks, leads, or
                  conversions? Then you’ve come to the right place! We are here
                  to help you with the best Digital Marketing services.
                </p>
                <button className="btn btn-primary rounded-full px-6 bg-[#233DFF] text-white w-full">
                  Book Now
                </button>
              </div>
              {/* card2 */}
              <div
                id="service-card-container"
                className="max-w-[350px] p-6 pt-8 bg-white rounded-xl"
              >
                {/* icon and title  */}
                <div className="flex items-center gap-3 justify-center">
                  <div className="w-12 h-12 object-cover p-2 rounded-full bg-gray-100 bg-opacity-50 border border-blue-300">
                    <img
                      className="w-full h-full object-cover"
                      src={facebook_ads_icon}
                      alt="ads"
                    />
                  </div>
                  <h3 className="text-xl font-medium">Facebook Ads</h3>
                </div>
                <p className="my-5 mt-2 text-justify">
                  Are you running Facebook and Instagram ads for your business?
                  But not getting potential traffic, link clicks, leads, or
                  conversions? Then you’ve come to the right place! We are here
                  to help you with the best Digital Marketing services.
                </p>
                <button className="btn btn-primary rounded-full px-6 bg-[#233DFF] text-white w-full">
                  Book Now
                </button>
              </div>
              {/* card3 */}
              <div
                id="service-card-container"
                className="max-w-[350px] p-6 pt-8 bg-white rounded-xl"
              >
                {/* icon and title  */}
                <div className="flex items-center gap-3 justify-center">
                  <div className="w-12 h-12 object-cover p-2 rounded-full bg-gray-100 bg-opacity-50 border border-blue-300">
                    <img
                      className="w-full h-full object-cover"
                      src={facebook_ads_icon}
                      alt="ads"
                    />
                  </div>
                  <h3 className="text-xl font-medium">Facebook Ads</h3>
                </div>
                <p className="my-5 mt-2 text-justify">
                  Are you running Facebook and Instagram ads for your business?
                  But not getting potential traffic, link clicks, leads, or
                  conversions? Then you’ve come to the right place! We are here
                  to help you with the best Digital Marketing services.
                </p>
                <button className="btn btn-primary rounded-full px-6 bg-[#233DFF] text-white w-full">
                  Book Now
                </button>
              </div>
              {/* card4 */}
              <div
                id="service-card-container"
                className="max-w-[350px] p-6 pt-8 bg-white rounded-xl"
              >
                {/* icon and title  */}
                <div className="flex items-center gap-3 justify-center">
                  <div className="w-12 h-12 object-cover p-2 rounded-full bg-gray-100 bg-opacity-50 border border-blue-300">
                    <img
                      className="w-full h-full object-cover"
                      src={facebook_ads_icon}
                      alt="ads"
                    />
                  </div>
                  <h3 className="text-xl font-medium">Facebook Ads</h3>
                </div>
                <p className="my-5 mt-2 text-justify">
                  Are you running Facebook and Instagram ads for your business?
                  But not getting potential traffic, link clicks, leads, or
                  conversions? Then you’ve come to the right place! We are here
                  to help you with the best Digital Marketing services.
                </p>
                <button className="btn btn-primary rounded-full px-6 bg-[#233DFF] text-white w-full">
                  Book Now
                </button>
              </div>
              {/* card5 */}
              <div
                id="service-card-container"
                className="max-w-[350px] p-6 pt-8 bg-white rounded-xl"
              >
                {/* icon and title  */}
                <div className="flex items-center gap-3 justify-center">
                  <div className="w-12 h-12 object-cover p-2 rounded-full bg-gray-100 bg-opacity-50 border border-blue-300">
                    <img
                      className="w-full h-full object-cover"
                      src={facebook_ads_icon}
                      alt="ads"
                    />
                  </div>
                  <h3 className="text-xl font-medium">Facebook Ads</h3>
                </div>
                <p className="my-5 mt-2 text-justify">
                  Are you running Facebook and Instagram ads for your business?
                  But not getting potential traffic, link clicks, leads, or
                  conversions? Then you’ve come to the right place! We are here
                  to help you with the best Digital Marketing services.
                </p>
                <button className="btn btn-primary rounded-full px-6 bg-[#233DFF] text-white w-full">
                  Book Now
                </button>
              </div>
              {/* card6 */}
              <div
                id="service-card-container"
                className="max-w-[350px] p-6 pt-8 bg-white rounded-xl"
              >
                {/* icon and title  */}
                <div className="flex items-center gap-3 justify-center">
                  <div className="w-12 h-12 object-cover p-2 rounded-full bg-gray-100 bg-opacity-50 border border-blue-300">
                    <img
                      className="w-full h-full object-cover"
                      src={facebook_ads_icon}
                      alt="ads"
                    />
                  </div>
                  <h3 className="text-xl font-medium">Facebook Ads</h3>
                </div>
                <p className="my-5 mt-2 text-justify">
                  Are you running Facebook and Instagram ads for your business?
                  But not getting potential traffic, link clicks, leads, or
                  conversions? Then you’ve come to the right place! We are here
                  to help you with the best Digital Marketing services.
                </p>
                <button className="btn btn-primary rounded-full px-6 bg-[#233DFF] text-white w-full">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* portfolio section */}
      <section id="portfolio" className="my-20 mt-32">
        <div>
          {/* heading  */}
          <div className="max-w-[600px] text-center mx-auto mb-8 px-4">
            <h2 className="text-5xl font-semibold">Portfolio</h2>
            <p className="mt-5">
              Explore my portfolio showcasing diverse projects, demonstrating
              skills in design, development, and creativity across various
              domains.
            </p>
            <hr className="w-40% mx-auto my-5" />
          </div>
          {/* portfolio container  */}
          <div className="flex md:grid items-center justify-center flex-wrap md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 pr-10  ml-5">
            {/* portfolio1  */}
            <div>
              <a
                href="#"
                className="max-h-[600px] w-full flex items-center justify-center overflow-hidden rounded-3xl shadow-2xl hover:shadow-xl duration-300 sm:inline-block"
              >
                <img
                  className="max-w-[320px] sm:max-w-[600px] md:max-w-[400px]"
                  src={portfolio1}
                  alt="portfolio image"
                />
              </a>
            </div>
            {/* portfolio1  */}
            <div>
              <a
                href="#"
                className="max-h-[600px] w-full flex items-center justify-center overflow-hidden rounded-3xl shadow-2xl hover:shadow-xl duration-300 sm:inline-block"
              >
                <img
                  className="max-w-[320px] sm:max-w-[600px] md:max-w-[400px]"
                  src={portfolio1}
                  alt="portfolio image"
                />
              </a>
            </div>
            {/* portfolio1  */}
            <div>
              <a
                href="#"
                className="max-h-[600px] w-full flex items-center justify-center overflow-hidden rounded-3xl shadow-2xl hover:shadow-xl duration-300 sm:inline-block"
              >
                <img
                  className="max-w-[320px] sm:max-w-[600px] md:max-w-[400px]"
                  src={portfolio1}
                  alt="portfolio image"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* my seciton */}
      <section id="mySection" className="bg-blue-100 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-4 sm:p-8 sm:px-12  md:px-20 pb-0 pt-20">
          <div className="max-w-[800px]">
            <h4 className="text-3xl font-medium text-[#233DFF] mb-4">
              Hi! I&apos;m
            </h4>
            <h1 className="text-4xl sm:text-6xl font-bold mb-4 sm:mb-1">Masum Ahmed</h1>
            <h4>[Founder & CEO] of DigitriIT</h4>

            <p className="mt-5">
              Hello..! I’m a
              <span className="font-semibold">
                Data-driven Digital Marketing Specialist & Social Media Manager
              </span>
              . Also I’m a content creator.I have helped numerous clients around
              the world add true value to their audience.
              <span className="font-semibold">
                My Motive is to Work Accurately, Efficiently and Professionally.
              </span>
            </p>
          </div>
          <div className="max-w-[800px] mx-auto mt-5 md:mt-20 lg:mt-0 overflow-hidden sm:-mb-10  flex items-center lg:items-start justifycenter lg:justify-end">
            <img
              className="sm:-mt-36 lg:max-w-[420px] w-full sm:max-w-[450px] -mt-20 max-w-[320px]"
              src={My_Image}
              alt="my-image"
            />
          </div>
        </div>
      </section>

      {/* Team section */}
      <section id="team" className="my-40">
        <div>
          {/* heading */}
          <div className="max-w-[600px] mx-auto text-center mb-20 px-4 sm:px-0">
            <h2 className="text-5xl md:text-6xl font-semibold mb-5">Our Team</h2>
            <p className="max-w-[400px] mx-auto sm:max-w-[600px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="flex items-center justify-center flex-wrap sm:grid sm:grid-cols-2 md:grid-cols-2 lg:ml-0  p-5 md:p-10 lg:grid-cols-3 xl:grid-cols-4 gap-20 md:gap-5">
            {/* member1 */}
             <div className="bg-blue-500 max-w-[400px] flex items-center justify-center flex-col p-10  rounded-t-full">
              <img
                className="max-w-[200px] w-40 h-40 object-cover rounded-full border block mt-6"
                src={member1}
                alt="member1"
              />
              <div className="mt-5 text-center  flex flex-col h-full items-center justify-between">
                <h4 className="text-white text-2xl font-bold">Masum Ahmed</h4>
                <h5 className="text-md text-white font-medium mb-5 ">
                  Digital Marketer
                </h5>
                <p className="text-white opacity-85">
                Hello..! I’m a Data-driven Digital Marketing Specialist & Social Media Manager.
                </p>
              </div>
            </div>
            {/* member1 */}
             <div className="bg-blue-500 max-w-[400px] flex items-center justify-center flex-col p-10  rounded-t-full">
              <img
                className="max-w-[200px] w-40 h-40 object-cover rounded-full border block mt-6"
                src={member1}
                alt="member1"
              />
              <div className="mt-5 text-center  flex flex-col h-full items-center justify-between">
                <h4 className="text-white text-2xl font-bold">Masum Ahmed</h4>
                <h5 className="text-md text-white font-medium mb-5 ">
                  Digital Marketer
                </h5>
                <p className="text-white opacity-85">
                Hello..! I’m a Data-driven Digital Marketing Specialist & Social Media Manager.
                </p>
              </div>
            </div>
            {/* member1 */}
             <div className="bg-blue-500 max-w-[400px] flex items-center justify-center flex-col p-10  rounded-t-full">
              <img
                className="max-w-[200px] w-40 h-40 object-cover rounded-full border block mt-6"
                src={member1}
                alt="member1"
              />
              <div className="mt-5 text-center  flex flex-col h-full items-center justify-between">
                <h4 className="text-white text-2xl font-bold">Masum Ahmed</h4>
                <h5 className="text-md text-white font-medium mb-5 ">
                  Digital Marketer
                </h5>
                <p className="text-white opacity-85">
                Hello..! I’m a Data-driven Digital Marketing Specialist & Social Media Manager.
                </p>
              </div>
            </div>
            {/* member1 */}
             <div className="bg-blue-500 max-w-[400px] flex items-center justify-center flex-col p-10  rounded-t-full">
              <img
                className="max-w-[200px] w-40 h-40 object-cover rounded-full border block mt-6"
                src={member1}
                alt="member1"
              />
              <div className="mt-5 text-center  flex flex-col h-full items-center justify-between">
                <h4 className="text-white text-2xl font-bold">Masum Ahmed</h4>
                <h5 className="text-md text-white font-medium mb-5 ">
                  Digital Marketer
                </h5>
                <p className="text-white opacity-85">
                Hello..! I’m a Data-driven Digital Marketing Specialist & Social Media Manager.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
