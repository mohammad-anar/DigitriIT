import {
    FaArrowRight,
  FaArrowRightLong,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import facebook_ads_icon from "../assets/images/facebook_ads.png";
const Services = () => {
  return (
    <div>
      <section id="service_hero" className="mt-10">
        <div className="bg-blue-100 rounded-2xl h-[60vh] lg:h-[50vh] flex flex-col md:flex-row items-center p-5 md:p-20 gap-10 md:gap-20 xl:gap-40">
          <div>
            <div className="flex items-center md:flex-col gap-4 justify-center mt-2 text-blue-600">
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
          <div className="flex flex-col  gap-5">
            <h1 className="md:text-6xl font-semibold capitalize text-5xl">
              Our Creative Services For
            </h1>
            <h1 className="md:text-6xl font-semibold capitalize text-5xl">Brands grow</h1>
            {/* button */}
            <div className="relative flex items-center w-[232px] mt-5">
                <div className="p-4 bg-[#233DFF] absolute top-0 left-0 flex items-center justify-center text-white rounded-full -mr-[55px] -rotate-45 w-[55px] h-[55px]">
                  <FaArrowRight />
                </div>
                <a className="btn rounded-full px-6 py-3 text-lg bg-[#233DFF] h-[55px] text-white border-none hover:ml-[55px] transition-all duration-300 hover:bg-[#233DFF] relative z-10 capitalize">
                  Learn more
                  <FaArrowRightLong />
                </a>
                <div className=" p-4 bg-[#233DFF] absolute top-0 right-0 flex items-center justify-center text-white rounded-full -rotate-45 w-[55px] h-[55px]">
                  <FaArrowRight />
                </div>
              </div>
          </div>
        </div>
      </section>
      {/* service section */}
      <section id="service">
        <div className="min-h-[500px] rounded-3xl my-12 relative">
          {/* <button className="rounded-full bg-blue-200 text-center mx-auto block px-4 py-2 border border-gray-100 relative -top-5">
            Our services
          </button> */}

          {/* services main container */}
          <div className="p-5 md:p-12 text-center pt-5">
            <h1 className="text-4xl md:text-5xl font-medium mb-5">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
              {/* card1 */}
              <div
                id="service-card-container"
                className="max-w-[350px] p-6 pt-8 bg-blue-100 rounded-xl"
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
                className="max-w-[350px] p-6 pt-8 bg-blue-100 rounded-xl"
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
                className="max-w-[350px] p-6 pt-8 bg-blue-100 rounded-xl"
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
                className="max-w-[350px] p-6 pt-8 bg-blue-100 rounded-xl"
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
                className="max-w-[350px] p-6 pt-8 bg-blue-100 rounded-xl"
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
                className="max-w-[350px] p-6 pt-8 bg-blue-100 rounded-xl"
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
    </div>
  );
};

export default Services;
