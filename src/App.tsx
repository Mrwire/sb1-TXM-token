import React, { useState, useEffect, Suspense } from 'react';
import Spline from '@splinetool/react-spline';
import { 
  Newspaper, 
  Globe,
  Zap,
  Github,
  DollarSign,
  ArrowDown,
  ChartBar,
  Users,
  Shield,
  Rocket,
  Target,
  Brain
} from 'lucide-react';
import { WhitepaperModal } from './components/WhitepaperModal';
import { LoadingStats } from './components/LoadingStats';
import { WalletConnect } from './components/WalletConnect';

function LoadingScreen() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#0f172a] z-50 flex items-center justify-center">
      <div className="relative">
        <div className="w-24 h-24 rounded-full bg-blue-600 pulse-ring flex items-center justify-center">
          <Newspaper className="h-12 w-12 text-white animate-glitch" />
        </div>
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-48 text-center">
          <p className="text-blue-400 font-mono">Initializing{dots}</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('features');
  const [isWhitepaperOpen, setIsWhitepaperOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-[#0f172a] overflow-x-hidden">
      <WhitepaperModal 
        isOpen={isWhitepaperOpen} 
        onClose={() => setIsWhitepaperOpen(false)} 
      />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1e293b]/50 backdrop-blur-lg border-b border-blue-900/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Newspaper className="h-8 w-8 text-blue-500" />
              <span className="text-white font-bold text-xl">TXM Token</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {['features', 'tokenomics', 'roadmap', 'stats'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item
                      ? 'text-blue-400'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
            <WalletConnect />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-indigo-900/20" />
        <div className="container mx-auto px-4 pt-20 pb-32 relative">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <Newspaper className="h-16 w-16 text-blue-500" />
                <Globe className="absolute -top-2 -right-2 h-8 w-8 text-blue-400 animate-spin" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white ml-4 tracking-tight">
                TXM <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Token</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-blue-200 mb-8">
              The future of decentralized finance 🚀💎
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <a 
                href="https://pump.fun/coin/DfGiD1pYjbtCNzUMxzUc4Aod39822JK5FY2tURd3pump" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center space-x-2 hover:transform hover:scale-105"
              >
                <span>Buy $TXM</span>
                <Zap className="h-5 w-5 group-hover:animate-pulse" />
              </a>
              <button 
                onClick={() => setIsWhitepaperOpen(true)}
                className="group bg-gray-800/50 backdrop-blur-lg text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-700/50 transition-all duration-300 flex items-center space-x-2 hover:transform hover:scale-105"
              >
                <span>Whitepaper</span>
                <Github className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              </button>
            </div>
            
            {/* Live Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
              <LoadingStats />
              <LoadingStats />
              <LoadingStats />
              <LoadingStats />
            </div>

            <div className="relative mx-auto max-w-5xl mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative bg-gray-900/50 rounded-xl overflow-hidden h-[600px]">
                <Suspense fallback={<div className="w-full h-full bg-blue-900/20 animate-pulse" />}>
                  <Spline scene="https://prod.spline.design/JO0lUywbwz4NH1sp/scene.splinecode" />
                </Suspense>
              </div>
            </div>

            {/* Scroll Button */}
            <button
              onClick={() => scrollToSection('features')}
              className="animate-bounce bg-blue-600/20 p-3 rounded-full hover:bg-blue-600/30 transition-colors"
            >
              <ArrowDown className="h-6 w-6 text-blue-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Rest of the sections with updated colors */}
      <section id="features" className="relative py-20 bg-[#1e293b]/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Powered by <span className="text-blue-400">Technology</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/50 transition-all group">
              <Brain className="h-8 w-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-4">Real-time Analysis</h3>
              <p className="text-gray-400">Our platform processes millions of data points in real-time to provide accurate market insights and predictions.</p>
            </div>
            <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/50 transition-all group">
              <Users className="h-8 w-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-4">Community Driven</h3>
              <p className="text-gray-400">Join our vibrant community of traders and investors who share insights and strategies.</p>
            </div>
            <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/50 transition-all group">
              <Shield className="h-8 w-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-4">Secure Platform</h3>
              <p className="text-gray-400">Built with advanced security measures to protect your investments and data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Continue with the rest of your sections, updating colors from purple to blue */}
      {/* ... Rest of the component remains the same but with updated colors ... */}
    </div>
  );
}

export default App;