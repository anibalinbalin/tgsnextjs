import React, { useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { MonthData, DayType } from './types';

interface MonthGridProps {
  data: MonthData;
  onClick?: () => void;
  isLarge?: boolean;
}

const getDayStyle = (type: DayType): string => {
  switch (type) {
    case DayType.SCHOOL_DAY: return 'bg-[#8EB096] text-white hover:bg-[#7da085]';
    case DayType.SCHOOL_HOLIDAY: return 'bg-[#802E3A] text-white hover:bg-[#6d2731]';
    case DayType.NATIONAL_HOLIDAY: return 'bg-[#5B8BA0] text-white hover:bg-[#4d7a8d]';
    case DayType.PD_DAY: return 'bg-[#D39885] text-white hover:bg-[#c78a77]';
    case DayType.CELEBRATION: return 'bg-[#C65D3B] text-white hover:bg-[#b5532f]';
    case DayType.SUMMER_CAMP: return 'bg-[#6b8e6b] text-white';
    case DayType.OUTDOOR_CAMP: return 'bg-[#d4a5a5] text-white';
    case DayType.ORIENTATION_CAMP: return 'bg-[#5BA3A3] text-white hover:bg-[#4d8f8f]';
    case DayType.WEEKEND: return 'bg-white text-stone-400';
    case DayType.EMPTY: return 'bg-transparent';
    default: return 'bg-white text-stone-800';
  }
};

const MonthGrid: React.FC<MonthGridProps> = ({ data, onClick, isLarge = false }) => {
  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const celebrationRef = useRef<HTMLDivElement>(null);

  // Confetti on hover for celebration dates in grid view
  const handleCelebrationHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 60,
      spread: 50,
      startVelocity: 20,
      gravity: 1.2,
      scalar: 0.7,
      ticks: 100,
      origin: { x, y },
      colors: ['#C65D3B', '#D39885', '#8EB096', '#FFD700']
    });
  };

  // Confetti effect for celebration dates in large (modal) view
  useEffect(() => {
    if (!isLarge || !celebrationRef.current) return;

    const timer = setTimeout(() => {
      const rect = celebrationRef.current?.getBoundingClientRect();
      if (!rect) return;

      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;

      confetti({
        particleCount: 60,
        spread: 50,
        startVelocity: 20,
        gravity: 1.2,
        scalar: 0.7,
        ticks: 100,
        origin: { x, y },
        colors: ['#C65D3B', '#D39885', '#8EB096', '#FFD700']
      });
    }, 1250);

    return () => clearTimeout(timer);
  }, [isLarge, data]);

  return (
    <div
      onClick={onClick}
      className={`
        bg-white border border-stone-200 rounded-lg shadow-sm
        transition-all duration-300
        ${!isLarge ? 'hover:-translate-y-1 hover:shadow-md cursor-pointer' : ''}
        flex flex-col
      `}
    >
      {/* Header */}
      <div className="bg-[#D39885] p-3 text-center rounded-t-lg">
        <h3 className={`font-medium uppercase tracking-widest text-white ${isLarge ? 'text-2xl' : 'text-sm'}`}>
          {data.name}
        </h3>
      </div>

      {/* Grid */}
      <div className="p-3 md:p-4 flex-1">
        {/* Days Header */}
        <div className="grid grid-cols-7 mb-2">
          {daysOfWeek.map((day, i) => (
            <div key={i} className="text-center text-[10px] md:text-xs font-medium text-stone-500">
              {day}
            </div>
          ))}
        </div>

        {/* Days Grid */}
        <div className="grid grid-cols-7 gap-1">
          {data.days.map((day, idx) => {
            if (day.type === DayType.EMPTY) {
              return <div key={idx} className="aspect-square"></div>;
            }

            const styles = getDayStyle(day.type);

            const isCelebration = day.type === DayType.CELEBRATION;

            return (
              <div
                key={idx}
                ref={isCelebration ? celebrationRef : undefined}
                className={`
                  aspect-square flex items-center justify-center
                  text-[10px] ${isLarge ? 'md:text-lg' : 'md:text-xs'} font-medium rounded-sm
                  transition-all duration-200 hover:scale-110
                  ${styles}
                  ${isCelebration && !isLarge ? 'animate-celebration-pulse cursor-pointer' : ''}
                `}
                title={day.type.replace('_', ' ')}
                onMouseEnter={isCelebration && !isLarge ? handleCelebrationHover : undefined}
              >
                {day.dayOfMonth}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MonthGrid;
