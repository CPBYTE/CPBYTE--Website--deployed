"use client";

import { useRouter } from "next/navigation";
import React from 'react';
import Link from 'next/link';

const EventsTable = ({ events = [
  {
    id: 1,
    name: "B3",
    slug:"B3",
    status: "Completed",
    startDate: "11-02-2023",
    endDate: "13-02-2023",
    about: {
      title: "Web Development Bootcamp",
      description: "A beginner-friendly bootcamp introducing students to Web Dev, Git & GitHub essentials and Linkedin optimisation"
    },  
    participants: 250
  },
  {
    id: 2,
    name: "Code Craft",
    slug:"code-craft",
    status: "Completed",
    startDate: "15-05-2024",
    endDate: "17-05-2024",
    about: {
      title: "UI/UX Design Workshop",
      description: "A workshop on UI/UX design for beginners"
    },
    participants: "250"
  },
  {
    id: 3,
    name: "React 101",
    slug:"react-101",
    status: "Completed",
    startDate: "26-04-2024",
    endDate: "28-04-2024",
    about: {
      title: "React Bootcamp",
      description: "A bootcamp on React for beginners"
    },
    participants: "250"
  },
  {
    id: 4,
    name: "Dev 101",
    slug:"Dev 101",
    status: "Completed",
    startDate: "04-10-2024",
    endDate: "06-10-2024",
    about: {
      title: "Web & Android Dev Bootcamp",
      description: "A bootcamp on Web, Android Development and Git & GitHub Essentials for beginners"
    },
    participants: "400"
  },{
    id: 5,
    name: "Speaker Session",
    slug:"Speaker Session",
    status: "Completed",
    startDate: "21-02-2025",
    endDate: "21-02-2025",
    about: {
      title: "Technical Speaker Session",
      description: "Session with Prince Kumar & M.Rehman (SWE-2 Google), CPBYTE x DEVUP"
    },
    participants: "300"
  },
  {
    id: 6,
    name: "Dev 102",
    slug:"Dev 102",
    status: "Completed",
    startDate: "07-04-2025",
    endDate: "11-04-2025",
    about: {
      title: "Backend Bootcamp",
      description: "Bootcamp on Backend- Springboot, NODEjs, Docker, Git & Github"
    },
    participants: "400"
  }
] }) => {
  // Function to determine status style
  const getStatusStyle = (status) => {
    switch (status) {
      case "Active":
        return "text-green-500 bg-green-100/60 dark:bg-gray-800";
      case "Completed":
        return "text-purple-500 bg-purple-100/60 dark:bg-gray-800";
      case "Upcoming":
        return "text-blue-500 bg-blue-100/60 dark:bg-gray-800";
      default:
        return "text-gray-500 bg-gray-100 dark:text-gray-400 dark:bg-gray-800";
    }
  };

  const router = useRouter();

  // Filter events by status
  const completedEvents = events.filter(event => event.status === "Completed");
  const ongoingEvents = events.filter(event => event.status === "Active");
  const upcomingEvents = events.filter(event => event.status === "Upcoming");

  // Table component for reusability
  const EventTable = ({ events, title }) => (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">{title}</h2>
      <div className="relative">
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-700 dark:scrollbar-track-gray-800">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <span>Event Name</span>
                    </th>
                    <th scope="col" className="px-6 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      Start Date
                    </th>
                    <th scope="col" className="px-6 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      End Date
                    </th>
                    <th scope="col" className="px-6 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      About
                    </th>
                    <th scope="col" className="px-6 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      Participants
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  {events.map((event) => (
                    <tr
                      key={event.id}
                      className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                      onClick={() => router.push(`/events`)}
                    >
                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        <div>
                          <h2 className="font-medium text-gray-800 dark:text-white">{event.name}</h2>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                        <div className={`inline px-3 py-1 text-sm font-normal rounded-full gap-x-2 ${getStatusStyle(event.status)}`}>
                          {event.status}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                        <div>{event.startDate}</div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                        <div>{event.endDate}</div>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <div>
                          <h4 className="text-gray-700 dark:text-gray-200">{event.about.title}</h4>
                          <p className="text-gray-500 dark:text-gray-400 line-clamp-2">{event.about.description}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <span className="text-blue-500 font-semibold bg-blue-100 px-3 py-1 rounded-full">
                            {event.participants}
                          </span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 text-gray-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                          </svg>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="container px-4 mx-auto">
      <div className="flex flex-col mt-6">
        {ongoingEvents.length > 0 && <EventTable events={ongoingEvents} title="Ongoing Events" />}
        {upcomingEvents.length > 0 && <EventTable events={upcomingEvents} title="Upcoming Events" />}
        {completedEvents.length > 0 && <EventTable events={completedEvents} title="Completed Events" />}
      </div>
    </section>
  );
};

export default EventsTable;
