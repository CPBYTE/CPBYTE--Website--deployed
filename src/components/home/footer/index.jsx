"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  // Dark mode only on /recruitment
  const darkModeTrigger = pathname === "/recruitment" || pathname === "/submitted" ;

  return (
    <footer
      className={`  transition-colors duration-300 ${
        darkModeTrigger ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      <hr className={`border-none ${darkModeTrigger ? "bg-gray-700" : "bg-gray-200"}`} />
      <div className="container p-6 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <Link href="/">
                <h1 className={`text-xl font-bold ${darkModeTrigger ? "text-white" : "text-gray-900"}`}>
                  CPBYTE
                </h1>
              </Link>

              <p className={`max-w-sm mt-2 ${darkModeTrigger ? "text-gray-300" : "text-gray-500"}`}>
                Join 100+ other tech enthusiasts and make best connections in KIET GROUP OF INSTITUTIONS
              </p>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                <h3 className={`${darkModeTrigger ? "text-white" : "text-gray-700"} uppercase`}>About</h3>
                <Link href="/about" className={`block mt-2 text-sm hover:underline ${darkModeTrigger ? "text-gray-300" : "text-gray-600"}`}>Message</Link>
                <Link href="/team" className={`block mt-2 text-sm hover:underline ${darkModeTrigger ? "text-gray-300" : "text-gray-600"}`}>Team</Link>
                <Link href="/about" className={`block mt-2 text-sm hover:underline ${darkModeTrigger ? "text-gray-300" : "text-gray-600"}`}>Functioning</Link>
              </div>

              <div>
                <h3 className={`${darkModeTrigger ? "text-white" : "text-gray-700"} uppercase`}>Projects</h3>
                <Link href="/projects" className={`block mt-2 text-sm hover:underline ${darkModeTrigger ? "text-gray-300" : "text-gray-600"}`}>Web / Android</Link>
                <Link href="/projects" className={`block mt-2 text-sm hover:underline ${darkModeTrigger ? "text-gray-300" : "text-gray-600"}`}>AI/ML</Link>
                <Link href="/projects" className={`block mt-2 text-sm hover:underline ${darkModeTrigger ? "text-gray-300" : "text-gray-600"}`}>AR/VR</Link>
              </div>

              <div>
                <h3 className={`${darkModeTrigger ? "text-white" : "text-gray-700"} uppercase`}>Resources</h3>
                <Link href="/resources/dsa" className={`block mt-2 text-sm hover:underline ${darkModeTrigger ? "text-gray-300" : "text-gray-600"}`}>DSA</Link>
                <Link href="/resources/webdev" className={`block mt-2 text-sm hover:underline ${darkModeTrigger ? "text-gray-300" : "text-gray-600"}`}>Web Development</Link>
                <Link href="/resources/android" className={`block mt-2 text-sm hover:underline ${darkModeTrigger ? "text-gray-300" : "text-gray-600"}`}>Android</Link>
              </div>

              <div>
                <h3 className={`${darkModeTrigger ? "text-white" : "text-gray-700"} uppercase`}>Contact</h3>
                <span className={`block mt-2 text-sm ${darkModeTrigger ? "text-gray-300" : "text-gray-600"}`}>+91 8057226016</span>
                <span className={`block mt-2 text-sm ${darkModeTrigger ? "text-gray-300" : "text-gray-600"}`}>cpbytekiet@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <hr className={`h-px my-6 border-none ${darkModeTrigger ? "bg-gray-700" : "bg-gray-200"}`} />

        <div>
          <p className={`text-center text-sm ${darkModeTrigger ? "text-gray-400" : "text-gray-500"}`}>
            Developed with ❤️ by{" "}
            <a
              href="https://www.linkedin.com/company/nscckiet/posts/?feedView=all"
              className={`underline font-medium ${darkModeTrigger ? "text-blue-400" : "text-blue-900"}`}
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
