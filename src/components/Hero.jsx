import { ArrowRight, Wifi, CreditCard, Landmark, X } from 'lucide-react';
import { useState } from 'react';
import FadeUp from './FadeUp';

export const Hero = () => {
  const [selected, setSelected] = useState("");
  const [showSignup, setShowSignup] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowSignup(false);
    setFormData({ name: '', email: '', password: '' });
  };

  return (
    <section id="hero" className="bg-[#fbfefe] py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-x-52 items-center">

          {/* Left Column */}
          <div className="space-y-6 md:space-y-8">

            <FadeUp>
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl text-[#1D1E20] leading-tight">
                  <span className='font-bold'>Get paid early</span><br />
                  save automatically<br />
                  all your pay.
                </h1>
                <p className="text-gray-600 text-base md:text-lg max-w-md">
                  Supports small businesses with simple invoicing, powerful integrations, and cash flow management tools.
                </p>
              </div>
            </FadeUp>

            <FadeUp>
              <div className="relative max-w-md w-full">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 pr-32 md:pr-40 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <button 
                  onClick={() => setShowSignup(true)}
                  className="absolute top-1/2 -translate-y-1/2 right-2 bg-[#2A8E9E] hover:bg-[#64cdde] text-white px-3 md:px-6 py-2.5 rounded-lg font-medium flex items-center gap-2 shadow-lg transition"
                >
                  <span className="hidden sm:inline">Get Started</span>
                  <span className="sm:hidden">Start</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </FadeUp>

            <FadeUp>
              <div className="flex flex-wrap items-center gap-4 md:gap-8 pt-4">
                <span className="text-xl md:text-2xl font-bold text-[#1D1E20]">Klarna.</span>
                <span className="text-xl md:text-2xl font-bold text-[#1D1E20]">coinbase</span>
                <span className="text-xl md:text-2xl font-bold text-[#1D1E20]">Instacart</span>
              </div>
            </FadeUp>
          </div>

          {/* Right Column */}
          <div className="relative flex w-full items-start justify-center lg:justify-start mt-10 lg:mt-0">

            <FadeUp>
              <div className="w-full max-w-[320px] sm:w-80 h-auto sm:h-96 bg-white rounded-xl shadow-lg p-3">
                <FadeUp>
                  <div className='flex gap-2'>
                    <div className='bg-[#2A8E9E] rounded-lg h-12 w-12 flex items-center justify-center text-white font-extrabold text-2xl'>O</div>
                    <div className='grid gap-1'>
                      <p className='font-extrabold text-[#1D1E20] text-sm sm:text-base'>dipa inhouse</p>
                      <p className='font-extralight text-xs sm:text-sm'>dipahouse@gmail.com</p>
                    </div>
                  </div>
                </FadeUp>

                <FadeUp>
                  <div className='p-2 mt-2 shadow-2xl h-auto rounded-lg border text-[rgba(2,13,13,0.6)]'>
                    <p className='font-thin text-xs sm:text-sm'>invoice</p>
                    <p className='font-extrabold text-xl sm:text-2xl text-[#1D1E20]'>$1,856,580</p>
                    <p className='font-thin text-xs sm:text-sm'>April 21, 2024</p>
                  </div>
                </FadeUp>

                <div className="space-y-3 mt-2">
                  <FadeUp>
                    <div
                      className={`p-3 sm:p-4 border rounded-xl flex items-center justify-between cursor-pointer transition ${
                        selected === "option1"
                          ? "border-[#0ca2a299] border-2 bg-blue-50"
                          : "border-gray-300"
                      }`}
                      onClick={() => setSelected("option1")}
                    >
                      <div className='flex gap-2 sm:gap-3 items-center'>
                        <CreditCard className="w-5 h-5" />
                        <span className='font-bold text-gray-800 text-sm sm:text-base'>Credit Card</span>
                      </div>
                      <input
                        type="radio"
                        name="choice"
                        value="option1"
                        checked={selected === "option1"}
                        onChange={() => setSelected("option1")}
                        className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer"
                      />
                    </div>
                  </FadeUp>

                  <FadeUp>
                    <div
                      className={`p-3 sm:p-4 border rounded-xl flex items-center justify-between cursor-pointer transition ${
                        selected === "option2"
                          ? "border-[#0ca2a299] border-2 bg-blue-50"
                          : "border-gray-300"
                      }`}
                      onClick={() => setSelected("option2")}
                    >
                      <div className='flex gap-2 sm:gap-3 items-center'>
                        <Landmark className="w-5 h-5" />
                        <span className='font-bold text-gray-800 text-sm sm:text-base'>Bank Account</span>
                      </div>
                      <input
                        type="radio"
                        name="choice"
                        value="option2"
                        checked={selected === "option2"}
                        onChange={() => setSelected("option2")}
                        className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer"
                      />
                    </div>
                  </FadeUp>

                  <FadeUp>
                    <div className='w-full bg-[#023241] text-white text-base sm:text-lg font-semibold text-center rounded-lg p-2 hover:bg-slate-600 transition cursor-pointer'>
                      <button className='w-full'>Pay</button>
                    </div>
                  </FadeUp>
                </div>
              </div>
            </FadeUp>

            <FadeUp>
              <div className="hidden lg:block bg-[#2A8E9E] w-52 h-64 text-white rounded-xl shadow-2xl overflow-hidden absolute top-[-50px] left-[220px]">
                <div className="h-3/4 bg-inherit p-4">
                  <p className='font-light'>Credit Card</p>
                  <p className='font-bold'>234 **** ****</p>
                </div>
                <div className="h-1/4 bg-[#023241] p-3 font-bold font-sans gap-28 flex">
                  VISA
                  <Wifi className="text-white rotate-90" />
                </div>
              </div>
            </FadeUp>

          </div>
        </div>
      </div>

      {/* Sign Up Modal (FadeUp removed) */}
      {showSignup && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" 
          onClick={() => setShowSignup(false)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowSignup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header */}
            <div className="bg-[#023241] text-white p-6 rounded-t-2xl">
              <h2 className="text-2xl font-bold">Join Finpay</h2>
              <p className="text-sm text-gray-300 mt-1">Start managing your finances today</p>
            </div>

            {/* Form */}
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-[#1D1E20] mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A8E9E]"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1D1E20] mb-2">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A8E9E]"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1D1E20] mb-2">Password</label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A8E9E]"
                  placeholder="••••••••"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-[#2A8E9E] hover:bg-[#64cdde] text-white font-semibold py-3 rounded-lg transition shadow-lg mt-6"
              >
                Create Account
              </button>

              <p className="text-center text-sm text-gray-600 mt-4">
                Already have an account?{" "}
                <span className="text-[#2A8E9E] font-semibold hover:underline cursor-pointer">
                  Log in
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
