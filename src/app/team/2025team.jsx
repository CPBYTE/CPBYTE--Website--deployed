import CoreTeam from "@/components/home/coreteam";
import { Tech, DSA } from "./data";
import Founder from "@/components/home/founder";

export const Team = () => {


  return (
    <>
      <Founder />
      <CoreTeam />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl"> Coordinators
            <div className="flex justify-center mx-auto mt-6">
              <span className="inline-block w-44 h-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-6 h-1 mx-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-2 h-1 bg-blue-500 rounded-full"></span>
            </div></h1>

        </div>
        
        {
          Tech.map((group) => {
            return (
              <div className="p-2" key={group.category}>
                <h2 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">{group.category}
                  <div className="flex justify-center mx-auto mt-8">
                  </div></h2>
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                  {group.members.map((member) => (
                    <div
                      key={member.id}
                      className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-blue-500 rounded-xl"
                    >
                      <img
                        className="object-cover w-32 h-32 rounded-xl ring-4 ring-blue-500"
                        src={member.image}
                        alt={member.name}
                      />

                      <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize group-hover:text-white">
                        {member.name}
                      </h1>

                      <div className="flex mt-3 -mx-2">
                        <a
                          href={member.linkedin}
                          className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white"
                          aria-label="LinkedIn"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>

                        <a
                          href={member.github}
                          className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white"
                          aria-label="Github"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })
        },
        {
          DSA.map((group) => {
            return (
              <div className="p-2" key={group.category}>
                  <h2 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">{group.category}
                    <div className="flex justify-center mx-auto mt-6">
                    </div></h2>
                  <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {group.members.map((member) => (
                      <div
                        key={member.id}
                        className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-blue-500 rounded-xl"
                      >
                        <img
                          className="object-cover w-32 h-32 rounded-xl ring-4 ring-blue-500"
                          src={member.image}
                          alt={member.name}
                        />

                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize group-hover:text-white">
                          {member.name}
                        </h1>

                        <div className="flex mt-3 -mx-2">
                          <a
                            href={member.linkedin}
                            className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white"
                            aria-label="LinkedIn"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                          </a>

                          <a
                            href={member.github}
                            className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white"
                            aria-label="Github"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
            )
          })
        },
        
      </div>

      {/* <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white"> Our Talented Members
            <div className="flex justify-center mx-auto mt-6">
              <span className="inline-block w-64 h-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-12 h-1 mx-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-4 h-1 bg-blue-500 rounded-full"></span>
            </div></h1>
        </div>
        <div className="grid gap-10 mx-auto lg:max-w-screen-xl grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {SecondYear.map((member) => {
            return (
              <div key={member.id} className="flex flex-col items-center">
                <img
                  className="object-cover w-20 h-20 mb-2 rounded-full shadow"
                  src={member.imageUrl}
                  alt={member.name}
                />
                <div className="flex flex-col items-center">
                  <p className="text-lg mx-auto text-center font-bold">{member.name}</p>

                </div>
              </div>
            )
          })}


        </div>
      </div> */}

    </>
  );
};