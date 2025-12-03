'use client';

import React, { useEffect, useRef } from 'react';
import { MonthData, DayType } from './types';
import MonthGrid from './MonthGrid';
import { X, Calendar } from 'lucide-react';

interface MonthModalProps {
  data: MonthData | null;
  onClose: () => void;
}

const MonthModal: React.FC<MonthModalProps> = ({ data, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!data) return null;

  const schoolDays = data.days.filter(d => d.type === DayType.SCHOOL_DAY).length;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-modal-backdrop"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row relative animate-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-md hover:bg-stone-50 hover:shadow-lg transition-all duration-200 group"
        >
          <X className="w-5 h-5 text-stone-600 group-hover:text-stone-800 group-hover:rotate-90 transition-all duration-200" />
        </button>

        {/* Left Side: Large Calendar */}
        <div className="w-full md:w-2/3 p-6 md:p-8 flex items-center justify-center bg-stone-50">
          <div className="w-full max-w-md">
            <MonthGrid data={data} isLarge={true} />
          </div>
        </div>

        {/* Right Side: Details & Events */}
        <div className="w-full md:w-1/3 p-6 md:p-8 border-t md:border-t-0 md:border-l border-stone-200">
          <h2 className="text-3xl font-medium text-[#D39885] mb-2">{data.name}</h2>
          <p className="text-stone-500 text-lg mb-8">{data.year}</p>

          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-medium uppercase text-stone-400 tracking-wider mb-2">Monthly Summary</h4>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#8EB096]"></span>
                  <span className="text-sm font-medium text-stone-700">{schoolDays} School Days</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-medium uppercase text-stone-400 tracking-wider mb-2">Key Dates</h4>
              <ul className="space-y-3">
                {data.days
                  .filter(d => d.type !== DayType.SCHOOL_DAY && d.type !== DayType.WEEKEND && d.type !== DayType.EMPTY && d.type !== DayType.SCHOOL_HOLIDAY)
                  .map((d, i) => (
                    <li key={i} className="flex items-start space-x-3 text-sm">
                      <div className={`
                        flex-shrink-0 w-8 h-8 rounded flex items-center justify-center font-medium text-white text-xs
                        ${d.type === DayType.NATIONAL_HOLIDAY ? 'bg-[#5B8BA0]' : ''}
                        ${d.type === DayType.PD_DAY ? 'bg-[#D39885]' : ''}
                        ${d.type === DayType.CELEBRATION ? 'bg-[#C65D3B]' : ''}
                        ${d.type === DayType.ORIENTATION_CAMP ? 'bg-[#5BA3A3]' : ''}
                      `}>
                        {d.dayOfMonth}
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="font-medium text-stone-800">
                          {d.type === DayType.NATIONAL_HOLIDAY ? 'National Holiday' : ''}
                          {d.type === DayType.PD_DAY ? 'Professional Development' : ''}
                          {d.type === DayType.CELEBRATION ? 'Celebration of Learning' : ''}
                          {d.type === DayType.ORIENTATION_CAMP ? 'Orientation Camp' : ''}
                        </p>
                        <p className="text-xs text-stone-500">{data.name} {d.dayOfMonth}</p>
                      </div>
                    </li>
                  ))}

                {data.days.every(d => d.type === DayType.SCHOOL_DAY || d.type === DayType.WEEKEND || d.type === DayType.SCHOOL_HOLIDAY || d.type === DayType.EMPTY) && (
                  <li className="flex flex-col items-center justify-center py-8 text-stone-400">
                    <Calendar className="w-8 h-8 mb-2 opacity-50" />
                    <span>Regular Schedule</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthModal;
