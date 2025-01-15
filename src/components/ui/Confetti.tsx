'use client'

import { useEffect, useCallback } from 'react';

interface ConfettiProps {
  isActive: boolean;
}

export const Confetti: React.FC<ConfettiProps> = ({ isActive }) => {
  const triggerConfetti = useCallback(() => {
    if (!isActive) return;
    
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        const confetti = document.createElement('div');
        confetti.className = 'absolute animate-confetti';
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.backgroundColor = ['#FF69B4', '#FFB6C1', '#FFC0CB'][Math.floor(Math.random() * 3)];
        document.getElementById('confetti-container')?.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 2000);
      }, i * 200);
    }
  }, [isActive]);

  useEffect(() => {
    if (isActive) {
      triggerConfetti();
    }
  }, [isActive, triggerConfetti]);

  return <div id="confetti-container" className="fixed inset-0 pointer-events-none" />;
};