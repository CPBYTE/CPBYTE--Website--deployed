"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { TypeAnimation } from "react-type-animation";

const PlayerAnimation = dynamic(() => import("@/components/player"), { ssr: false });

const Hero = () => {
  const router = useRouter();

  return (
    <div className="relative min-h-[90vh] flex items-center bg-transparent">
      {/* Gradient overlay at the bottom for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent z-20 pointer-events-none" />

      <main className="container max-w-screen-2xl px-6 py-20 mx-auto relative">
        <main className="items-center lg:flex">
          <main className="w-full lg:w-1/2">
            <main className="lg:max-w-lg">
              {/* Subtle accent line */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-[2px] bg-blue-500" />
                <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">
                  Technical Club of KIET
                </span>
              </div>

              <h1 className="text-4xl font-bold text-white lg:text-7xl tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                CPBYTE{" "}
                <span className="gradient-text">KIET</span>
              </h1>

              <p className="mt-4 text-lg text-gray-400 lg:text-xl font-light">
                Empowering engineers through project-based learning, competitive
                programming, and real-world tech exposure.
              </p>

              <h2 className="mt-6 text-xl font-semibold text-blue-400 lg:text-3xl">
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

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4 mt-10">
                <a
                  href="/about"
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 text-sm tracking-wide"
                >
                  Explore More
                </a>
                <a
                  href="/contact"
                  className="px-8 py-3 border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white font-semibold rounded-lg transition-all duration-300 text-sm tracking-wide"
                >
                  Get in Touch
                </a>
              </div>
            </main>
          </main>

          {/* Right side decorative element - Lottie technology animation */}
          <div className="hidden lg:flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <div className="w-full max-w-[500px]">
              <PlayerAnimation link="lottie_animations/TEchnology.json" />
            </div>
          </div>
        </main>
      </main>
    </div>
  );
};

export default Hero;
