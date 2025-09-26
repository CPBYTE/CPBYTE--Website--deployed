"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import Particles from "@/components/Particles";

const PlayerAnimation = dynamic(() => import("@/components/player"), { ssr: false });

const Hero = () => {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup 500ms after page loads
    const timer = setTimeout(() => setShowPopup(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="container max-w-screen-2xl px-6 py-10 mx-auto relative">
      {/* Popup Card */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/90 p-4">
          {/* Card with internal particle / sparkle effects */}
          <div className="relative w-full max-w-4xl md:max-w-6xl rounded-3xl shadow-2xl border border-gray-700 overflow-hidden flex flex-col md:flex-row bg-black/80 animate-fadeIn">
            
            {/* Left Section with Particles */}
            <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-between relative overflow-hidden text-white">
              {/* Particles background */}
              <div className="absolute inset-0 z-0">
                <Particles
                  particleColors={["#ffffff", "#ffffff"]}
                  particleCount={200}
                  particleSpread={5}
                  speed={0.05}
                  particleBaseSize={30}
                  moveParticlesOnHover={true}
                  alphaParticles={false}
                  disableRotation={false}
                />
                <div className="absolute inset-0 bg-black/50"></div>
              </div>

              {/* Floating decorative shapes */}
              <span className="absolute -top-6 -left-6 w-20 h-20 bg-yellow-400 rounded-full opacity-30 animate-ping z-10"></span>
              <span className="absolute -bottom-10 -right-10 w-32 h-32 bg-pink-500 rounded-full opacity-20 animate-pulse z-10"></span>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-extrabold drop-shadow-lg">
                  <span className="text-blue-600">CPBYTE</span> Recruitment'25
                </h2>
                <p className="mt-4 text-sm md:text-lg text-blue-100 leading-relaxed">
                  Your journey to building amazing tech projects starts here! <br />
                  Join <span className="font-semibold text-white">CPBYTE</span>, KIET’s official Technical Club, and unlock opportunities in{" "}
                  <span className="text-yellow-200 font-medium">
                    AI/ML · Web Development · Android Development · AR/VR · UI/UX · Creative Domains · GenAI
                  </span>
                  .<br />
                  Collaborate, learn, and level up your skills while connecting with passionate tech enthusiasts like you! 🌟
                </p>
              </div>

              <div className="mt-6 md:mt-8 flex flex-col sm:flex-row justify-end gap-3 relative z-10">
                <button
                  onClick={() => setShowPopup(false)}
                  className="px-5 py-2 rounded-lg bg-gray-800 text-white font-semibold hover:bg-gray-700 shadow hover:scale-105 transition-transform duration-200"
                >
                  Maybe Later
                </button>
                <button
                  onClick={() => {
                    setShowPopup(false);
                    router.push("/recruitment");
                  }}
                  className="px-5 py-2 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-300 shadow-lg flex items-center gap-2 justify-center hover:scale-105 transition-transform duration-200"
                >
                  Apply Now
                  <span className="w-2 h-2 bg-green-700 rounded-full animate-ping"></span>
                </button>
              </div>
            </div>

            {/* Right Section - Banner Image */}
            <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
              <Image
                src="/recruit.jpg" // place recruit.jpg in /public
                alt="Recruitment"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                className="object-cover rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none transform transition-transform duration-500 hover:scale-105"
              />
              {/* Dark overlay without blur */}
              <div className="absolute inset-0 bg-black/25 rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none animate-fadeIn"></div>
              {/* Sparkle effect */}
              <span className="absolute bottom-6 right-10 w-4 h-4 bg-green-300 rounded-full opacity-60 animate-ping"></span>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <main className="items-center lg:flex">
        <main className="w-full lg:w-1/2">
          <main className="lg:max-w-lg">
            <h1 className="text-3xl font-semibold text-gray-800 lg:text-6xl">
              CPBYTE <span className="text-blue-700">KIET</span>
            </h1>
            <h2 className="mt-3 text-1xl font-semibold text-gray-400 lg:text-4xl">
              Technical Club Of KIET
            </h2>
            <h2 className="mt-3 text-1xl font-semibold text-blue-900 lg:text-4xl">
              <TypeAnimation
                sequence={[
                  "Work on Live Projects",
                  1500,
                  "Learn DSA",
                  1500,
                  "Web Development",
                  1500,
                  "Android Development",
                  1500,
                  "Machine Learning",
                  1500,
                  "AR / VR",
                  1500,
                  "UI/UX",
                  1500,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
              <span className="opacity-0">|</span>
            </h2>
          </main>
        </main>

        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
          <PlayerAnimation link="https://lottie.host/d64d6a5f-65c7-40f7-8fb8-b3dcbc2ab559/XJUQmtiO0h.json" />
        </div>
      </main>
    </main>
  );
};

export default Hero;
