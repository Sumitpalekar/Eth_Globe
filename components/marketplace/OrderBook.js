'use client';
import { formatCurrency, formatNumber } from '../../utils/formatters';

export default function OrderBook({ bids = [], asks = [] }) {
  const maxTotal = Math.max(
    ...bids.map(b => b.total),
    ...asks.map(a => a.total)
  );

  const OrderRow = ({ order, type, isHeader = false }) => {
    if (isHeader) {
      return (
        <div className="grid grid-cols-3 gap-4 text-neutral-gray text-sm font-medium mb-3 px-2">
          <div>Price (USD)</div>
          <div className="text-right">Size</div>
          <div className="text-right">Total</div>
        </div>
      );
    }

    const progressWidth = (order.total / maxTotal) * 100;
    const isBid = type === 'bid';

    return (
      <div className="grid grid-cols-3 gap-4 text-sm py-2 px-2 rounded hover:bg-white/5 transition-colors relative group">
        {/* Background bar */}
        <div 
          className={`absolute inset-y-0 right-0 opacity-10 ${
            isBid ? 'bg-green-500' : 'bg-red-500'
          }`}
          style={{ width: `${progressWidth}%` }}
        />
        
        <div className={`font-mono ${isBid ? 'text-green-400' : 'text-red-400'}`}>
          {formatCurrency(order.price)}
        </div>
        <div className="font-mono text-neutral-white text-right">
          {formatNumber(order.amount)}
        </div>
        <div className="font-mono text-neutral-white text-right">
          {formatNumber(order.total)}
        </div>
      </div>
    );
  };

  return (
    <div className="glass-panel rounded-xl p-6">
      <h3 className="text-lg font-semibold text-neutral-white mb-6">Order Book</h3>
      
      <div className="space-y-6">
        {/* Asks (Sell Orders) */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-red-400 text-sm font-medium">Asks (Sell)</span>
            <span className="text-neutral-gray text-xs">{asks.length} orders</span>
          </div>
          <OrderRow isHeader />
          <div className="space-y-1 max-h-40 overflow-y-auto">
            {asks.map((ask, index) => (
              <OrderRow key={index} order={ask} type="ask" />
            ))}
          </div>
        </div>

        {/* Market Price Divider */}
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border-color"></div>
          </div>
          <div className="relative glass-panel px-3 py-1 rounded-lg">
            <span className="text-xs text-neutral-gray font-medium">Market: {formatCurrency(4.50)}</span>
          </div>
        </div>

        {/* Bids (Buy Orders) */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-green-400 text-sm font-medium">Bids (Buy)</span>
            <span className="text-neutral-gray text-xs">{bids.length} orders</span>
          </div>
          <div className="space-y-1 max-h-40 overflow-y-auto">
            {bids.map((bid, index) => (
              <OrderRow key={index} order={bid} type="bid" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}