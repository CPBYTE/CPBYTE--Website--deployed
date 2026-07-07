"use client";

import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-950/80 backdrop-blur-md text-white border-t border-white/5 transition-colors duration-300">
      <div className="container p-6 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <Link href="/">
                <h1 className="text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  CPBYTE
                </h1>
              </Link>

              <p className="max-w-sm mt-2 text-gray-400">
                Join 100+ other tech enthusiasts and make best connections in KIET GROUP OF INSTITUTIONS
              </p>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                <h3 className="text-gray-300 uppercase text-sm font-semibold tracking-wider">About</h3>
                <Link href="/about" className="block mt-2 text-sm hover:underline text-gray-500 hover:text-gray-300">Message</Link>
                <Link href="/team" className="block mt-2 text-sm hover:underline text-gray-500 hover:text-gray-300">Team</Link>
                <Link href="/about" className="block mt-2 text-sm hover:underline text-gray-500 hover:text-gray-300">Functioning</Link>
                <a
                  href="https://cpbytestudentportal.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-2 text-sm hover:underline text-gray-500 hover:text-gray-300"
                >
                  Student Portal
                </a>
              </div>

              <div>
                <h3 className="text-gray-300 uppercase text-sm font-semibold tracking-wider">Projects</h3>
                <Link href="/projects" className="block mt-2 text-sm hover:underline text-gray-500 hover:text-gray-300">Web / Android</Link>
                <Link href="/projects" className="block mt-2 text-sm hover:underline text-gray-500 hover:text-gray-300">AI/ML</Link>
                <Link href="/projects" className="block mt-2 text-sm hover:underline text-gray-500 hover:text-gray-300">AR/VR</Link>
              </div>

              <div>
                <h3 className="text-gray-300 uppercase text-sm font-semibold tracking-wider">Resources</h3>
                <Link href="/resources/dsa" className="block mt-2 text-sm hover:underline text-gray-500 hover:text-gray-300">DSA</Link>
                <Link href="/resources/webdev" className="block mt-2 text-sm hover:underline text-gray-500 hover:text-gray-300">Web Development</Link>
                <Link href="/resources/android" className="block mt-2 text-sm hover:underline text-gray-500 hover:text-gray-300">Android</Link>
              </div>

              <div>
                <h3 className="text-gray-300 uppercase text-sm font-semibold tracking-wider">Contact</h3>
                <span className="block mt-2 text-sm text-gray-500">+91 8057226016</span>
                <span className="block mt-2 text-sm text-gray-500">cpbytekiet@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 border-none bg-gray-800" />

        <div>
          <p className="text-center text-sm text-gray-500">
            Developed with ❤️ by{" "}
            <a
              href="https://www.linkedin.com/company/nscckiet/posts/?feedView=all"
              className="underline font-medium text-blue-400 hover:text-blue-300"
            >
              Team CPBYTE
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
