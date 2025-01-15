// src/components/birthday/MusicPlayer.tsx
import { useState, useEffect } from 'react';
import { Music } from 'lucide-react';

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio on client side only
    const audioElement = new Audio();
    audioElement.src = '/audio/happy-birthday-254480.mp3';
    setAudio(audioElement);

    return () => {
      if (audioElement) {
        audioElement.pause();
        audioElement.src = '';
      }
    };
  }, []);

  const togglePlay = async () => {
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Error playing audio:', error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <button
        onClick={togglePlay}
        className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center space-x-2"
      >
        <Music className={`${isPlaying ? 'animate-spin' : ''}`} />
        <span>{isPlaying ? 'Pause Our Song' : 'Play Our Song'}</span>
      </button>

      <div className="mt-4">
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={audio?.volume || 1}
          onChange={(e) => {
            if (audio) {
              audio.volume = parseFloat(e.target.value);
            }
          }}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>
    </div>
  );
};