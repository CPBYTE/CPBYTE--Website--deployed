import React from 'react'
import EventsTable from './eventsTable'

function page() {
  return (
    <div className="text-white min-h-screen py-10 px-4">
      <h1 className='text-center text-4xl font-bold mt-8' style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        Events at <span className='gradient-text'>CPBYTE</span>
      </h1>
      <EventsTable/>
    </div>
  )
}

export default page