"use client";

import { useEffect, useRef } from "react";

const VantaBackground = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    let isMounted = true;

    const loadVanta = async () => {
      const THREE = await import("three");
      const VANTA = await import("vanta/dist/vanta.net.min");

      if (isMounted && !vantaEffect.current) {
        vantaEffect.current = VANTA.default({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x00fff5,
          backgroundColor: 0x030712,
          points: 20.0,
          maxDistance: 5.0,
          spacing: 18.0,
        });
      }
    };

    loadVanta();

    return () => {
      isMounted = false;
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="fixed inset-0 w-full h-full -z-50 pointer-events-none"
    />
  );
};

export default VantaBackground;
