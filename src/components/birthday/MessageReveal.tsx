import { useState } from 'react';
import { Heart } from 'lucide-react';

interface MessageRevealProps {
  message: string;
}

export const MessageReveal: React.FC<MessageRevealProps> = ({ message }) => {
  const [isMessageRevealed, setIsMessageRevealed] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <button
        className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center space-x-2"
        onMouseDown={() => setIsMessageRevealed(true)}
        onMouseUp={() => setIsMessageRevealed(false)}
        onTouchStart={() => setIsMessageRevealed(true)}
        onTouchEnd={() => setIsMessageRevealed(false)}
      >
        <Heart className={`${isMessageRevealed ? 'animate-bounce' : ''}`} />
        <span>Hold to Read My Message</span>
      </button>
      
      {isMessageRevealed && (
        <div className="mt-4 p-4 bg-pink-50 rounded-lg">
          <p className="text-gray-700 text-center">{message}</p>
        </div>
      )}
    </div>
  );
};
