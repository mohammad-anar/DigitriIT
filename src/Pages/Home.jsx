import { FaArrowRight } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import My_Image from "../assets/images/Masum Ahmed.png";
import member1 from "../assets/images/Masum Ahmed.png";
// import RoundedText from "../assets/circlttext.png";
import facebookAds from "../assets/icons/facebookads.png";
import conversionAPI from "../assets/icons/conversionapi.png";
import googleAds from "../assets/icons/googleads.png";
import youtubeSEO from "../assets/icons/youtubeseo.png";
import webdevelopemnt from "../assets/icons/webdevelopment.png";
import webSEO from "../assets/icons/webseo.png";
import Lottie from "lottie-react";
import heroAnim from "../assets/hero-lottie.json";
import member2 from "../assets/my-image1.png";

import "../Components/Home/animation.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

// import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

// primary color : #233DFF

const Home = () => {
  return (
    <div>
      {/* hero section */}
      <section id="hero" className="lg:mb-20 pt-[100px] lg:pt-0">
        <div className={`h-[100vh] `}>
          <div className=" lg:h-full w-full flex flex-col lg:flex-row items-center">
            <div className=" max-w-[800px] px-5 md:px-10 lg:px-16 w-[100%] xl:w-[60%] relative z-20">
              <h1 className="md:text-[72px] text-[36px] lg:mt-0 leading-[122%] font-bold max-w-[760px] font-[poppins]">
                Grow Your <span className="text-[#233DFF]">Digital </span>
                Presence with Our Experts
              </h1>
              <p className="text-sm sm:text-lg my-8 max-w-[680px]">
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
                <a className="btn rounded-full px-[38px] py-3 text-md bg-[#233DFF] h-[55px] text-white border-none hover:ml-[55px] transition-all duration-300 hover:bg-[#233DFF] relative z-10 ">
                  Get Started
                  <FaArrowRightLong />
                </a>
                <div className=" p-4 bg-[#233DFF] absolute top-0 right-0 flex items-center justify-center text-white rounded-full -rotate-45 w-[55px] h-[55px]">
                  <FaArrowRight />
                </div>
              </div>
            </div>
            <div className="w-[100%] md:min-w-[400px] xl:max-w-[40%] sm:w-[60%] md:w-[70%] mt-[100px]  xl:ml-0 h-full lg:-mt-[120px] xl:-mt-[350px] flex items-end justify-end lg:justify-center lg:items-center xl:items-end xl:justify-end">
              <Lottie animationData={heroAnim} loop={true} />
            </div>
          </div>
        </div>
      </section>

      {/* service section */}
      <section
        id="service"
        className="mt-[200px] sm:mt-[320px] md:mt-[600px] lg:mt-[10px]"
      >
        <div className="min-h-[500px] bg-blue-100 rounded-3xl mb-12 relative">
          <button className="rounded-full bg-blue-200 text-center mx-auto block px-4 py-2 border border-gray-100 relative -top-5">
            Our services
          </button>

          {/* services main container */}
          <div className="p-5 md:p-20 text-center pt-5 md:pt-5">
            <h1 className="text-3xl sm:text-5xl font-medium mb-5 leading-[150%]">
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
            <div className="sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 flex flex-wrap w-full justify-stretch items-stretch">
              {/* card1 */}
              <a href="/webdesign" className="h-full">
                <div
                  id="service-card-container"
                  className="max-w-[350px] p-6 pt-8 bg-white rounded-xl hover:shadow-lg hover:scale-105 duration-300"
                >
                  {/* icon and title  */}
                  <div className="flex items-center gap-3 justify-center mb-8">
                    <div className="w-12 h-12 object-cover p-2 rounded-full bg-gray-100 bg-opacity-50 border border-blue-300">
                      <img
                        className="w-full h-full object-cover"
                        src={facebookAds}
                        alt="ads"
                      />
                    </div>
                    <h3 className="text-xl font-medium">Facebook Ads</h3>
                  </div>
                  <p className="my-5 mt-2 text-justify">
                    Reach your target audience effectively through strategic
                    Facebook advertising campaigns tailored to your business
                    goals.
                  </p>
                  <button className="btn btn-primary rounded-full px-6 bg-[#233DFF] text-white w-full">
                    Book Now
                  </button>
                </div>
              </a>
              {/* card2 */}
              <a href="/webdesign" className="h-full">
                <div
                  id="service-card-container"
                  className="max-w-[350px] p-6 pt-8 bg-white rounded-xl hover:shadow-lg hover:scale-105 duration-300"
                >
                  {/* icon and title  */}
                  <div className="flex items-center gap-3 justify-center mb-8">
                    <div className="w-12 h-12 object-cover p-2 rounded-full bg-gray-100 bg-opacity-50 border border-blue-300">
                      <img
                        className="w-full h-full object-cover"
                        src={googleAds}
                        alt="ads"
                      />
                    </div>
                    <h3 className="text-xl font-medium">Google Ads</h3>
                  </div>
                  <p className="my-5 mt-2 text-justify">
                    Maximize your online presence and generate leads with
                    expertly crafted Google Ads campaigns.
                  </p>
                  <button className="btn btn-primary rounded-full px-6 bg-[#233DFF] text-white w-full">
                    Book Now
                  </button>
                </div>
              </a>
              {/* card3 */}
              <a href="/webdesign" className="h-full">
                <div
                  id="service-card-container"
                  className="max-w-[350px] p-6 pt-8 bg-white rounded-xl hover:shadow-lg hover:scale-105 duration-300"
                >
                  {/* icon and title  */}
                  <div className="flex items-center gap-3 justify-center mb-8">
                    <div className="w-12 h-12 object-cover p-2 rounded-full bg-gray-100 bg-opacity-50 border border-blue-300">
                      <img
                        className="w-full h-full object-cover"
                        src={conversionAPI}
                        alt="ads"
                      />
                    </div>
                    <h3 className="text-xl font-medium">Conversion API</h3>
                  </div>
                  <p className="my-5 mt-2 text-justify">
                    Optimize your marketing efforts with precise data, improving
                    conversion rates and maximizing ROI.
                  </p>
                  <button className="btn btn-primary rounded-full px-6 bg-[#233DFF] text-white w-full">
                    Book Now
                  </button>
                </div>
              </a>
              {/* card4 */}
              <a href="/webdesign" className="h-full">
                <div
                  id="service-card-container"
                  className="max-w-[350px] p-6 pt-8 bg-white rounded-xl hover:shadow-lg hover:scale-105 duration-300"
                >
                  {/* icon and title  */}
                  <div className="flex items-center gap-3 justify-center mb-8">
                    <div className="w-12 h-12 object-cover p-2 rounded-full bg-gray-100 bg-opacity-50 border border-blue-300">
                      <img
                        className="w-full h-full object-cover"
                        src={youtubeSEO}
                        alt="ads"
                      />
                    </div>
                    <h3 className="text-xl font-medium">Youtube SEO</h3>
                  </div>
                  <p className="my-5 mt-2 text-justify">
                    Enhance your YouTube presence and increase visibility with
                    proven SEO strategies tailored to your content.
                  </p>
                  <button className="btn btn-primary rounded-full px-6 bg-[#233DFF] text-white w-full">
                    Book Now
                  </button>
                </div>
              </a>
              {/* card5 */}
              <a href="/webdesign" className="h-full">
                <div
                  id="service-card-container"
                  className="max-w-[350px] p-6 pt-8 bg-white rounded-xl hover:shadow-lg hover:scale-105 duration-300"
                >
                  {/* icon and title  */}
                  <div className="flex items-center gap-3 justify-center mb-8">
                    <div className="w-12 h-12 object-cover p-2 rounded-full bg-gray-100 bg-opacity-50 border border-blue-300">
                      <img
                        className="w-full h-full object-cover"
                        src={webdevelopemnt}
                        alt="ads"
                      />
                    </div>
                    <h3 className="text-xl font-medium">Web Development</h3>
                  </div>
                  <p className="my-5 mt-2 text-justify">
                    Build a responsive, user-friendly website optimized for
                    conversions and enhanced user experience.
                  </p>
                  <button className="btn btn-primary rounded-full px-6 bg-[#233DFF] text-white w-full">
                    Book Now
                  </button>
                </div>
              </a>
              {/* card6 */}
              <a href="/webdesign" className="h-full">
                <div
                  id="service-card-container"
                  className="max-w-[350px] p-6 pt-8 bg-white rounded-xl hover:shadow-lg hover:scale-105 duration-300"
                >
                  {/* icon and title  */}
                  <div className="flex items-center gap-3 justify-center mb-8">
                    <div className="w-12 h-12 object-cover p-2 rounded-full bg-gray-100 bg-opacity-50 border border-blue-300">
                      <img
                        className="w-full h-full object-cover"
                        src={webSEO}
                        alt="ads"
                      />
                    </div>
                    <h3 className="text-xl font-medium">Web SEO</h3>
                  </div>
                  <p className="my-5 mt-2 text-justify">
                    Boost your website&apos;s visibility and attract organic
                    traffic through expert search engine optimization
                    techniques.
                  </p>
                  <button className="btn btn-primary rounded-full px-6 bg-[#233DFF] text-white w-full">
                    Book Now
                  </button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* portfolio section */}
      <section id="portfolio" className="my-20 mt-32">
        <div>
          {/* heading  */}
          <div className="max-w-[600px] text-center mx-auto mb-12 px-4">
            <h2 className="text-5xl font-semibold">Portfolio</h2>
            <p className="mt-5">
              Explore my portfolio showcasing diverse projects, demonstrating
              skills in design, development, and creativity across various
              domains.
            </p>
            <hr className="w-40% mx-auto my-5" />
          </div>
          {/* portfolio container  */}
          <div>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 1,
                depth: 100,
                modifier: 1,
                slideShadows: true,
                direction: "vertical",
                loop: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide className="flex items-center justify-center">
                <img
                  className="w-[70%] mx-auto max-h-[600px]"
                  src="https://149842030.v2.pressablecdn.com/wp-content/uploads/2020/10/my-portfolio-responsive-mockup.png"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-[70%] mx-auto max-h-[600px]"
                  src="https://teamonedigital.com/wp-content/uploads/2020/12/Screen-Shot-2020-12-19-at-4.48.07-PM-1024x524.png"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-[70%] mx-auto max-h-[600px]"
                  src="https://creativekigen.com/wp-content/uploads/2024/01/Qananu-Africa.png?lm=659BE564"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-[70%] mx-auto max-h-[600px]"
                  src="https://designshack.net/wp-content/uploads/how-to-customize-a-website-mockup-template.jpg"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      {/* my seciton */}
      <section
        id="mySection"
        className="bg-blue-100 overflow-hidden lg:mt-[100px] rounded-2xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-4 sm:p-8 sm:px-12  md:px-20 pb-0 pt-20">
          <div className="max-w-[800px] md:flex md:flex-col md:justify-center">
            <h4 className="text-3xl font-medium text-[#233DFF] mb-4">
              Hi! I&apos;m
            </h4>
            <h1 className="text-4xl sm:text-6xl font-bold mb-4 sm:mb-1">
              Masum Ahmed
            </h1>
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
            <h2 className="text-5xl md:text-6xl font-semibold mb-5">
              Our Team
            </h2>
            <p className="max-w-[400px] mx-auto sm:max-w-[600px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* member2 */}
            <div className=" mx-auto max-w-[95%] border flex items-center justify-center flex-col p-5 hover:shadow-xl duration-300">
              <img
                className="max-w-[200px] w-40 h-40 object-cover rounded-full border block mt-6"
                src={member2}
                alt="member2"
              />
              <div className="mt-5 text-center  flex flex-col h-full items-center justify-between">
                <h4 className="text-blue-600  text-2xl font-bold">
                  Anarul Islam
                </h4>
                <h5 className="text-md text-blue-600 font-medium mb-5 ">
                  Web Developer
                </h5>
                <p className="text-gray-500  opacity-85">
                  Hello..! I’m a Web Developer. I can create and website on MERN
                  Stack, Wordpress and webflow.
                </p>
                <div className="flex items-center gap-5 mt-10">
                  <div>
                    <FaFacebookF
                      size={20}
                      className="hover:text-blue-600 duration-300"
                    />
                  </div>
                  <div>
                    <FaInstagram
                      size={20}
                      className="hover:text-blue-600 duration-300"
                    />
                  </div>
                  <div>
                    <FaTwitter
                      size={20}
                      className="hover:text-blue-600 duration-300"
                    />
                  </div>
                  <div>
                    <FaLinkedinIn
                      size={20}
                      className="hover:text-blue-600 duration-300"
                    />
                  </div>
                </div>
                <div className="mt-10 hover:bg-blue-600 p-3 rounded-full duration-300 text-blue-600 hover:text-white cursor-pointer">
                  <FaLongArrowAltRight size={25} />
                </div>
              </div>
            </div>
            {/* member3 */}
            <div className=" mx-auto max-w-[95%] border flex items-center justify-center flex-col p-5 hover:shadow-xl duration-300">
              <img
                className="max-w-[200px] w-40 h-40 object-cover rounded-full border block mt-6"
                src={member1}
                alt="member1"
              />
              <div className="mt-5 text-center  flex flex-col h-full items-center justify-between">
                <h4 className="text-blue-600  text-2xl font-bold">AI Shuvo</h4>
                <h5 className="text-md text-blue-600 font-medium mb-5 ">
                  Web Seo Specialist and Digital marketer
                </h5>
                <p className="text-gray-500  opacity-85">
                  Hello..! I’m a Data-driven Digital Marketing Specialist &
                  Social Media Manager.
                </p>
                <div className="flex items-center gap-5 mt-10">
                  <div>
                    <FaFacebookF
                      size={20}
                      className="hover:text-blue-600 duration-300"
                    />
                  </div>
                  <div>
                    <FaInstagram
                      size={20}
                      className="hover:text-blue-600 duration-300"
                    />
                  </div>
                  <div>
                    <FaTwitter
                      size={20}
                      className="hover:text-blue-600 duration-300"
                    />
                  </div>
                  <div>
                    <FaLinkedinIn
                      size={20}
                      className="hover:text-blue-600 duration-300"
                    />
                  </div>
                </div>
                <div className="mt-10 hover:bg-blue-600 p-3 rounded-full duration-300 text-blue-600 hover:text-white cursor-pointer">
                  <FaLongArrowAltRight size={25} />
                </div>
              </div>
            </div>
            {/* member4 */}
            <div className=" mx-auto max-w-[95%] border flex items-center justify-center flex-col p-5 hover:shadow-xl duration-300">
              <img
                className="max-w-[200px] w-40 h-40 object-cover rounded-full border block mt-6"
                src={member1}
                alt="member1"
              />
              <div className="mt-5 text-center  flex flex-col h-full items-center justify-between">
                <h4 className="text-blue-600  text-2xl font-bold">
                  Mofidul Islam
                </h4>
                <h5 className="text-md text-blue-600 font-medium mb-5 ">
                  Youtube SEO Specialist
                </h5>
                <p className="text-gray-500  opacity-85">
                  Hello..! I’m a Data-driven Digital Marketing Specialist &
                  Social Media Manager.
                </p>
                <div className="flex items-center gap-5 mt-10">
                  <div>
                    <FaFacebookF
                      size={20}
                      className="hover:text-blue-600 duration-300"
                    />
                  </div>
                  <div>
                    <FaInstagram
                      size={20}
                      className="hover:text-blue-600 duration-300"
                    />
                  </div>
                  <div>
                    <FaTwitter
                      size={20}
                      className="hover:text-blue-600 duration-300"
                    />
                  </div>
                  <div>
                    <FaLinkedinIn
                      size={20}
                      className="hover:text-blue-600 duration-300"
                    />
                  </div>
                </div>
                <div className="mt-10 hover:bg-blue-600 p-3 rounded-full duration-300 text-blue-600 hover:text-white cursor-pointer">
                  <FaLongArrowAltRight size={25} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
