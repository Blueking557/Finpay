import { Landmark, DollarSign, ArrowRightLeft } from 'lucide-react';
import Chart from './Charts';
import FadeDown from './FadeDown';
import FadeSide from './FadeSide';


export const SocialProof = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION TITLE */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm text-[#2A8E9E] uppercase tracking-wide font-semibold">WHY US</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D1E20]">
            Why they prefer Finpay
          </h2>
        </div>

        {/* STAT CARDS */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* LEFT CARD */}
          <div className="bg-[#f2f7f8] rounded-3xl shadow-lg border border-gray-100 p-8 md:p-12">
            <div className="space-y-10">
              <div>
                <p className="text-6xl md:text-6xl font-bold" style={{ color: '#2A8E9E' }}>3k+</p>
              </div>
              <p className="text-lg md:text-2xl font-bold text-[#1D1E20]">
                Businesses already running<br />on Finpay
              </p>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-[#f2f7f8] rounded-3xl shadow-lg border border-gray-100 p-8 md:p-12">
            <div className="space-y-6">
              <h3 className="text-lg md:text-2xl font-bold text-[#1D1E20]">
                Instant Withdraw your funds<br />at any time
              </h3>

              <div className="flex items-center gap-4 pt-4">
                
                {/* Dollar First */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#1D1E20' }}
                >
                  <DollarSign className="w-6 h-6 text-white" />
                </div>

                {/* Long Arrow */}
                <div className="flex-1 flex justify-center">
                  <ArrowRightLeft className="w-full h-12 text-gray-400" />
                </div>

                {/* Landmark */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#2A8E9E' }}
                >
                  <Landmark className="w-6 h-6 text-white" />
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* GRAPH + TEXT SECTION */}
        <div className="flex flex-col md:flex-row bg-[#f2f7f8] rounded-xl p-6 gap-6 mt-5">

  {/* Left Text Section */}
  <div className="flex-1 flex flex-col justify-center space-y-4">
    <h1 className="font-bold text-lg md:text-4xl text-[#1D1E20] leading-tight">
      No assets volatility
    </h1>
    <p className="text-gray-700 text-sm md:text-base">
      Generate returns on your cash reserves <br />
      without making any investment
    </p>
  </div>

  {/* Right Graph Section */}
  <div className="flex-1 bg-white rounded-t-xl p-4 shadow-lg flex flex-col justify-between"
       style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}>

    {/* Top Row: Figure + Dropdown */}
    <div className="flex justify-between items-center mb-2">
      <p className="font-bold text-xl md:text-3xl text-[#1D1E20]">
        $1,856,580
      </p>
      <select className="border border-gray-300 rounded-md p-2 text-sm md:text-base font-bold" defaultValue="6 months">
        <option>1 month</option>
        <option>2 months</option>
        <option>3 months</option>
        <option>6 months</option>
      </select>
    </div>

    {/* Chart Container */}
    <div className="flex-1">
      <Chart
        options={{
          chart: {
            toolbar: { show: false },
            background: 'transparent',
          },
          xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            axisBorder: { show: true },
            axisTicks: { show: true },
          },
          yaxis: {
            labels: { show: false },
          },
          grid: { show: false },
          stroke: { curve: 'smooth', width: 2 },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'light',
              type: "vertical",
              gradientToColors: ['#2A8E9E'],
              opacityFrom: 0.6,
              opacityTo: 0.1,
              stops: [0, 100]
            }
          },
          tooltip: { enabled: true },
        }}
        series={[{
          name: 'Revenue',
          data: [500000, 700000, 800000, 600000, 1000000, 1200000]
        }]}
        type="area"
        height="100%"
      />
    </div>

  </div>
</div>


        {/* STEP SECTION */}
        <div className="w-full bg-[#023241] text-white mt-5 p-10 md:p-20">
          
          {/* Header */}
          <FadeDown>
          <div className="mb-10">
            <h1 className="text-[#2A8E9E] font-semibold mb-3 tracking-wide">STEP</h1>
            <h1 className="text-2xl md:text-3xl">Maximize your returns with</h1>
            <h1 className="text-2xl md:text-3xl">Reserve account that generates</h1>
          </div>
          </FadeDown>

          {/* Cards */}
          <FadeSide>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* CARD 1 */}
            <div className="bg-[#043b4b] rounded-lg p-6 space-y-2">
              <h1 className="font-bold text-5xl md:text-6xl bg-gradient-to-b from-white to-[#023241] bg-clip-text text-transparent">
                1
              </h1>
              <h1 className="text-xl font-bold">Open your account</h1>
              <p>Sign up to Finpay and set up your account from the dashboard.</p>
            </div>

            {/* CARD 2 */}
            <div className="bg-[#043b4b] rounded-lg p-6 space-y-2">
              <h1 className="font-bold text-5xl md:text-6xl bg-gradient-to-b from-white to-[#023241] bg-clip-text text-transparent">
                2
              </h1>
              <h1 className="text-xl font-bold">Transfer your money</h1>
              <p>Move money from one account into another and start to earn up.</p>
            </div>

            {/* CARD 3 */}
            <div className="bg-[#043b4b] rounded-lg p-6 space-y-2">
              <h1 className="font-bold text-5xl md:text-6xl bg-gradient-to-b from-white to-[#023241] bg-clip-text text-transparent">
                3
              </h1>
              <h1 className="text-xl font-bold">Watch your balance grow</h1>
              <p>Accessed instantly and remain insulated from market volatility.</p>
            </div>

          </div>
          </FadeSide>
        </div>

      </div>
    </section>
  );
};
