"use client"
import React, { useState } from "react";
import { topaimlprojects,topandroidprojects,toparvrprojects,topuiuxprojects,topwebprojects } from "./data";

import CardMapping2 from "@/components/cardMap/index2";

const Projects = () => {
  const [tab, setTab] = useState(4)
  function changeProjectTab(e){
    setTab(e)
  }

  const tabs = [
    { id: 1, label: "UI/UX" },
    { id: 2, label: "WEB DEV" },
    { id: 3, label: "ANDROID" },
    { id: 4, label: "AI / ML" },
    { id: 5, label: "AR / VR" },
  ];

    return (
      <section className="max-w-screen-xl mx-auto">
    <div className="container px-6 py-12 mx-auto">
      {/* Section heading */}
      <h1 className="text-2xl text-center font-bold text-white mx-auto lg:text-4xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        Projects
        <div className="flex justify-center mx-auto mt-6">
          <span className="inline-block w-44 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></span>
          <span className="inline-block w-6 h-1 mx-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-2 h-1 bg-blue-400 rounded-full"></span>
        </div>
      </h1>

        <div className="mt-8 xl:mt-16 md:flex gap-4 lg:-mx-12">
            <div className="lg:mx-12 w-full md:w-auto">
                {/* Horizontal scroll tabs for mobile */}
                <div className="flex md:hidden overflow-x-auto gap-3 pb-4 scrollbar-none px-4 -mx-4">
                  {tabs.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => changeProjectTab(item.id)}
                      className={`whitespace-nowrap px-4 py-2 text-xs tracking-wider uppercase transition-all duration-300 rounded-lg font-medium shrink-0 ${
                        tab === item.id
                          ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                          : 'text-gray-400 border border-gray-700/50 hover:text-white hover:border-blue-500/50'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                <div className="mt-4 hidden md:block space-y-3 lg:mt-8">
                  {tabs.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => changeProjectTab(item.id)}
                      className={`block min-w-[15rem] px-5 py-2.5 text-sm tracking-wider uppercase transition-all duration-300 rounded-lg font-medium ${
                        tab === item.id
                          ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                          : 'text-gray-400 border border-gray-700/50 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
            </div>

            <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
                {(tab==1)&&(
                    <CardMapping2  data={topuiuxprojects}/>
                )}
                {(tab==2)&&(
                    <CardMapping2 data={topwebprojects}/>
                )}
                {(tab==3)&&(
                    <CardMapping2 data={topandroidprojects}/>
                )}
                {(tab==4)&&(
                    <CardMapping2 data={topaimlprojects}/>
                )}
                {(tab==5)&&(
                    <CardMapping2 data={toparvrprojects}/>
                )}
            </div>
        </div>
    </div>
</section>
    
  )
}

export default Projects
