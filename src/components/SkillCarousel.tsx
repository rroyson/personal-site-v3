'use client';

import { useState, useEffect } from 'react';
import { skills } from '@/data/skills';

export function SkillCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-mono">
      <span className="text-gray-600 dark:text-gray-400">{'>'}</span>
      <span className="min-w-[120px] text-left">
        {skills[currentIndex]}
      </span>
      <span className="animate-pulse">|</span>
    </div>
  );
}