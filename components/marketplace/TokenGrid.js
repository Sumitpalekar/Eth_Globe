'use client';
import { useState } from 'react';
import { formatCurrency, formatNumber, formatPercentage } from '../../utils/formatters';

export default function TokenGrid({ tokens = [], onTokenSelect }) {
  const [selectedType, setSelectedType] = useState('ALL');

  const tokenTypes = ['ALL', 'SOLAR', 'WIND', 'HYDRO', 'CARBON'];
  const filteredTokens = selectedType === 'ALL' 
    ? tokens 
    : tokens.filter(token => token.type === selectedType);

  const getVerificationColor = (status) => {
    switch (status) {
      case 'VERIFIED': return 'text-green-400 bg-green-500/20';
      case 'PENDING': return 'text-yellow-400 bg-yellow-500/20';
      case 'REJECTED': return 'text-red-400 bg-red-500/20';
      default: return 'text-neutral-gray bg-neutral-gray/20';
    }
  };

  return (
    <div className="space-y-6">
      {/* Filter Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-neutral-white">Available Credits</h3>
        
        <div className="flex space-x-2">
          {tokenTypes.map(type => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                selectedType === type
                  ? 'bg-accent-green text-white'
                  : 'glass-panel text-neutral-gray hover:text-neutral-white'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Tokens Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredTokens.map(token => (
          <div
            key={token.id}
            className="glass-panel rounded-xl p-6 hover-lift cursor-pointer border border-border-color hover:border-accent-green/30 transition-all duration-300"
            onClick={() => onTokenSelect && onTokenSelect(token)}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="text-2xl">{token.image}</div>
                <div>
                  <h4 className="font-semibold text-neutral-white text-lg">{token.name}</h4>
                  <p className="text-neutral-gray text-sm">{token.location}</p>
                </div>
              </div>
              
              <span className={`px-2 py-1 rounded text-xs font-medium ${getVerificationColor(token.verification)}`}>
                {token.verification}
              </span>
            </div>

            {/* Details */}
            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-neutral-gray">Type:</span>
                <span className="text-neutral-white font-medium">{token.type}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-neutral-gray">Vintage:</span>
                <span className="text-neutral-white font-medium">{token.vintage}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-neutral-gray">Available:</span>
                <span className="text-neutral-white font-medium">{formatNumber(token.amount)} credits</span>
              </div>
            </div>

            {/* Price & Action */}
            <div className="flex items-center justify-between pt-4 border-t border-border-color">
              <div>
                <div className="text-2xl font-bold text-neutral-white">
                  {formatCurrency(token.price)}
                </div>
                <div className={`text-sm ${
                  token.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
                }`}>
                  {token.change} • Vol: {token.volume}
                </div>
              </div>
              
              <button className="btn-primary text-sm px-4 py-2">
                Trade
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredTokens.length === 0 && (
        <div className="text-center py-12 glass-panel rounded-xl">
          <div className="text-4xl mb-4">🔍</div>
          <h3 className="text-lg font-semibold text-neutral-white mb-2">No tokens found</h3>
          <p className="text-neutral-gray">Try selecting a different filter</p>
        </div>
      )}
    </div>
  );
}