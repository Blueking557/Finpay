import { Gift, Building2, Shield } from 'lucide-react';
import FadeUp from './FadeUp.jsx';

export const Features = () => {
  return (
    <FadeUp>
      <section className="bg-gray-50 pb-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-12 -mt-2 relative z-10">

            <div className="grid lg:grid-cols-2 gap-8 mb-16">

              <div className="space-y-4">
                <p className="text-sm text-[#19dfdfe7] uppercase tracking-wide font-semibold">FUTURE PAYMENT</p>
                <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                  Experience that grows<br />
                  with your scale.
                </h2>
              </div>

              <div className="flex items-end">
                <p className="text-gray-600 text-lg">
                  Design a financial operating system that works for your business and streamlines cash flow management.
                </p>
              </div>

            </div>

            <div className="grid md:grid-cols-3 gap-8">

              <div className="space-y-4">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gray-50">
                  <Gift className="w-7 h-7" style={{ color: '#288894' }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Free transfers</h3>
                <p className="text-gray-600 leading-relaxed">
                  Get paid up to 2 days early with direct deposit and no monthly service fees, unlimited free transfers.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gray-50">
                  <Building2 className="w-7 h-7" style={{ color: '#288894' }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Multiple account</h3>
                <p className="text-gray-600 leading-relaxed">
                  Manage and organize your team and accounts for different projects in one account.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gray-50">
                  <Shield className="w-7 h-7" style={{ color: '#288894' }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Unmatched security</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your deposits are FDIC insured up to $250k, and we encrypt and store your data securely.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>
    </FadeUp>
  );
};
