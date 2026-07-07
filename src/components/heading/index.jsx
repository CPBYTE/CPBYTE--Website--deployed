import React from 'react';

const Heading1 = ({ title }) => {
  return (
    <div className="max-w-xl mb-10 mt-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <h1 className="text-2xl font-bold text-center text-white capitalize lg:text-4xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        {title}
        <div className="flex justify-center mx-auto mt-6">
          <span className="inline-block w-44 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></span>
          <span className="inline-block w-6 h-1 mx-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-2 h-1 bg-blue-400 rounded-full"></span>
        </div>
      </h1>
    </div>
  );
};

export default Heading1;
