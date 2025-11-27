import { Facebook, Linkedin, Twitter } from "lucide-react";
import FadeUp from "./FadeUp";

export const Logo = () => {
  const scrollToHero = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex items-center gap-1 cursor-pointer" onClick={scrollToHero}>
      <div className="w-7 h-6 flex items-center rounded-md justify-center" style={{ backgroundColor: '#0A2540' }}>
        <span className="text-white font-bold text-xl">F</span>
      </div>
      <span className="text-2xl font-bold font-sans text-[#1D1E20]">Finpay</span>
    </div>
  );
};

export default function Footer() {
  const Items = [
    { head: "Solutions", child: ["Small Businesses", "Freelancers", "Customers", "Taxes"] },
    { head: "Company", child: ["About Us", "Career", "Contacts"] },
    { head: "Learn", child: ["Blog", "Ebooks", "Guides", "Template"] },
  ];

  return (
    <FadeUp>
      <footer className="mt-10 p-6 sm:p-8 md:p-10 bg-white w-full border-t border-gray-200">
        <section className="flex flex-col md:flex-row gap-10 md:gap-20 max-w-7xl mx-auto">

          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Logo />
            <p className="text-sm text-gray-600 mt-4 max-w-xs">
              Simplifying payments for businesses worldwide.
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 md:gap-16 flex-grow">
            {Items.map(({ head, child }) => (
              <div key={head} className="flex-1 min-w-[150px]">
                <h1 className="font-semibold text-[#1d1e20] mb-3 text-sm md:text-base">{head}</h1>
                <ul className="space-y-2">
                  {child.map(item => (
                    <li 
                      key={item} 
                      className="text-gray-600 text-sm hover:text-[#2A8E9E] cursor-pointer transition"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social Icons Section */}
          <div className="flex flex-col gap-3 flex-shrink-0">
            <h1 className="font-semibold text-[#1d1e20] text-sm md:text-base">Follow us on</h1>
            <div className="flex gap-4 text-[#1d1e20]">
              <Twitter className="w-5 h-5 cursor-pointer hover:text-[#2A8E9E] transition" />
              <Linkedin className="w-5 h-5 cursor-pointer hover:text-[#2A8E9E] transition" />
              <Facebook className="w-5 h-5 cursor-pointer hover:text-[#2A8E9E] transition" />
            </div>
          </div>

        </section>

        {/* Copyright Section */}
        <div className="border-t border-gray-200 mt-8 pt-6 text-center max-w-7xl mx-auto">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Finpay. All rights reserved.
          </p>
        </div>
      </footer>
    </FadeUp>
  );
}

