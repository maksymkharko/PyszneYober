import React from 'react';
import { Transport } from '../types';
import { Bike, Car, Gauge } from 'lucide-react';

interface Props {
  selectedTransport: Transport;
  onChange: (t: Transport) => void;
  labels: { bike: string; scooter: string; car: string };
}

export const TransportSelector: React.FC<Props> = ({ selectedTransport, onChange, labels }) => {
  return (
    <div className="grid grid-cols-3 gap-3 mb-6">
      <button
        onClick={() => onChange('bike')}
        className={`
          flex flex-col items-center justify-center p-3 rounded-2xl border transition-all duration-300
          ${selectedTransport === 'bike'
            ? 'bg-white/20 border-white/50 shadow-lg scale-105'
            : 'bg-white/5 border-transparent hover:bg-white/10 text-white/70'}
        `}
      >
        <Bike className="w-6 h-6 mb-2" />
        <span className="text-xs font-semibold">{labels.bike}</span>
      </button>

      <button
        onClick={() => onChange('scooter')}
        className={`
          flex flex-col items-center justify-center p-3 rounded-2xl border transition-all duration-300
          ${selectedTransport === 'scooter'
            ? 'bg-white/20 border-white/50 shadow-lg scale-105'
            : 'bg-white/5 border-transparent hover:bg-white/10 text-white/70'}
        `}
      >
        <Gauge className="w-6 h-6 mb-2" />
        <span className="text-xs font-semibold">{labels.scooter}</span>
      </button>

      <button
        onClick={() => onChange('car')}
        className={`
          flex flex-col items-center justify-center p-3 rounded-2xl border transition-all duration-300
          ${selectedTransport === 'car'
            ? 'bg-white/20 border-white/50 shadow-lg scale-105'
            : 'bg-white/5 border-transparent hover:bg-white/10 text-white/70'}
        `}
      >
        <Car className="w-6 h-6 mb-2" />
        <span className="text-xs font-semibold">{labels.car}</span>
      </button>
    </div>
  );
};
