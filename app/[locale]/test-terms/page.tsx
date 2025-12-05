import DevBadge from '@/components/dev-badge'

// Term data with calculated info
const TERMS_DATA = [
  { name: 'Term 1', start: 'March 5', end: 'April 30', weeks: 8, startMonth: 2, endMonth: 3, color: '#8EB096', holidayAfter: 'May Break (May 3-11)' },
  { name: 'Term 2', start: 'May 12', end: 'July 4', weeks: 8, startMonth: 4, endMonth: 6, color: '#5B8BA0', holidayAfter: 'Winter Break (Jul 7 - Aug 1)' },
  { name: 'Term 3', start: 'August 4', end: 'October 10', weeks: 10, startMonth: 7, endMonth: 9, color: '#D39885', holidayAfter: 'Spring Break (Oct 13-17)' },
  { name: 'Term 4', start: 'October 20', end: 'December 12', weeks: 8, startMonth: 9, endMonth: 11, color: '#802E3A', holidayAfter: 'Summer Break' },
]

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// ============================================
// MOCKUP 1: Taller bar + larger text
// ============================================
function TimelineV1TallerLarger() {
  return (
    <div className="bg-white p-8 rounded-lg border border-stone-200">
      <h3 className="text-lg font-medium text-[#D39885] mb-6">V1: Taller bar + larger text</h3>

      {/* Month labels */}
      <div className="grid grid-cols-12 gap-1 mb-2">
        {MONTHS.map((month, i) => (
          <div key={i} className="text-xs text-stone-500 text-center font-medium">
            {month}
          </div>
        ))}
      </div>

      {/* Timeline bar - TALLER (h-20 = 80px) */}
      <div className="relative h-20 bg-stone-100 rounded-lg overflow-hidden">
        {/* Summer holiday - Jan/Feb */}
        <div
          className="absolute h-full bg-stone-200 flex items-center justify-center"
          style={{ left: '0%', width: '16.66%' }}
        >
          <span className="text-xs text-stone-500 font-medium">Summer</span>
        </div>

        {/* Term segments - LARGER TEXT */}
        {TERMS_DATA.map((term, i) => {
          const startPercent = (term.startMonth / 12) * 100
          const endPercent = ((term.endMonth + 1) / 12) * 100
          const width = endPercent - startPercent

          return (
            <div
              key={i}
              className="absolute h-full flex items-center justify-center text-white font-medium"
              style={{
                left: `${startPercent}%`,
                width: `${width}%`,
                backgroundColor: term.color
              }}
            >
              <div className="text-center">
                <div className="text-sm font-medium">{term.name}</div>
                <div className="text-xs opacity-80">{term.weeks} wks</div>
              </div>
            </div>
          )
        })}

        {/* Holiday gaps */}
        <div
          className="absolute h-full bg-stone-200"
          style={{ left: '33.33%', width: '2%' }}
        />
        <div
          className="absolute h-full bg-stone-200 flex items-center justify-center"
          style={{ left: '58.33%', width: '5%' }}
        >
          <span className="text-xs text-stone-500 font-medium">Winter</span>
        </div>
      </div>

      {/* Legend for holidays */}
      <div className="mt-4 flex items-center gap-4 text-xs text-stone-500">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-stone-200 rounded"></div>
          <span>Holidays</span>
        </div>
      </div>
    </div>
  )
}

// ============================================
// MOCKUP 2: Better contrast
// ============================================
function TimelineV2BetterContrast() {
  return (
    <div className="bg-white p-8 rounded-lg border border-stone-200">
      <h3 className="text-lg font-medium text-[#D39885] mb-6">V2: Better contrast</h3>

      {/* Month labels - DARKER */}
      <div className="grid grid-cols-12 gap-1 mb-2">
        {MONTHS.map((month, i) => (
          <div key={i} className="text-sm text-stone-700 text-center font-semibold">
            {month}
          </div>
        ))}
      </div>

      {/* Timeline bar */}
      <div className="relative h-16 bg-stone-100 rounded-lg overflow-hidden">
        {/* Summer holiday - Jan/Feb - DARKER BACKGROUND */}
        <div
          className="absolute h-full bg-stone-300 flex items-center justify-center"
          style={{ left: '0%', width: '16.66%' }}
        >
          <span className="text-xs text-stone-700 font-semibold">Summer</span>
        </div>

        {/* Term segments */}
        {TERMS_DATA.map((term, i) => {
          const startPercent = (term.startMonth / 12) * 100
          const endPercent = ((term.endMonth + 1) / 12) * 100
          const width = endPercent - startPercent

          return (
            <div
              key={i}
              className="absolute h-full flex items-center justify-center text-white text-xs font-medium"
              style={{
                left: `${startPercent}%`,
                width: `${width}%`,
                backgroundColor: term.color
              }}
            >
              <div className="text-center">
                <div className="font-semibold">{term.name}</div>
                <div className="text-[10px] opacity-90">{term.weeks} wks</div>
              </div>
            </div>
          )
        })}

        {/* Holiday gaps - DARKER */}
        <div
          className="absolute h-full bg-stone-300"
          style={{ left: '33.33%', width: '2%' }}
        />
        <div
          className="absolute h-full bg-stone-300 flex items-center justify-center"
          style={{ left: '58.33%', width: '5%' }}
        >
          <span className="text-[10px] text-stone-700 font-semibold">Winter</span>
        </div>
      </div>

      {/* Legend for holidays */}
      <div className="mt-4 flex items-center gap-4 text-sm text-stone-700">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 bg-stone-300 rounded"></div>
          <span className="font-medium">Holidays</span>
        </div>
      </div>
    </div>
  )
}

// ============================================
// MOCKUP 3: Month grid lines
// ============================================
function TimelineV3GridLines() {
  return (
    <div className="bg-white p-8 rounded-lg border border-stone-200">
      <h3 className="text-lg font-medium text-[#D39885] mb-6">V3: Month grid lines</h3>

      {/* Month labels */}
      <div className="grid grid-cols-12 gap-0 mb-0">
        {MONTHS.map((month, i) => (
          <div key={i} className="text-xs text-stone-500 text-center font-medium border-l border-stone-300 first:border-l-0 py-1">
            {month}
          </div>
        ))}
      </div>

      {/* Timeline bar with grid lines */}
      <div className="relative h-16 bg-stone-100 rounded-lg overflow-hidden">
        {/* Grid lines */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute h-full border-l border-stone-300/50"
            style={{ left: `${(i / 12) * 100}%` }}
          />
        ))}

        {/* Summer holiday - Jan/Feb */}
        <div
          className="absolute h-full bg-stone-200 flex items-center justify-center"
          style={{ left: '0%', width: '16.66%' }}
        >
          <span className="text-[10px] text-stone-500 font-medium">Summer</span>
        </div>

        {/* Term segments */}
        {TERMS_DATA.map((term, i) => {
          const startPercent = (term.startMonth / 12) * 100
          const endPercent = ((term.endMonth + 1) / 12) * 100
          const width = endPercent - startPercent

          return (
            <div
              key={i}
              className="absolute h-full flex items-center justify-center text-white text-xs font-medium"
              style={{
                left: `${startPercent}%`,
                width: `${width}%`,
                backgroundColor: term.color
              }}
            >
              <div className="text-center">
                <div className="font-medium">{term.name}</div>
                <div className="text-[10px] opacity-80">{term.weeks} wks</div>
              </div>
            </div>
          )
        })}

        {/* Holiday gaps */}
        <div
          className="absolute h-full bg-stone-200"
          style={{ left: '33.33%', width: '2%' }}
        />
        <div
          className="absolute h-full bg-stone-200 flex items-center justify-center"
          style={{ left: '58.33%', width: '5%' }}
        >
          <span className="text-[8px] text-stone-500 font-medium">Winter</span>
        </div>
      </div>

      {/* Legend for holidays */}
      <div className="mt-4 flex items-center gap-4 text-xs text-stone-500">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-stone-200 rounded"></div>
          <span>Holidays</span>
        </div>
      </div>
    </div>
  )
}

// ============================================
// MOCKUP 4: All combined
// ============================================
function TimelineV4AllCombined() {
  return (
    <div className="bg-white p-8 rounded-lg border border-stone-200">
      <h3 className="text-lg font-medium text-[#D39885] mb-6">V4: All combined (taller + contrast + grid)</h3>

      {/* Month labels - DARKER + with borders */}
      <div className="grid grid-cols-12 gap-0 mb-0">
        {MONTHS.map((month, i) => (
          <div key={i} className="text-sm text-stone-700 text-center font-semibold border-l border-stone-300 first:border-l-0 py-1">
            {month}
          </div>
        ))}
      </div>

      {/* Timeline bar - TALLER with grid lines */}
      <div className="relative h-20 bg-stone-100 rounded-lg overflow-hidden">
        {/* Grid lines */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute h-full border-l border-stone-400/30"
            style={{ left: `${(i / 12) * 100}%` }}
          />
        ))}

        {/* Summer holiday - Jan/Feb - DARKER */}
        <div
          className="absolute h-full bg-stone-300 flex items-center justify-center"
          style={{ left: '0%', width: '16.66%' }}
        >
          <span className="text-sm text-stone-700 font-semibold">Summer</span>
        </div>

        {/* Term segments - LARGER TEXT */}
        {TERMS_DATA.map((term, i) => {
          const startPercent = (term.startMonth / 12) * 100
          const endPercent = ((term.endMonth + 1) / 12) * 100
          const width = endPercent - startPercent

          return (
            <div
              key={i}
              className="absolute h-full flex items-center justify-center text-white font-medium"
              style={{
                left: `${startPercent}%`,
                width: `${width}%`,
                backgroundColor: term.color
              }}
            >
              <div className="text-center">
                <div className="text-sm font-semibold">{term.name}</div>
                <div className="text-xs opacity-90">{term.weeks} weeks</div>
              </div>
            </div>
          )
        })}

        {/* Holiday gaps - DARKER */}
        <div
          className="absolute h-full bg-stone-300"
          style={{ left: '33.33%', width: '2%' }}
        />
        <div
          className="absolute h-full bg-stone-300 flex items-center justify-center"
          style={{ left: '58.33%', width: '5%' }}
        >
          <span className="text-xs text-stone-700 font-semibold">Winter</span>
        </div>
      </div>

      {/* Legend for holidays */}
      <div className="mt-4 flex items-center gap-4 text-sm text-stone-700">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 bg-stone-300 rounded"></div>
          <span className="font-medium">Holidays</span>
        </div>
        <span className="text-stone-400">|</span>
        <span className="text-stone-500">Hover terms for exact dates</span>
      </div>
    </div>
  )
}

// ============================================
// MOCKUP 2: Vertical Cards
// ============================================
function VerticalCards() {
  return (
    <div className="bg-white p-8 rounded-lg border border-stone-200">
      <h3 className="text-lg font-medium text-[#D39885] mb-6">Option 2: Vertical Cards</h3>

      <div className="space-y-4">
        {TERMS_DATA.map((term, i) => (
          <div
            key={i}
            className="flex border-l-4 rounded-lg bg-stone-50 overflow-hidden"
            style={{ borderLeftColor: term.color }}
          >
            {/* Term name */}
            <div
              className="w-32 flex items-center justify-center text-white font-medium py-4"
              style={{ backgroundColor: term.color }}
            >
              {term.name}
            </div>

            {/* Dates */}
            <div className="flex-1 grid grid-cols-3 gap-4 p-4">
              <div>
                <div className="text-xs text-stone-400 uppercase tracking-wide mb-1">Start</div>
                <div className="text-stone-800 font-medium">{term.start}</div>
              </div>
              <div>
                <div className="text-xs text-stone-400 uppercase tracking-wide mb-1">End</div>
                <div className="text-stone-800 font-medium">{term.end}</div>
              </div>
              <div>
                <div className="text-xs text-stone-400 uppercase tracking-wide mb-1">Duration</div>
                <div className="text-stone-800 font-medium">{term.weeks} weeks</div>
              </div>
            </div>

            {/* Holiday after */}
            <div className="w-48 bg-stone-100 p-4 flex items-center">
              <div>
                <div className="text-xs text-stone-400 uppercase tracking-wide mb-1">Then</div>
                <div className="text-stone-600 text-sm">{term.holidayAfter}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ============================================
// MOCKUP 3: Table Format
// ============================================
function TableFormat() {
  return (
    <div className="bg-white p-8 rounded-lg border border-stone-200">
      <h3 className="text-lg font-medium text-[#D39885] mb-6">Option 3: Table Format</h3>

      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-1">
          <thead>
            <tr>
              <th className="text-left pb-3 text-sm text-[#D39885] font-medium">Term</th>
              <th className="text-left pb-3 text-sm text-[#D39885] font-medium">Start Date</th>
              <th className="text-left pb-3 text-sm text-[#D39885] font-medium">End Date</th>
              <th className="text-center pb-3 text-sm text-[#D39885] font-medium">Weeks</th>
              <th className="text-left pb-3 text-sm text-[#D39885] font-medium">Holiday Following</th>
            </tr>
          </thead>
          <tbody>
            {TERMS_DATA.map((term, i) => (
              <tr key={i}>
                <td
                  className="py-3 px-4 text-white font-medium rounded-l"
                  style={{ backgroundColor: term.color }}
                >
                  {term.name}
                </td>
                <td
                  className="py-3 px-4 text-white"
                  style={{ backgroundColor: term.color, opacity: 0.85 }}
                >
                  {term.start}
                </td>
                <td
                  className="py-3 px-4 text-white"
                  style={{ backgroundColor: term.color, opacity: 0.85 }}
                >
                  {term.end}
                </td>
                <td
                  className="py-3 px-4 text-white text-center font-medium"
                  style={{ backgroundColor: term.color, opacity: 0.85 }}
                >
                  {term.weeks}
                </td>
                <td className="py-3 px-4 bg-stone-100 text-stone-600 text-sm rounded-r">
                  {term.holidayAfter}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <div className="mt-6 pt-4 border-t border-stone-200 flex justify-between text-sm">
        <span className="text-stone-500">Total school weeks: <strong className="text-stone-800">34 weeks</strong></span>
        <span className="text-stone-500">School year: <strong className="text-stone-800">March - December 2025</strong></span>
      </div>
    </div>
  )
}

// ============================================
// Main Page
// ============================================
export default function TestTermsPage() {
  return (
    <div className="min-h-screen bg-stone-100 py-12">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl font-medium text-[#D39885] mb-2">Timeline Legibility Options</h1>
        <p className="text-stone-600 mb-12">Compare these 4 timeline variations</p>

        <div className="space-y-8">
          <TimelineV1TallerLarger />
          <TimelineV2BetterContrast />
          <TimelineV3GridLines />
          <TimelineV4AllCombined />
        </div>

        <h2 className="text-2xl font-medium text-[#D39885] mt-16 mb-8">Other Formats (for reference)</h2>
        <div className="space-y-8">
          <VerticalCards />
          <TableFormat />
        </div>
      </div>
      <DevBadge name="test-terms" />
    </div>
  )
}
