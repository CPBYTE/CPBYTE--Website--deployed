"use client";

import React from "react";
import Particles from "../../components/Particles"; // same as registration page

const SuccessPage = () => {
  const whatsappLink = "https://chat.whatsapp.com/Jv4CmdTJNIADYU3apLNefI";

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 bg-black">
      {/* Particles background */}
      <div className="absolute inset-0 z-0">
        <div style={{ width: '100%', height: '100%', position: 'relative' }} className="bg-black">
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={800}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
      </div>

      {/* Card wrapper */}
      <div className="relative z-10 w-full max-w-3xl glass-card rounded-2xl shadow-2xl border border-white/10 p-8 md:p-12 text-white text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white drop-shadow-lg">
          🎉 Registration Successful!
        </h2>

        <p className="text-xl mb-4">
          Thank you for joining <strong className="text-blue-400">CPBYTE</strong> 🚀
        </p>

        

        <p className="text-lg">
          Join our WhatsApp group to stay updated:{" "}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline font-medium hover:text-blue-200"
          >
            Click Here
          </a>{" "}
          💻⚡
        </p>
      </div>
    </div>
  );
};

export default SuccessPage;
