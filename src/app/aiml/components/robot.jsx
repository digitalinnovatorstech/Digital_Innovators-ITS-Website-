'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const AiRobotImage = () => {
  const animationRefs = useRef([]);
  const [ mounted, setMounted ] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => {
      animationRefs.current.forEach(id => {
        if (id) cancelAnimationFrame(id);
      });
    };
  }, []);

  const generateBinaryStreams = () => {
    const streams = [];
    const streamCount = 20;

    for (let streamIndex = 0; streamIndex < streamCount; streamIndex++) {
      const streamElements = [];
      const streamLength = 15;
      const horizontalPosition = `${(streamIndex / streamCount) * 100}%`;

      for (let i = 0; i < streamLength; i++) {
        const digit = Math.random() > 0.5 ? '1' : '0';
        const verticalPosition = `${(i / streamLength) * 100}%`;
        const goingUp = i % 2 === 0;
        const animationName = goingUp ? 'floatUp' : 'floatDown';
        const animationDuration = 5 + Math.random() * 10;
        const animationDelay = Math.random() * 5;

        streamElements.push(
          <div
            key={`${streamIndex}-${i}`}
            className="absolute text-gray-600 opacity-10 select-none font-mono"
            style={{
              left: horizontalPosition,
              top: verticalPosition,
              fontSize: '18px',
              animation: `${animationName} ${animationDuration}s infinite linear`,
              animationDelay: `${animationDelay}s`
            }}
          >
            {digit}
          </div>
        );
      }

      streams.push(
        <div key={streamIndex} className="absolute h-full" style={{ left: horizontalPosition, width: '5%' }}>
          {streamElements}
        </div>
      );
    }

    return streams;
  };

  if (!mounted) return null;

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">{generateBinaryStreams()}</div>

      <div className="relative container z-10 mt-40" style={{ width: '800px', height: '600px' }}>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image src="/assets/robotvideo.gif" alt="Robot animation" width={550} height={550} />
        </div>

        <div className="absolute top-0 right-0">
          <div className="rounded-lg overflow-hidden shadow-lg animate-bounce" style={{ animationDuration: '8s' }}>
            <Image src="/assets/home/aiml/internal/robot1.svg" alt="Flamingo" width={180} height={180} />
          </div>
        </div>

        <div className="absolute top-0 left-0">
          <div className="rounded-lg overflow-hidden shadow-lg animate-bounce" style={{ animationDuration: '10s' }}>
            <Image src="/assets/home/aiml/internal/robot3.svg" alt="Woman portrait" width={180} height={180} />
          </div>
        </div>

        <div className="absolute bottom-20 -left-20">
          <div className="rounded-lg overflow-hidden shadow-lg animate-bounce" style={{ animationDuration: '9s' }}>
            <Image src="/assets/home/aiml/internal/robot2.svg" alt="Character with headphones" width={180} height={180} />
          </div>
        </div>

        <div className="absolute bottom-20 -right-20">
          <div className="rounded-lg overflow-hidden shadow-lg animate-bounce" style={{ animationDuration: '8.5s' }}>
            <Image src="/assets/home/aiml/internal/robot4.svg" alt="Hummingbird" width={180} height={180} />
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-100vh);
          }
        }

        @keyframes floatDown {
          0% {
            transform: translateY(-100vh);
          }
          100% {
            transform: translateY(100vh);
          }
        }
      `}</style>
    </div>
  );
};

export default AiRobotImage;
