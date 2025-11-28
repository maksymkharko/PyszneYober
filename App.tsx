import React, { useState, useMemo } from 'react';
import { TRANSLATIONS } from './constants';
import { Language, Transport, CalculationResult } from './types';
import { calculateEarnings } from './utils/calculations';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { TransportSelector } from './components/TransportSelector';
import { InputField } from './components/InputField';
import { Clock, ShoppingBag, Coins, CalendarDays, CalendarRange, Info, MapPin } from 'lucide-react';

const App: React.FC = () => {
  // State
  const [lang, setLang] = useState<Language>('pl');
  const [transport, setTransport] = useState<Transport>('bike');
  
  // Inputs
  const [hours, setHours] = useState<number | ''>('');
  const [orders, setOrders] = useState<number | ''>('');
  const [tips, setTips] = useState<number | ''>('');
  const [kilometers, setKilometers] = useState<number | ''>('');
  const [weekdayOrders, setWeekdayOrders] = useState<number | ''>('');
  const [weekendOrders, setWeekendOrders] = useState<number | ''>('');

  // Derived State (Calculations)
  const results: CalculationResult = useMemo(() => {
    return calculateEarnings(
      Number(hours),
      Number(orders),
      Number(tips),
      Number(weekdayOrders),
      Number(weekendOrders),
      Number(kilometers),
      transport
    );
  }, [hours, orders, tips, weekdayOrders, weekendOrders, kilometers, transport]);

  const t = TRANSLATIONS[lang];

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 md:p-6 lg:p-8">
      
      {/* Main Glass Panel */}
      <div className="w-full max-w-lg glass-panel rounded-3xl p-6 md:p-8 relative overflow-hidden animate-fade-in-up">
        
        {/* Header */}
        <header className="text-center mb-6">
          <LanguageSwitcher currentLang={lang} onLanguageChange={setLang} />
          <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow-md mb-1">
            {t.title}
          </h1>
          <div className="h-1 w-20 bg-white/30 rounded-full mx-auto mt-2"></div>
        </header>

        {/* Transport Selector */}
        <TransportSelector 
          selectedTransport={transport} 
          onChange={setTransport} 
          labels={{ bike: t.bike, scooter: t.scooter, car: t.car }} 
        />

        {/* Main Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <InputField 
            label={t.hoursLabel} 
            value={hours} 
            onChange={setHours} 
            icon={<Clock size={20} />}
          />
          <InputField 
            label={t.ordersLabel} 
            value={orders} 
            onChange={setOrders} 
            icon={<ShoppingBag size={20} />}
          />
          
          <div className="md:col-span-1">
            <InputField 
              label={t.tipsLabel} 
              value={tips} 
              onChange={setTips} 
              icon={<Coins size={20} />}
            />
          </div>
          
          <div className="md:col-span-1">
             <InputField 
              label={t.kilometersLabel} 
              value={kilometers} 
              onChange={setKilometers} 
              icon={<MapPin size={20} />}
            />
          </div>
        </div>

        {/* Secondary Inputs */}
        <div className="glass-panel rounded-2xl p-4 mb-6 bg-black/10">
            <div className="grid grid-cols-2 gap-4">
                <InputField 
                    label={t.weekdayTitle} 
                    value={weekdayOrders} 
                    onChange={setWeekdayOrders}
                    icon={<CalendarDays size={18} />}
                />
                <InputField 
                    label={t.weekendTitle} 
                    value={weekendOrders} 
                    onChange={setWeekendOrders}
                    icon={<CalendarRange size={18} />}
                />
            </div>
        </div>

        {/* Results Section */}
        <div className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-6 bg-green-400 rounded-full"></span>
                {t.resultsTitle}
            </h2>

            <div className="grid grid-cols-2 gap-3">
                {/* Brutto Column */}
                <div className="glass-panel bg-white/5 rounded-2xl p-4 flex flex-col gap-2">
                    <div className="text-center pb-2 border-b border-white/10 mb-2">
                        <span className="text-sm font-bold tracking-wider opacity-80 uppercase">{t.brutto}</span>
                    </div>
                    <ResultRow label={t.hoursEarned} value={results.hoursBrutto} />
                    <ResultRow label={t.transportBonus} value={results.transportBrutto} />
                    <ResultRow label={t.ordersBonus} value={results.ordersBrutto} />
                    <ResultRow label={t.tips} value={results.tipsBrutto} />
                    <div className="mt-2 pt-2 border-t border-white/20">
                        <ResultRow label={t.total} value={results.totalBrutto} isTotal />
                    </div>
                </div>

                {/* Netto Column */}
                <div className="glass-panel bg-black/20 rounded-2xl p-4 flex flex-col gap-2">
                    <div className="text-center pb-2 border-b border-white/10 mb-2">
                        <span className="text-sm font-bold tracking-wider opacity-80 uppercase text-green-300">{t.netto}</span>
                    </div>
                    <ResultRow label={t.hoursEarned} value={results.hoursNetto} />
                    <ResultRow label={t.transportBonus} value={results.transportNetto} />
                    <ResultRow label={t.ordersBonus} value={results.ordersNetto} />
                    <ResultRow label={t.tips} value={results.tipsNetto} />
                    <div className="mt-2 pt-2 border-t border-white/20">
                        <ResultRow label={t.total} value={results.totalNetto} isTotal highlight />
                    </div>
                </div>
            </div>
        </div>

        {/* Info Accordion / Section */}
        <div className="glass-panel bg-white/5 rounded-2xl p-5 mb-8">
            <h3 className="flex items-center gap-2 font-semibold text-white/90 mb-3 text-sm uppercase tracking-wide">
                <Info size={16} />
                {t.infoTitle}
            </h3>
            <div 
                className="text-xs text-white/70 leading-relaxed space-y-1" 
                dangerouslySetInnerHTML={{ __html: t.infoText }} 
            />
        </div>

        {/* Footer */}
        <footer className="text-center space-y-4">
            <div className="text-sm text-white/60">
                <span dangerouslySetInnerHTML={{ __html: t.authorText.replace('t.me', '<a href="https://t.me/clownades" target="_blank" class="text-blue-300 hover:text-blue-200 underline">t.me</a>') }} />
            </div>
            
            <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center">
                    <span className="px-3 bg-transparent text-white/40 text-xs italic">
                    "{t.quoteText}"
                    </span>
                </div>
            </div>

            <p className="text-[10px] text-white/30 max-w-xs mx-auto leading-tight">
                {t.disclaimerText}
            </p>
        </footer>

      </div>
    </div>
  );
};

// Helper sub-component for rows
const ResultRow: React.FC<{ label: string; value: number; isTotal?: boolean; highlight?: boolean }> = ({ label, value, isTotal, highlight }) => (
    <div className={`flex justify-between items-center ${isTotal ? 'font-bold' : 'text-sm'}`}>
        <span className={`${isTotal ? 'text-white' : 'text-white/60'}`}>{label}</span>
        <span className={`
            ${highlight ? 'text-green-300 text-lg' : isTotal ? 'text-white text-base' : 'text-white/90'}
        `}>
            {value.toFixed(2)} <span className="text-[10px] opacity-50">zł</span>
        </span>
    </div>
);

export default App;
