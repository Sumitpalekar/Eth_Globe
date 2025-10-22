'use client';
import { useState } from 'react';
import TokenGrid from '../../components/marketplace/TokenGrid';
import OrderBook from '../../components/marketplace/OrderBook';
import TradingView from '../../components/marketplace/TradingView';
import SmartContractInteractions from '../../components/web3/SmartContractInteractions';
import DataCard from '../../components/ui/DataCard';
import LivePriceTicker from '../../components/marketplace/LivePriceTicker';
import { mockTokens, mockOrderBook } from '../../utils/marketData';

export default function Marketplace() {
  const [selectedToken, setSelectedToken] = useState(null);

  // Random market stats
  const marketStats = [
    { 
      title: "Live Volume", 
      value: `$${(Math.random() * 5 + 1).toFixed(1)}M`, 
      subtitle: "24h trading volume", 
      change: (Math.random() * 20 - 5).toFixed(1), 
      icon: "📈" 
    },
    { 
      title: "Active Orders", 
      value: `${Math.floor(Math.random() * 500 + 100)}`, 
      subtitle: "Open buy/sell orders", 
      change: (Math.random() * 15 - 2).toFixed(1), 
      icon: "🔄" 
    },
    { 
      title: "Market Price", 
      value: `$${(Math.random() * 3 + 3).toFixed(2)}`, 
      subtitle: "Weighted average", 
      change: (Math.random() * 8 - 2).toFixed(1), 
      icon: "💰" 
    },
    { 
      title: "Block Height", 
      value: `${Math.floor(Math.random() * 1000000 + 18000000).toLocaleString()}`, 
      subtitle: "Latest block", 
      change: 0, 
      icon: "⛓️" 
    }
  ];

  return (
    <div className="min-h-screen bg-primary-dark text-neutral-white pt-20">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-white mb-2">
            Carbon Credits <span className="gradient-text">Marketplace</span>
          </h1>
          <p className="text-neutral-gray text-lg">
            Trade verified carbon credits with zero gas fees and institutional security
          </p>
        </div>

        {/* Live Price Ticker */}
        <LivePriceTicker />

        {/* Market Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {marketStats.map((stat, index) => (
            <DataCard
              key={index}
              title={stat.title}
              value={stat.value}
              subtitle={stat.subtitle}
              change={stat.change}
              icon={stat.icon}
            />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Left Column - Token Grid */}
          <div className="xl:col-span-2">
            <TokenGrid 
              tokens={mockTokens} 
              onTokenSelect={setSelectedToken}
            />
          </div>

          {/* Right Column - Trading Interface */}
          <div className="xl:col-span-2 space-y-6">
            <TradingView selectedToken={selectedToken} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <OrderBook {...mockOrderBook} />
              <SmartContractInteractions />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}