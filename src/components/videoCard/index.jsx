import Link from 'next/link'
import React from 'react'

const VideoCard = ({topic,imageLink,title,desc,videoId}) => {
  return (
    <div className="max-w-sm min-h-60 glass-card border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:border-blue-500/30 hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-1">
      <Link href={`${topic}/${videoId}`}>
        <img className="w-full object-cover rounded-t-2xl transform hover:scale-105 transition-transform duration-300" src={imageLink} alt={title} />
      </Link>
      <div className="p-5">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-white line-clamp-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          {title}
        </h5>
        <p className="text-sm font-light text-gray-400">{desc}</p>
      </div>
    </div>
  );
};

export default VideoCard
