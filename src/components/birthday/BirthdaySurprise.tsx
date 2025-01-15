'use client'

import { useState } from 'react';
import { Header } from './Header';
import { MemorySlideshow } from './MemorySlideshow';
import { MessageReveal } from './MessageReveal';
import { MusicPlayer } from './MusicPlayer';
import { SurpriseButton } from './SurpriseButton';
import { Confetti } from '../ui/Confetti';
import { MEMORIES, BIRTHDAY_MESSAGE } from '@/utils/Constants';

const BirthdaySurprise = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleTriggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 p-8">
      <Confetti isActive={showConfetti} />
      
      <Header />
      <MemorySlideshow memories={MEMORIES} />
      
      <div className="max-w-md mx-auto space-y-6">
        <MessageReveal message={BIRTHDAY_MESSAGE} />
        <MusicPlayer />
        <SurpriseButton onTriggerConfetti={handleTriggerConfetti} />
      </div>
    </div>
  );
};

export default BirthdaySurprise;