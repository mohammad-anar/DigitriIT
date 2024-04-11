import goal_image from "../assets/images/goals.jpg";
import mission_image from "../assets/images/mission.png";
import vision_image from "../assets/images/vision.png";
import target_image from "../assets/images/achievement.png";
import member1 from "../assets/images/Masum Ahmed.png";
const About = () => {
  return (
    <div>
      <section id="about_hero" className="mt-10">
        <div className="bg-blue-100 rounded-2xl h-[300px] ">
          <div></div>
          <div className="flex w-full items-center justify-center h-full">
            <h1 className="text-5xl md:text-6xl font-semibold capitalize text-center">
              About Us
            </h1>
          </div>
        </div>
      </section>
{/* goal section  */}
      <section id="about-us" className="my-20">
        <div>
          {/* top  */}
          <div className="flex flex-col items-center text-center max-w-[940px] mx-auto">
            <h1 className="text-4xl md:text-5xl font-medium mb-5 leading-snug">
              Elevate Your Online Presence with Our Expert SEO & Digital
              Strategies{" "}
            </h1>
            <p className="px-3  lg:px-10 mt-4">
              Consectetur adipiscing elit sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Utenim minim veniam quis nostrud
              exercitation.
            </p>
          </div>
          {/* goal section */}
          <div className="flex items-center flex-col px-5 gap-20 mt-10">
            {/* goal img  */}
            <div>
              <img
                className="h-[520px] object-cover rounded-2xl"
                src={goal_image}
                alt="img"
              />
            </div>
            {/* goals or missions  */}
            <div className="flex flex-col gap-5">
            {/* card1  */}
              <div className="flex items-center gap-5 border p-8 border-blue-300 rounded-xl bg-blue-100 cursor-pointer  hover:shadow-md duration-300">
                <img className="w-20" src={mission_image} alt="icon" />
                <div>
                  <h4 className="text-2xl font-semibold mb-2">Our Mission</h4>
                  <p>
                    Consectetur adipiscing elit sed do eiusmod tempor incididunt
                    ut labore dolore magna.
                  </p>
                </div>
              </div>
            {/* card2  */}
            <div className="flex items-center gap-5 border p-8 border-blue-300 rounded-xl cursor-pointer  hover:shadow-md duration-300">
                <img className="w-20" src={vision_image} alt="icon" />
                <div>
                  <h4 className="text-2xl font-semibold mb-2">Our Vision</h4>
                  <p>
                    Consectetur adipiscing elit sed do eiusmod tempor incididunt
                    ut labore dolore magna.
                  </p>
                </div>
              </div>
            {/* card3  */}
            <div className="flex items-center gap-5 border p-8 border-blue-300 rounded-xl cursor-pointer hover:shadow-md duration-300">
                <img className="w-20" src={target_image} alt="icon" />
                <div>
                  <h4 className="text-2xl font-semibold mb-2">Our Achievements</h4>
                  <p>
                    Consectetur adipiscing elit sed do eiusmod tempor incididunt
                    ut labore dolore magna.
                  </p>
                </div>
              </div>
            </div>
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

export default About;
