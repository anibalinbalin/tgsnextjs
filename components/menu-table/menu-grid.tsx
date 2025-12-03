'use client';

import { DayMenu } from './types';
import { THEME_COLORS, MENU_CATEGORIES } from './constants';
import { Sun, Utensils, Leaf, Carrot, Cookie, Moon, Salad } from 'lucide-react';

interface MenuGridProps {
  days: DayMenu[];
}

const iconMap: Record<string, React.ReactNode> = {
  Sun: <Sun size={18} className="text-[#D39885]" />,
  Utensils: <Utensils size={18} className="text-[#8EB096]" />,
  Leaf: <Leaf size={18} className="text-green-600" />,
  Carrot: <Carrot size={18} className="text-orange-500" />,
  Salad: <Salad size={18} className="text-green-500" />,
  Cookie: <Cookie size={18} className="text-[#D39885]" />,
  Moon: <Moon size={18} className="text-indigo-500" />,
};

export default function MenuGrid({ days }: MenuGridProps) {
  return (
    <div className="w-full overflow-x-auto">
      <table className={`w-full min-w-[900px] border-collapse border-2 ${THEME_COLORS.border} text-center`}>
        <thead>
          <tr className={THEME_COLORS.headerBg}>
            <th className={`border-2 ${THEME_COLORS.border} py-4 px-4 w-48 text-left font-bold text-white uppercase tracking-wide`}>
              Categoría
            </th>
            {days.map((d) => (
              <th
                key={d.day}
                className={`border-2 ${THEME_COLORS.border} py-4 px-3 text-center font-bold text-white uppercase tracking-wide`}
              >
                {d.day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {MENU_CATEGORIES.map((cat, idx) => (
            <tr key={cat.key} className={idx % 2 === 0 ? 'bg-[#FDFBF7]' : 'bg-white'}>
              <td className={`border-2 ${THEME_COLORS.border} p-4`}>
                <div className="flex items-center gap-3 font-semibold text-[#5D4037] uppercase text-sm tracking-wider">
                  <div className="bg-white p-2 rounded-full shadow-sm border border-gray-100">
                    {iconMap[cat.iconName]}
                  </div>
                  <span className="text-left">{cat.label}</span>
                </div>
              </td>

              {days.map((d) => (
                <td
                  key={`${d.day}-${cat.key}`}
                  className={`border-2 ${THEME_COLORS.border} p-3 align-top`}
                >
                  <div className="text-sm text-gray-700 leading-relaxed">
                    {cat.key === 'salads' ? (
                      <ul className="list-disc list-inside space-y-1 text-left">
                        {(d[cat.key as keyof DayMenu] as string[]).map((salad, i) => (
                          <li key={i} className="marker:text-[#D39885]">{salad}</li>
                        ))}
                      </ul>
                    ) : (
                      <span>{d[cat.key as keyof DayMenu] as string}</span>
                    )}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
