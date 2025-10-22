'use client';
import { useState, useEffect } from 'react';

export default function LivePriceTicker() {
  const [prices, setPrices] = useState({});
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Initial prices
    setPrices({
      SOLAR: (4.50 + (Math.random() - 0.5) * 0.1).toFixed(2),
      WIND: (3.80 + (Math.random() - 0.5) * 0.08).toFixed(2),
      CARBON: (15.75 + (Math.random() - 0.5) * 0.5).toFixed(2),
      HYDRO: (2.90 + (Math.random() - 0.5) * 0.05).toFixed(2),
      GEO: (6.20 + (Math.random() - 0.5) * 0.15).toFixed(2),
      BIO: (3.25 + (Math.random() - 0.5) * 0.07).toFixed(2)
    });

    // Simulate live price updates
    const interval = setInterval(() => {
      setPrices(prev => ({
        SOLAR: (parseFloat(prev.SOLAR) + (Math.random() - 0.5) * 0.05).toFixed(2),
        WIND: (parseFloat(prev.WIND) + (Math.random() - 0.5) * 0.04).toFixed(2),
        CARBON: (parseFloat(prev.CARBON) + (Math.random() - 0.5) * 0.2).toFixed(2),
        HYDRO: (parseFloat(prev.HYDRO) + (Math.random() - 0.5) * 0.03).toFixed(2),
        GEO: (parseFloat(prev.GEO) + (Math.random() - 0.5) * 0.08).toFixed(2),
        BIO: (parseFloat(prev.BIO) + (Math.random() - 0.5) * 0.04).toFixed(2)
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Show loading state during SSR
  if (!isClient) {
    return (
      <div className="glass-panel rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <span className="text-neutral-gray font-medium text-sm">LOADING PRICES...</span>
          </div>
          <div className="flex space-x-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center space-x-2 min-w-[80px]">
                <div className="w-12 h-4 bg-primary-dark2 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-panel rounded-lg p-4 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-neutral-gray font-medium text-sm">LIVE PRICES</span>
        </div>
        <div className="flex space-x-6 overflow-x-auto">
          {Object.entries(prices).map(([type, price]) => (
            <div key={type} className="flex items-center space-x-2 min-w-[80px]">
              <span className="text-neutral-white font-mono text-sm font-bold">${price}</span>
              <span className="text-neutral-gray text-xs">{type}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}