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
