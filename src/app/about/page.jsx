import Head from "next/head";
import dynamic from "next/dynamic";

const PlayerAnimation = dynamic(() => import("@/components/player"), {
  ssr: false,
});

const page = () => {
  const Activities = [
    {
      id: 1,
      details: "DSA guidance including regular bootcamps.",
    },
    {
      id: 2,
      details: "Sessions about must-knows for an engineer.",
    },
    {
      id: 3,
      details: "Collaboration with other colleges which are a part of CPBYTE community.",
    },
    {
      id: 4,
      details: "Classes twice a week (one day for competitive programming and one day for discussions and guidance).",
    },
    {
      id: 5,
      details: "Extended sessions for various tech domains.",
    },
  ];

  return (
    <>
      <title>About CPBYTE | Technical Club Of KIET</title>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-white">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                About <br className="hidden md:block" />
                <span className="gradient-text">CPBYTE</span>
              </h2>
              <p className="text-base text-gray-300 md:text-lg font-light leading-relaxed">
                CPBYTE is the official coding and development community under
                the Computer Science Department of KIET Group of Institutions.
                Evolving from its previous identity as NSCC, CPBYTE is now a
                dynamic platform dedicated to empowering students in the tech
                domain through real-world exposure and hands-on learning. <br /><br />
                In collaboration with GeeksforGeeks (GFG), CPBYTE offers a range
                of opportunities including DSA bootcamps, development workshops,
                speaker sessions, and inter-college events. The community aims
                to bridge the gap between classroom learning and industry
                demands, fostering innovation, collaboration, and technical
                excellence among students.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <img
                className="object-contain mb-6 rounded-2xl shadow-lg border border-white/10 h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56 transform hover:scale-105 transition-all duration-300"
                src="/about/talkshow_1.jpeg"
                alt=""
              />
              <img
                className="object-contain w-20 h-20 rounded-2xl shadow-lg border border-white/10 sm:h-32 xl:h-40 sm:w-32 xl:w-40 transform hover:scale-105 transition-all duration-300"
                src="/about/talkshow_2.jpeg"
                alt=""
              />
            </div>
            <div className="px-3">
              <img
                className="object-contain w-40 h-40 rounded-2xl shadow-lg border border-white/10 sm:h-64 xl:h-64 sm:w-64 xl:w-80 transform hover:scale-105 transition-all duration-300"
                src="/about/talkshow_3.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 text-white">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
            Activities by <span className="gradient-text">CPBYTE</span>
          </h2>
        </div>
        <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
          {Activities.map((item) => (
            <div
              key={item.id}
              className="glass-card p-6 duration-300 transform border border-white/10 rounded-xl hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer"
            >
              <h6 className="mb-2 font-medium leading-relaxed text-gray-200">{item.details}</h6>
            </div>
          ))}
        </div>
      </div>

      <div className="py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-4 text-white">
        <div className="flex flex-col max-w-screen-xl overflow-hidden glass-card border border-white/10 rounded-2xl lg:flex-row-reverse sm:mx-auto bg-transparent">
          <div className="relative lg:w-1/2 flex items-center justify-center p-4">
            <PlayerAnimation link="https://lottie.host/710c4fdc-c585-4e44-989b-90177c87eb89/r7IaXOc2SK.json" />
          </div>
          <div className="flex flex-col justify-center ml-2 py-8 lg:p-20 mx-auto lg:w-1/2">
            <h5 className="mb-4 text-3xl font-extrabold leading-none sm:text-4xl gradient-text" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              OBJECTIVE
            </h5>
            <p className="mb-5 text-gray-300 leading-relaxed tracking-wide font-light">
              The club aims to train engineers from all branches to work on
              different aspects of their technical as well as soft skills to
              develop a wider skill set. We further aim to encourage students to
              work towards project-based learning while developing their
              consistency in programming to make them industry ready.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-4 py-8 text-white">
        <div className="flex flex-col max-w-screen-xl overflow-hidden glass-card border border-white/10 rounded-2xl lg:flex-row sm:mx-auto bg-transparent">
          <div className="relative lg:w-1/2 flex items-center justify-center p-4">
            <PlayerAnimation link="https://lottie.host/d5bc1370-8ab0-4ef5-bf3a-959ecc822c26/m6AZI6yeP2.json" />
          </div>
          <div className="flex flex-col justify-center py-8 lg:p-20 lg:w-1/2">
            <p className="mb-5 text-gray-300 text-xl ml-2 leading-relaxed font-light tracking-wide">
              Working on establishing a system of{" "}
              <span className="font-semibold text-blue-400">technical</span> as well as
              <span className="font-semibold text-blue-400"> competitive</span> practices in the
              college to set up a healthy coding environment for the students.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
