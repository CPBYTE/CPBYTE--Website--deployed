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
        return "text-green-400 bg-green-500/10 border border-green-500/20";
      case "Completed":
        return "text-purple-400 bg-purple-500/10 border border-purple-500/20";
      case "Upcoming":
        return "text-blue-400 bg-blue-500/10 border border-blue-500/20";
      default:
        return "text-gray-400 bg-white/5 border border-white/10";
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
      <h2 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{title}</h2>
      <div className="relative">
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden border border-white/10 glass-card rounded-2xl">
              <table className="min-w-full divide-y divide-white/10">
                <thead className="bg-white/5">
                  <tr>
                    <th scope="col" className="py-4 px-6 text-sm font-semibold text-left text-gray-200">
                      <span>Event Name</span>
                    </th>
                    <th scope="col" className="px-6 py-4 text-sm font-semibold text-left text-gray-200">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-4 text-sm font-semibold text-left text-gray-200">
                      Start Date
                    </th>
                    <th scope="col" className="px-6 py-4 text-sm font-semibold text-left text-gray-200">
                      End Date
                    </th>
                    <th scope="col" className="px-6 py-4 text-sm font-semibold text-left text-gray-200">
                      About
                    </th>
                    <th scope="col" className="px-6 py-4 text-sm font-semibold text-left text-gray-200">
                      Participants
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 bg-transparent">
                  {events.map((event) => (
                    <tr
                      key={event.id}
                      className="cursor-pointer hover:bg-white/5 transition-colors duration-200"
                      onClick={() => router.push(`/events`)}
                    >
                      <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                        <h2 className="font-semibold text-white">{event.name}</h2>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                        <div className={`inline-flex px-3 py-1 text-xs font-medium rounded-full gap-x-2 ${getStatusStyle(event.status)}`}>
                          {event.status}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300 whitespace-nowrap">
                        {event.startDate}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300 whitespace-nowrap">
                        {event.endDate}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <div>
                          <h4 className="font-semibold text-gray-200">{event.about.title}</h4>
                          <p className="text-gray-400 mt-1 line-clamp-2">{event.about.description}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <span className="bg-blue-500/10 border border-blue-500/20 text-blue-400 font-semibold px-3 py-1 rounded-full text-xs">
                            {event.participants}
                          </span>
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
    <section className="container px-4 mx-auto mt-12">
      <div className="flex flex-col">
        {ongoingEvents.length > 0 && <EventTable events={ongoingEvents} title="Ongoing Events" />}
        {upcomingEvents.length > 0 && <EventTable events={upcomingEvents} title="Upcoming Events" />}
        {completedEvents.length > 0 && <EventTable events={completedEvents} title="Completed Events" />}
      </div>
    </section>
  );
};

export default EventsTable;
