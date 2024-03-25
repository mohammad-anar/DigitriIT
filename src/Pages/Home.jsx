import { FaArrowRight } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
  return (
    <div>

    {/* hero section */}
      <section id="hero">
        <div className={`h-[89vh] bg-hero-bg max-w-[800px]`}>
          <div className="bg-gradient-to-r from-white to-[rgba(0, 0, 0, 0)] h-full w-full flex items-center">
            <div>
              <h1 className="text-[80px] leading-[122%] font-bold max-w-[760px] font-[poppins]">
                Grow Your <span className="text-[#233DFF]">Digital </span>Presence with Our Experts
              </h1>
              <p className="text-lg my-8 max-w-[680px]">
                We offer tailored, end-to-end digital marketing solutions to
                help you reach your target audience. We have helped numerous
                clients around the world add true value to their audience. <span className="font-medium"> Our
                Motive is to Work Accurately, Efficiently, and Professionally.</span>
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
    </div>
  );
};

export default Home;
