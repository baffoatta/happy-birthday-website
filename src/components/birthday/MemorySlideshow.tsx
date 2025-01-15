'use client'

import { useState, useEffect } from 'react';
import { Memory } from '@/types';
import Image from 'next/image';

interface MemorySlideshowProps {
  memories: Memory[];
}

export const MemorySlideshow: React.FC<MemorySlideshowProps> = ({ memories }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % memories.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [memories.length]);

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 mb-8">
      <div className="relative h-64 bg-black rounded mb-4">
        {memories[currentSlide].imageUrl ? (
          <Image
            src={memories[currentSlide].imageUrl}
            alt={memories[currentSlide].description}
            fill
            className="object-cover rounded"
            sizes="(max-width: 768px) 120vw, 768px"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-gray-600">{memories[currentSlide].description}</p>
          </div>
        )}
      </div>
      <div className="flex justify-center space-x-2">
        {memories.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? 'bg-pink-500' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};