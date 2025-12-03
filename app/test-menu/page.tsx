import MenuSection from '@/components/menu-table/menu-section';

export default function TestMenuPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-8 px-6 bg-white border-b">
        <h1 className="text-3xl font-bold text-center">Menu Component Variants</h1>
        <p className="text-center text-gray-600 mt-2">Compare the 3 header styles below</p>
      </div>

      {/* Variant A: Full Header */}
      <div className="py-8">
        <div className="mx-auto max-w-5xl px-6 mb-4">
          <h2 className="text-xl font-bold text-[#C65D3B] border-b-2 border-[#D39885] pb-2 inline-block">
            A. Full Header
          </h2>
          <p className="text-gray-600 text-sm mt-1">
            Complete Piñadulce branding with logo, week toggle, and date ranges in a unified card
          </p>
        </div>
        <MenuSection headerVariant="full" showFooter={true} />
      </div>

      <hr className="border-t-4 border-[#8EB096]" />

      {/* Variant B: Minimal Header */}
      <div className="py-8 bg-gray-50">
        <div className="mx-auto max-w-5xl px-6 mb-4">
          <h2 className="text-xl font-bold text-[#C65D3B] border-b-2 border-[#D39885] pb-2 inline-block">
            B. Minimal Header
          </h2>
          <p className="text-gray-600 text-sm mt-1">
            Just the week toggle + heading, no Piñadulce branding (cleaner integration)
          </p>
        </div>
        <MenuSection headerVariant="minimal" showFooter={true} />
      </div>

      <hr className="border-t-4 border-[#8EB096]" />

      {/* Variant C: Static (No Toggle) */}
      <div className="py-8">
        <div className="mx-auto max-w-5xl px-6 mb-4">
          <h2 className="text-xl font-bold text-[#C65D3B] border-b-2 border-[#D39885] pb-2 inline-block">
            C. Static (Week A Only)
          </h2>
          <p className="text-gray-600 text-sm mt-1">
            Simplest option - shows Week A only, no toggle between weeks
          </p>
        </div>
        <MenuSection headerVariant="static" showFooter={true} />
      </div>
    </div>
  );
}
