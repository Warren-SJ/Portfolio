'use client';

import React, { useEffect, useState } from 'react';

type Side = 'left' | 'right' | 'top' | 'bottom';

interface Position {
  side: Side;
  offset: number; // 0-100 percentage along the side
}

export function PeekingCat() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPeeking, setIsPeeking] = useState(false);
  const [position, setPosition] = useState<Position>({ side: 'left', offset: 50 });

  const getRandomPosition = (): Position => {
    const sides: Side[] = ['left', 'right'];
    const randomSide = sides[Math.floor(Math.random() * sides.length)];
    const randomOffset = Math.random() * 80 + 10; // 10-90% to avoid corners
    return { side: randomSide, offset: randomOffset };
  };

  const showCat = () => {
    setPosition(getRandomPosition());
    setIsVisible(true);
    setTimeout(() => setIsPeeking(true), 100);
  };

  const hideCat = () => {
    setIsPeeking(false);
    setTimeout(() => setIsVisible(false), 500);
  };

  useEffect(() => {
    // Initial delay before first appearance
    const initialTimer = setTimeout(() => {
      showCat();
    }, Math.random() * 3000 + 2000); // 2-5 seconds

    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    if (!isVisible) {
      // Schedule next appearance
      const reappearTimer = setTimeout(() => {
        showCat();
      }, Math.random() * 8000 + 5000); // 5-13 seconds

      return () => clearTimeout(reappearTimer);
    }
  }, [isVisible]);

  const handleMouseEnter = () => {
    hideCat();
  };

  if (!isVisible) return null;

  const getPositionStyles = () => {
    const { side, offset } = position;
    
    switch (side) {
      case 'left':
        return {
          left: '0',
          top: `${offset}%`,
          transform: `translateY(-50%) ${isPeeking ? 'translateX(0)' : 'translateX(-100%)'}`,
        };
      case 'right':
        return {
          right: '0',
          top: `${offset}%`,
          transform: `translateY(-50%) ${isPeeking ? 'translateX(0)' : 'translateX(100%)'} scaleX(-1)`,
        };
      case 'top':
        return {
          top: '0',
          left: `${offset}%`,
          transform: `translateX(-50%) ${isPeeking ? 'translateY(0)' : 'translateY(-100%)'} rotate(-90deg)`,
        };
      case 'bottom':
        return {
          bottom: '0',
          left: `${offset}%`,
          transform: `translateX(-50%) ${isPeeking ? 'translateY(0)' : 'translateY(100%)'} rotate(90deg)`,
        };
    }
  };

  return (
    <div
      className="fixed z-50 pointer-events-auto cursor-pointer"
      style={{
        ...getPositionStyles(),
        transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
      onMouseEnter={handleMouseEnter}
    >
      <div className="relative">
        {/* Cat body */}
        <div className="relative w-20 h-20 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full shadow-lg">
          {/* Cat face */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full z-10">
            {/* Ears */}
            <div className="absolute -top-3 left-2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[16px] border-b-orange-300" />
            <div className="absolute -top-3 right-2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[16px] border-b-orange-300" />
            
            {/* Inner ears */}
            <div className="absolute -top-2 left-3 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-pink-300" />
            <div className="absolute -top-2 right-3 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-pink-300" />
            
            {/* Eyes */}
            <div className="absolute top-5 left-3 w-3 h-4 bg-slate-800 rounded-full">
              <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-white rounded-full" />
            </div>
            <div className="absolute top-5 right-3 w-3 h-4 bg-slate-800 rounded-full">
              <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-white rounded-full" />
            </div>
            
            {/* Nose */}
            <div className="absolute top-9 left-1/2 -translate-x-1/2 w-2 h-1.5 bg-pink-400 rounded-full" />
            
            {/* Mouth */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2">
              <div className="w-2 h-2 border-b-2 border-l-2 border-slate-700 rounded-bl-full transform -translate-x-1" />
              <div className="w-2 h-2 border-b-2 border-r-2 border-slate-700 rounded-br-full transform translate-x-1 -translate-y-2" />
            </div>
            
            {/* Whiskers */}
            <div className="absolute top-8 -left-2 w-6 h-0.5 bg-slate-600 rounded" />
            <div className="absolute top-9 -left-2 w-6 h-0.5 bg-slate-600 rounded" />
            <div className="absolute top-8 -right-2 w-6 h-0.5 bg-slate-600 rounded" />
            <div className="absolute top-9 -right-2 w-6 h-0.5 bg-slate-600 rounded" />
          </div>
          
          {/* Paw */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-15 h-8 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full z-0">
            {/* Toe beans */}
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-pink-300 rounded-full" />
            <div className="absolute bottom-1 left-1 w-1.5 h-1.5 bg-pink-300 rounded-full" />
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-pink-300 rounded-full" />
            <div className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-pink-300 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
