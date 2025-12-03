'use client';

import { Info, Wheat, Leaf } from 'lucide-react';
import { THEME_COLORS } from './constants';

export default function MenuFooter() {
  return (
    <div className={`${THEME_COLORS.headerBg} text-white py-8 px-6 rounded-b-xl mt-0`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
        <div className="space-y-4">
          <h4 className="font-bold text-white flex items-center gap-2">
            <Info size={18} className="text-[#D39885]" />
            About Our Menu
          </h4>
          <p className="text-white/90 leading-relaxed">
            Our canteen prioritises the health and well-being of our students. We offer a special menu
            that avoids refined white flours, opting for healthier alternatives such as oat flour
            and coconut almonds.
          </p>
          <p className="text-white/90 leading-relaxed">
            We sweeten with natural alternatives: coconut sugar, dates, honey, and stevia.
            Irresistible flavours without artificial additives!
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-white">References</h4>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg">
              <Wheat size={16} className="text-[#D39885]" />
              <span>Gluten Free</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg">
              <Leaf size={16} className="text-green-300" />
              <span>Vegetarian</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg">
              <Leaf size={16} className="text-green-200" />
              <span>Vegan</span>
            </div>
          </div>
          <p className="text-xs italic mt-4 text-white/70">
            Salads always feature varied dressings: olive oil, pepper, green pesto, gremolata, etc.
            We offer natural infusions and flavoured waters.
          </p>
        </div>
      </div>
    </div>
  );
}
