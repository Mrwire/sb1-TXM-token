import React from 'react';
import { X, Rocket, Shield, Brain, Target, Coins, Users } from 'lucide-react';

interface WhitepaperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WhitepaperModal({ isOpen, onClose }: WhitepaperModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#1e293b]/90 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-blue-500/20">
        <div className="sticky top-0 bg-[#1e293b]/95 backdrop-blur-sm border-b border-blue-500/20 p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">TXM Token Whitepaper</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-blue-500/20 rounded-lg transition-colors"
          >
            <X className="h-6 w-6 text-blue-400" />
          </button>
        </div>
        
        <div className="p-6 space-y-8">
          {/* Introduction */}
          <section>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Rocket className="h-6 w-6 text-blue-400" />
              Introduction
            </h3>
            <p className="text-gray-300 leading-relaxed">
              TXM Token represents a revolutionary approach to decentralized finance, 
              leveraging advanced blockchain technology to provide secure and efficient financial solutions.
            </p>
          </section>

          {/* Core Features */}
          <section>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Target className="h-6 w-6 text-blue-400" />
              Core Features
            </h3>
            <div className="space-y-4">
              <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/20">
                <h4 className="font-semibold text-blue-400 mb-2">DeFi Integration</h4>
                <p className="text-gray-300">Advanced DeFi protocols enabling seamless trading, staking, and yield farming.</p>
              </div>
              <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/20">
                <h4 className="font-semibold text-blue-400 mb-2">Smart Trading</h4>
                <p className="text-gray-300">Intelligent trading features with automated market making and liquidity provision.</p>
              </div>
              <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/20">
                <h4 className="font-semibold text-blue-400 mb-2">Enhanced Security</h4>
                <p className="text-gray-300">Advanced security measures including smart contract audits and anti-bot mechanisms.</p>
              </div>
            </div>
          </section>

          {/* Rest of the sections with updated styling */}
          {/* ... */}
        </div>
      </div>
    </div>
  );
}