import { useState } from 'react';
import { X } from 'lucide-react';

export const SignupModal = ({ showSignup, setShowSignup }) => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowSignup(false);
    setFormData({ name: '', email: '', password: '' });
  };

  if (!showSignup) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowSignup(false)}>
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative animate-slideUp" onClick={(e) => e.stopPropagation()}>
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
              Already have an account?{' '}
              <span className="text-[#2A8E9E] font-semibold hover:underline cursor-pointer">
                Log in
              </span>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  );
};