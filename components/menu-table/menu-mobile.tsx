'use client';

import { DayMenu } from './types';
import { THEME_COLORS } from './constants';
import { Sun, Utensils, Leaf, Carrot, Cookie, Moon, Salad } from 'lucide-react';
import React from 'react';

interface MenuMobileProps {
  days: DayMenu[];
}

interface MobileRowProps {
  label: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  highlighted?: boolean;
}

function MobileRow({ label, icon, content, highlighted }: MobileRowProps) {
  return (
    <div className={`p-4 ${highlighted ? 'bg-[#FDFBF7]' : 'bg-white'}`}>
      <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-gray-500">
        {icon}
        <span>{label}</span>
      </div>
      <div className="text-gray-800 text-sm pl-6">
        {content}
      </div>
    </div>
  );
}

export default function MenuMobile({ days }: MenuMobileProps) {
  return (
    <div className="flex flex-col gap-6">
      {days.map((d) => (
        <div
          key={d.day}
          className={`bg-white rounded-xl shadow-md overflow-hidden border-2 ${THEME_COLORS.border}`}
        >
          <div className={`${THEME_COLORS.headerBg} text-white p-4 flex items-center justify-between`}>
            <h3 className="font-bold text-lg uppercase tracking-wide">{d.day}</h3>
            <span className="text-[#D39885] font-bold text-xs bg-white/20 px-2 py-1 rounded">
              MENÚ DEL DÍA
            </span>
          </div>

          <div className="divide-y divide-gray-100">
            <MobileRow
              label="Snack Matutino"
              icon={<Sun size={16} className="text-[#D39885]" />}
              content={d.snackMatutino}
            />
            <MobileRow
              label="Principal Proteína"
              icon={<Utensils size={16} className="text-[#8EB096]" />}
              content={d.mainProtein}
              highlighted
            />
            <MobileRow
              label="Principal Veggie"
              icon={<Leaf size={16} className="text-green-600" />}
              content={d.mainVeggie}
            />
            <MobileRow
              label="Guarnición"
              icon={<Carrot size={16} className="text-orange-500" />}
              content={d.sideDish}
            />
            <MobileRow
              label="Ensaladas"
              icon={<Salad size={16} className="text-green-500" />}
              content={
                <ul className="list-disc list-inside space-y-1">
                  {d.salads.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              }
            />
            <MobileRow
              label="Postre"
              icon={<Cookie size={16} className="text-[#D39885]" />}
              content={d.dessert}
            />
            <MobileRow
              label="Snack Tarde"
              icon={<Moon size={16} className="text-indigo-500" />}
              content={d.afternoonSnack}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
