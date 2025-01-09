import React, { useState } from 'react';
import { DollarSign, X } from 'lucide-react';

export function WalletConnect() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowPopup(true)}
        className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-lg font-medium hover:bg-blue-600/30 transition-colors flex items-center space-x-2"
      >
        <DollarSign className="h-4 w-4" />
        <span>Connect Wallet</span>
      </button>

      {/* Coming Soon Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowPopup(false)}>
          <div className="bg-[#1e293b]/90 rounded-2xl max-w-md w-full border border-blue-500/20 p-6" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-white">Wallet Connection</h2>
              <button 
                onClick={() => setShowPopup(false)}
                className="p-2 hover:bg-blue-500/20 rounded-lg transition-colors"
              >
                <X className="h-5 w-5 text-blue-400" />
              </button>
            </div>
            <div className="text-center py-8">
              <DollarSign className="h-16 w-16 text-blue-400 mx-auto mb-4 animate-pulse" />
              <p className="text-lg text-gray-300 mb-2">Coming Soon!</p>
              <p className="text-sm text-gray-400">Wallet connection will be available when the platform launches.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}