"use client";

import dynamic from "next/dynamic";

const PlayerAnimation = dynamic(() => import("@/components/player"), { ssr: false });

const Step = () => {
  const steps = [
    {
      animation: "/lottie_animations/Learn.json",
      title: "Learn",
      description:
        "Learn tech stack of your domain along with DSA and get the best resources.",
    },
    {
      animation: "/lottie_animations/develop.json",
      title: "Develop",
      description:
        "Develop applications by applying the knowledge taught to you.",
    },
    {
      animation: "/lottie_animations/project.json",
      title: "Project",
      description:
        "Work on live projects and showcase your portfolio to the world.",
    },
  ];

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      {/* Section heading */}
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-16">
        <h2
          className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span className="relative inline-block">
            <span className="relative">
              JOURNEY AT <span className="gradient-text">CPBYTE</span>
            </span>
          </span>
        </h2>
        <p className="text-gray-500 text-sm">
          Your path from learner to builder starts here
        </p>
      </div>

      {/* Steps grid */}
      <div className="grid gap-6 md:gap-8 lg:grid-cols-3">
        {steps.map((step, index) => (
          <div key={step.title} className="relative text-center group">
            {/* Glass card */}
            <div className="glass-card p-8 h-full">
              {/* Icon */}
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-2xl bg-blue-500/10 border border-blue-500/20 group-hover:border-blue-500/40 transition-all duration-300 overflow-hidden">
                <PlayerAnimation link={step.animation} controls={false} />
              </div>

              {/* Step number */}
              <div className="absolute top-4 right-4 text-xs font-bold text-gray-600 tracking-wider">
                0{index + 1}
              </div>

              <h6 className="mb-3 text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {step.title}
              </h6>
              <p className="text-sm text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </div>

            {/* Arrow connector (hidden on last item and mobile) */}
            {index < steps.length - 1 && (
              <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <svg
                  className="w-8 text-gray-600"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <line
                    fill="none"
                    strokeMiterlimit="10"
                    x1="2"
                    y1="12"
                    x2="22"
                    y2="12"
                  />
                  <polyline
                    fill="none"
                    strokeMiterlimit="10"
                    points="15,5 22,12 15,19 "
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step;