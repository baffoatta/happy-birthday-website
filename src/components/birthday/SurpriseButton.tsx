import { Gift } from 'lucide-react';

interface SurpriseButtonProps {
  onTriggerConfetti: () => void;
}

export const SurpriseButton: React.FC<SurpriseButtonProps> = ({ onTriggerConfetti }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <button
        className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center space-x-2"
        onClick={onTriggerConfetti}
      >
        <Gift className="animate-bounce" />
        <span>More Surprises!</span>
      </button>
    </div>
  );
};