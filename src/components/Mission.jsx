import FadeUp from "./FadeUp";
export default function Mission({ onSignupClick }) {
  return (
    <section className="w-full">
      <div className="grid space-y-12 px-4 sm:px-6">
        {/* ─── TITLE SECTION ─────────────────────── */}
        <FadeUp>
        <div className="text-center space-y-6 px-4">
          <h1 className="text-[#37b0c2] tracking-wide text-sm sm:text-base">OUR MISSION</h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1D1E20] leading-snug">
            We've helped <br className="hidden md:block" /> innovative companies
          </h1>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Hundreds of companies of all sizes and across industries <br className="hidden md:block" /> have made a big improvement with us.
          </p>
        </div>
        </FadeUp>

        {/* ─── STATS SECTION ─────────────────────── */}
        <div className="flex flex-col sm:flex-row gap-8 md:gap-4 p-6 sm:p-10 justify-between text-center md:text-left">
          <div className="flex-1">
            <h1 className="text-[#1D1E20] font-semibold text-4xl sm:text-5xl">24%</h1>
            <p className="text-sm sm:text-base text-gray-700 mt-2">Revenue business</p>
          </div>
          <div className="flex-1">
            <h1 className="text-[#1D1E20] font-semibold text-4xl sm:text-5xl">180k</h1>
            <p className="text-sm sm:text-base text-gray-700 mt-2">In annual revenue</p>
          </div>
          <div className="flex-1">
            <h1 className="text-[#1D1E20] font-semibold text-4xl sm:text-5xl">10+</h1>
            <p className="text-sm sm:text-base text-gray-700 mt-2">Months of runway</p>
          </div>
        </div>

        {/* ─── PLANS ─────────────────────────────── */}
        <h1 className="text-center font-semibold text-[#2a8e9e] text-base sm:text-lg">
          CHOOSE PLAN:
        </h1>
        <div className="flex flex-col md:flex-row p-3 gap-4 max-w-4xl mx-auto w-full">
          {/* Plus Card */}
          <div className="p-6 w-full space-y-6 rounded-xl bg-[#e1f5f7] text-lg sm:text-xl hover:shadow-lg transition">
            <h1 className="font-semibold text-xl sm:text-2xl">Plus</h1>
            <h1 className="text-2xl sm:text-3xl font-bold">
              $2.99 <span className="text-sm sm:text-base font-normal">/month</span>
            </h1>
          </div>

          {/* Premium Card */}
          <div className="p-6 w-full space-y-6 rounded-xl bg-[#2a8e9e] text-lg sm:text-xl text-white hover:shadow-lg transition">
            <h1 className="font-semibold text-xl sm:text-2xl">Premium</h1>
            <h1 className="text-2xl sm:text-3xl font-bold">
              $6.99 <span className="text-sm sm:text-base font-normal">/month</span>
            </h1>
          </div>
        </div>

        {/* ─── CTA SECTION (Try It Now) ───────────────── */}
        
        <div className="bg-[#023241] text-white rounded-lg p-6 sm:p-8 md:p-12 space-y-6 mx-auto max-w-6xl w-full">
          <h1 className="text-base sm:text-lg font-semibold text-[#0b6e7d]">TRY IT NOW</h1>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* LEFT TEXT */}
            <FadeUp>
            <div className="space-y-6">
              <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl leading-snug">
                Ready To Level Up your <br className="hidden md:block" /> payment process?
              </h1>
              <p className="text-sm md:text-base leading-relaxed text-gray-300">
                Supports small businesses with simple invoicing, powerful integrations, and cash flow management tools.
              </p>
            </div>
            </FadeUp>


            {/* RIGHT BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 justify-start md:justify-end">
              <button 
                onClick={onSignupClick}
                className="px-6 py-3 rounded-lg shadow-lg bg-[#2A8E9E] hover:bg-[#64cdde] font-medium transition"
              >
                Get Started Now
              </button>
              <button className="px-6 py-3 rounded-lg shadow-lg border border-white hover:bg-white hover:text-[#023241] font-medium transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}