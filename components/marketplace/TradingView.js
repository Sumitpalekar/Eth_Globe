'use client';
import { useState } from 'react';
import { formatCurrency } from '../../utils/formatters';

export default function TradingView({ selectedToken }) {
  const [orderType, setOrderType] = useState('BUY');
  const [amount, setAmount] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle order submission
    console.log('Order:', { orderType, amount, price });
  };

  return (
    <div className="glass-panel rounded-xl p-6">
      <h3 className="text-lg font-semibold text-neutral-white mb-6">
        {selectedToken ? `Trade ${selectedToken.name}` : 'Place Order'}
      </h3>

      {selectedToken && (
        <div className="flex items-center justify-between mb-6 p-4 bg-primary-dark2 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="text-2xl">{selectedToken.image}</div>
            <div>
              <h4 className="font-semibold text-neutral-white">{selectedToken.name}</h4>
              <p className="text-neutral-gray text-sm">
                {selectedToken.type} • {selectedToken.location}
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-neutral-white">
              {formatCurrency(selectedToken.price)}
            </div>
            <div className="text-sm text-neutral-gray">
              Available: {selectedToken.amount} credits
            </div>
          </div>
        </div>
      )}

      {/* Order Type Selector */}
      <div className="flex space-x-2 mb-6">
        {['BUY', 'SELL'].map(type => (
          <button
            key={type}
            onClick={() => setOrderType(type)}
            className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
              orderType === type
                ? type === 'BUY'
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                  : 'bg-red-500/20 text-red-400 border border-red-500/30'
                : 'glass-panel text-neutral-gray hover:text-neutral-white'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Order Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-neutral-gray mb-2">
            Amount (Credits)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            className="w-full bg-primary-dark2 border border-border-color rounded-lg px-4 py-3 text-neutral-white placeholder-neutral-gray focus:outline-none focus:border-accent-green transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-gray mb-2">
            Price (USD)
          </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="0.00"
            step="0.01"
            className="w-full bg-primary-dark2 border border-border-color rounded-lg px-4 py-3 text-neutral-white placeholder-neutral-gray focus:outline-none focus:border-accent-green transition-colors"
          />
        </div>

        {/* Order Summary */}
        {amount && price && (
          <div className="p-4 bg-primary-dark2 rounded-lg space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-neutral-gray">Total Cost:</span>
              <span className="text-neutral-white font-medium">
                {formatCurrency(parseFloat(amount) * parseFloat(price))}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-neutral-gray">Fee (0.25%):</span>
              <span className="text-neutral-white font-medium">
                {formatCurrency(parseFloat(amount) * parseFloat(price) * 0.0025)}
              </span>
            </div>
          </div>
        )}

        <button
          type="submit"
          className={`w-full py-3 rounded-lg font-semibold transition-all ${
            orderType === 'BUY'
              ? 'btn-primary'
              : 'bg-red-500 hover:bg-red-600 text-white'
          }`}
        >
          {orderType === 'BUY' ? 'Buy Credits' : 'Sell Credits'}
        </button>
      </form>
    </div>
  );
}