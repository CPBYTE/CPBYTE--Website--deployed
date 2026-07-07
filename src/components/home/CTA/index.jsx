"use client"
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const Counter = ({ targetCount, isVisible }) => {
  const [count, setCount] = useState(0);
  const speed = 200;

  useEffect(() => {
    let animation;

    if (isVisible) {
      const increment = Math.ceil(targetCount / speed);

      const updateCount = () => {
        setCount(prevCount => {
          const newCount = prevCount + increment;
          return newCount < targetCount ? newCount : targetCount;
        });
      };

      animation = setInterval(updateCount, 1);
    }

    return () => clearInterval(animation);
  }, [targetCount, isVisible]);

  return (
    <div className="counter">
        <h5 className="text-5xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                <span className="inline text-white">
                    <span className="inline text-white">
                        {count}
                    </span>
                    <span className="gradient-text">
                        +
                    </span>
                </span>
            </h5>
    </div>

  );
};

const CTA = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="mx-auto max-w-screen-xl my-8 md:my-20 px-4">
      <div className="glass-card glow-blue p-8 md:p-12">
        <div className="container grid grid-cols-2 gap-8 py-4 mx-auto text-center md:grid-cols-4">
            <div>
                <Counter 
                targetCount={100} 
                isVisible={isVisible} />
                <p className="text-xs font-medium tracking-wider text-gray-400 uppercase mt-2">
                  Members
                </p>
            </div>
            <div>
                <Counter 
                targetCount={15} 
                isVisible={isVisible} />
                <p className="text-xs font-medium tracking-wider text-gray-400 uppercase mt-2">
                  Ongoing Projects
                </p>
            </div>
            <div>
                <Counter 
                targetCount={30} 
                isVisible={isVisible} />
                <p className="text-xs font-medium tracking-wider text-gray-400 uppercase mt-2">
                  Finished Projects
                </p>
            </div>
            <div>
                <Counter 
                targetCount={8} 
                isVisible={isVisible} />
                <p className="text-xs font-medium tracking-wider text-gray-400 uppercase mt-2">
                  Collaborators
                </p>
            </div>
        </div>
        <div className="flex p-4 mx-auto mt-6 w-52">
            <Link
            href="/register"
            className="py-3 px-6 bg-blue-600 hover:bg-blue-500 text-white w-full transition-all duration-300 text-center text-sm font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 rounded-lg tracking-wide">
                Register Now
            </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;