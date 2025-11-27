import React from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export const Header = ({onSignupClick}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="border-b border-gray-100 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">

        {/* Top Bar */}
        <div className="flex items-center justify-between">

          {/* Logo + Desktop Nav */}
          <div className="flex items-center gap-8">
            <Logo />

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-7 font-semibold">
              <a href="#products" className="text-sm text-gray-600 hover:text-gray-900">Products</a>
              <a href="#customers" className="text-sm text-gray-600 hover:text-gray-900">Customers</a>
              <a href="#pricing" className="text-sm text-gray-600 hover:text-gray-900">Pricing</a>
              <a href="#learn" className="text-sm text-gray-600 hover:text-gray-900">Learn</a>
            </nav>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-4">

            {/* Desktop Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <button 
              onClick={onSignupClick}
              className="rounded-lg px-4 py-2 bg-gray-50 border border-slate-300 font-semibold hover:bg-gray-200">
                <a href="#login" className="text-sm text-gray-700 hover:text-gray-900">Login</a>
              </button>

              <button
                onClick={onSignupClick}
                className="text-white text-sm px-4 py-2 rounded-lg transition font-medium"
                style={{ backgroundColor: '#288894' }}
              >
                Sign Up
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <nav className="flex flex-col gap-4 font-medium">

              <a href="#products" className="text-sm text-gray-700 hover:text-gray-900">Products</a>
              <a href="#customers" className="text-sm text-gray-700 hover:text-gray-900">Customers</a>
              <a href="#pricing" className="text-sm text-gray-700 hover:text-gray-900">Pricing</a>
              <a href="#learn" className="text-sm text-gray-700 hover:text-gray-900">Learn</a>

              {/* Mobile Login + Signup */}
              <a href="#login" className="text-sm text-gray-700 hover:text-gray-900">Login</a>

              <button
                onClick={onSignupClick}
                className="text-white text-center text-sm px-4 py-2 rounded-lg mt-1 transition font-medium"
                style={{ backgroundColor: '#288894' }}
              >
                Sign Up
              </button>
            </nav>
          </div>
        )}

      </div>
    </header>
  );
};
